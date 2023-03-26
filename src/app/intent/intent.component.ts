import { Component } from '@angular/core';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-intent',
  templateUrl: './intent.component.html',
  styleUrls: ['./intent.component.css']
})
export class IntentComponent {
  constructor(public cardService:CardsService){

  }

  closePopup(){
    this.cardService.openPopup=false;
  }
}
