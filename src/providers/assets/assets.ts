import { Injectable } from '@angular/core';

/*
  Generated class for the AssetsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AssetsProvider {
  private numbers: Array<{ label: string, vidThumb: string, vidSrc: string }>;
  private animals: Array<{label:string, imgSrc:string, audioSrc:string, color:string}>;
  private alphabet: Array<{ label: string, vidThumb: string, vidSrc: string }>=[];
  constructor() {
    console.log('Hello AssetsProvider Provider');
  }
  loadAssets(){
    this.numbers = [
      {label: "numbers", vidThumb: "assets/numbers/imgs/numbers.png", vidSrc:"assets/numbers/videos/numbers.mp4"},
      {label: "numbers2", vidThumb: "assets/numbers/imgs/numbers2.png", vidSrc:"assets/numbers/videos/numbers2.mp4"},
      {label: "numbers3", vidThumb: "assets/numbers/imgs/numbers3.png", vidSrc:"assets/numbers/videos/numbers3.mp4"}
    ];
    this.animals=[
      {label:"bird", imgSrc:"assets/animals/imgs/bird.png", audioSrc:"assets/animals/audio/bird_aud.mp3", color:"#9DAE0D"},
      {label:"cat", imgSrc:"assets/animals/imgs/cat.png", audioSrc:"assets/animals/audio/cat_aud.mp3", color:"#348C28"},
      {label:"cow", imgSrc:"assets/animals/imgs/cow.png", audioSrc:"assets/animals/audio/cow_aud.mp3", color:"#007F50"},
      {label:"dog", imgSrc:"assets/animals/imgs/dog.png", audioSrc:"assets/animals/audio/dog_aud.mp3", color:"#008399"},
      {label:"duck", imgSrc:"assets/animals/imgs/duck.png", audioSrc:"assets/animals/audio/duck_aud.mp3", color:"#104C96"},
      {label:"elephant", imgSrc:"assets/animals/imgs/elephant.png", audioSrc:"assets/animals/audio/elephant_aud.mp3", color:"#471D69"},
      {label:"goat", imgSrc:"assets/animals/imgs/goat.png", audioSrc:"assets/animals/audio/goat_aud.mp3", color:"#008074"},
      {label:"horse", imgSrc:"assets/animals/imgs/horse.png", audioSrc:"assets/animals/audio/horse_aud.mp3", color:"#B8006C"},
      {label:"lion", imgSrc:"assets/animals/imgs/lion.png", audioSrc:"assets/animals/audio/lion_aud.mp3", color:"#BA0521"},
      {label:"pig", imgSrc:"assets/animals/imgs/pig.png", audioSrc:"assets/animals/audio/pig_aud.mp3", color:"#C65F03"},
      {label:"rooster", imgSrc:"assets/animals/imgs/rooster.png", audioSrc:"assets/animals/audio/rooster_aud.mp3", color:"#CB8D00"},
      {label:"sheep", imgSrc:"assets/animals/imgs/sheep.png", audioSrc:"assets/animals/audio/sheep_aud.mp3", color:"#D2BE05"},
      {label:"tiger", imgSrc:"assets/animals/imgs/tiger.png", audioSrc:"assets/animals/audio/tiger_aud.mp3", color:"#747E14"}
    ];
    for (var i = 65; i <= 91; i++) {
      if (i <= 90) {
        this.alphabet.push({
          label: String.fromCharCode(i).toLowerCase(),
          vidThumb: "assets/alphabet/imgs/" + String.fromCharCode(i).toLowerCase() + ".png",
          vidSrc: "assets/alphabet/videos/" + String.fromCharCode(i) + ".mp4",
        })
      }
      else {
        this.alphabet.push({
          label: "abc",
          vidThumb: "assets/alphabet/imgs/abc.png",
          vidSrc: "assets/alphabet/videos/ABC.mp4",
        })
      }
    }
  }
  getNumbers(){
    return this.numbers;
  }
  getAnimals(){
    return this.animals;
  }
  getAlphabet(){
    return this.alphabet;
  }

}
