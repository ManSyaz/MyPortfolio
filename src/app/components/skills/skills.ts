import { Component } from '@angular/core';
import { SKILL_GROUPS } from '../../data/skills.data';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  readonly groups = SKILL_GROUPS;
}
