export interface PersonalInfo {
  fullName: string;
  displayName: string;
  role: string;
  roleLong: string;
  currentCompany: string;
  location: string;
  email: string;
  phone: string;
  githubUrl: string;
  linkedinUrl: string | null;
  availability: string;
  resumeUrl: string;
  /** Set once a real photo is supplied — the About section renders it when present, nothing when not. */
  photoUrl?: string;
  heroHeadline: string;
  heroSubline: string;
  heroStack: string[];
}
