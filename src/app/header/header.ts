import { Component, effect, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { SITE } from '../site.config';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, TranslatePipe, LanguageSwitcherComponent],
  templateUrl: './header.html',
  styleUrl: './header.css',
  host: {
    '(window:scroll)': 'onScroll()',
    '(document:keydown.escape)': 'close()',
  },
})
export class Header {
  site = SITE;

  links = [
    { path: '/home', key: 'NAV.HOME' },
    { path: '/products', key: 'NAV.PRODUCTS' },
    { path: '/about', key: 'NAV.ABOUT' },
    { path: '/contact', key: 'NAV.CONTACT' },
  ];

  open = signal(false); // menuja e hapur / e mbyllur
  scrolled = signal(false); // true kur faqja ka zbritur pak poshtë

  constructor() {
    // kur menuja është e hapur, faqja pas saj nuk lëviz
    effect(() => {
      document.body.style.overflow = this.open() ? 'hidden' : '';
    });
  }

  toggle() {
    this.open.set(!this.open());
  }

  close() {
    this.open.set(false);
  }

  onScroll() {
    this.scrolled.set(window.scrollY > 10);
  }
}