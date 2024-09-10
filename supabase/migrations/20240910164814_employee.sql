create table
  public.employees (
    id uuid not null,
    created_at timestamp with time zone null default now(),
    first_name text not null default ''::text,
    last_name text not null default ''::text,
    full_name text null,
    constraint employees_pkey primary key (id)
  ) tablespace pg_default;

