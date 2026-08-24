import { Component } from '@angular/core';
import { EXPERIENCE } from '../../data/experience.data';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  readonly entries = EXPERIENCE;
}
