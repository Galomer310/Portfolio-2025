/**
 * The biography, as four clickable lines rather than a paragraph.
 *
 * Nobody reads the paragraph. Four lines with a fact each are read, because
 * each one is short enough to finish and offers something if you want more.
 */
import type { Entry } from './types';

export const about: Entry[] = [
  {
    id: 'background',
    name: 'Background',
    meta: 'Intensive full-stack bootcamp, then real projects',
    status: 'context',
    buckets: ['whoami'],
    summary: {
      en: 'I came out of an intensive bootcamp and started building things people could actually open. Everything on this page is something I finished, not something I started.',
      he: 'יצאתי מבוטקמפ אינטנסיבי והתחלתי לבנות דברים שאנשים יכולים באמת לפתוח. כל מה שבדף הזה הוא משהו שסיימתי, לא משהו שהתחלתי.',
    },
    facts: [
      { k: 'FINISHED', v: { en: 'Thirteen projects, all still reachable.', he: 'שלושה-עשר פרויקטים, כולם עדיין נגישים.' } },
      { k: 'IN PRODUCTION', v: { en: 'Four — municipal school transport, patient taxi coordination, the company’s BI, and a client’s order management.', he: 'ארבעה — הסעות עירוניות, תיאום מוניות למטופלים, ה-BI של החברה, וניהול הזמנות של לקוח.' } },
      { k: 'STILL BUILDING', v: { en: 'Two, and they are named as unfinished rather than dressed up.', he: 'שניים, והם מסומנים כלא-גמורים ולא מולבשים.' } },
    ],
  },
  {
    id: 'internship',
    name: 'Where I work',
    meta: 'VP at A. Keren Psagot · a team of three · still writing code',
    status: 'context',
    buckets: ['whoami'],
    summary: {
      en: 'I run the engineering side of A. Keren Psagot. Three people report to me — two developers on separate products, and a dispatcher coordinating taxi rides for Ministry of Defense patients every day. I did not stop writing code to do it.',
      he: 'אני מנהל את צד הפיתוח בא.קרן פסגות. שלושה אנשים כפופים לי — שני מתכנתים על מוצרים שונים, וסדרן שמתאם נסיעות מוניות למטופלי משרד הביטחון כל יום. לא הפסקתי לכתוב קוד בשביל זה.',
    },
    facts: [
      { k: 'NOW', v: { en: 'Vice President, A. Keren Psagot — three production systems, a team of three, and the architecture is mine.', he: 'סמנכ״ל, א.קרן פסגות — שלוש מערכות בייצור, צוות של שלושה, והארכיטקטורה שלי.' } },
      { k: 'BEFORE', v: { en: 'Two full-stack internships: TLV Tech (Python, AWS, scraping at scale) and Asaf Media, where I built Manisr.', he: 'שתי התמחויות פול-סטאק: TLV Tech (פייתון, AWS, סריקה בקנה מידה) ואסף מדיה, שם בניתי את Manisr.' } },
      { k: 'LEARNED', v: { en: 'Leading did not mean writing less. It meant the parts I write are the ones nobody else can unpick later.', he: 'לנהל לא אומר לכתוב פחות. זה אומר שהחלקים שאני כותב הם אלה שאף אחד אחר לא יצליח לפרק אחר כך.' } },
    ],
  },
  {
    id: 'how-i-work',
    name: 'How I work',
    meta: 'Tests where it matters · comments that say why, not what',
    status: 'context',
    buckets: ['whoami'],
    summary: {
      en: 'I write tests for the things that would hurt somebody if they broke, and comments that explain why a decision was made rather than what the line does. The line is already there; the reasoning is not.',
      he: 'אני כותב בדיקות לדברים שיפגעו במישהו אם יישברו, והערות שמסבירות למה התקבלה החלטה ולא מה השורה עושה. השורה כבר שם; הנימוק לא.',
    },
    facts: [
      { k: 'HABIT', v: { en: 'I break my own test before I trust it. A test that passes both ways is not testing anything.', he: 'אני שובר את הבדיקה שלי לפני שאני סומך עליה. בדיקה שעוברת בשני הכיוונים לא בודקת כלום.' } },
      { k: 'BELIEF', v: { en: 'A check that cries wolf is worse than no check at all.', he: 'בדיקה שזועקת לשווא גרועה מאין בדיקה בכלל.' } },
      { k: 'IN PRACTICE', v: { en: 'Constraints in the database, not in the form. The form is a suggestion.', he: 'אילוצים במסד, לא בטופס. הטופס הוא המלצה.' } },
    ],
  },
  {
    id: 'looking-for',
    name: 'What I am looking for',
    meta: 'A team that ships, and will correct me',
    status: 'context',
    buckets: ['whoami'],
    summary: {
      en: 'A full-stack role on a team that ships. I want code review from people better than me, and problems where the right answer is not obvious from the start.',
      he: 'תפקיד פול-סטאק בצוות שמשחרר גרסאות. אני רוצה code review מאנשים טובים ממני, ובעיות שבהן התשובה הנכונה לא מובנת מאליה מההתחלה.',
    },
    facts: [
      { k: 'WHERE', v: { en: 'Israel, or remote.', he: 'ישראל, או מרחוק.' } },
      { k: 'STACK I WANT', v: { en: 'TypeScript and Node, or Python. Ideally both.', he: 'TypeScript ו-Node, או פייתון. עדיף שניהם.' } },
      { k: 'CONTACT', v: { en: 'The form below, or LinkedIn.', he: 'הטופס למטה, או לינקדאין.' } },
    ],
  },
];
