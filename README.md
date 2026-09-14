# Aegis Web — Marketing Landing Page

This is the Aegis marketing website, maintained separately from the core platform (`aegis/`).

## Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- No backend — static or deployed to Vercel

## Development
```bash
npm run dev
```

## Deployment
Deploy to Vercel. Connect the `aegis-web` directory.

## Notes
- This site does NOT contain platform code
- For the platform engineering handoff, see the `aegis/` directory
- Contact form submits to a form endpoint (configure in .env.local)
