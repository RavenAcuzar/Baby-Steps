import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SmartAudioProvider } from '../providers/smart-audio/smart-audio';
import { AssetsProvider } from '../providers/assets/assets';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private smartAudio:SmartAudioProvider, private assets:AssetsProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      //var storageDirectory = "cdvfile://localhost/library-nosync/";
      // this.mediaObject = this.media.create("assets/background.mp3");
      // this.mediaObject.setVolume(0.1);
      // this.mediaObject.play();
      // this.mediaObject.onStatusUpdate.subscribe(status=>{
      //   console.log(status);
      //   if(status === this.media.MEDIA_STOPPED){
      //     this.mediaObject.play();
      //   }
      // })
      this.smartAudio.playbg();
      this.assets.loadAssets();
    });
  }
}

