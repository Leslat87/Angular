import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { FooterPageComponent } from './pages/footer-page/footer-page.component';
import { HeaderPageComponent } from './pages/header-page/header-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    FooterPageComponent,
    HeaderPageComponent,
    HistoryPageComponent,
    HomePageComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    FooterPageComponent,
    HeaderPageComponent,
    HistoryPageComponent,
    HomePageComponent,
    SidebarComponent,
  ],
})
export class SharedModule { }
