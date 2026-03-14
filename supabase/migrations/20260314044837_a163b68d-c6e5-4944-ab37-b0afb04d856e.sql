ALTER TABLE public.lab_screenshots DROP CONSTRAINT IF EXISTS lab_screenshots_user_id_fkey;
ALTER TABLE public.lab_screenshots ALTER COLUMN user_id SET DEFAULT NULL;