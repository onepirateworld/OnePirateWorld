-- Esquema de OnePirateWorld en Supabase.
-- Se puede volver a ejecutar sin romper nada (usa IF NOT EXISTS / OR REPLACE).

-- ---------------------------------------------------------------------------
-- Perfiles: uno por cuenta. El rol lo pone el servidor, nunca el navegador.
create table if not exists public.perfiles (
  id uuid primary key references auth.users(id) on delete cascade,
  nombre text not null default 'Marinero' check (char_length(nombre) between 1 and 20),
  rol text not null default 'jugador' check (rol in ('jugador', 'moderador', 'creador')),
  creado timestamptz not null default now()
);
alter table public.perfiles enable row level security;

-- El nombre de usuario funciona como una contraseña: cada uno solo ve SU perfil.
drop policy if exists "perfiles visibles" on public.perfiles;
drop policy if exists "ver mi perfil" on public.perfiles;
create policy "ver mi perfil" on public.perfiles for select using (auth.uid() = id);
drop policy if exists "editar mi nombre" on public.perfiles;
create policy "editar mi nombre" on public.perfiles for update using (auth.uid() = id) with check (auth.uid() = id);

-- Nadie puede cambiarse el rol a sí mismo
create or replace function public.proteger_rol() returns trigger language plpgsql as $$
begin
  if new.rol is distinct from old.rol and coalesce(current_setting('request.jwt.claim.role', true), '') <> 'service_role'
     and current_user not in ('postgres', 'supabase_admin') then
    new.rol := old.rol;
  end if;
  return new;
end $$;
drop trigger if exists proteger_rol on public.perfiles;
create trigger proteger_rol before update on public.perfiles for each row execute function public.proteger_rol();

-- Al registrarse se crea su perfil. Los correos con rol especial están en esta tabla
-- privada (no la puede leer nadie desde el navegador).
create table if not exists public.roles_especiales (
  correo text primary key,
  rol text not null check (rol in ('moderador', 'creador'))
);
alter table public.roles_especiales enable row level security;   -- sin políticas: invisible para el navegador

create or replace function public.nuevo_usuario() returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.perfiles (id, nombre, rol)
  values (
    new.id,
    coalesce(nullif(left(new.raw_user_meta_data->>'nombre', 20), ''), 'Marinero'),
    coalesce((select rol from public.roles_especiales where lower(correo) = lower(new.email)), 'jugador')
  )
  on conflict (id) do nothing;
  return new;
end $$;
drop trigger if exists nuevo_usuario on auth.users;
create trigger nuevo_usuario after insert on auth.users for each row execute function public.nuevo_usuario();

-- ---------------------------------------------------------------------------
-- Personajes: el mundo es público (todos ven a todos), pero cada uno solo toca los suyos.
create table if not exists public.personajes (
  id text primary key,
  dueno uuid not null references auth.users(id) on delete cascade default auth.uid(),
  mar int not null default 1,
  nombre text not null check (char_length(nombre) between 1 and 24),
  apodo text,
  bando text not null check (bando in ('pirata', 'marine', 'revolucionario')),
  datos jsonb not null default '{}'::jsonb,   -- aspecto, rasgos, sueño, arsenal, acción, diario...
  nivel int not null default 1 check (nivel between 1 and 80),
  doblones bigint not null default 100,
  recompensa bigint not null default 0,
  creador boolean not null default false,
  creado timestamptz not null default now(),
  actualizado timestamptz not null default now()
);
create index if not exists personajes_mar on public.personajes (mar);
alter table public.personajes enable row level security;

drop policy if exists "personajes visibles" on public.personajes;
create policy "personajes visibles" on public.personajes for select using (true);
drop policy if exists "crear los mios" on public.personajes;
create policy "crear los mios" on public.personajes for insert with check (auth.uid() = dueno);
drop policy if exists "editar los mios" on public.personajes;
create policy "editar los mios" on public.personajes for update using (auth.uid() = dueno) with check (auth.uid() = dueno);
drop policy if exists "borrar los mios" on public.personajes;
create policy "borrar los mios" on public.personajes for delete using (auth.uid() = dueno);

-- Lo de "creador" solo lo decide el servidor según el rol de la cuenta
create or replace function public.marcar_creador() returns trigger language plpgsql security definer set search_path = public as $$
declare es_creador boolean; antes record;
begin
  select rol = 'creador' into es_creador from public.perfiles where id = new.dueno;
  new.creador := coalesce(es_creador, false);
  if new.creador then
    new.nivel := 80; new.doblones := 999999999; new.recompensa := 9999999999;
  else
    new.recompensa := least(new.recompensa, 9999999999);
  end if;
  -- Los marines nunca tienen recompensa (cuentan capturas)
  if new.bando = 'marine' then new.recompensa := 0; end if;
  -- Antitrampas: nadie (salvo el creador) puede subirse el dinero o el nivel de golpe
  -- (Guardar desde el juego es «insertar o actualizar»: comparamos con la fila que ya exista)
  if not new.creador and coalesce(current_setting('opw.admin', true), '') <> '1' then
    select doblones, nivel, recompensa, datos into antes from public.personajes where id = new.id;
    if not found then
      new.doblones := least(new.doblones, 1000);
      new.nivel := least(new.nivel, 5);
      new.recompensa := 0;
    else
      -- Regalo de la Marina al llegar a nivel 10 (una sola vez)
      new.doblones := least(new.doblones, antes.doblones + 1500 + case
        when new.bando = 'marine' and new.nivel >= 10 and antes.nivel < 10 and coalesce(antes.datos->>'regalo10', '') = '' then 10000 else 0 end);
      if coalesce(antes.datos->>'regalo10', '') <> '' then new.datos := new.datos || '{"regalo10": true}'::jsonb; end if;
      new.nivel := least(new.nivel, antes.nivel + 2);
      new.recompensa := least(new.recompensa, antes.recompensa + 5000000);
    end if;
  end if;
  new.actualizado := now();
  return new;
end $$;
drop trigger if exists marcar_creador on public.personajes;
create trigger marcar_creador before insert or update on public.personajes for each row execute function public.marcar_creador();

-- ---------------------------------------------------------------------------
-- La Taberna: chat por mar, con límite de mensajes, filtro de palabras y moderación.
create table if not exists public.mensajes (
  id bigint generated always as identity primary key,
  mar int not null default 1,
  autor uuid not null references auth.users(id) on delete cascade default auth.uid(),
  autor_nombre text not null check (char_length(autor_nombre) between 1 and 40),
  texto text not null check (char_length(texto) between 1 and 200),
  oculto boolean not null default false,
  creado timestamptz not null default now()
);
create index if not exists mensajes_mar_creado on public.mensajes (mar, creado desc);
alter table public.mensajes enable row level security;

create or replace function public.es_moderador() returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.perfiles where id = auth.uid() and rol in ('moderador', 'creador'));
$$;

drop policy if exists "leer mensajes" on public.mensajes;
create policy "leer mensajes" on public.mensajes for select using (not oculto or public.es_moderador());
drop policy if exists "escribir mensajes" on public.mensajes;
create policy "escribir mensajes" on public.mensajes for insert with check (auth.uid() = autor);
drop policy if exists "moderar mensajes" on public.mensajes;
create policy "moderar mensajes" on public.mensajes for update using (public.es_moderador());
drop policy if exists "borrar mensajes" on public.mensajes;
create policy "borrar mensajes" on public.mensajes for delete using (public.es_moderador() or auth.uid() = autor);

create or replace function public.antes_de_mensaje() returns trigger language plpgsql security definer set search_path = public as $$
declare recientes int; p text;
begin
  -- Límite: 5 mensajes por minuto
  select count(*) into recientes from public.mensajes where autor = new.autor and creado > now() - interval '1 minute';
  if recientes >= 5 then
    raise exception 'Como mucho 5 mensajes por minuto. Espera un poco.';
  end if;
  -- Filtro de palabras
  foreach p in array array['idiota','imbécil','imbecil','estúpido','estupido','gilipollas','subnormal','puta','puto','mierda','cabrón','cabron','pendejo','mamón','maricón','maricon','zorra','hijo de puta','conchetumare','weón culiao','culiao','aweonao','ctm'] loop
    new.texto := regexp_replace(new.texto, p, repeat('*', char_length(p)), 'gi');
  end loop;
  new.creado := now();
  new.oculto := false;
  return new;
end $$;
drop trigger if exists antes_de_mensaje on public.mensajes;
create trigger antes_de_mensaje before insert on public.mensajes for each row execute function public.antes_de_mensaje();

-- Reportes de mensajes
create table if not exists public.reportes (
  id bigint generated always as identity primary key,
  mensaje_id bigint not null references public.mensajes(id) on delete cascade,
  quien uuid not null references auth.users(id) on delete cascade default auth.uid(),
  creado timestamptz not null default now(),
  unique (mensaje_id, quien)
);
alter table public.reportes enable row level security;
drop policy if exists "reportar" on public.reportes;
create policy "reportar" on public.reportes for insert with check (auth.uid() = quien);
drop policy if exists "ver reportes" on public.reportes;
create policy "ver reportes" on public.reportes for select using (public.es_moderador() or auth.uid() = quien);

-- Con 3 reportes, el mensaje se oculta hasta que lo revise un moderador
create or replace function public.tras_reporte() returns trigger language plpgsql security definer set search_path = public as $$
begin
  if (select count(*) from public.reportes where mensaje_id = new.mensaje_id) >= 3 then
    update public.mensajes set oculto = true where id = new.mensaje_id;
  end if;
  return new;
end $$;
drop trigger if exists tras_reporte on public.reportes;
create trigger tras_reporte after insert on public.reportes for each row execute function public.tras_reporte();

-- ---------------------------------------------------------------------------
-- Tiempo real para el chat y para ver moverse a los demás jugadores
do $$ begin
  begin alter publication supabase_realtime add table public.mensajes; exception when duplicate_object then null; end;
  begin alter publication supabase_realtime add table public.personajes; exception when duplicate_object then null; end;
end $$;

-- Los mensajes se borran a los 90 días (cada noche)
create extension if not exists pg_cron;
do $$ begin
  perform cron.unschedule('borrar-mensajes-viejos');
exception when others then null;
end $$;
select cron.schedule('borrar-mensajes-viejos', '17 4 * * *', $$delete from public.mensajes where creado < now() - interval '90 days'$$);

-- ---------------------------------------------------------------------------
-- Nombres de usuario únicos (sin distinguir mayúsculas)
create unique index if not exists perfiles_nombre_unico on public.perfiles (lower(nombre));

-- ---------------------------------------------------------------------------
-- Permisos de la API (los proyectos nuevos no los dan por defecto).
-- Las reglas RLS de arriba siguen decidiendo qué filas puede ver o tocar cada uno.
grant usage on schema public to anon, authenticated;
grant select on public.personajes, public.mensajes to anon, authenticated;
grant select on public.perfiles to authenticated;   -- y la regla de arriba limita a su propia fila
revoke select on public.perfiles from anon;
grant update on public.perfiles to authenticated;
grant insert, update, delete on public.personajes to authenticated;
grant insert, update, delete on public.mensajes to authenticated;
grant select, insert on public.reportes to authenticated;
grant usage on all sequences in schema public to authenticated;
-- roles_especiales: sin permisos para nadie desde el navegador
revoke all on public.roles_especiales from anon, authenticated;

-- ---------------------------------------------------------------------------
-- Frutas: solo puede haber una de cada fruta por mar (la carrera la gana quien la guarda primero).
-- Las cuentas de creador quedan fuera.
create unique index if not exists personajes_fruta_unica
  on public.personajes (mar, (datos->>'fruta'))
  where datos->>'fruta' is not null and not creador;

-- ---------------------------------------------------------------------------
-- Tripulaciones: las funda un pirata de nivel 10 o más; se une quien quiera (y los bots).
create or replace function public.nombre_limpio(t text) returns boolean language sql immutable as $$
  select not exists (
    select 1 from unnest(array['idiota','imbécil','imbecil','estúpido','estupido','gilipollas','subnormal','puta','puto','mierda','cabrón','cabron',
      'pendejo','mamón','maricón','maricon','zorra','conchetumare','culiao','aweonao','ctm','cagon','cagón','weon','huevón','huevon','verga','pico','chucha']) p
    where lower(t) ~ ('(^|[^a-záéíóúñ])' || p || '($|[^a-záéíóúñ])')
  );
$$;

create table if not exists public.tripulaciones (
  id uuid primary key default gen_random_uuid(),
  mar int not null,
  nombre text not null check (char_length(nombre) between 3 and 24),
  capitan text not null references public.personajes(id) on delete cascade,
  dueno uuid not null default auth.uid() references auth.users(id) on delete cascade,
  creada timestamptz not null default now()
);
create unique index if not exists tripulaciones_nombre on public.tripulaciones (mar, lower(nombre));
create unique index if not exists tripulaciones_capitan on public.tripulaciones (capitan);
alter table public.tripulaciones enable row level security;
drop policy if exists "ver tripulaciones" on public.tripulaciones;
create policy "ver tripulaciones" on public.tripulaciones for select using (true);
drop policy if exists "fundar tripulacion" on public.tripulaciones;
create policy "fundar tripulacion" on public.tripulaciones for insert with check (
  auth.uid() = dueno and public.nombre_limpio(nombre) and exists (
    select 1 from public.personajes p where p.id = capitan and p.dueno = auth.uid() and p.bando = 'pirata' and (p.nivel >= 10 or p.creador) and p.mar = tripulaciones.mar));
drop policy if exists "disolver tripulacion" on public.tripulaciones;
create policy "disolver tripulacion" on public.tripulaciones for delete using (auth.uid() = dueno);
grant select on public.tripulaciones to anon, authenticated;
grant insert, delete on public.tripulaciones to authenticated;
do $$ begin
  begin alter publication supabase_realtime add table public.tripulaciones; exception when duplicate_object then null; end;
end $$;

-- ---------------------------------------------------------------------------
-- Duelos entre jugadores. El atacante controla a su personaje; el defensor pelea solo
-- con sus datos reales. El defensor ve el resultado al entrar (y aplica lo suyo).
create table if not exists public.duelos (
  id bigint generated always as identity primary key,
  mar int not null,
  atacante text not null references public.personajes(id) on delete cascade,
  atacante_dueno uuid not null default auth.uid() references auth.users(id) on delete cascade,
  atacante_nombre text not null,
  defensor text not null references public.personajes(id) on delete cascade,
  defensor_dueno uuid not null references auth.users(id) on delete cascade,
  defensor_nombre text not null,
  ganador text not null check (ganador in ('atacante', 'defensor', 'huida')),
  premio bigint not null default 0,
  visto boolean not null default false,
  creado timestamptz not null default now()
);
create index if not exists duelos_defensor on public.duelos (defensor_dueno, visto);
create index if not exists duelos_atacante on public.duelos (atacante_dueno, creado desc);
alter table public.duelos enable row level security;
drop policy if exists "ver duelos" on public.duelos;
create policy "ver duelos" on public.duelos for select using (true);
drop policy if exists "registrar duelo" on public.duelos;
create policy "registrar duelo" on public.duelos for insert with check (
  auth.uid() = atacante_dueno
  and exists (select 1 from public.personajes a where a.id = atacante and a.dueno = auth.uid())
  and exists (select 1 from public.personajes d where d.id = defensor and d.dueno = defensor_dueno and d.dueno <> auth.uid()));
drop policy if exists "marcar visto" on public.duelos;
create policy "marcar visto" on public.duelos for update using (auth.uid() = defensor_dueno) with check (auth.uid() = defensor_dueno);
grant select on public.duelos to anon, authenticated;
grant insert, update on public.duelos to authenticated;

-- Límites: 5 duelos al día por atacante y 1 al día contra el mismo rival
create or replace function public.antes_de_duelo() returns trigger language plpgsql security definer set search_path = public as $$
begin
  if (select count(*) from public.duelos where atacante_dueno = new.atacante_dueno and creado > now() - interval '1 day') >= 5 then
    raise exception 'Como mucho 5 duelos al día.';
  end if;
  if exists (select 1 from public.duelos where atacante = new.atacante and defensor = new.defensor and creado > now() - interval '1 day') then
    raise exception 'Ya te enfrentaste a ese rival hoy.';
  end if;
  new.creado := now(); new.visto := false;
  new.premio := least(greatest(new.premio, 0), 50000000);
  return new;
end $$;
drop trigger if exists antes_de_duelo on public.duelos;
create trigger antes_de_duelo before insert on public.duelos for each row execute function public.antes_de_duelo();

-- ---------------------------------------------------------------------------
-- Panel del Creador: funciones que solo puede usar una cuenta con rol «creador».
create or replace function public.soy_creador() returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.perfiles where id = auth.uid() and rol = 'creador');
$$;

create or replace function public.admin_personaje(p_id text, p_cambios jsonb) returns public.personajes
language plpgsql security definer set search_path = public as $$
declare r public.personajes;
begin
  if not public.soy_creador() then raise exception 'Solo el Creador puede hacer esto.'; end if;
  perform set_config('opw.admin', '1', true);   -- el antitrampas no limita al Creador
  update public.personajes set
    doblones   = greatest(0, doblones + coalesce((p_cambios->>'doblones_suma')::bigint, 0)),
    recompensa = coalesce((p_cambios->>'recompensa')::bigint, recompensa),
    nivel      = coalesce(least(80, greatest(1, (p_cambios->>'nivel')::int)), nivel),
    nombre     = coalesce(nullif(trim(p_cambios->>'nombre'), ''), nombre),
    datos      = case
                   when p_cambios ? 'fruta' and p_cambios->>'fruta' is null then datos - 'fruta'
                   when p_cambios ? 'fruta' then (datos - 'busqueda') || jsonb_build_object('fruta', p_cambios->>'fruta')
                   else datos end
              || case when p_cambios ? 'nota' then jsonb_build_object('registro',
                   coalesce(datos->'registro', '[]'::jsonb) || jsonb_build_array(jsonb_build_array((extract(epoch from now()) * 1000)::bigint, p_cambios->>'nota')))
                 else '{}'::jsonb end
  where id = p_id returning * into r;
  if r.id is null then raise exception 'No existe ese personaje.'; end if;
  return r;
end $$;

create or replace function public.admin_rol(p_id text, p_rol text) returns text
language plpgsql security definer set search_path = public as $$
begin
  if not public.soy_creador() then raise exception 'Solo el Creador puede hacer esto.'; end if;
  if p_rol not in ('jugador', 'moderador') then raise exception 'Rol no válido.'; end if;
  update public.perfiles set rol = p_rol where id = (select dueno from public.personajes where id = p_id) and rol <> 'creador';
  return p_rol;
end $$;

create or replace function public.admin_borrar(p_id text) returns void
language plpgsql security definer set search_path = public as $$
begin
  if not public.soy_creador() then raise exception 'Solo el Creador puede hacer esto.'; end if;
  delete from public.personajes where id = p_id and not creador;
end $$;

-- Rol de la cuenta dueña de cada personaje (solo para el Creador; los nombres de usuario siguen ocultos)
create or replace function public.admin_roles() returns table (personaje text, rol text)
language sql stable security definer set search_path = public as $$
  select p.id, f.rol from public.personajes p join public.perfiles f on f.id = p.dueno where public.soy_creador();
$$;

revoke all on function public.admin_personaje(text, jsonb), public.admin_rol(text, text), public.admin_borrar(text), public.admin_roles() from public, anon;
grant execute on function public.admin_personaje(text, jsonb), public.admin_rol(text, text), public.admin_borrar(text), public.admin_roles() to authenticated;
do $$ begin
  begin alter publication supabase_realtime add table public.duelos; exception when duplicate_object then null; end;
end $$;
