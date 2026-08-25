# Denish Jumad — Portfolio

Next.js 14 + Tailwind CSS portfolio, statically exported and deployed to
**GitHub Pages** via GitHub Actions.

Live at: https://denish02.github.io/-denish-portfolio/

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy

Deployment is automatic. Every push to `main` triggers
`.github/workflows/deploy.yml`, which builds the site with
`next build` (static export to `/out`) and publishes it to GitHub Pages.

The only one-time setup step is enabling Pages in the repo:
**Settings → Pages → Source → GitHub Actions**. See the step-by-step guide
from Claude for the full walkthrough.

## Structure

- `app/` — page shell, layout, global styles
- `components/` — one component per section (Hero, About, Skills, Projects,
  Experience, Education, Activities, Contact)
- `lib/basePath.ts` — GitHub Pages project sites are served under
  `/-denish-portfolio/`, not the domain root. This constant is prepended to
  any hand-written asset link (like the résumé download) so it resolves
  correctly in production. `next/image` handles this automatically.
- `public/images/profile.jpg` — profile photo
- `public/resume.pdf` — downloadable résumé (linked from the hero section)
- `.github/workflows/deploy.yml` — build + deploy automation

All content is sourced directly from the résumé — edit the arrays at the top
of each component file in `components/` to update copy, dates, or links.

## If you ever rename the repo

Update `repoName` in `next.config.mjs` and `basePath` in `lib/basePath.ts`
to match the new repo name exactly (case-sensitive, with the leading `/`).


## Update later
include picture of project