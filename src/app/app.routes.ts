import { Routes } from '@angular/router';
import { NavigationLayoutComponent } from './core/layouts/navigation-layout/navigation-layout.component';

export const appRoutes: Routes = [
    {
        path: 'anime',
        component: NavigationLayoutComponent,
        loadChildren: () => import('./feature-modules/admin/admin.module').then((m) => m.AdminModule)
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'anime'
    },
    {
        path: '**',
        redirectTo: 'anime'
    }
]