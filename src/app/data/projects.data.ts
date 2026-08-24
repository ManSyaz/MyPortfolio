import { Project } from '../models/project.model';

// Sourced from the resume and github.com/ManSyaz. No screenshots, live demo
// links, or features are invented — where a repo doesn't exist or a system
// is internal/confidential, `links` is omitted and `confidential` is set
// instead of guessing. MSNR Trace 2.0 and the Media Prima dashboard have real
// screenshots coming later — `screenshot` stays unset until then; the card
// component already knows how to render it once it's added.
export const PROJECTS: Project[] = [
  {
    slug: 'msnr-trace-2',
    name: 'MSNR Trace 2.0',
    tagline: 'External-facing traceability system for Malaysia’s natural rubber supply chain, connecting LGM’s inspectorate unit with industry stakeholders.',
    context: 'Professional · Lembaga Getah Malaysia',
    tier: 'featured',
    period: 'Apr 2026 – Present',
    role: 'System Developer — feature development, defect resolution, UAT documentation',
    stack: ['Angular', 'ASP.NET', 'C#', 'SQL Server'],
    features: [
      'New features and system improvements implemented against business requirements',
      'Investigated and resolved defects across multiple modules to improve stability and usability',
      'Authored UAT test scenarios, test cases, and expected results',
      'Worked directly with Unit Inspektorat (UIP) to verify functionality before release',
    ],
    confidential: true,
    confidentialLabel: 'Confidential · LGM',
    confidentialNote:
      'MSNR Trace 2.0 is used by both LGM staff and external industry stakeholders. As proprietary government software, its source code isn’t published here — the contribution above describes my actual work on it.',
    // screenshot: set once the redacted preview is ready.
  },
  {
    slug: 'studio-meeting-room-booking-dashboard',
    name: 'Studio & Meeting Room Booking Dashboard',
    tagline: 'Internal dashboard that replaced a manual process for scheduling studios and meeting rooms across a national media group.',
    context: 'Professional · Media Prima Berhad',
    tier: 'featured',
    period: 'Jul 2025 – Apr 2026',
    role: 'Developer — booking features, performance optimisation, technical documentation',
    stack: ['Laravel', 'PHP', 'Microsoft SQL Server', 'AJAX'],
    features: [
      'Built booking functionality for studios and meeting rooms',
      'Improved data response time through AJAX-based partial loading and SQL query optimisation',
      'Authored system architecture and data-flow documentation used for team onboarding',
      'Supported user access management for the related CS Deals System',
    ],
    confidential: true,
    confidentialLabel: 'Confidential · Internal Project',
    confidentialNote:
      'Built for internal use within Media Prima. As internal company software, its source code isn’t published here — the contribution above describes my actual work on it.',
    // screenshot: set once the redacted preview is ready.
  },
  {
    slug: 'kafajr',
    name: 'KafaJr — Academic Progress Tracking',
    tagline: 'Mobile app that lets students, teachers, and parents at a KAFA religious school follow academic performance and attendance.',
    context: 'Final Year Project',
    tier: 'featured',
    period: 'Final Year Project',
    role: 'Sole developer — requirements, data model, UI, and testing',
    stack: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore'],
    features: [
      'Role-based access for students, teachers, and parents',
      'Exam result entry and academic progress tracking',
      'Attendance records tied to each student profile',
      'Secure parent-to-child account linking',
    ],
    links: [{ label: 'View on GitHub', url: 'https://github.com/ManSyaz/KafaJr1' }],
  },
  {
    slug: 'jilid-enam',
    name: 'Jilid Enam — Web & Mobile',
    tagline: 'Paired web and Android system for order management, QR-based payment notification, and inventory tracking.',
    context: 'Client Project',
    tier: 'secondary',
    period: '2024',
    role: 'Developer',
    stack: ['Laravel', 'MySQL', 'Java', 'Firebase'],
    features: [
      'Order management workflow shared across web and mobile',
      'QR-code based payment notifications',
      'Inventory tracking backed by Firebase',
    ],
    links: [
      { label: 'Web repo', url: 'https://github.com/ManSyaz/JilidEnam-Web' },
      { label: 'Mobile repo', url: 'https://github.com/ManSyaz/JilidEnam-Mobile' },
    ],
  },
  {
    slug: 'felda-power-bi-dashboards',
    name: 'FELDA Power BI Dashboards',
    tagline: 'Interactive dashboards for performance monitoring, alongside enhancements to internal Laravel/SQL systems.',
    context: 'Internship · FELDA',
    tier: 'secondary',
    period: 'Mar 2025 – Jun 2025',
    role: 'Data & System Development Intern',
    stack: ['Power BI', 'Laravel', 'SQL'],
    features: [
      'Built dashboards for data-driven performance monitoring',
      'Enhanced internal Laravel and SQL systems for reliability',
    ],
    confidential: true,
    confidentialLabel: 'Confidential · FELDA',
    confidentialNote: 'Built on internal FELDA data — not shown here.',
  },
  {
    slug: 'global-renew',
    name: 'Global Renew',
    tagline: 'Six-page company website for a takaful services provider, built during my first internship.',
    context: 'Intern Project · Berkat Global Services',
    tier: 'secondary',
    period: 'Sep 2022 – Feb 2023',
    role: 'Web Developer Intern',
    stack: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Designed and built a responsive multi-page site from scratch',
      'Focused on accessibility and user-friendly navigation',
    ],
    links: [{ label: 'View on GitHub', url: 'https://github.com/ManSyaz/Global-Renew' }],
  },
  {
    slug: 'permata',
    name: 'PERMATA',
    tagline: 'Student activity proposal system for UiTM Raub, with separate student and admin dashboards.',
    context: 'Academic · UiTM Raub',
    tier: 'secondary',
    period: '2021 – 2022',
    role: 'Developer (coursework project)',
    stack: ['PHP', 'MySQL', 'Bootstrap'],
    features: [
      'Student-facing proposal submission flow',
      'Admin dashboard for reviewing and managing applications',
    ],
    links: [{ label: 'View on GitHub', url: 'https://github.com/ManSyaz/PERMATA' }],
  },
];
