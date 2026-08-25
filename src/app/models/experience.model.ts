export interface GalleryImage {
  src: string;
  alt: string;
}

export interface ExperienceGalleryItem {
  /** Short label shown as a chip, e.g. "Power BI Dashboard". */
  label: string;
  description: string;
  /** First image is the primary/large one; any further images render as thumbnails. */
  images: GalleryImage[];
}

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
  /** Set once real screenshots exist for this role — renders a visual project gallery beneath it. */
  gallery?: ExperienceGalleryItem[];
}
