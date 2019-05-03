import { Component } from "@angular/core";
import { FavoritesPage } from "../../favorites/favorites";
import { LibraryPage } from "../../library/library";

 @Component({
     selector:'page-tabs',
     template: `
             <ion-tabs selectedIndex= "1" color="quoteBackground">
                <ion-tab color="primary" [root]="favoritesPage" tabTitle="Favorites" tabIcon="star"></ion-tab>
                <ion-tab color="primary" [root]="libraryPage" tabTitle="Library" tabIcon="book"></ion-tab>
               
             </ion-tabs>
     `
 })
 export class TabsPage{
    favoritesPage = FavoritesPage;
    libraryPage= LibraryPage;
 }