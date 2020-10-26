import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { AssetsProvider } from '../../providers/assets/assets';

/**
 * Generated class for the NumbersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-numbers',
  templateUrl: 'numbers.html',
})
export class NumbersPage {
  @ViewChild(Slides) slides:Slides;
  numbers: Array<{ label: string, vidThumb: string, vidSrc: string }> = [];
  currentIndex=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, assets:AssetsProvider) {
    this.numbers = assets.getNumbers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NumbersPage');
    var vid:HTMLVideoElement = document.querySelector("#"+this.numbers[this.currentIndex].label);
    vid.onended = ()=>{
      this.slides.slideNext();
    }
  }
  slideChanged() {
    if(this.slides.isEnd()){
      this.slides.lockSwipeToNext(true);
    }
    else{
      this.slides.lockSwipeToNext(false);
    }
    var prevVid:HTMLVideoElement = document.querySelector("#"+this.numbers[this.currentIndex].label);
    prevVid.pause();
    this.currentIndex = this.slides.getActiveIndex();
    var vid:HTMLVideoElement = document.querySelector("#"+this.numbers[this.currentIndex].label);
    vid.play();
    vid.onended = ()=>{
      this.slides.slideNext();
    }
  }
  backToHome() {
    this.navCtrl.getPrevious().data.res='TRUE';
    this.navCtrl.pop();
  }
}
