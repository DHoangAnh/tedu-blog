import { Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/auth.guard';

export const content: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full',
  },
  {
    path: 'posts',
    loadComponent: () => import('./posts/post.component').then(m => m.PostComponent),
    data: {
      title: 'Bài viết',
      requiredPolicy: 'Permissions.Posts.View',
    },
    canActivate: [AuthGuard],
  }
];

