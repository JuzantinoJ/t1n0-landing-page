# T1N0.ai Landing Website

Production-ready single-page landing website for T1N0.ai, built with React, TypeScript, Tailwind CSS, Vite, Framer Motion, Lucide React, and React Helmet Async.

## Setup

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Architecture Notes

- `src/constants/siteConfig.ts` centralises brand, SEO, navigation, email, and social settings.
- `src/data` keeps typed static data for clients, projects, services, process steps, and feature cards.
- `src/services/api.ts` is the future backend boundary for CMS, Supabase, Firebase, PostgreSQL APIs, or headless CMS integrations.
- `src/features/auth` contains placeholders for future admin login and protected CMS workflows.
