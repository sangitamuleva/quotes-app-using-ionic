import{Quote} from '../data/quote.interface';

export class QuotesService{
    //store all the quotes marked as private
    private favquote: Quote[]=[];

    addQuoteToFav(q:Quote){
        //get those quote on interface format push into the array
        this.favquote.push(q);
        console.log(q)
    }

    removeQuoteToFav(q:Quote){
        const position=this.favquote.findIndex((q1:Quote)=>{
            return q1.id==q.id;
        });
        this.favquote.splice(position,1); //get postion and splice one element

    }

    getFavQuote(){
        return this.favquote.slice();
    }

    isFavQuotes(q:Quote){
        return this.favquote.find((q1:Quote)=>{
            return q1.id==q.id
        });

    }


}