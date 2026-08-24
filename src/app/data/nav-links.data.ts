import { NavLink } from '../models/nav-link.model';

// Ordered to match the page's document order. #contact isn't built yet —
// that link will resolve once the Contact section lands in Phase 3.
export const NAV_LINKS: NavLink[] = [
  { label: 'About', fragment: 'about' },
  { label: 'Skills', fragment: 'skills' },
  { label: 'Experience', fragment: 'experience' },
  { label: 'Work', fragment: 'projects' },
  { label: 'Contact', fragment: 'contact' },
];
