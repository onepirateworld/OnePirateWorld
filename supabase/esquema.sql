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
  if not new.creador then
    select doblones, nivel, recompensa into antes from public.personajes where id = new.id;
    if not found then
      new.doblones := least(new.doblones, 1000);
      new.nivel := least(new.nivel, 5);
      new.recompensa := 0;
    else
      new.doblones := least(new.doblones, antes.doblones + 1500);
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
