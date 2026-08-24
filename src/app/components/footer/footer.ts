import { Component } from '@angular/core';
import { PERSONAL_INFO } from '../../data/personal-info.data';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  readonly personalInfo = PERSONAL_INFO;
  readonly year = new Date().getFullYear();
  readonly linkedinHref = PERSONAL_INFO.linkedinUrl
    ? /^https?:\/\//i.test(PERSONAL_INFO.linkedinUrl)
      ? PERSONAL_INFO.linkedinUrl
      : `https://${PERSONAL_INFO.linkedinUrl}`
    : null;
}
