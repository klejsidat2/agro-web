import { Injectable } from '@angular/core';

import { CATEGORIES, PRODUCTS } from './data/catalog.data';

@Injectable({ providedIn: 'root' })
export class Catalog {
  // të gjitha kategoritë
  getCategories() {
    return CATEGORIES;
  }

  // një kategori sipas slug-ut, p.sh. 'plehra'
  getCategory(slug: string) {
    return CATEGORIES.find((c) => c.slug === slug);
  }

  // të gjitha produktet e një kategorie
  getProducts(categorySlug: string) {
    return PRODUCTS.filter((p) => p.category === categorySlug);
  }

  // një produkt i vetëm
  getProduct(categorySlug: string, id: string) {
    return PRODUCTS.find((p) => p.category === categorySlug && p.id === id);
  }
}