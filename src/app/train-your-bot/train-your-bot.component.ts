import { Component } from '@angular/core';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-train-your-bot',
  templateUrl: './train-your-bot.component.html',
  styleUrls: ['./train-your-bot.component.css']
})
export class TrainYourBotComponent {
  constructor(public cardService: CardsService){

  }
  cardArray=[
    {
      state:"Unanswered",
      name:"Do you deal in real estate",
      utterance:[]      
    },
    {
      state:"Improve coverage",
      name:"What time you are open...",
      utterance:[]      
    }
  ]
  openPopup: boolean = false;

  addIntent(){
    this.cardService.openPopup = true;
  }

}
