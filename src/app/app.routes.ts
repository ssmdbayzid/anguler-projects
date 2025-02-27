import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'products',
    loadComponent: () =>import('./pages/products/products.component').then(m => m.ProductsComponent)
  },
  {
    path: 'product-details/:id',
    loadComponent: ()=> import('./pages/product-details/product-details.component').then(m=>m.ProductDetailsComponent),
    data: {preloadAfter: ['/']}
  },
  {
    path: 'hero',
    loadComponent: () => import('./hero-list/hero-list.component').then(m => m.HeroListComponent)
  }
];
