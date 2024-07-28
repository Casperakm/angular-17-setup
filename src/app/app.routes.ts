import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
    { path: '404', loadComponent: () => import('./core/layouts/not-found/not-found.component').then(m => m.NotFoundComponent) },
    { path: 'profile', loadChildren: () => import('./pages/profile-detail/profile.routes').then(m => m.PROFILE_ROUTES) },
    { path: '**', redirectTo: '404' }
];
