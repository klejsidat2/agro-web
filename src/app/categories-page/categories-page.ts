import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import { Catalog } from '../catalog';
import { LocalizePipe } from '../localize.pipe';

@Component({
  selector: 'app-categories-page',
  imports: [RouterLink, TranslatePipe, LocalizePipe],
  templateUrl: './categories-page.html',
  styleUrl: './categories-page.css',
})
export class CategoriesPage {
  private catalog = inject(Catalog);
  categories = this.catalog.getCategories();
}