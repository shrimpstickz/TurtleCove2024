import { Component, OnInit, ViewChild, NgModule, CUSTOM_ELEMENTS_SCHEMA, ElementRef } from '@angular/core';
import { ModalController, NavParams, IonicModule } from '@ionic/angular';
import SwiperCore, { Swiper } from 'swiper';
import SwiperComponent from 'swiper';


// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

SwiperCore.use([Swiper]);

@Component({
  selector: 'tc-gw-stop-viewer',
  templateUrl: './gw-stop-viewer.component.html',
  styleUrls: ['./gw-stop-viewer.component.scss'],
})
export class GwStopViewerComponent implements OnInit {
  @ViewChild('swiper', { static: true }) swiper: SwiperComponent;

  swiperConfig: any = {
    initialSlide: 0,
    observer: true,
    observeParents: true,
  };

  private initIndex: number;

  constructor(private modalController: ModalController, private navParams: NavParams) {}

  ngOnInit() {
    this.initIndex = this.navParams.get('index');
    this.swiperConfig = {
      initialSlide: this.initIndex,
      observer: true,
      observeParents: true,
    };
  }

  onSlideChange() {
    // Change this from images to 'stops'
    //this.swiper?.getActiveIndex().then(index => this.viewStops(index));
  }
 

  close() {
    this.modalController.dismiss();
  }
}