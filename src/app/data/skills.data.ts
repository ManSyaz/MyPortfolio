import { SkillGroup } from '../models/skill.model';

// Every entry here is backed by a specific line on the resume or a specific
// project. Context labels describe where the skill was actually used —
// deliberately not a fabricated proficiency percentage.
export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: 'Frontend',
    skills: [
      { name: 'Angular', context: 'Production · LGM' },
      { name: 'TypeScript', context: 'Production · LGM' },
      { name: 'JavaScript', context: 'Professional' },
      { name: 'HTML & CSS', context: 'Professional' },
      { name: 'Bootstrap', context: 'Academic · PERMATA' },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'ASP.NET', context: 'Production · LGM' },
      { name: 'C#', context: 'Production · LGM' },
      { name: 'Laravel', context: 'Professional · Media Prima' },
      { name: 'PHP', context: 'Professional · Media Prima' },
    ],
  },
  {
    label: 'Database',
    skills: [
      { name: 'Microsoft SQL Server', context: 'Professional · Media Prima' },
      { name: 'SQL', context: 'Professional' },
      { name: 'MySQL', context: 'Academic' },
    ],
  },
  {
    label: 'Mobile',
    skills: [
      { name: 'Flutter', context: 'Final Year Project' },
      { name: 'Dart', context: 'Final Year Project' },
      { name: 'Firebase', context: 'Final Year Project' },
      { name: 'Java (Android)', context: 'Academic' },
    ],
  },
  {
    label: 'Tools & Platforms',
    skills: [
      { name: 'Git & GitHub', context: 'Professional' },
      { name: 'Power BI', context: 'Professional · FELDA' },
      { name: 'Figma', context: 'Professional' },
      { name: 'Canva', context: 'Professional' },
      { name: 'AI-assisted dev (Copilot, Cursor)', context: 'Professional · Media Prima' },
    ],
  },
  {
    label: 'Delivery & Process',
    skills: [
      { name: 'System Development Lifecycle', context: 'Professional' },
      { name: 'User Acceptance Testing', context: 'Professional · LGM' },
      { name: 'Bug Fixing & Enhancement', context: 'Professional · LGM' },
      { name: 'Technical Documentation', context: 'Professional · Media Prima' },
      { name: 'User Access Management', context: 'Professional · Media Prima' },
    ],
  },
];
