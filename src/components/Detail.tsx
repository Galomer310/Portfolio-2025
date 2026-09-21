/**
 * Layer two: why the thing was hard, what I owned, what the evidence is.
 *
 * ONE COMPONENT, TWO SHAPES
 * On a wide screen it is a panel beside the board. On a phone it is a sheet
 * that rises over it — a side panel does not survive 390px, and shrinking one
 * until it does produces a column nobody can read. Which one is drawn is a CSS
 * decision; the markup is the same, so the content cannot drift between them.
 */
import React, { useEffect } from 'react';
import { ui, useLang } from '../i18n';
import type { Entry } from '../data/types';

interface Props {
  entry: Entry;
  /** True on a phone, where this is a sheet that can be dismissed. */
  asSheet: boolean;
  onClose: () => void;
}

const Detail: React.FC<Props> = ({ entry, asSheet, onClose }) => {
  const { t } = useLang();

  /* Escape closes the sheet. Only while it IS a sheet — on desktop the panel is
     always present and there is nothing to dismiss. */
  useEffect(() => {
    if (!asSheet) return undefined;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [asSheet, onClose]);

  const links = entry.links ?? {};

  return (
    <aside className={`detail ${asSheet ? 'as-sheet' : ''}`} aria-label={entry.name}>
      {asSheet && <div className="sheet-grip" aria-hidden="true" />}

      <div className="detail-head">
        <div className="detail-head-text">
          <p className="detail-path mono" dir="ltr">~/work/{entry.id}</p>
          <h2>{entry.name}</h2>
        </div>
        {asSheet && (
          <button type="button" className="icon-btn" onClick={onClose} aria-label={t(ui.close)}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
              <path d="M3 3l9 9M12 3l-9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        )}
      </div>

      <p className="detail-summary">{t(entry.summary)}</p>

      <hr className="rule" />

      <dl className="facts">
        {entry.facts.map((f) => (
          <div className="fact" key={f.k}>
            <dt className="mono" dir="ltr">{f.k}</dt>
            <dd>{t(f.v)}</dd>
          </div>
        ))}
      </dl>

      <div className="detail-spacer" />

      {/* Only rendered when the link exists. A dead "Live demo" is worse than
          no button: it reads as work that has stopped working. */}
      {(links.live || links.code || links.video) && (
        <div className="detail-actions">
          {links.live && (
            <a className="btn btn-primary" href={links.live} target="_blank" rel="noopener noreferrer">
              <span className="mono sigil" aria-hidden="true">%</span>
              {t(ui.live)}
            </a>
          )}
          <div className="btn-row">
            {links.code && (
              <a className="btn btn-quiet" href={links.code} target="_blank" rel="noopener noreferrer">
                {t(ui.code)}
              </a>
            )}
            {links.video && (
              <a className="btn btn-quiet" href={links.video} target="_blank" rel="noopener noreferrer">
                {t(ui.video)}
              </a>
            )}
          </div>
        </div>
      )}
    </aside>
  );
};

export default Detail;
