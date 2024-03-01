import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'comprar',
    loadChildren: () =>
      import('./pages/comprar/comprar.routes').then((m) => m.routes),
    title: 'Comprar - YourHome',
  },
  {
    path: 'alquilar',
    loadChildren: () =>
      import('./pages/alquilar/alquilar.routes').then((m) => m.routes),
    title: 'Alquilar - YourHome',
  },
];
