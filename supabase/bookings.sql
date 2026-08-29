-- Run this in the Supabase SQL Editor (Project > SQL Editor > New query)

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  phone text not null,
  pickup text not null,
  dropoff text not null,
  preferred_date date not null,
  preferred_time time not null,
  service text not null,
  notes text
);

-- RLS is enabled with NO policies attached, so this table is fully
-- locked down for the anon/publishable key (no read, write, update,
-- or delete). The app's server-side API route writes to this table
-- using the secret key instead, which bypasses RLS entirely -- that
-- key is never exposed to the browser, so this is safe.
alter table public.bookings enable row level security;
