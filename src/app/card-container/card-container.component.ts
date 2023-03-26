import { Component } from '@angular/core';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent {
  constructor(private cardsService: CardsService){

  }
  cardArray = [
    {
      name: "Train Your Bot",
      desc: "Imorove performance by providing user utternaces or frequently asked questions",
      isSelected: true,
    },
    {
      name: "Intents",
      desc: "View allintents you've createdto improve the bot performance",
      isSelected: false
    },
    {
      name: "Catch all",
      desc: "Setup flows to handle unanswered or not helpful responses",
      isSelected: false,
    },
    {
      name: "Analytics",
      desc: "Learn how your bot is performing and how you can make it better",
      isSelected: false
    }
  ];
  selectedCard: any = this.cardArray[0];
  ngOnInit(){
    this.cardsService.selectedCard = this.selectedCard;
  }

  cardClicked(card: any) {
    this.selectedCard ? this.selectedCard.isSelected = false :'';
    this.selectedCard = card;
    this.cardsService.selectedCard = card;
    card.isSelected = true;
    
  }

}
