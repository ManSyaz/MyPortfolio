import { Component, HostListener, computed, input, signal, viewChild } from '@angular/core';
import { ExperienceGalleryItem } from '../../models/experience.model';

interface GalleryCard extends ExperienceGalleryItem {
  primary: ExperienceGalleryItem['images'][number];
  secondary: ExperienceGalleryItem['images'];
}

@Component({
  selector: 'app-experience-gallery',
  imports: [],
  templateUrl: './experience-gallery.html',
  styleUrl: './experience-gallery.css',
})
export class ExperienceGallery {
  readonly items = input.required<ExperienceGalleryItem[]>();

  readonly cards = computed<GalleryCard[]>(() =>
    this.items().map((item) => ({
      ...item,
      primary: item.images[0],
      secondary: item.images.slice(1),
    })),
  );

  private readonly closeBtn = viewChild<HTMLButtonElement>('closeBtn');
  private lastFocused: HTMLElement | null = null;

  private readonly activeCardIndex = signal<number | null>(null);
  readonly activeIndex = signal(0);

  readonly activeCard = computed(() => {
    const index = this.activeCardIndex();
    return index === null ? null : this.cards()[index];
  });

  open(cardIndex: number, imageIndex: number): void {
    this.lastFocused = document.activeElement as HTMLElement | null;
    this.activeCardIndex.set(cardIndex);
    this.activeIndex.set(imageIndex);
    document.body.style.overflow = 'hidden';
    setTimeout(() => this.closeBtn()?.focus());
  }

  close(): void {
    this.activeCardIndex.set(null);
    document.body.style.overflow = '';
    this.lastFocused?.focus();
  }

  next(): void {
    const card = this.activeCard();
    if (!card) return;
    this.activeIndex.set((this.activeIndex() + 1) % card.images.length);
  }

  prev(): void {
    const card = this.activeCard();
    if (!card) return;
    this.activeIndex.set((this.activeIndex() - 1 + card.images.length) % card.images.length);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.activeCard()) this.close();
  }

  @HostListener('document:keydown.arrowRight')
  onArrowRight(): void {
    if (this.activeCard()) this.next();
  }

  @HostListener('document:keydown.arrowLeft')
  onArrowLeft(): void {
    if (this.activeCard()) this.prev();
  }
}
