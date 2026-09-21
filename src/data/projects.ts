/**
 * Every project on the site, in one place, in both languages.
 *
 * WHY ONE FILE
 * The old site spread this across a 279-line Projects.tsx that opened with
 * seventy import statements. Adding a project meant touching imports, an array
 * and a card component; adding a language would have meant touching all three
 * again. Here a project is a record, and the components only decide how to draw
 * one.
 *
 * WHAT THE ORDER MEANS
 * This array is the running order of the site, and it is not chronological. It
 * is what a recruiter should see first, which is the work someone else depends
 * on. See docs/DESIGN.md for the four questions that ranked it.
 */
import type { Entry } from './types';

export const projects: Entry[] = [
  {
    id: 'kiryat-ata',
    name: 'Kiryat Ata Transport',
    meta: 'A. Keren Psagot · Python optimiser · Fastify · PostgreSQL · TypeScript',
    status: 'production',
    buckets: ['running', 'all'],
    summary: {
      en: 'A planning pipeline and a dispatch application running a real municipal operation: 461 children, 30 vehicles, 46 institutions, two directions a day. Drivers and escorts tap from the road; the dispatcher watches it happen live.',
      he: 'צינור תכנון ואפליקציית מוקד שמריצים מערך עירוני אמיתי: 461 ילדים, 30 רכבים, 46 מוסדות, שני כיוונים ביום. נהגים ומלוות מסמנים מהכביש; המוקד רואה את זה קורה בזמן אמת.',
    },
    facts: [
      {
        k: 'WHY IT IS HARD',
        v: {
          en: 'Every child must be carried exactly once — not twice, and never zero times. A duplicate is visible on the board; a child with no ride is not.',
          he: 'כל ילד חייב להיות מוסע בדיוק פעם אחת — לא פעמיים, ולעולם לא אפס. כפילות נראית בלוח; ילד בלי הסעה לא.',
        },
      },
      {
        k: 'WHAT I OWN',
        v: {
          en: 'The optimiser constraints, the API, and the offline-first driver screen that keeps working through a dead spot.',
          he: 'מגבלות האופטימייזר, ה-API, ומסך הנהג שממשיך לעבוד גם בשטח מת.',
        },
      },
      {
        k: 'EVIDENCE',
        v: {
          en: '221 test assertions · 30 planning rules enforced and re-verified, 0 failing.',
          he: '221 טענות בדיקה · 30 מגבלות תכנון נאכפות ונבדקות מחדש, 0 כשלים.',
        },
      },
    ],
  },
  {
    id: 'shikum-psagot',
    name: 'Shikum Psagot',
    meta: 'A. Keren Psagot · taxi coordination for Ministry of Defense patients',
    status: 'production',
    buckets: ['running', 'all'],
    summary: {
      en: 'A taxi-coordination platform for Ministry of Defense rehabilitation patients — getting them to hospital treatment, and letting them recover from home. Built with one of my developers; a full-time dispatcher runs it every day.',
      he: 'פלטפורמת תיאום מוניות למטופלי שיקום של משרד הביטחון — להביא אותם לטיפול בבית החולים, ולאפשר להם להשתקם מהבית. נבנתה יחד עם אחד המתכנתים שלי; סדרן במשרה מלאה מפעיל אותה כל יום.',
    },
    facts: [
      {
        k: 'WHY IT IS HARD',
        v: {
          en: 'A missed ride is a missed treatment. Coordination has to hold up on the day, not on average.',
          he: 'נסיעה שהוחמצה היא טיפול שהוחמץ. התיאום חייב להחזיק ביום עצמו, לא בממוצע.',
        },
      },
      {
        k: 'WHAT I OWN',
        v: {
          en: 'Product and architecture, written together with one of my developers. I lead the team that runs it.',
          he: 'מוצר וארכיטקטורה, נכתב יחד עם אחד המתכנתים שלי. אני מוביל את הצוות שמפעיל את זה.',
        },
      },
      {
        k: 'EVIDENCE',
        v: {
          en: 'In daily operational use, coordinating real patient rides.',
          he: 'בשימוש תפעולי יומי, מתאם נסיעות אמיתיות של מטופלים.',
        },
      },
    ],
  },
  {
    id: 'psagot-bi',
    name: 'Psagot BI',
    meta: 'A. Keren Psagot · internal financial reporting',
    status: 'production',
    buckets: ['running', 'all'],
    summary: {
      en: 'The internal business-intelligence system for A. Keren Psagot: one live financial picture of the whole business, broad enough to scan in a minute and deep enough to act on. Built so the management team decides forward — where the money sits, what it is doing, and what the next move should be.',
      he: 'מערכת ה-BI הפנימית של א.קרן פסגות: תמונה פיננסית חיה אחת של כל העסק, רחבה מספיק לסריקה של דקה ועמוקה מספיק כדי לפעול לפיה. נבנתה כדי שההנהלה תחליט קדימה — איפה הכסף יושב, מה הוא עושה, ומה הצעד הבא.',
    },
    facts: [
      {
        k: 'WHY IT IS HARD',
        v: {
          en: 'A dashboard that is wrong once is never trusted again. The numbers have to reconcile against the source every time, not most of the time.',
          he: 'דשבורד שטועה פעם אחת לא זוכה לאמון שוב. המספרים חייבים להתאים למקור כל פעם, לא ברוב הפעמים.',
        },
      },
      {
        k: 'WHAT I OWN',
        v: {
          en: 'Built it for my own management team, which means I hear about it the same day a number looks wrong.',
          he: 'בניתי את זה לצוות ההנהלה שלי עצמי, כלומר אני שומע על זה באותו יום שמספר נראה לא נכון.',
        },
      },
      {
        k: 'EVIDENCE',
        v: {
          en: 'In use for real financial decisions, not a reporting exercise.',
          he: 'בשימוש להחלטות כספיות אמיתיות, לא תרגיל דוחות.',
        },
      },
    ],
  },
  {
    id: 'magani',
    name: 'Magani',
    meta: 'React · TypeScript · Node · Neon PostgreSQL · Drizzle · Cloudinary',
    status: 'production',
    buckets: ['running', 'all'],
    summary: {
      en: 'An order-management system for a business making handmade appreciation shields. A public gallery and request form, and a password-protected admin side that turns a request into an order.',
      he: 'מערכת ניהול הזמנות לעסק שמייצר מגני הוקרה בעבודת יד. גלריה ציבורית וטופס בקשה, וצד ניהול מוגן בסיסמה שהופך בקשה להזמנה.',
    },
    facts: [
      {
        k: 'WHY IT IS HARD',
        v: {
          en: 'A request is not an order. Keeping those two apart in the schema is what stops a form submission becoming a commitment nobody agreed to.',
          he: 'בקשה אינה הזמנה. ההפרדה בין השניים בסכימה היא מה שמונע ממשלוח טופס להפוך להתחייבות שאף אחד לא אישר.',
        },
      },
      {
        k: 'WHAT I OWN',
        v: {
          en: 'All of it — schema, API, both front ends, image pipeline and the deploy.',
          he: 'הכל — סכימה, API, שני הממשקים, צינור התמונות והפריסה.',
        },
      },
      {
        k: 'EVIDENCE',
        v: {
          en: 'A real client uses it. The seed script refuses to run against a database that already has data.',
          he: 'לקוח אמיתי משתמש בה. סקריפט הזריעה מסרב לרוץ מול מסד שכבר יש בו נתונים.',
        },
      },
    ],
  },
  {
    id: 'manisr',
    name: 'Manisr',
    meta: 'Built at Asaf Media · React · TypeScript · Node · PostgreSQL',
    status: 'live',
    buckets: ['running', 'all'],
    summary: {
      en: 'A food-sharing platform connecting people with extra food to people who need it. Authentication, meal uploads, reservations and live chat.',
      he: 'פלטפורמת שיתוף מזון שמחברת בין מי שיש לו עודפים למי שצריך. אימות, העלאת מנות, הזמנות וצ׳אט חי.',
    },
    facts: [
      {
        k: 'WHY IT IS HARD',
        v: {
          en: 'Chat that survives a reconnect without losing a message or showing it twice.',
          he: 'צ׳אט ששורד ניתוק בלי לאבד הודעה ובלי להציג אותה פעמיים.',
        },
      },
      { k: 'WHAT I OWN', v: { en: 'Full stack — schema, API and UI.', he: 'פול-סטאק — סכימה, API וממשק.' } },
      { k: 'CONTEXT', v: { en: 'Paid work, not a course exercise — built during my internship at Asaf Media, Feb–Apr 2025.', he: 'עבודה בתשלום, לא תרגיל קורס — נבנה במהלך ההתמחות באסף מדיה, פברואר–אפריל 2025.' } },
      { k: 'EVIDENCE', v: { en: 'Live, with a video walkthrough.', he: 'חי, עם סרטון הדגמה.' } },
    ],
    links: {
      live: 'https://manisr.onrender.com',
      code: 'https://github.com/Galomer310/ManisR-frontend',
      video: 'https://youtu.be/xZTdfzBigZU',
    },
  },
  {
    id: 'trip-planner',
    name: 'Trip Planner',
    meta: 'Python · Flask · SQLite · ReportLab',
    status: 'live',
    buckets: ['running', 'all'],
    summary: {
      en: 'An internal planning tool: around 1,100 lines of Flask with authentication, sessions, a SQLite store and PDF generation.',
      he: 'כלי תכנון פנימי: כ-1,100 שורות Flask עם אימות, סשנים, אחסון ב-SQLite ויצירת PDF.',
    },
    facts: [
      {
        k: 'WHY IT IS HARD',
        v: {
          en: 'Generating a document someone will print, from data that is still being edited.',
          he: 'לייצר מסמך שמישהו יידפיס, מתוך נתונים שעדיין נערכים.',
        },
      },
      {
        k: 'WHAT I OWN',
        v: { en: 'All of it. It is the one here that is not JavaScript.', he: 'הכל. זה היחיד כאן שאינו JavaScript.' },
      },
      { k: 'EVIDENCE', v: { en: 'In use. Happy to walk through it.', he: 'בשימוש. אשמח להדגים.' } },
    ],
  },
  {
    id: 'taxi-pricer',
    name: 'Taxi Pricer',
    meta: 'Python · pandas · Excel',
    status: 'live',
    buckets: ['running', 'all'],
    summary: {
      en: 'Automates a monthly pricing rulebook out of a spreadsheet: removes rides that never happened, applies three pricing schemes, and exports an audit-friendly report.',
      he: 'מבצע אוטומציה של ספר כללי תמחור חודשי מתוך גיליון: מסיר נסיעות שלא התרחשו, מחיל שלוש שיטות תמחור, ומייצא דוח שאפשר לבקר.',
    },
    facts: [
      {
        k: 'WHY IT IS HARD',
        v: {
          en: 'Ghost rides — rows that look like work and were not. Finding them is the whole value; the arithmetic is the easy part.',
          he: 'נסיעות רפאים — שורות שנראות כמו עבודה ולא היו. למצוא אותן זה כל הערך; החשבון הוא החלק הקל.',
        },
      },
      {
        k: 'WHAT I OWN',
        v: { en: 'All of it, and the rules file the operator edits themselves.', he: 'הכל, וגם קובץ הכללים שהמפעיל עורך בעצמו.' },
      },
      {
        k: 'EVIDENCE',
        v: { en: 'Runs monthly against real billing data.', he: 'רץ חודשית מול נתוני חיוב אמיתיים.' },
      },
    ],
  },
  {
    id: 'near-me',
    name: 'Near Me',
    meta: 'React · TypeScript · Google Maps API · i18n',
    status: 'live',
    buckets: ['running', 'all'],
    summary: {
      en: 'Find the nearest petrol station, shop or gym anywhere in the world. Mobile-first, multi-language, live map and a business-type selector.',
      he: 'למצוא את תחנת הדלק, החנות או חדר הכושר הקרובים — בכל מקום בעולם. מובייל-פירסט, רב-לשוני, מפה חיה ובורר סוגי עסק.',
    },
    facts: [
      {
        k: 'WHY IT IS HARD',
        v: {
          en: 'Multi-language over a map that is itself localised, on a phone, over a slow connection.',
          he: 'רב-לשוניות מעל מפה שבעצמה מתורגמת, בטלפון, על חיבור איטי.',
        },
      },
      { k: 'WHAT I OWN', v: { en: 'Frontend and the map integration.', he: 'הפרונטאנד ושילוב המפה.' } },
      { k: 'EVIDENCE', v: { en: 'Live on GitHub Pages.', he: 'חי ב-GitHub Pages.' } },
    ],
    links: {
      live: 'https://galomer310.github.io/Near-Me/',
      code: 'https://github.com/Galomer310/Near-Me',
      video: 'https://youtu.be/QBBOSC56Hco',
    },
  },
  {
    id: 'scrapers',
    name: 'Web Scrapers',
    meta: 'Python · Selenium · BeautifulSoup · BrightData · Docker · AWS',
    status: 'internship',
    buckets: ['running', 'all'],
    summary: {
      en: 'Automated scrapers built during a two-month startup internship, with proxy rotation through BrightData, containerised and deployed. The first time my code ran on someone else’s schedule.',
      he: 'סורקי אתרים אוטומטיים שנבנו בהתמחות של חודשיים בסטארטאפ, עם רוטציית פרוקסי דרך BrightData, בקונטיינרים ובפריסה. בפעם הראשונה הקוד שלי רץ לפי לוח זמנים של מישהו אחר.',
    },
    facts: [
      {
        k: 'WHY IT IS HARD',
        v: {
          en: 'Sites that change their markup specifically to stop you. A scraper is a maintenance commitment, not a script.',
          he: 'אתרים שמשנים את ה-markup שלהם במיוחד כדי לעצור אותך. סורק הוא התחייבות לתחזוקה, לא סקריפט.',
        },
      },
      { k: 'WHAT I OWN', v: { en: 'The scrapers, the proxy layer and the container.', he: 'הסורקים, שכבת הפרוקסי והקונטיינר.' } },
      { k: 'EVIDENCE', v: { en: 'Private — happy to walk through it.', he: 'פרטי — אשמח להדגים.' } },
    ],
  },
  {
    id: 'stock-tracker',
    name: 'Stock Tracker',
    meta: 'React · Redux · Node · JWT',
    status: 'live',
    buckets: ['all'],
    summary: {
      en: 'Track the market and manage a watchlist. JWT auth, a REST API, and a UI that stays readable when the numbers move.',
      he: 'מעקב אחרי השוק וניהול רשימת מעקב. אימות JWT, REST API, וממשק שנשאר קריא כשהמספרים זזים.',
    },
    facts: [
      { k: 'WHY IT IS HARD', v: { en: 'Keeping a watchlist in sync across sessions.', he: 'לשמור רשימת מעקב מסונכרנת בין סשנים.' } },
      { k: 'WHAT I OWN', v: { en: 'Full stack.', he: 'פול-סטאק.' } },
      { k: 'EVIDENCE', v: { en: 'Live, with a video walkthrough.', he: 'חי, עם סרטון הדגמה.' } },
    ],
    links: {
      live: 'https://stocktrack-frontend-u3br.onrender.com',
      code: 'https://github.com/Galomer310/StockTrack-frontend',
      video: 'https://www.youtube.com/watch?v=XTYVHmeUiLY',
    },
  },
  {
    id: 'recipe-finder',
    name: 'Recipe Finder',
    meta: 'React · Redux · Spoonacular API',
    status: 'live',
    buckets: ['all'],
    summary: {
      en: 'Enter what is in the fridge, get something to cook. Ingredient search, dietary filters and pagination over a third-party API.',
      he: 'מזינים מה יש במקרר ומקבלים מה לבשל. חיפוש לפי מרכיבים, סינון תזונתי ועימוד מעל API חיצוני.',
    },
    facts: [
      { k: 'WHY IT IS HARD', v: { en: 'Paginating an API that does not paginate well.', he: 'עימוד מעל API שלא באמת תומך בעימוד.' } },
      { k: 'WHAT I OWN', v: { en: 'Full stack.', he: 'פול-סטאק.' } },
      { k: 'EVIDENCE', v: { en: 'Live, with a video walkthrough.', he: 'חי, עם סרטון הדגמה.' } },
    ],
    links: {
      live: 'https://recipe-finder-frontend-wzop.onrender.com',
      code: 'https://github.com/Galomer310/recipe_finder_frontend',
      video: 'https://www.youtube.com/watch?v=iE7zy6EqTCw',
    },
  },
  {
    id: 'story-sharing',
    name: 'Story Sharing',
    meta: 'React · Redux · Node · PostgreSQL',
    status: 'live',
    buckets: ['all'],
    summary: {
      en: 'A social platform for writing, sharing and reading stories.',
      he: 'פלטפורמה חברתית לכתיבה, שיתוף וקריאה של סיפורים.',
    },
    facts: [
      { k: 'WHY IT IS HARD', v: { en: 'Modelling authorship and visibility in the schema.', he: 'מידול בעלות על תוכן ונראות בסכימה.' } },
      { k: 'WHAT I OWN', v: { en: 'Full stack.', he: 'פול-סטאק.' } },
      { k: 'EVIDENCE', v: { en: 'Live, with a video walkthrough.', he: 'חי, עם סרטון הדגמה.' } },
    ],
    links: {
      live: 'https://story-sharing-site.onrender.com',
      code: 'https://github.com/Galomer310/Story_Sharing',
      video: 'https://www.youtube.com/watch?v=n3H7QsP6v_0',
    },
  },
  {
    id: 'earlier',
    name: 'Earlier work',
    meta: 'Trivia Game · Night Out · Currency Converter · Robot Scientist',
    status: 'archive',
    buckets: ['all'],
    summary: {
      en: 'Four smaller builds from the bootcamp period. They are kept because a portfolio that only shows the good years is not a record of anything.',
      he: 'ארבעה פרויקטים קטנים יותר מתקופת הבוטקמפ. הם נשארים כאן כי פורטפוליו שמראה רק את השנים הטובות הוא לא תיעוד של כלום.',
    },
    facts: [
      {
        k: 'WHY THEY ARE HERE',
        v: { en: 'They show the distance travelled, which is the point.', he: 'הם מראים את המרחק שנעשה, וזו הנקודה.' },
      },
      { k: 'WHAT I OWN', v: { en: 'All of them, solo.', he: 'את כולם, לבד.' } },
      { k: 'EVIDENCE', v: { en: 'All still reachable.', he: 'כולם עדיין נגישים.' } },
    ],
  },
];
