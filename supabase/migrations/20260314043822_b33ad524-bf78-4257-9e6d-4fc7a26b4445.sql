
-- Update RLS policy to allow anonymous inserts
DROP POLICY IF EXISTS "Authenticated users can insert their screenshots" ON public.lab_screenshots;
CREATE POLICY "Anyone can insert lab screenshots"
ON public.lab_screenshots
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Update storage policy to allow anonymous uploads
DROP POLICY IF EXISTS "Users can upload lab screenshot files" ON storage.objects;
CREATE POLICY "Anyone can upload lab screenshot files"
ON storage.objects
FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'lab-screenshots');
