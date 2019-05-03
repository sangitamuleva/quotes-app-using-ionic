import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { QuotesService } from '../../services/quotes';
import { Quote } from '../../data/quote.interface';
import { QuotePage } from '../quote/quote';


@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage implements OnInit {
  quotes:Quote[]

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     private modalCtrl:ModalController,
     private quoteservice: QuotesService) {
  }

  ngOnInit(){
   this.quotes= this.quoteservice.getFavQuote();
  }

  onRemovefromFav(q:Quote){
    this.quoteservice.removeQuoteToFav(q);
      //this.quotes=this.quoteservice.getFavQuote();
        const position =this.quotes.findIndex((q1:Quote)=>{
          return q1.id== q.id;
        });
        this.quotes.splice(position,1);
  }

  onViewQuotes(q:Quote){
    const modal=this.modalCtrl.create(QuotePage,q);
    modal.present();
    modal.onDidDismiss((remove:boolean)=>{
      console.log(remove);
      if(remove){
        this.onRemovefromFav(q)
      }
    });    
    
  }

}
