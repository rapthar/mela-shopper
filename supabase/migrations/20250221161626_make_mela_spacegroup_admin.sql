-- Create admin user mela.spacegroup@gmail.com
-- Insert the admin user if they don't exist
INSERT INTO auth.users (email, role)
SELECT 'mela.spacegroup@gmail.com', 'admin'
WHERE NOT EXISTS (
  SELECT 1 FROM auth.users WHERE email = 'mela.spacegroup@gmail.com'
);

-- Ensure the user has admin role
UPDATE auth.users
SET role = 'admin'
WHERE email = 'mela.spacegroup@gmail.com';
