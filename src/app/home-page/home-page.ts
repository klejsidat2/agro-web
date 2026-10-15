import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LocalizePipe } from '../localize.pipe';
import { Catalog } from '../catalog';
import { SITE } from '../site.config';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, TranslatePipe, LocalizePipe],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  private catalog = inject(Catalog);
  site = SITE;

  categories = this.catalog.getCategories();

  heroOk = signal(true);
  logoOk = signal(true);

  // tekstet e shërbimeve janë te i18n: HOME.S1_TITLE, HOME.S1_TEXT, etj.
  services = [
    { key: 'S1', icon: '🔍' },
    { key: 'S2', icon: '📦' },
    { key: 'S3', icon: '🌱' },
  ];
}