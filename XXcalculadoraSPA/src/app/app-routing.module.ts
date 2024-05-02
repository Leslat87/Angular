import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { HistoryPageComponent } from './shared/pages/history-page/history-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'history',
    component: HistoryPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})

export class AppRoutingModule { }
