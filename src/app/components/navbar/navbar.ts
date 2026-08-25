import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  effect,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { CvPreviewService } from '../../core/cv-preview.service';
import { ThemeService } from '../../core/theme.service';
import { NAV_LINKS } from '../../data/nav-links.data';
import { PERSONAL_INFO } from '../../data/personal-info.data';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements AfterViewInit, OnDestroy {
  private readonly themeService = inject(ThemeService);
  private readonly cvPreview = inject(CvPreviewService);
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private sectionObserver?: IntersectionObserver;

  readonly navLinks = NAV_LINKS;
  readonly personalInfo = PERSONAL_INFO;
  readonly theme = this.themeService.theme;
  readonly isMenuOpen = signal(false);
  readonly isScrolled = signal(false);
  readonly activeFragment = signal<string | null>(null);

  private readonly menuToggleBtn = viewChild<HTMLButtonElement>('menuToggleBtn');

  constructor() {
    // Move focus into the mobile panel once it renders (the panel is behind
    // @if, so it isn't in the DOM yet during this same tick — defer a beat).
    effect(() => {
      if (this.isMenuOpen()) {
        setTimeout(() => {
          this.elementRef.nativeElement.querySelector<HTMLAnchorElement>('#mobile-nav a')?.focus();
        });
      }
    });
  }

  ngAfterViewInit(): void {
    if (typeof IntersectionObserver !== 'function') {
      return;
    }

    const sections = this.navLinks
      .map((link) => document.getElementById(link.fragment))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) {
      return;
    }

    this.sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          this.activeFragment.set(visible.target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );

    sections.forEach((section) => this.sectionObserver!.observe(section));
  }

  ngOnDestroy(): void {
    this.sectionObserver?.disconnect();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 8);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.isMenuOpen()) {
      this.isMenuOpen.set(false);
      this.menuToggleBtn()?.focus();
    }
  }

  toggleTheme(): void {
    this.themeService.toggle();
  }

  openCvPreview(): void {
    this.cvPreview.open();
    this.closeMenu();
  }

  toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
