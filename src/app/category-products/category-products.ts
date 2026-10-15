import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import { Catalog } from '../catalog';
import { LocalizePipe } from '../localize.pipe';

@Component({
  selector: 'app-category-products',
  imports: [RouterLink, TranslatePipe, LocalizePipe],
  templateUrl: './category-products.html',
  styleUrl: './category-products.css',
})
export class CategoryProducts {
  private catalog = inject(Catalog);

  category = input.required<string>();

  info = computed(() => this.catalog.getCategory(this.category()));
  products = computed(() => this.catalog.getProducts(this.category()));
}