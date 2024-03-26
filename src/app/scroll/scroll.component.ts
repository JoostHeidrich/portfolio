import {
  Component,
  Directive,
  HostListener,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [],
  templateUrl: './scroll.component.html',
  styleUrl: './scroll.component.scss',
})
export class ScrollComponent {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    this.onWindowScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const offset = 400; // Anpassen, ab welchem Scroll-Offset der Button angezeigt werden soll
    if (scrollPosition > offset) {
      this.renderer.setStyle(this.elRef.nativeElement, 'display', 'block');
    } else {
      this.renderer.setStyle(this.elRef.nativeElement, 'display', 'none');
    }
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
