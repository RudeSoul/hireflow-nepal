create extension if not exists "pgcrypto";

create table companies (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  logo_url text,
  created_at timestamptz default now()
);

create table users (
  id uuid primary key,
  company_id uuid references companies(id) on delete cascade,
  email text not null,
  full_name text,
  role text not null,
  created_at timestamptz default now()
);

create table jobs (
  id uuid primary key default gen_random_uuid(),
  company_id uuid references companies(id) on delete cascade,
  title text not null,
  department text,
  location text,
  employment_type text,
  description text,
  status text default 'draft',
  created_by uuid references users(id),
  created_at timestamptz default now()
);