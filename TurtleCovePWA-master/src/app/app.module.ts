import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; 
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage-angular';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TabsPage } from './pages/tabs/tabs.page';
import { Swiper }  from 'swiper';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { GwStopViewerComponent } from './pages/gw-tour/gw-stops/gw-stop-viewer/gw-stop-viewer.component';
import { ZoomComponent } from './shared/zoom/zoom.component';
// register Swiper custom elements
register();


@NgModule({
  declarations: [AppComponent, TabsPage, GwStopViewerComponent, ZoomComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
  imports: [

    BrowserModule,
    ZoomComponent,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: true }),
    SharedModule,
    HttpClientModule
   // NgxUsefulSwiperModule
   
  ],

  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}