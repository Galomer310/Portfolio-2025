/**
 * The biography, as four clickable lines rather than a paragraph.
 *
 * Nobody reads the paragraph. Four lines with a fact each are read, because
 * each one is short enough to finish and offers something if you want more.
 *
 * TONE
 * Plain and first-person: what happened, what I learned, what I want to learn
 * next. No line here should work by making someone else look smaller.
 */
import type { Entry } from './types';

export const about: Entry[] = [
  {
    id: 'background',
    name: 'Background',
    meta: 'Chemistry, then a bootcamp, then real work',
    status: 'context',
    buckets: ['whoami'],
    summary: {
      en: 'I studied chemistry, moved into software through an intensive bootcamp in 2024, and have been building ever since — first in two internships, and now leading development at A. Keren Psagot. Most of what I know I learned by building things people use, and by fixing them when they broke.',
      he: 'למדתי כימיה, עברתי לתוכנה דרך בוטקמפ אינטנסיבי ב-2024, ומאז אני בונה — קודם בשתי התמחויות, והיום כמוביל הפיתוח בא.קרן פסגות. את רוב מה שאני יודע למדתי מבניית דברים שאנשים משתמשים בהם, ומתיקון שלהם כשהם נשברו.',
    },
    facts: [
      { k: 'FINISHED', v: { en: 'Fourteen projects, all still reachable.', he: 'ארבעה-עשר פרויקטים, כולם עדיין נגישים.' } },
      { k: 'IN PRODUCTION', v: { en: 'Five — municipal school transport, patient taxi coordination, bus trip intake, the company’s BI, and a client’s order management.', he: 'חמישה — הסעות עירוניות, תיאום מוניות למטופלים, קליטת הזמנות אוטובוסים, ה-BI של החברה, וניהול הזמנות של לקוח.' } },
      { k: 'WHAT DRIVES ME', v: { en: 'Problems I do not yet know how to solve. Most of the work on this page started that way.', he: 'בעיות שאני עוד לא יודע איך לפתור. רוב העבודה בדף הזה התחילה ככה.' } },
    ],
  },
  {
    id: 'internship',
    name: 'Where I work',
    meta: 'VP at A. Keren Psagot · a team of three · still writing code',
    status: 'context',
    buckets: ['whoami'],
    summary: {
      en: 'I lead development at A. Keren Psagot. Three people work with me — two developers on separate products, and a dispatcher who coordinates taxi rides for Ministry of Defense patients every day. I still write code every day; it keeps me close to the problems the team is solving.',
      he: 'אני מוביל את הפיתוח בא.קרן פסגות. שלושה אנשים עובדים איתי — שני מתכנתים על מוצרים שונים, וסדרן שמתאם כל יום נסיעות מוניות למטופלי משרד הביטחון. אני עדיין כותב קוד כל יום; זה שומר אותי קרוב לבעיות שהצוות פותר.',
    },
    facts: [
      { k: 'NOW', v: { en: 'Vice President, A. Keren Psagot — responsible for four production systems and the team that builds and runs them.', he: 'סמנכ״ל, א.קרן פסגות — אחראי על ארבע מערכות בייצור ועל הצוות שבונה ומפעיל אותן.' } },
      { k: 'BEFORE', v: { en: 'Two full-stack internships: TLV Tech (Python, AWS, data extraction) and Asaf Media, where I built Manisr.', he: 'שתי התמחויות פול-סטאק: TLV Tech (פייתון, AWS, חילוץ נתונים) ואסף מדיה, שם בניתי את Manisr.' } },
      { k: 'LEARNED', v: { en: 'Leading is mostly about making the team’s work easier: clear decisions, written down, and being there when something breaks.', he: 'להוביל זה בעיקר להקל על העבודה של הצוות: החלטות ברורות, כתובות, ולהיות שם כשמשהו נשבר.' } },
    ],
  },
  {
    id: 'how-i-work',
    name: 'How I work',
    meta: 'Careful testing · decisions written down',
    status: 'context',
    buckets: ['whoami'],
    summary: {
      en: 'I test most carefully the things that would hurt someone if they broke, and I write comments that explain why a decision was made, so the next person — often me — does not have to guess.',
      he: 'אני בודק הכי בקפידה את מה שיפגע במישהו אם יישבר, וכותב הערות שמסבירות למה התקבלה החלטה, כדי שמי שיגיע אחריי — הרבה פעמים אני עצמי — לא יצטרך לנחש.',
    },
    facts: [
      { k: 'HABIT', v: { en: 'Before I trust a test, I make sure it can fail.', he: 'לפני שאני סומך על בדיקה, אני מוודא שהיא יכולה להיכשל.' } },
      { k: 'LESSON', v: { en: 'An alert that fires for nothing teaches people to ignore the real one.', he: 'התראה שקופצת לשווא מלמדת אנשים להתעלם מהאמיתית.' } },
      { k: 'IN PRACTICE', v: { en: 'Rules that matter are enforced in the database, not only in the form.', he: 'כללים חשובים נאכפים במסד הנתונים, לא רק בטופס.' } },
    ],
  },
  {
    id: 'looking-for',
    name: 'What I am open to',
    meta: 'Conversations, and learning from others',
    status: 'context',
    buckets: ['whoami'],
    summary: {
      en: 'I am committed to my work at A. Keren Psagot, and always glad to talk — about a hard problem, a system that has to work for real people, or the chance to learn from people who have been doing this longer than I have.',
      he: 'אני מחויב לעבודה שלי בא.קרן פסגות, ותמיד שמח לדבר — על בעיה קשה, על מערכת שצריכה לעבוד בשביל אנשים אמיתיים, או על הזדמנות ללמוד מאנשים שעושים את זה יותר זמן ממני.',
    },
    facts: [
      { k: 'WHERE', v: { en: 'Israel, or remote.', he: 'ישראל, או מרחוק.' } },
      { k: 'STACK', v: { en: 'TypeScript and Node, and Python. Usually both in the same system.', he: 'TypeScript ו-Node, ופייתון. בדרך כלל שניהם באותה מערכת.' } },
      { k: 'CONTACT', v: { en: 'The form below, or LinkedIn.', he: 'הטופס למטה, או לינקדאין.' } },
    ],
  },
];
