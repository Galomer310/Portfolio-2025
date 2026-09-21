/** The result list: one row per entry, whatever the prompt is showing. */
import React from 'react';
import { useLang } from '../i18n';
import { STATUS_LABEL, isReachable, type Entry } from '../data/types';

interface Props {
  entries: Entry[];
  selectedId: string;
  onSelect: (id: string) => void;
}

const Board: React.FC<Props> = ({ entries, selectedId, onSelect }) => {
  const { t } = useLang();

  return (
    <ul className="board">
      {entries.map((e) => {
        const on = e.id === selectedId;
        return (
          <li key={e.id}>
            <button
              type="button"
              className={`row ${on ? 'on' : ''}`}
              aria-current={on ? 'true' : undefined}
              onClick={() => onSelect(e.id)}
            >
              <span
                className={`dot ${isReachable(e.status) ? 'dot-live' : 'dot-idle'}`}
                aria-hidden="true"
              />
              <span className="row-name">{e.name}</span>
              {/* Stack lines are proper nouns and stay LTR in both languages. */}
              <span className="row-meta mono" dir="ltr">{e.meta}</span>
              <span className={`pill mono ${isReachable(e.status) ? 'pill-live' : 'pill-idle'}`}>
                {t(STATUS_LABEL[e.status])}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Board;
