import { Component, HostListener, inject, signal } from '@angular/core';
import { ThemeService } from '../../core/theme.service';
import { NAV_LINKS } from '../../data/nav-links.data';
import { PERSONAL_INFO } from '../../data/personal-info.data';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private readonly themeService = inject(ThemeService);

  readonly navLinks = NAV_LINKS;
  readonly personalInfo = PERSONAL_INFO;
  readonly theme = this.themeService.theme;
  readonly isMenuOpen = signal(false);
  readonly isScrolled = signal(false);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 8);
  }

  toggleTheme(): void {
    this.themeService.toggle();
  }

  toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
