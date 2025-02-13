import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'hero',
    loadComponent: () => import('./hero-list/hero-list.component').then(m => m.HeroListComponent)
  }
];
