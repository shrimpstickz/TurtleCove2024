import { Component, OnInit, ViewChild, ElementRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'tc-gw-stop-viewer',
  templateUrl: './gw-stop-viewer.component.html',
  styleUrls: ['./gw-stop-viewer.component.scss'],
  
})
export class GwStopViewerComponent implements OnInit {
  swiperConfig = {};
  sliderOptions: { initialSlide: number; };
  private initIndex: number;

  @ViewChild('swiper', { static: true }) swiper?: SwiperComponent;


  constructor(private modalController: ModalController, private navParams: NavParams) {}

  ngOnInit() {
    this.initIndex = this.navParams.get('index');
    this.sliderOptions = {
      initialSlide: this.initIndex,
    };
  }

  slideChanged() {
    // Change this from images to 'stops'
    // this.swiper?.getActiveIndex().then(index => this.imgService.viewImage(index));
  }

  close() {
    this.modalController.dismiss();
  }
}