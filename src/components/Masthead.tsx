/** Name, availability, tagline, the CV button and the language switch. */
import React from 'react';
import { ui, useLang } from '../i18n';

interface Props {
  onOpenResume: () => void;
}

const Masthead: React.FC<Props> = ({ onOpenResume }) => {
  const { lang, setLang, t } = useLang();

  return (
    <header className="masthead">
      <div className="masthead-text">
        <p className="status-line">
          <span className="dot dot-live" aria-hidden="true" />
          {t(ui.status)}
        </p>
        <h1>{lang === 'he' ? 'גל עומר' : 'Gal Omer'}</h1>
        <p className="tagline">{t(ui.tagline)}</p>
      </div>

      <div className="masthead-actions">
        {/* A button, not a link: it opens a dialog on this page rather than
            navigating, and the old site's <a onClick> was unreachable by
            keyboard because an anchor without href is not focusable. */}
        <button type="button" className="cv-btn" onClick={onOpenResume}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M3 1.5h5L11 4.5v8H3v-11z M8 1.5V5h3"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
          </svg>
          {t(ui.cv)}
        </button>

        <div className="lang-switch" role="group" aria-label="Language">
          <button
            type="button"
            className={`lang-btn mono ${lang === 'en' ? 'on' : ''}`}
            aria-pressed={lang === 'en'}
            onClick={() => setLang('en')}
          >
            EN
          </button>
          <button
            type="button"
            className={`lang-btn ${lang === 'he' ? 'on' : ''}`}
            aria-pressed={lang === 'he'}
            onClick={() => setLang('he')}
            lang="he"
          >
            עברית
          </button>
        </div>
      </div>
    </header>
  );
};

export default Masthead;
