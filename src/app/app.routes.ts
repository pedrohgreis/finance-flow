import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'signup',
    loadComponent: () =>
      import('./components/auth/signup/signup.component').then(
        (m) => m.SignupComponent,
      ),
  },
  {
    path: 'signin',
    loadComponent: () =>
      import('./components/auth/signin/signin').then((m) => m.SigninComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./components/main/dashboard/dashboard').then(
        (m) => m.DashboardComponent,
      ),
  },
  { path: '**', redirectTo: 'dashboard' },
];
