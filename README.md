# gal-omer-portfolio

Gal Omer's portfolio: a light status board driven by a terminal prompt, in
English and Hebrew (full RTL).

The prompt is the navigation, not decoration. Four commands replace what is
listed beneath it:

| Command | Shows |
|---|---|
| `ls --running` | What is actually running — the default |
| `ls --all` | Everything, including the early work |
| `stack` | Each technology, with where it was actually used |
| `whoami` | The biography in four lines |

Clicking a row opens the second layer: why it was hard, what I own, and the
evidence. On a phone that layer is a bottom sheet.

## Where things live

- `src/data/projects.ts` — every project, in both languages. **The array order
  is the running order of the site**, ranked by who depends on the work, not by
  date.
- `src/data/stack.ts`, `src/data/about.ts` — the `stack` and `whoami` lists.
- `src/i18n.tsx` — interface text and the stats strip. The stats are typed by
  hand: when a project's numbers change, update them here too.
- `cv/` — the CV in English and Hebrew, as HTML. `node cv/render.mjs` turns
  them into the PDF and preview image in `src/assets` (needs Microsoft Edge).
  Edit the HTML, never the PDF. The script refuses to write while a source
  still has a highlighted placeholder.
- `docs/DESIGN.md` — the design direction and why each decision was made.
- `DEPLOY.md` — how to deploy it to Render as a Static Site.

## Run it

```sh
npm ci
cp .env.example .env   # the three EmailJS keys for the contact form
npm run dev
```

`npm run build` writes the static site to `dist/`.

## Stack

React 19 · TypeScript · Vite · EmailJS
