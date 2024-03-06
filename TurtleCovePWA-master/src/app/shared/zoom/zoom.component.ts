import { ImageViewService } from './../../services/image-view/image-view.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import SwiperCore, { Swiper } from 'swiper';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

SwiperCore.use([Swiper]);

@Component({
  selector: 'tc-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.scss']
})
export class ZoomComponent implements OnInit {

  private initIndex: number;

  public viewEntered = false;

  sliderOptions;

  zoomedIn = false;

  @ViewChild('swiper', { read: ElementRef, static: false }) swiper: ElementRef;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    public imgService: ImageViewService
  ) {}

  ngOnInit() {
    this.initIndex = this.navParams.get('index');

    this.sliderOptions = {
      initialSlide: this.initIndex,
      zoom: {
        maxRatio: 3
      }
    };
  }

  ionViewWillEnter() {
    this.viewEntered = true;
  }

  onSlideChange() {
    this.swiper.nativeElement.getActiveIndex().then(index => this.imgService.viewImage(index));
  }

  zoom(zoomIn: boolean) {
    if (zoomIn === !this.zoomedIn) {
      const zoom = this.swiper.nativeElement.swiper.zoom;
      if (zoomIn) {
        zoom.in();
      } else {
        zoom.out();
      }
      this.zoomedIn = zoomIn;
    }
  }

  close() {
    this.modalController.dismiss();
  }
}
