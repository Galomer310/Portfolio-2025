/**
 * Language, direction, and every string the chrome needs.
 *
 * WHY A CONTEXT AND NOT A PROP
 * Every component on the page needs the language, and threading it through
 * would mean every component also declaring it. The context is read with one
 * hook; nothing else changes.
 *
 * WHY `dir` IS SET ON <html> AND NOT ONLY ON A WRAPPER
 * Logical CSS properties (margin-inline-start, border-inline-end) resolve
 * against the nearest direction, but scrollbars, text selection and native
 * form controls resolve against the document. Setting only a wrapper leaves
 * those pointing the wrong way in Hebrew, which is the kind of half-RTL that
 * looks worse than none.
 */
import React, { createContext, useContext, useEffect, useState } from 'react';
import type { Bilingual, Lang } from './data/types';

const STORAGE_KEY = 'portfolio-lang';

interface LangContextValue {
  lang: Lang;
  dir: 'ltr' | 'rtl';
  setLang: (l: Lang) => void;
  toggle: () => void;
  /** Pick the current language out of a bilingual value. */
  t: (b: Bilingual) => string;
}

const LangContext = createContext<LangContextValue | null>(null);

/** Remembered per visitor, because nobody wants to switch twice. */
function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'he') return saved;
  } catch {
    /* private browsing, blocked storage: fall through to the default */
  }
  return 'en';
}

export const LangProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>(initialLang);
  const dir: 'ltr' | 'rtl' = lang === 'he' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* storage can be unavailable; the page still works for this visit */
    }
  }, [lang, dir]);

  const setLang = (l: Lang) => setLangState(l);
  const toggle = () => setLangState((p) => (p === 'en' ? 'he' : 'en'));
  const t = (b: Bilingual) => b[lang];

  return (
    <LangContext.Provider value={{ lang, dir, setLang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
};

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used inside <LangProvider>');
  return ctx;
}

/* ------------------------------------------------------------- the chrome --- */

export const ui = {
  status: { en: 'OPEN TO WORK · ISRAEL / REMOTE', he: 'פנוי למשרה · ישראל / מרחוק' },
  tagline: {
    en: 'Full stack developer and engineering lead. I run a team of three on systems people depend on daily — and I still write the hard parts myself.',
    he: 'מפתח פול-סטאק ומוביל פיתוח. מנהל צוות של שלושה על מערכות שאנשים תלויים בהן כל יום — ועדיין כותב בעצמי את החלקים הקשים.',
  },
  layerTwo: { en: 'LAYER 2 — DEPTH', he: 'שכבה 2 — עומק' },
  readCase: { en: 'Read the full case', he: 'לקריאת המקרה המלא' },
  live: { en: 'Live demo', he: 'דמו חי' },
  code: { en: 'Code', he: 'קוד' },
  video: { en: 'Video', he: 'סרטון' },
  close: { en: 'Close', he: 'סגירה' },
  cv: { en: 'C.V', he: 'קורות חיים' },
  cvTitle: { en: 'Curriculum vitae', he: 'קורות חיים' },
  cvDownload: { en: 'Download PDF', he: 'הורדת PDF' },
  cvAlt: {
    en: 'Gal Omer — curriculum vitae, one page',
    he: 'גל עומר — קורות חיים, עמוד אחד',
  },
  contactTitle: { en: 'Get in touch', he: 'יצירת קשר' },
  contactLead: {
    en: 'The fastest way to reach me. I answer everything.',
    he: 'הדרך המהירה ביותר להשיג אותי. אני עונה על הכל.',
  },
  yourName: { en: 'Your name', he: 'השם שלך' },
  yourEmail: { en: 'Your email', he: 'האימייל שלך' },
  yourMessage: { en: 'Your message', he: 'ההודעה שלך' },
  send: { en: 'Send', he: 'שליחה' },
  sending: { en: 'Sending…', he: 'שולח…' },
  sent: { en: 'Sent. I will get back to you.', he: 'נשלח. אחזור אליך.' },
  sendFailed: {
    en: 'The message did not send. Email me directly instead — the address is below.',
    he: 'ההודעה לא נשלחה. שלחו לי מייל ישירות — הכתובת למטה.',
  },
  /** Shown when the EmailJS keys are missing, which is a setup fault, not the visitor's. */
  formUnconfigured: {
    en: 'The form is not configured on this deployment. Email me directly — the address is below.',
    he: 'הטופס לא מוגדר בפריסה הזו. שלחו לי מייל ישירות — הכתובת למטה.',
  },
  rights: { en: 'All rights reserved.', he: 'כל הזכויות שמורות.' },
} as const;

/** The four commands, and what each result list is called. */
export const commands = [
  {
    id: 'running' as const,
    label: 'ls --running',
    result: { en: 'WHAT IS ACTUALLY RUNNING', he: 'מה באמת רץ עכשיו' },
  },
  {
    id: 'all' as const,
    label: 'ls --all',
    result: { en: 'EVERYTHING, INCLUDING THE EARLY ONES', he: 'הכל, כולל המוקדמים' },
  },
  {
    id: 'stack' as const,
    label: 'stack',
    result: { en: 'NOT A LIST — WHERE EACH ONE WAS ACTUALLY USED', he: 'לא רשימה — איפה כל אחד באמת שימש' },
  },
  {
    id: 'whoami' as const,
    label: 'whoami',
    result: { en: 'THE SHORT VERSION, IN FOUR LINES', he: 'הגרסה הקצרה, בארבע שורות' },
  },
];

export const stats = [
  { n: '12', k: { en: 'SHIPPED', he: 'פרויקטים' } },
  { n: '3', k: { en: 'IN PRODUCTION', he: 'בייצור' } },
  { n: '3', k: { en: 'PEOPLE I LEAD', he: 'אנשים בצוות שלי' } },
  { n: '221', k: { en: 'TEST ASSERTIONS', he: 'בדיקות' } },
];
