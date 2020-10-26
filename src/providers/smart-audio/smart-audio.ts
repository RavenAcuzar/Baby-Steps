import { Injectable } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio';
import { Media, MediaObject } from '@ionic-native/media';
import { Platform } from 'ionic-angular';

/*
  Generated class for the SmartAudioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SmartAudioProvider {
  mediaObject: MediaObject
  constructor(private nativeAudio: NativeAudio, private media: Media, private platform:Platform) {
    console.log('Hello SmartAudioProvider Provider');
  }
  playBackground() {
    this.nativeAudio.preloadComplex('back', 'assets/background.mp3', 0.1, 1, 0).then(res => {
      console.log(res);
      this.nativeAudio.loop('back');
    }, err => {
      console.log(err);
    });
  }
  resumeBackground() {
    this.nativeAudio.loop('back');
  }
  playbg() {
    if (this.mediaObject) {
      this.mediaObject.play();
      this.mediaObject.onStatusUpdate.subscribe(status => {
        console.log(status);
        if (status === this.media.MEDIA_STOPPED) {
          this.mediaObject.play();
        }
      })
    }
    else {
      var systemLocation="";
      if(this.platform.is('android')){
        systemLocation="/android_asset/www/";
      }
      this.mediaObject = this.media.create(systemLocation+"assets/background.mp3");
      this.mediaObject.play();
      this.mediaObject.setVolume(0.1);
      this.mediaObject.onStatusUpdate.subscribe(status => {
        //console.log(status);
        if (status === this.media.MEDIA_STOPPED) {
          this.mediaObject.play();
        }
      })
    }
  }
  setBgVolume(value){
    this.mediaObject.setVolume(value);
  }

}
