import { Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/auth.guard';

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
      title: 'Người dùng',
      requiredPolicy: 'Permissions.Users.View',
    },
    canActivate: [AuthGuard],
  },
  {
    path: 'roles',
    loadComponent: () => import('./roles/role.component').then(m => m.RoleComponent),
    data: {
      title: 'Quyền',
      requiredPolicy: 'Permissions.Roles.View',
    },
    canActivate: [AuthGuard],
  }
];

