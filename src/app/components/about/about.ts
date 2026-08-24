import { Component } from '@angular/core';
import { ABOUT_PARAGRAPHS } from '../../data/about.data';
import { EDUCATION } from '../../data/education.data';
import { PERSONAL_INFO } from '../../data/personal-info.data';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  readonly paragraphs = ABOUT_PARAGRAPHS;
  readonly education = EDUCATION;
  readonly personalInfo = PERSONAL_INFO;
}
