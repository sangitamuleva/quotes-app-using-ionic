import { Component } from '@angular/core';
import {  NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {

  author: string;
  text: string;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private viewCtrl:ViewController) {
  }
  ionViewDidLoad(){
    this.author=this.navParams.get('person');
    this.text=this.navParams.get('text');
  }
  onClose(remove= false){
    //view contoller manage currently active ctrl

    this.viewCtrl.dismiss(remove);
    //dismiss simpkly delete the page
    //modal can be dismis bcoz its a ovarlay page  but careful to use with stack page
  }

}
