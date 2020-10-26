import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AnimalsPage } from '../pages/animals/animals';
import { AlphabetPage } from '../pages/alphabet/alphabet';
import { Media } from '@ionic-native/media';
import { NativeAudio } from '@ionic-native/native-audio';
import { SmartAudioProvider } from '../providers/smart-audio/smart-audio';
import { NumbersPage } from '../pages/numbers/numbers';
import { AssetsProvider } from '../providers/assets/assets';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AnimalsPage,
    AlphabetPage,
    NumbersPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AnimalsPage,
    AlphabetPage,
    NumbersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Media,
    NativeAudio,
    SmartAudioProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AssetsProvider
  ]
})
export class AppModule {}
