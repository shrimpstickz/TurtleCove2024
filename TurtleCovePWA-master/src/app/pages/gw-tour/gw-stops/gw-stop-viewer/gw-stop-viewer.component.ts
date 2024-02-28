import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'; //added this to fix ion-slides error
import { Swiper, SwiperModule } from 'swiper/types'; //added this to fix ion-slides error


Swiper.use([Navigation, Pagination, Scrollbar, A11y]); //added this to fix ion-slides error. remove this and above code with commented lines if unneeded
@Component({
  selector: 'tc-gw-stop-viewer',
  templateUrl: './gw-stop-viewer.component.html', 
  styleUrls: ['./gw-stop-viewer.component.scss'],
})
export class GwStopViewerComponent implements OnInit {
  swiperConfig = {};
onSlideChange() {
throw new Error('Method not implemented.');
}
onSwiper($event: any) {
throw new Error('Method not implemented.');
}

  sliderOptions;
  private initIndex: number;

  @ViewChild('slider', { read: ElementRef, static: true }) slider: any;

  constructor(private modalController: ModalController, private navParams: NavParams) { }
 
  ngOnInit() {
    this.initIndex = this.navParams.get('index');

    this.sliderOptions = {
      initialSlide: this.initIndex,
    };
  }

  slideChanged() {
    // Change this from images to 'stops'
    // this.slider.nativeElement.getActiveIndex().then(index => this.imgService.viewImage(index));
  }

  close() {
    this.modalController.dismiss();
  }

}
