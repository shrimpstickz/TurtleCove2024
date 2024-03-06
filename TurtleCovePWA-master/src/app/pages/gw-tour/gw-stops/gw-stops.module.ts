import { AppComponent } from './../../../app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
/// import  SwiperModule  from 'swiper'; //addeed this
import { IonicModule } from '@ionic/angular';
//import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { GwStopsPage } from './gw-stops.page';
import { GwStopComponent } from './gw-stop/gw-stop.component';
//import { GwStopViewerComponent } from './gw-stop-viewer/gw-stop-viewer.component';

const routes: Routes = [
  {
    path: '',
    component: GwStopsPage
  }
];

@NgModule({
  imports: [
    // NgxUsefulSwiperModule, //added this
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GwStopsPage, GwStopComponent], //removed  GwStopViewerComponent
  
})
export class GwStopsPageModule {}
