import { Component, HostListener, effect, inject, viewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CvPreviewService } from '../../core/cv-preview.service';
import { PERSONAL_INFO } from '../../data/personal-info.data';

@Component({
  selector: 'app-cv-preview-modal',
  imports: [],
  templateUrl: './cv-preview-modal.html',
  styleUrl: './cv-preview-modal.css',
})
export class CvPreviewModal {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly cvPreview = inject(CvPreviewService);

  private readonly closeBtn = viewChild<HTMLButtonElement>('closeBtn');
  private lastFocused: HTMLElement | null = null;

  readonly isOpen = this.cvPreview.isOpen;
  readonly personalInfo = PERSONAL_INFO;
  readonly downloadName = 'Muhammad-Aiman-Syazwan-Resume.pdf';
  readonly previewUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(PERSONAL_INFO.resumeUrl);

  constructor() {
    // Lock background scroll and move focus into the dialog while it's open;
    // restore both when it closes, same pattern as the mobile nav panel.
    effect(() => {
      if (this.isOpen()) {
        this.lastFocused = document.activeElement as HTMLElement | null;
        document.body.style.overflow = 'hidden';
        setTimeout(() => this.closeBtn()?.focus());
      } else {
        document.body.style.overflow = '';
        this.lastFocused?.focus();
      }
    });
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.isOpen()) {
      this.close();
    }
  }

  close(): void {
    this.cvPreview.close();
  }
}
