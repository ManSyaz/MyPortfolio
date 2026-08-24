export interface Skill {
  name: string;
  /** Honest usage context, e.g. "Production · LGM" — never a fabricated proficiency score. */
  context: string;
}

export interface SkillGroup {
  label: string;
  skills: Skill[];
}
