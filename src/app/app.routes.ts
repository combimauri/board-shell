import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component'),
  },
  {
    path: 'feature-one',
    loadComponent: () =>
      import('./feature-one/feature-one.component'),
  },
  {
    path: 'feature-two',
    loadComponent: () =>
      import('./feature-two/feature-two.component'),
  },
  {
    path: 'todos',
    loadComponent: () => loadRemoteModule('mfe1', './AppComponent').then((m) => m.AppComponent),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
