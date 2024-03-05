import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import SwiperCore, { Swiper } from 'swiper';
import { SwiperModule } from 'swiper/angular';

SwiperCore.use([Swiper]);

@Component({
  selector: 'tc-gw-stop-viewer',
  templateUrl: './gw-stop-viewer.component.html',
  styleUrls: ['./gw-stop-viewer.component.scss'],
})
export class GwStopViewerComponent implements OnInit {
  swiperConfig: any = {};
  private initIndex: number;

  @ViewChild('swiper', { static: true }) swiper?: ElementRef;

  constructor(private modalController: ModalController, private navParams: NavParams) {}

  ngOnInit() {
    this.initIndex = this.navParams.get('index');
    this.swiperConfig = {
      initialSlide: this.initIndex,
      observer: true,
      observeParents: true,
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