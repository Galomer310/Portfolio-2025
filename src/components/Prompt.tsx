/**
 * The command bar — the only dark thing on the page, and the navigation.
 *
 * It is dark on purpose: in an otherwise light layout a single black block is
 * where the eye lands, so the interactive part of the page cannot be missed.
 *
 * The commands really do replace the board beneath them. If they did not, this
 * would be a drawing of a terminal sitting on a static page, which is the
 * failure this whole direction exists to avoid.
 *
 * DIRECTION
 * The prompt line stays left-to-right even in Hebrew. A shell command is not
 * Hebrew text — `ls --running` reversed is unreadable, and every developer who
 * sees it knows something is wrong.
 */
import React from 'react';
import { commands, useLang } from '../i18n';
import type { Bucket } from '../data/types';

interface Props {
  active: Bucket;
  onSelect: (b: Bucket) => void;
}

const Prompt: React.FC<Props> = ({ active, onSelect }) => {
  const { t } = useLang();
  const current = commands.find((c) => c.id === active) ?? commands[0];

  return (
    <section className="prompt" aria-label="Command">
      <p className="prompt-line mono" dir="ltr">
        <span className="prompt-host">gal@portfolio</span>
        <span className="prompt-path">~</span>
        <span className="prompt-sigil">%</span>
        <span className="prompt-cmd">{current.label}</span>
        <span className="caret" aria-hidden="true" />
      </p>

      <div className="prompt-chips" role="tablist" aria-label="Views">
        {commands.map((c) => (
          <button
            key={c.id}
            type="button"
            role="tab"
            aria-selected={c.id === active}
            className={`chip mono ${c.id === active ? 'on' : ''}`}
            onClick={() => onSelect(c.id)}
            dir="ltr"
          >
            {c.label}
          </button>
        ))}
      </div>

      <p className="prompt-result mono">{t(current.result)}</p>
    </section>
  );
};

export default Prompt;
