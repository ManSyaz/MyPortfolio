import { Component } from '@angular/core';
import { PERSONAL_INFO } from '../../data/personal-info.data';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  readonly personalInfo = PERSONAL_INFO;
}
