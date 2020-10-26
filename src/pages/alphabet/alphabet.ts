import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { viewClassName } from '@angular/compiler';
import { AssetsProvider } from '../../providers/assets/assets';

/**
 * Generated class for the AlphabetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-alphabet',
  templateUrl: 'alphabet.html',
})
export class AlphabetPage {
  @ViewChild(Slides) slides: Slides;
  alphabet: Array<{ label: string, vidThumb: string, vidSrc: string }>;
  currentIndex = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, assets:AssetsProvider) {
    this.alphabet = assets.getAlphabet();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AlphabetPage');
    var vid:HTMLVideoElement = document.querySelector("#"+this.alphabet[this.currentIndex].label);
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
    var prevVid:HTMLVideoElement = document.querySelector("#"+this.alphabet[this.currentIndex].label);
    prevVid.pause();
    this.currentIndex = this.slides.getActiveIndex();
    var vid:HTMLVideoElement = document.querySelector("#"+this.alphabet[this.currentIndex].label);
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
