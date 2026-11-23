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
      en: 'Every project since 2025, front end and back end. Types are what let me change a schema and see straight away what else needs to change with it.',
      he: 'כל פרויקט מאז 2025, בצד הלקוח ובצד השרת. הטיפוסים הם מה שמאפשר לי לשנות סכימה ולראות מיד מה עוד צריך להשתנות איתה.',
    },
    facts: [
      { k: 'WHERE', v: { en: 'Kiryat Ata, Investments, Weekend Warrior, Magani, Manisr, Near Me.', he: 'קרית אתא, Investments, Weekend Warrior, מגני, Manisr, Near Me.' } },
      { k: 'HOW DEEP', v: { en: 'Shared domain types between an API and its client, so a rename is one edit.', he: 'טיפוסי דומיין משותפים בין API ללקוח, כך ששינוי שם הוא עריכה אחת.' } },
      { k: 'LESSON', v: { en: 'It is much better to find a mistake at compile time than to hear about it from a user.', he: 'הרבה יותר טוב למצוא טעות בקומפילציה מאשר לשמוע עליה ממשתמש.' } },
    ],
  },
  {
    id: 'react',
    name: 'React',
    meta: 'Hooks · Redux Toolkit · Router · offline-first state',
    status: 'daily',
    buckets: ['stack'],
    summary: {
      en: 'Most of the work here is React. The part I have learned the most from is what happens after the first render: state that survives a reload, and a screen that stays accurate when the data arrives late.',
      he: 'רוב העבודה כאן היא React. החלק שלמדתי ממנו הכי הרבה הוא מה שקורה אחרי הרינדור הראשון: מצב ששורד רענון, ומסך שנשאר מדויק כשהנתונים מגיעים באיחור.',
    },
    facts: [
      { k: 'WHERE', v: { en: 'Kiryat Ata, Investments, Weekend Warrior, Magani, Manisr, Near Me.', he: 'קרית אתא, Investments, Weekend Warrior, מגני, Manisr, Near Me.' } },
      { k: 'THE EDGE CASE', v: { en: 'A driver’s screen that queues every tap in IndexedDB and flushes the lot as one request when signal returns.', he: 'מסך נהג ששומר כל לחיצה ב-IndexedDB ומשחרר את כולן כבקשה אחת כשהקליטה חוזרת.' } },
      { k: 'LESSON', v: { en: 'People forgive a slow screen more easily than a wrong one.', he: 'אנשים סולחים על מסך איטי יותר בקלות מאשר על מסך שטועה.' } },
    ],
  },
  {
    id: 'node',
    name: 'Node · Express · Fastify',
    meta: 'REST APIs · JWT auth · Socket.IO',
    status: 'daily',
    buckets: ['stack'],
    summary: {
      en: 'REST APIs behind every full-stack project here, with JWT authentication, and WebSockets where something genuinely needs to update in real time.',
      he: 'REST APIs מאחורי כל פרויקט פול-סטאק כאן, עם אימות JWT, ו-WebSockets במקומות שבהם משהו באמת צריך להתעדכן בזמן אמת.',
    },
    facts: [
      { k: 'WHERE', v: { en: 'Investments, Weekend Warrior, Magani, Manisr; Fastify on Kiryat Ata.', he: 'Investments, Weekend Warrior, מגני, Manisr; Fastify בקרית אתא.' } },
      { k: 'THE EDGE CASE', v: { en: 'Real-time chat that survives a reconnect without losing a message or showing it twice.', he: 'צ׳אט בזמן אמת ששורד ניתוק בלי לאבד הודעה ובלי להציג אותה פעמיים.' } },
      { k: 'LESSON', v: { en: 'Keeping the layers in one direction — routes, then services, then data — is what made the code easy to test.', he: 'שמירה על שכבות בכיוון אחד — נתיבים, שירותים, נתונים — היא מה שהפך את הקוד לקל לבדיקה.' } },
    ],
  },
  {
    id: 'postgres',
    name: 'PostgreSQL',
    meta: 'Schema design · ordered migrations · constraints',
    status: 'daily',
    buckets: ['stack'],
    summary: {
      en: 'I design the schema first, apply migrations in order, and add constraints so that bad data is rejected by the database itself, not only by the form.',
      he: 'אני מתחיל מעיצוב הסכימה, מריץ מיגרציות לפי הסדר, ומוסיף אילוצים כך שנתונים שגויים נדחים על ידי המסד עצמו, לא רק על ידי הטופס.',
    },
    facts: [
      { k: 'WHERE', v: { en: 'Kiryat Ata, Investments (Neon), Weekend Warrior and Magani (Neon + Drizzle), Manisr.', he: 'קרית אתא, Investments (Neon), Weekend Warrior ומגני (Neon + Drizzle), Manisr.' } },
      { k: 'HOW DEEP', v: { en: '19 ordered migrations on one system, each recorded and run exactly once, automatically on deploy.', he: '19 מיגרציות מסודרות במערכת אחת, כל אחת מתועדת ורצה בדיוק פעם אחת, אוטומטית בפריסה.' } },
      { k: 'LESSON', v: { en: 'A constraint in the database catches the mistakes the code missed.', he: 'אילוץ במסד תופס את הטעויות שהקוד פספס.' } },
    ],
  },
  {
    id: 'python',
    name: 'Python',
    meta: 'Selenium · BeautifulSoup · Flask · pandas · Docker · AWS',
    status: 'daily',
    buckets: ['stack'],
    summary: {
      en: 'I have used Python for three quite different jobs: scrapers that run on a schedule, a route optimiser, and a Flask tool that produces documents people print.',
      he: 'השתמשתי בפייתון לשלוש עבודות שונות מאוד: סורקים שרצים לפי לוח זמנים, אופטימייזר מסלולים, וכלי Flask שמפיק מסמכים שאנשים מדפיסים.',
    },
    facts: [
      { k: 'WHERE', v: { en: 'The internship scrapers, the Kiryat Ata optimiser, Trip Planner, Taxi Pricer.', he: 'סורקי ההתמחות, האופטימייזר של קרית אתא, Trip Planner, Taxi Pricer.' } },
      { k: 'THE EDGE CASE', v: { en: 'A Clarke-Wright savings heuristic with 2-opt, under constraints a municipality agreed in a meeting.', he: 'היוריסטיקת חיסכון Clarke-Wright עם 2-opt, תחת מגבלות שעירייה סיכמה בישיבה.' } },
      { k: 'LESSON', v: { en: 'A scraper needs ongoing care; the sites it reads keep changing.', he: 'סורק צריך תחזוקה שוטפת; האתרים שהוא קורא משתנים כל הזמן.' } },
    ],
  },
  {
    id: 'testing',
    name: 'Testing',
    meta: 'End-to-end in jsdom · no database, no network',
    status: 'often',
    buckets: ['stack'],
    summary: {
      en: 'I test most carefully the things that would hurt someone if they broke, and I make sure a test can fail before I trust it. The transport system has 816 tests, written around what drivers, escorts and parents actually do.',
      he: 'אני בודק הכי בקפידה את מה שיפגע במישהו אם יישבר, ומוודא שבדיקה יכולה להיכשל לפני שאני סומך עליה. במערכת ההסעות יש 816 בדיקות, שנכתבו סביב מה שנהגים, מלוות והורים עושים בפועל.',
    },
    facts: [
      { k: 'WHERE', v: { en: 'Kiryat Ata — 816 tests in 24 suites, run with no database and no network. Investments — 354 with Vitest.', he: 'קרית אתא — 816 בדיקות ב-24 חבילות, רצות בלי מסד נתונים ובלי רשת. Investments — 354 ב-Vitest.' } },
      { k: 'WHAT IT CAUGHT', v: { en: 'A plan-cache bug that would have delayed a route change by five seconds on a live board.', he: 'באג מטמון שהיה מעכב שינוי מסלול בחמש שניות בלוח חי.' } },
      { k: 'LESSON', v: { en: 'False alarms are expensive: they teach people to ignore the real one.', he: 'התראות שווא עולות ביוקר: הן מלמדות אנשים להתעלם מהאמיתית.' } },
    ],
  },
  {
    id: 'devops',
    name: 'Deploy & infrastructure',
    meta: 'Docker · AWS · Render · Neon · Cloudinary · GitHub Actions',
    status: 'often',
    buckets: ['stack'],
    summary: {
      en: 'I deploy what I build, and look after the less visible parts too: migrations that run before the code that needs them, and a health endpoint that shows which version is live.',
      he: 'אני פורס את מה שאני בונה, ודואג גם לחלקים הפחות גלויים: מיגרציות שרצות לפני הקוד שצריך אותן, ונקודת בריאות שמראה איזו גרסה באוויר.',
    },
    facts: [
      { k: 'WHERE', v: { en: 'Render, Neon, Cloudinary, AWS; Docker in the internship.', he: 'Render, Neon, Cloudinary, AWS; Docker בהתמחות.' } },
      { k: 'WHAT IT CAUGHT', v: { en: 'Four commits that deployed successfully and changed nothing, because a root-directory setting silently skipped them.', he: 'ארבעה קומיטים שנפרסו בהצלחה ולא שינו כלום, כי הגדרת תיקיית שורש דילגה עליהם בשקט.' } },
      { k: 'LESSON', v: { en: 'Every deploy should be easy to verify, not something you discover days later.', he: 'כל פריסה צריכה להיות קלה לאימות, לא משהו שמגלים אחרי כמה ימים.' } },
    ],
  },
];
