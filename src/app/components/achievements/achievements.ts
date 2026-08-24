import { Component } from '@angular/core';
import { ACHIEVEMENTS } from '../../data/achievements.data';

@Component({
  selector: 'app-achievements',
  imports: [],
  templateUrl: './achievements.html',
  styleUrl: './achievements.css',
})
export class Achievements {
  readonly achievements = ACHIEVEMENTS;
}
