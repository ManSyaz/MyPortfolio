import { PersonalInfo } from '../models/personal-info.model';

// Source: resume dated Aug 2026. LinkedIn URL not listed on the resume — add
// it here once you have one, or the header/footer links quietly omit it.
export const PERSONAL_INFO: PersonalInfo = {
  fullName: 'Muhammad Aiman Syazwan Bin Mohd Zalizaman',
  displayName: 'Aiman Syazwan',
  role: 'System Developer',
  roleLong: 'Pegawai Teknologi Maklumat (System Developer)',
  currentCompany: 'Lembaga Getah Malaysia (LGM)',
  location: 'Kuala Lumpur, Malaysia',
  email: 'aimansyazwan300@gmail.com',
  phone: '+60 19-608 1247',
  githubUrl: 'https://github.com/ManSyaz',
  linkedinUrl: 'www.linkedin.com/in/aiman-syazwan-565b32243',
  availability: 'Open to relocation within Malaysia',

  resumeUrl: '/documents/Muhammad-Aiman-Syazwan-Resume.pdf',
  // photoUrl: set once a real profile photo is supplied.

  heroHeadline: 'I build and maintain the web systems a federal agency runs on.',
  heroSubline:
    'Currently a Pegawai Teknologi Maklumat at Lembaga Getah Malaysia, developing MSNR Trace 2.0 in Angular and ASP.NET — shipping features, fixing defects, and writing the UAT documentation that gets it into production.',
  heroStack: ['Angular', 'ASP.NET', 'C#', 'Laravel', 'SQL'],
};
