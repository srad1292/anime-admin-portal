import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeSearchComponent } from './page/anime-search/anime-search.component';
import { adminRoutes } from './admin.routes';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AnimeSearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
  ]
})
export class AdminModule { }
