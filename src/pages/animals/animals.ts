import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides, Platform } from 'ionic-angular';
import { MediaObject, Media } from '@ionic-native/media';
import { AssetsProvider } from '../../providers/assets/assets';
import { SmartAudioProvider } from '../../providers/smart-audio/smart-audio';
/**
 * Generated class for the AnimalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-animals',
  templateUrl: 'animals.html',
})
export class AnimalsPage {
  @ViewChild(Slides) slides:Slides;
  mediaObject: MediaObject;
  animals: Array<{label:string, imgSrc:string, audioSrc:string, color:string}>
  constructor(public navCtrl: NavController, public navParams: NavParams, private media:Media, 
    assets:AssetsProvider, private platform:Platform, private smartAudio:SmartAudioProvider) {
    this.animals=assets.getAnimals();
  }
  
  cardClick(type){
    var element = document.querySelector("#"+type.label);
    element.classList.add('animated', 'pulse');
    //play audio
    this.playAudio(type.audioSrc);
    var event=()=>{
      element.classList.remove('animated','pulse');
      element.removeEventListener('animationend', event);
    }
    element.addEventListener('animationend', event);
  }
  playAudio(src){
    var systemLocation="";
      if(this.platform.is('android')){
        systemLocation="/android_asset/www/";
      }
    //play audio here
    if (this.mediaObject) {
      this.mediaObject.release();
    }
    this.mediaObject = this.media.create(systemLocation+src);
    this.mediaObject.setVolume(1);
    this.smartAudio.setBgVolume(0);
    this.mediaObject.play();
    this.mediaObject.onStatusUpdate.subscribe(status => {
      if (status === this.media.MEDIA_STOPPED) {
        this.smartAudio.setBgVolume(0.1);
      }
    })
  }
  ionViewDidLeave() {
    if (this.mediaObject) {
      this.mediaObject.release();
    }
  }
  backToHome(){
    this.navCtrl.pop();
  }
}
