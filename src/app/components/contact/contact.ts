import { Component } from '@angular/core';
import { PERSONAL_INFO } from '../../data/personal-info.data';

type ContactIcon = 'email' | 'linkedin' | 'github' | 'location';

interface ContactItem {
  label: string;
  value: string;
  href: string | null;
  external: boolean;
  icon: ContactIcon;
}

function toAbsoluteUrl(url: string): string {
  return /^https?:\/\//i.test(url) ? url : `https://${url}`;
}

function stripProtocol(url: string): string {
  return url.replace(/^https?:\/\//i, '').replace(/\/$/, '');
}

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  readonly personalInfo = PERSONAL_INFO;

  readonly contactItems: ContactItem[] = [
    {
      label: 'Email',
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
      external: false,
      icon: 'email',
    },
    ...(PERSONAL_INFO.linkedinUrl
      ? [
          {
            label: 'LinkedIn',
            value: stripProtocol(PERSONAL_INFO.linkedinUrl),
            href: toAbsoluteUrl(PERSONAL_INFO.linkedinUrl),
            external: true,
            icon: 'linkedin' as const,
          },
        ]
      : []),
    {
      label: 'GitHub',
      value: stripProtocol(PERSONAL_INFO.githubUrl),
      href: PERSONAL_INFO.githubUrl,
      external: true,
      icon: 'github',
    },
    {
      label: 'Location',
      value: PERSONAL_INFO.location,
      href: null,
      external: false,
      icon: 'location',
    },
  ];
}
