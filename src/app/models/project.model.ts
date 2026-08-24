export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  /** e.g. "Professional · Lembaga Getah Malaysia", "Final Year Project" */
  context: string;
  tier: 'featured' | 'secondary';
  period: string;
  role: string;
  stack: string[];
  features: string[];
  /** Only present when a real, working repository exists — never fabricated. */
  links?: ProjectLink[];
  /** True when the source code can't be shown (proprietary/internal system). */
  confidential?: boolean;
  /** Chip text shown when confidential, e.g. "Confidential · LGM", "Confidential · Internal Project". */
  confidentialLabel?: string;
  /** Explains the confidentiality — why there's no repo, not what the system contains. */
  confidentialNote?: string;
  /** Set once a real screenshot exists. Card renders text-only while this is undefined. */
  screenshot?: ProjectImage;
}
