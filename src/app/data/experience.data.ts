import { ExperienceEntry } from '../models/experience.model';

// Source: resume dated Aug 2026, listed newest first (matches the resume order).
export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: 'Lembaga Getah Malaysia (LGM)',
    role: 'Pegawai Teknologi Maklumat (System Developer)',
    period: 'Apr 2026 – Present',
    location: 'Kuala Lumpur',
    summary:
      'Developing and maintaining MSNR Trace 2.0, a rubber supply-chain traceability system, for the agency’s inspectorate unit.',
    highlights: [
      'Investigated and fixed defects across multiple MSNR Trace 2.0 modules to improve functionality, stability, and user experience.',
      'Prepared UAT documentation — test scenarios, test cases, and expected results — and supported system testing activities.',
      'Collaborated with Unit Inspektorat (UIP) to analyse requirements, verify functionality, and confirm new features were ready for release.',
      'Participated in testing, debugging, and deployment support to maintain application quality and reliability.',
    ],
    stack: ['Angular', 'ASP.NET', 'C#', 'SQL Server'],
  },
  {
    company: 'Media Prima Berhad',
    role: 'IT Protégé (System Developer)',
    period: 'Jul 2025 – Apr 2026',
    location: 'Kuala Lumpur',
    summary:
      'Built and documented the Studio & Meeting Room Booking Dashboard, improving data response time through AJAX and SQL query optimisation.',
    highlights: [
      'Prepared technical documentation covering system architecture, UI structure, and data workflows using data flow diagrams.',
      'Supported internal users with account creation, password resets, and access troubleshooting in the CS Deals System.',
      'Used AI-assisted tools (ChatGPT, GitHub Copilot, Cursor) for development support, code review, and documentation efficiency.',
    ],
    stack: ['Laravel', 'PHP', 'SQL Server', 'AJAX'],
  },
  {
    company: 'Federal Land Development Authority (FELDA)',
    role: 'Data & System Development Intern',
    period: 'Mar 2025 – Jun 2025',
    location: 'Kuala Lumpur',
    summary:
      'Built interactive Power BI dashboards and enhanced internal Laravel systems for performance monitoring and reporting.',
    highlights: [
      'Improved data workflows and reliability across existing Laravel and SQL systems.',
      'Assisted with system testing and documentation to support ongoing maintenance and scalability.',
    ],
    stack: ['Power BI', 'Laravel', 'SQL'],
    gallery: [
      {
        label: 'Power BI Dashboard',
        description:
          'Interactive Power BI dashboard built for FELDA’s Jabatan Pembangunan Ekonomi Komuniti — tracking PPP project status, GMN/SKF facility management, and usahawan (entrepreneur) programme performance.',
        images: [
          {
            src: '/images/felda/power-bi-dashboard.jpg',
            alt: 'Power BI monthly dashboard showing PPP project counts, GMN/SKF status, and usahawan programme metrics',
          },
        ],
      },
      {
        label: 'System Development',
        description:
          'IMS PPP (Sistem Pengurusan Maklumat Program Pembangunan Peneroka) — from the applicant-facing application form through to the approvals workflow reviewed by the jawatankuasa pelulus.',
        images: [
          {
            src: '/images/felda/system-login.jpg',
            alt: 'IMS PPP login screen',
          },
          {
            src: '/images/felda/system-borang-permohonan.jpg',
            alt: 'IMS PPP application form, Borang Permohonan',
          },
          {
            src: '/images/felda/system-borang-diluluskan.jpg',
            alt: 'IMS PPP list of approved applications',
          },
        ],
      },
    ],
  },
  {
    company: 'Berkat Global Services',
    role: 'Web Developer Intern',
    period: 'Sep 2022 – Feb 2023',
    location: 'Kuala Lumpur',
    summary: 'Designed and built the company’s public website from scratch using HTML, CSS, and JavaScript.',
    highlights: [
      'Focused on responsive layout, accessibility, and user-friendly navigation across every page.',
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
];
