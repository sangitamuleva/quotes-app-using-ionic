import { Component, OnInit } from '@angular/core';
import {  NavController, NavParams, AlertController } from 'ionic-angular';
import{  Quote } from '../../data/quote.interface'
import { QuotesService } from '../../services/quotes';
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage  implements OnInit{

  allquotes:{category: string, quotes : Quote[],icon: string};
  
  constructor(
    public navCtrl: NavController,
     private navParams: NavParams,
     private alertCntrl: AlertController,
     private quoteservic: QuotesService) {
      }
  // ionViewDidLoad(){
  //   this.allquotes=this.navParams.data;
  // }
  //add elvis operator (?) in template to see data loaded or not
  
ngOnInit(){
  this.allquotes=this.navParams.data;
}


OnAddToFavorite(selected: Quote){
  const alert=this.alertCntrl.create({
    title: 'Add Quote',
    subTitle: 'Are you sure?',
    message:'Are sure you want to add quote?',
   
   // buttons: ['OK']
   buttons:[
     {//can add multiple buttons with diff handler
     text:'Yes',
     cssClass: 'alert',
    
     handler:()=>{
       //executed when we clicked button
       console.log("ok")
       this.quoteservic.addQuoteToFav(selected);
        }
     },
     {
       text:'No',
       role:'cancel',
       handler:()=>{
         console.log('Cancelled');
       }
     }
  ]
  });

  alert.present();
}
OnRemoveFromFav(q:Quote){
 this.quoteservic.removeQuoteToFav(q);
}
isFav(q:Quote){
  return this.quoteservic.isFavQuotes(q);

}
}
