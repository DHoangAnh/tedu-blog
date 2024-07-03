import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./views/auth/auth').then((m) => m.auth)
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard').then((m) => m.dashboard)
      },
      {
        path: 'system',
        loadChildren: () => import('./views/system/system').then((m) => m.system)
      },
      {
        path: 'content',
        loadChildren: () => import('./views/content/content').then((m) => m.content)
      },
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];
