import { Routes } from '@angular/router';
import { NavigationLayoutComponent } from './core/layouts/navigation-layout/navigation-layout.component';
import { TestComponent1Component } from './test-component1/test-component1.component';
import { TestComponent2Component } from './test-component2/test-component2.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: NavigationLayoutComponent,
        children: [
            {
                path: 'test1',
                component: TestComponent1Component
            },
            {
                path: 'test2',
                component: TestComponent2Component
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'test1'
            },
        ]
    },
    {
        path: '**',
        redirectTo: 'test1'
    }
]