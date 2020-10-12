import { Routes } from '@angular/router';
import { AnimeSearchComponent } from './page/anime-search/anime-search.component';

export const adminRoutes: Routes = [
    {
        path: 'search',
        component: AnimeSearchComponent,
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'search',
    },
    {
        path: '**',
        redirectTo: 'search',
    }
]