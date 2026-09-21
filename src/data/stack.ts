/**
 * Technologies — but each one answers "where did you actually use this".
 *
 * A skills list is the cheapest thing on a CV and the least believable. The
 * only version worth showing names the project, the decision and the edge case,
 * which is also the version that survives being asked about in an interview.
 */
import type { Entry } from './types';

export const stack: Entry[] = [
  {
    id: 'typescript',
    name: 'TypeScript',
    meta: 'Every project since 2025 — frontend and backend',
    status: 'daily',
    buckets: ['stack'],
    summary: {
      en: 'Not a line on a list. Every recent project here is typed end to end, and the types are what let me change a schema without hunting for what broke.',
      he: 'לא שורה ברשימה. כל פרויקט עדכני כאן מוקלד מקצה לקצה, והטיפוסים הם מה שמאפשר לשנות סכימה בלי לחפש מה נשבר.',
    },
    facts: [
      { k: 'WHERE', v: { en: 'Kiryat Ata, Magani, Manisr, Near Me, Stock Tracker.', he: 'קרית אתא, מגני, Manisr, Near Me, Stock Tracker.' } },
      { k: 'HOW DEEP', v: { en: 'Shared domain types between an API and its client, so a rename is one edit.', he: 'טיפוסי דומיין משותפים בין API ללקוח, כך ששינוי שם הוא עריכה אחת.' } },
      { k: 'WHY', v: { en: 'A rename becomes a compile error, not a bug report from a user.', he: 'שינוי שם הופך לשגיאת קומפילציה, לא לדיווח באג ממשתמש.' } },
    ],
  },
  {
    id: 'react',
    name: 'React',
    meta: 'Hooks · Redux Toolkit · Router · offline-first state',
    status: 'daily',
    buckets: ['stack'],
    summary: {
      en: 'Most of the work here is React. What I care about is the part after the first render: state that survives a reload, and a UI that stays honest when the data is late.',
      he: 'רוב העבודה כאן היא React. מה שמעניין אותי הוא מה שקורה אחרי הרינדור הראשון: מצב ששורד רענון, וממשק שנשאר כן כשהנתונים מאחרים.',
    },
    facts: [
      { k: 'WHERE', v: { en: 'Manisr, Near Me, Magani, Stock Tracker, Recipe Finder.', he: 'Manisr, Near Me, מגני, Stock Tracker, Recipe Finder.' } },
      { k: 'THE EDGE CASE', v: { en: 'A driver’s screen that queues every tap in IndexedDB and flushes the lot as one request when signal returns.', he: 'מסך נהג ששומר כל לחיצה ב-IndexedDB ומשחרר את כולן כבקשה אחת כשהקליטה חוזרת.' } },
      { k: 'OPINION', v: { en: 'A loading state that lies is worse than a slow one that does not.', he: 'מצב טעינה שמשקר גרוע ממצב איטי שלא.' } },
    ],
  },
  {
    id: 'node',
    name: 'Node · Express · Fastify',
    meta: 'REST APIs · JWT auth · Socket.IO',
    status: 'daily',
    buckets: ['stack'],
    summary: {
      en: 'REST APIs behind every full-stack project here, with JWT auth and — where it earns its place rather than because it is fashionable — a socket.',
      he: 'REST APIs מאחורי כל פרויקט פול-סטאק כאן, עם אימות JWT, ובמקום שזה מצדיק את עצמו ולא כי זה אופנתי — סוקט.',
    },
    facts: [
      { k: 'WHERE', v: { en: 'Manisr, Magani, Stock Tracker, Story Sharing; Fastify on Kiryat Ata.', he: 'Manisr, מגני, Stock Tracker, Story Sharing; Fastify בקרית אתא.' } },
      { k: 'THE EDGE CASE', v: { en: 'Real-time chat that survives a reconnect without losing a message or showing it twice.', he: 'צ׳אט בזמן אמת ששורד ניתוק בלי לאבד הודעה ובלי להציג אותה פעמיים.' } },
      { k: 'OPINION', v: { en: 'Layers that point one way — http to services to data — are what make any of it testable.', he: 'שכבות שמצביעות לכיוון אחד — http לשירותים לנתונים — הן מה שהופך את זה לניתן לבדיקה.' } },
    ],
  },
  {
    id: 'postgres',
    name: 'PostgreSQL',
    meta: 'Schema design · ordered migrations · constraints',
    status: 'daily',
    buckets: ['stack'],
    summary: {
      en: 'Schemas I designed rather than inherited, with migrations applied in order and constraints that refuse bad data at the database rather than in a form.',
      he: 'סכימות שעיצבתי ולא ירשתי, עם מיגרציות שמוחלות בסדר ואילוצים שמסרבים לנתונים שגויים במסד ולא בטופס.',
    },
    facts: [
      { k: 'WHERE', v: { en: 'Kiryat Ata, Magani (Neon + Drizzle), Manisr, Story Sharing.', he: 'קרית אתא, מגני (Neon + Drizzle), Manisr, Story Sharing.' } },
      { k: 'HOW DEEP', v: { en: '11 ordered migrations on one system, each recorded and run exactly once.', he: '11 מיגרציות מסודרות במערכת אחת, כל אחת מתועדת ורצה בדיוק פעם אחת.' } },
      { k: 'OPINION', v: { en: 'A CHECK constraint is cheaper than a bug report.', he: 'אילוץ CHECK זול יותר מדיווח באג.' } },
    ],
  },
  {
    id: 'python',
    name: 'Python',
    meta: 'Selenium · BeautifulSoup · Flask · pandas · Docker · AWS',
    status: 'daily',
    buckets: ['stack'],
    summary: {
      en: 'Three different jobs, not one: scrapers that run on someone else’s schedule, a route optimiser, and a Flask tool that generates documents people print.',
      he: 'שלוש עבודות שונות, לא אחת: סורקים שרצים לפי לוח זמנים של מישהו אחר, אופטימייזר מסלולים, וכלי Flask שמייצר מסמכים שאנשים מדפיסים.',
    },
    facts: [
      { k: 'WHERE', v: { en: 'The internship scrapers, the Kiryat Ata optimiser, Trip Planner, Taxi Pricer.', he: 'סורקי ההתמחות, האופטימייזר של קרית אתא, Trip Planner, Taxi Pricer.' } },
      { k: 'THE EDGE CASE', v: { en: 'A Clarke-Wright savings heuristic with 2-opt, under constraints a municipality agreed in a meeting.', he: 'היוריסטיקת חיסכון Clarke-Wright עם 2-opt, תחת מגבלות שעירייה סיכמה בישיבה.' } },
      { k: 'OPINION', v: { en: 'A scraper is a maintenance commitment, not a script.', he: 'סורק הוא התחייבות לתחזוקה, לא סקריפט.' } },
    ],
  },
  {
    id: 'testing',
    name: 'Testing',
    meta: 'End-to-end in jsdom · no database, no network',
    status: 'often',
    buckets: ['stack'],
    summary: {
      en: 'I write tests for the things that would hurt somebody if they broke, and I try to break my own test before I trust it. The transport system has 221 assertions and not one of them tests a getter.',
      he: 'אני כותב בדיקות לדברים שיפגעו במישהו אם יישברו, ומנסה לשבור את הבדיקה שלי לפני שאני סומך עליה. במערכת ההסעות יש 221 טענות ואף אחת מהן לא בודקת getter.',
    },
    facts: [
      { k: 'WHERE', v: { en: 'Kiryat Ata — six suites, run with no database and no network.', he: 'קרית אתא — שש חבילות, רצות בלי מסד נתונים ובלי רשת.' } },
      { k: 'WHAT IT CAUGHT', v: { en: 'A plan-cache bug that would have delayed a route change by five seconds on a live board.', he: 'באג מטמון שהיה מעכב שינוי מסלול בחמש שניות בלוח חי.' } },
      { k: 'OPINION', v: { en: 'A check that cries wolf is worse than no check — the next real breach reads like more of the same.', he: 'בדיקה שזועקת לשווא גרועה מאין בדיקה — ההפרה האמיתית הבאה נקראת כמו עוד אחת מאלה.' } },
    ],
  },
  {
    id: 'devops',
    name: 'Deploy & infrastructure',
    meta: 'Docker · AWS · Render · Neon · Cloudinary · GitHub Actions',
    status: 'often',
    buckets: ['stack'],
    summary: {
      en: 'Everything here is deployed, not just built. That includes the unglamorous parts: migrations that run before the code that needs them, and a health endpoint that reports which commit is actually serving.',
      he: 'כל מה שכאן פרוס, לא רק בנוי. כולל החלקים הלא-זוהרים: מיגרציות שרצות לפני הקוד שצריך אותן, ונקודת בריאות שמדווחת איזה קומיט באמת מוגש.',
    },
    facts: [
      { k: 'WHERE', v: { en: 'Render, Neon, Cloudinary, AWS; Docker in the internship.', he: 'Render, Neon, Cloudinary, AWS; Docker בהתמחות.' } },
      { k: 'WHAT IT CAUGHT', v: { en: 'Four commits that deployed successfully and changed nothing, because a root-directory setting silently skipped them.', he: 'ארבעה קומיטים שנפרסו בהצלחה ולא שינו כלום, כי הגדרת תיקיית שורש דילגה עליהם בשקט.' } },
      { k: 'OPINION', v: { en: 'A deploy that quietly does not happen should not be detective work.', he: 'פריסה שפשוט לא קורית לא אמורה להיות עבודת בילוש.' } },
    ],
  },
];
