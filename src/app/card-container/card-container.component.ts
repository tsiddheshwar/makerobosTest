import { Component } from '@angular/core';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent {

  cardArray = [
    {
      name: "Train Your Bot",
      desc: "Imorove performance by providing........",
      isSelected: true,
    },
    {
      name: "Train Your Bot",
      desc: "Imorove performance by providing........",
      isSelected: false
    },
    {
      name: "Train Your Bot",
      desc: "Imorove performance by providing........",
      isSelected: false,
    },
    {
      name: "Train Your Bot",
      desc: "Imorove performance by providing........",
      isSelected: false
    }
  ];
  selectedCard: any = this.cardArray[0];

  cardClicked(card: any) {
    this.selectedCard ? this.selectedCard.isSelected = false :'';
    this.selectedCard = card;
    card.isSelected = true;
    
  }

}
