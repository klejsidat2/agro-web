import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    loadComponent: () => import('./home-page/home-page').then((m) => m.HomePage),
  },
  

  // Kategoritë → produktet e kategorisë → detajet e produktit
  {
    path: 'products',
    loadComponent: () =>
      import('./categories-page/categories-page').then((m) => m.CategoriesPage),
  },
  {
    path: 'products/:category',
    loadComponent: () =>
      import('./category-products/category-products').then((m) => m.CategoryProducts),
  },
  {
    path: 'products/:category/:id',
    loadComponent: () =>
      import('./product-detail/product-detail').then((m) => m.ProductDetail),
  },

  {
    path: 'about',
    loadComponent: () => import('./about-page/about-page').then((m) => m.AboutPage),
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact-page/contact-page').then((m) => m.ContactPage),
  },

  { path: '**', redirectTo: 'home' },
];