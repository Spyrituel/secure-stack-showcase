-- Create public storage bucket for lab screenshots
insert into storage.buckets (id, name, public)
values ('lab-screenshots', 'lab-screenshots', true)
on conflict (id) do nothing;

-- Metadata table for screenshots
create table if not exists public.lab_screenshots (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  lab_slug text not null,
  image_path text not null,
  caption_fr text not null,
  caption_en text not null,
  command_label text,
  sort_order integer not null default 0,
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now()
);

alter table public.lab_screenshots enable row level security;

-- Useful index for per-lab ordering
create index if not exists idx_lab_screenshots_slug_sort
on public.lab_screenshots (lab_slug, sort_order, created_at);

-- Timestamp trigger function
create or replace function public.update_lab_screenshots_updated_at()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- Trigger
 drop trigger if exists trg_lab_screenshots_updated_at on public.lab_screenshots;
 create trigger trg_lab_screenshots_updated_at
 before update on public.lab_screenshots
 for each row
 execute function public.update_lab_screenshots_updated_at();

-- Table policies
create policy "Public can read lab screenshots"
on public.lab_screenshots
for select
using (true);

create policy "Authenticated users can insert their screenshots"
on public.lab_screenshots
for insert
to authenticated
with check (auth.uid() = user_id);

create policy "Users can update their screenshots"
on public.lab_screenshots
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "Users can delete their screenshots"
on public.lab_screenshots
for delete
to authenticated
using (auth.uid() = user_id);

-- Storage policies for lab-screenshots bucket
create policy "Public read lab screenshot files"
on storage.objects
for select
using (bucket_id = 'lab-screenshots');

create policy "Users can upload lab screenshot files"
on storage.objects
for insert
to authenticated
with check (
  bucket_id = 'lab-screenshots'
  and auth.uid()::text = (storage.foldername(name))[1]
);

create policy "Users can update their lab screenshot files"
on storage.objects
for update
to authenticated
using (
  bucket_id = 'lab-screenshots'
  and auth.uid()::text = (storage.foldername(name))[1]
)
with check (
  bucket_id = 'lab-screenshots'
  and auth.uid()::text = (storage.foldername(name))[1]
);

create policy "Users can delete their lab screenshot files"
on storage.objects
for delete
to authenticated
using (
  bucket_id = 'lab-screenshots'
  and auth.uid()::text = (storage.foldername(name))[1]
);