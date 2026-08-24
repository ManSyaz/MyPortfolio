import { Achievement } from '../models/achievement.model';

// Source: resume dated Aug 2026, "Leadership & Community Engagement" section.
// Dean's List entries live in the Education facts card (About section) —
// not repeated here to avoid duplicating the same information twice.
export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'President, Photomedia Club',
    organisation: 'UiTM Raub',
    period: '2020 – 2022',
    description:
      'After a year on the club’s organising committee — Exco of Strategic Public Affairs and Program Director for two flagship events — served as President the following session.',
  },
  {
    title: 'Deputy Program Director, Remaja Bijak Siber',
    organisation: 'Information & Network Security coursework · SMK Seksyen 18, Shah Alam',
    description:
      'Planned and ran the programme flow for a cybersecurity-awareness community service session for secondary school students.',
  },
  {
    title: 'Head of Pre-Event Team, Cybersecurity Awareness',
    organisation: 'Ethical, Social & Professional in ICT coursework · Kg Budiman, Meru',
    description: 'Led the brainstorming and pre-event planning for a community cybersecurity-awareness programme.',
  },
  {
    title: 'Emcee, Barakah Burn Challenge',
    organisation: 'JPPT FELDA',
    description:
      'Hosted the event programme and revised the emcee script with the industrial supervisor for clarity and audience engagement.',
  },
];
