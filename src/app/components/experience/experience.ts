import { Component } from '@angular/core';
import { EXPERIENCE } from '../../data/experience.data';
import { ExperienceGallery } from '../experience-gallery/experience-gallery';

@Component({
  selector: 'app-experience',
  imports: [ExperienceGallery],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  readonly entries = EXPERIENCE;
}
