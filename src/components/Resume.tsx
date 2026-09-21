/**
 * The CV: a preview to look at, and a file to keep.
 *
 * WHY BOTH
 * A recruiter wants to glance without committing to a download; someone who
 * has decided wants the file. Offering only the PDF makes the first person
 * leave, and offering only the image makes the second person ask for it by
 * email.
 *
 * WHY THE IMAGE IS NOT IMPORTED AT THE TOP OF THE PAGE
 * It is, but the <img> only exists while the dialog is open, so the browser
 * does not fetch the 131 KB until somebody asks to see it. The old site drew
 * the modal into the tree and paid for the image on every visit.
 */
import React, { useEffect, useRef } from 'react';
import { ui, useLang } from '../i18n';
import resumeImage from '../assets/resume.png';
import resumePDF from '../assets/resume.pdf';

interface Props {
  onClose: () => void;
}

const Resume: React.FC<Props> = ({ onClose }) => {
  const { t, lang } = useLang();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    /* Focus moves into the dialog, so the next Tab is inside it rather than
       somewhere behind the scrim that nobody can see. */
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      /* Keep Tab inside while it is open. Without this a keyboard user walks
         out of the dialog and starts operating a page they cannot see. */
      if (e.key !== 'Tab' || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>('a[href], button');
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', onKey);
    /* The page behind must not scroll under the dialog. */
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  return (
    <div className="resume-overlay">
      <button type="button" className="scrim" aria-label={t(ui.close)} onClick={onClose} />

      <div
        className="resume-panel"
        role="dialog"
        aria-modal="true"
        aria-label={t(ui.cvTitle)}
        ref={panelRef}
      >
        <div className="resume-bar">
          <p className="resume-title mono" dir="ltr">~/cv/gal-omer.pdf</p>

          <a
            className="btn btn-primary resume-download"
            href={resumePDF}
            download={lang === 'he' ? 'גל-עומר-קורות-חיים.pdf' : 'Gal-Omer-CV.pdf'}
          >
            <span className="mono sigil" aria-hidden="true">%</span>
            {t(ui.cvDownload)}
          </a>

          <button
            type="button"
            className="icon-btn"
            onClick={onClose}
            aria-label={t(ui.close)}
            ref={closeRef}
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
              <path d="M3 3l9 9M12 3l-9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="resume-scroll">
          {/* The CV itself is an English document, so it is not mirrored in
              Hebrew — only the chrome around it is. */}
          <img src={resumeImage} alt={t(ui.cvAlt)} className="resume-image" dir="ltr" />
        </div>
      </div>
    </div>
  );
};

export default Resume;
