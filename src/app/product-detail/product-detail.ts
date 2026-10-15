import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import { Catalog } from '../catalog';
import { LocalizePipe } from '../localize.pipe';
import { SITE } from '../site.config';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink, TranslatePipe, LocalizePipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  private catalog = inject(Catalog);
  site = SITE;

  category = input.required<string>();
  id = input.required<string>();

  categoryInfo = computed(() => this.catalog.getCategory(this.category()));
  product = computed(() => this.catalog.getProduct(this.category(), this.id()));

  related = computed(() =>
    this.catalog
      .getProducts(this.category())
      .filter((p) => p.id !== this.id())
      .slice(0, 3),
  );

  // teksti i mesazhit vjen i përkthyer nga HTML-ja
  whatsapp(text: string) {
    return `https://wa.me/${this.site.whatsapp}?text=${encodeURIComponent(text)}`;
  }
}