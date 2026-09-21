/**
 * One shape for everything the board can list.
 *
 * Projects, technologies and the four lines of biography are different content
 * but the same object: a name, a mono meta line, a status, a summary and three
 * facts. That is what lets one Board component render whatever the prompt asks
 * for, instead of three components that drift apart.
 */

export type Lang = 'en' | 'he';

export interface Bilingual {
  en: string;
  he: string;
}

/** Who depends on this today. Also decides the colour of the dot. */
export type Status =
  | 'production'   // running for someone who is not me
  | 'live'         // deployed and reachable
  | 'internship'   // real work, private code
  | 'daily'        // a technology I use constantly
  | 'often'        // a technology I reach for regularly
  | 'context'      // a line of biography
  | 'archive';     // early work, kept on purpose

/** Which command lists this entry. An entry may appear under more than one. */
export type Bucket = 'running' | 'all' | 'stack' | 'whoami';

export interface Fact {
  /**
   * The field name, in mono. Deliberately NOT translated: it reads as a label
   * on a form, and three-word English labels are shorter and steadier than
   * their Hebrew equivalents in a column that has to stay narrow.
   */
  k: string;
  v: Bilingual;
}

export interface Entry {
  id: string;
  name: string;
  /** Stack or context line, mono. Not translated — these are proper nouns. */
  meta: string;
  status: Status;
  buckets: Bucket[];
  summary: Bilingual;
  /**
   * Exactly three, in this order: why it was hard, what I owned, what the
   * evidence is. "Why it was hard" comes first on purpose — anyone can list
   * React; not everyone can say why a chat that survives a reconnect is a
   * problem worth solving.
   */
  facts: Fact[];
  links?: { live?: string; code?: string; video?: string };
}

export const STATUS_LABEL: Record<Status, Bilingual> = {
  production: { en: 'IN PRODUCTION', he: 'בייצור' },
  live: { en: 'LIVE', he: 'חי' },
  internship: { en: 'INTERNSHIP', he: 'התמחות' },
  daily: { en: 'DAILY', he: 'יומיומי' },
  often: { en: 'OFTEN', he: 'תדיר' },
  context: { en: 'CONTEXT', he: 'רקע' },
  archive: { en: 'ARCHIVE', he: 'ארכיון' },
};

/** Statuses that mean "someone can open this right now". Drives the green dot. */
const REACHABLE: Status[] = ['production', 'live', 'daily', 'often', 'context'];
export const isReachable = (s: Status): boolean => REACHABLE.includes(s);
