CRAZY CRUST CATERING — DEPLOYMENT

1. Upload ALL files from this folder to GitHub repository ROOT (not the ZIP itself).
2. Vercel: import repository, Framework Preset = Other, deploy.
3. Supabase: create project, run schema.sql in SQL Editor.
4. Supabase Authentication > Users: create your own user email/password; copy User UID.
5. Supabase SQL Editor: insert into public.admins(user_id) values ('YOUR-USER-UUID');
6. Supabase Project Settings > API: copy Project URL and publishable/anon key to config.js; NEVER use service_role or secret key in browser. Commit config.js to GitHub.
7. In Supabase Auth settings, disable public signups if only owner should have accounts.
8. Visit https://crazycrustcatering.com/admin.html and sign in.
9. Client requests do NOT charge customers. Owner reviews them and marks booked after deposit separately.

IMPORTANT: Until Supabase is configured, online booking/admin do not work. Public visitors can still view the site and call (818) 749-5050. This package is a deployable starter, not an already connected backend.
