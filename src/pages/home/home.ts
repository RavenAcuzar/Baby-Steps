import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AnimalsPage } from '../animals/animals';
import { AlphabetPage } from '../alphabet/alphabet';
import { SmartAudioProvider } from '../../providers/smart-audio/smart-audio';
import { NumbersPage } from '../numbers/numbers';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //@ViewChild('btn1') btn1: HTMLElement;
  hasClicked=false;
  constructor(public navCtrl: NavController, public navParams:NavParams,
    private smartAudio:SmartAudioProvider) {
  }
  ionViewWillEnter(){
    this.hasClicked = false;
    if(this.navParams.get('res')=="TRUE"){
      this.smartAudio.playbg();
    }
  }
  ionViewDidLoad(){
  }
  public navigatePage(pageName){
    //navigate to page after animation ends
    switch(pageName){
      case "btn1":{
        this.navCtrl.push(NumbersPage);
        break;
      }
      case "btn2":{
        this.navCtrl.push(AnimalsPage);
        break;
      }
      case "btn3":{
        this.navCtrl.push(AlphabetPage);
        break;
      }
    }
  }
 
  btnClick(name){
    if(!this.hasClicked){
      //to make sure click only register once
      this.hasClicked = true;
    var btn;
    var event;
      btn = document.querySelector("#"+name);
      // btn = document.getElementById('btn1');
      btn.classList.add('animated','bounce');
      event=()=>{
        btn.classList.remove('animated','bounce');
        btn.removeEventListener('animationend', event);
        this.navigatePage(name);
      }
      btn.addEventListener('animationend', event);
    }
  }

}
