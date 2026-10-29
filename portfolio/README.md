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
- `public/Mohamad_Denish_Jumad_Resume.pdf` - current recruiter resume linked from the hero
- `public/resume.pdf` - same current PDF retained for existing links
- `lib/projects.ts` - nine project entries, technologies, images and demo links
- `public/images/projects/` - project images
- `components/ProjectGallery.tsx` - responsive gallery with an enlarged image viewer
- `.github/workflows/deploy.yml` — build + deploy automation

Content combines owner-supplied project details with the résumé — edit the arrays at the top
of each component file in `components/` to update copy, dates, or links.

## If you ever rename the repo

Update `repoName` in `next.config.mjs` and `basePath` in `lib/basePath.ts`
to match the new repo name exactly (case-sensitive, with the leading `/`).


## Update later
Project data lives in `lib/projects.ts`. Place screenshots in `public/images/projects/`
and add their filenames and descriptive alt text to the matching project's `images` array.
The gallery adds the GitHub Pages base path automatically. Only provided demo links are shown.

Fifteen supplied images are included across DevSecOps, EcoBook, SKILL UP, Kokol Mamahill,
Employee Leave, Hijab Tudung and Smart Fire Alarm galleries. The Strangers Encounter
entries use their provided YouTube demos. The previously shared Kokol cart screenshot
can be added when its original file is available.

The recruiter resume is a renamed copy of the supplied GEES 2026 IT PDF. Replace both
public PDFs together when updating it.