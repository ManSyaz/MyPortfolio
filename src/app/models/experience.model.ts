export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location: string;
  /** One-sentence mandate — what the role was actually for. */
  summary: string;
  /** Remaining detail, shown behind a disclosure. */
  highlights: string[];
  stack: string[];
}
