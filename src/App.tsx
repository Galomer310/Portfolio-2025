/**
 * The page: a light status board driven by a prompt.
 *
 * Two layers, deliberately. Layer one — who, what is built, what is running,
 * how to make contact — is readable in about ten seconds without a click.
 * Layer two is one click away and says why a thing was hard. Neither audience
 * pays for the other.
 */
import React, { useEffect, useMemo, useState } from 'react';
import Masthead from './components/Masthead';
import Prompt from './components/Prompt';
import Board from './components/Board';
import Detail from './components/Detail';
import Contact from './components/Contact';
import Resume from './components/Resume';
import { stats, ui, useLang } from './i18n';
import { projects } from './data/projects';
import { stack } from './data/stack';
import { about } from './data/about';
import type { Bucket, Entry } from './data/types';

/** Everything the board can list, in one array; `buckets` decides what shows. */
const ALL: Entry[] = [...projects, ...stack, ...about];

/** Below this the detail becomes a sheet instead of a side panel. */
const SHEET_BREAKPOINT = 900;

const App: React.FC = () => {
  const { lang, t } = useLang();
  const [view, setView] = useState<Bucket>('running');
  const [selectedId, setSelectedId] = useState<string>('');
  /* On a phone the sheet starts closed, so the first thing seen is the board
     rather than one project covering it. */
  const [sheetOpen, setSheetOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [narrow, setNarrow] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < SHEET_BREAKPOINT,
  );

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${SHEET_BREAKPOINT - 1}px)`);
    const sync = () => setNarrow(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  const entries = useMemo(() => ALL.filter((e) => e.buckets.includes(view)), [view]);

  /* The selection belongs to the list being shown. Switching command resets it
     to the first row, which is the one the order was chosen to put there. */
  const selected = entries.find((e) => e.id === selectedId) ?? entries[0];

  const chooseView = (b: Bucket) => {
    setView(b);
    setSelectedId('');
    setSheetOpen(false);
  };

  const chooseEntry = (id: string) => {
    setSelectedId(id);
    if (narrow) setSheetOpen(true);
  };

  const showDetail = selected && (!narrow || sheetOpen);

  return (
    <div className="page">
      <Masthead onOpenResume={() => setResumeOpen(true)} />

      <div className="stat-strip">
        {stats.map((s) => (
          <div className="stat" key={s.k.en}>
            <span className="stat-n">{s.n}</span>
            <span className="stat-k mono">{t(s.k)}</span>
          </div>
        ))}
      </div>

      <main className="work">
        <div className="work-main">
          <Prompt active={view} onSelect={chooseView} />
          <Board entries={entries} selectedId={selected?.id ?? ''} onSelect={chooseEntry} />
        </div>

        {showDetail && (
          <>
            {narrow && (
              /* The scrim closes the sheet. A button rather than a div so it is
                 reachable by keyboard and announced, even though a pointer user
                 will only ever tap it. */
              <button
                type="button"
                className="scrim"
                aria-label={t(ui.close)}
                onClick={() => setSheetOpen(false)}
              />
            )}
            <Detail entry={selected} asSheet={narrow} onClose={() => setSheetOpen(false)} />
          </>
        )}
      </main>

      <Contact />

      {/* Only in the tree while open, so the 131 KB preview image is not
          fetched by a visitor who never asks for it. */}
      {resumeOpen && <Resume onClose={() => setResumeOpen(false)} />}

      <footer className="footer">
        <nav className="social" aria-label="Elsewhere">
          <a href="https://github.com/Galomer310" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/gal-omer/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </nav>
        <p className="mono">
          © {new Date().getFullYear()} {lang === 'he' ? 'גל עומר' : 'Gal Omer'} · {t(ui.rights)}
        </p>
      </footer>
    </div>
  );
};

export default App;
