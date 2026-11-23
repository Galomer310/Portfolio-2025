/**
 * Renders the CV sources into what the site serves:
 *   cv.en.html -> src/assets/resume.pdf     + src/assets/resume.png
 *   cv.he.html -> src/assets/resume-he.pdf  + src/assets/resume-he.png
 *
 *   node cv/render.mjs            # writes into src/assets
 *   node cv/render.mjs <outDir>   # writes somewhere else, e.g. to preview a draft
 *
 * Uses the installed Microsoft Edge in headless mode, so there is nothing to
 * npm install. Refuses to write into src/assets while a source still has a
 * highlighted placeholder (class="todo"), so a draft can never ship.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const assets = path.join(here, '..', 'src', 'assets');
const outDir = path.resolve(process.argv[2] ?? assets);

const EDGE = [
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
].find((p) => fs.existsSync(p));
if (!EDGE) throw new Error('Microsoft Edge not found');

const jobs = [
  { src: 'cv.en.html', name: 'resume' },
  { src: 'cv.he.html', name: 'resume-he' },
];

for (const { src, name } of jobs) {
  const file = path.join(here, src);
  if (outDir === assets && fs.readFileSync(file, 'utf8').includes('class="todo"')) {
    throw new Error(`${src} still has a placeholder (class="todo"); fill it in first`);
  }
  const url = pathToFileURL(file).href;
  const common = ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--virtual-time-budget=5000'];
  fs.mkdirSync(outDir, { recursive: true });
  execFileSync(EDGE, [...common, '--no-pdf-header-footer', `--print-to-pdf=${path.join(outDir, `${name}.pdf`)}`, url], { stdio: 'ignore' });
  // A4 at 96 dpi is 794 x 1123 CSS px; the preview is that page as an image.
  execFileSync(EDGE, [...common, '--window-size=794,1123', `--screenshot=${path.join(outDir, `${name}.png`)}`, url], { stdio: 'ignore' });
  console.log(`${src} -> ${name}.pdf, ${name}.png`);
}
