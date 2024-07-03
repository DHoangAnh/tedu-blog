import { Routes } from '@angular/router';

export const system: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
  {
    path: 'users',
    loadComponent: () => import('./users/user.component').then(m => m.UserComponent),
    data: {
      title: 'Users'
    }
  }
];

