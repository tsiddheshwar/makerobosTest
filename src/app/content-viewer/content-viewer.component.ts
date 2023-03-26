import { Component } from '@angular/core';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-content-viewer',
  templateUrl: './content-viewer.component.html',
  styleUrls: ['./content-viewer.component.css']
})
export class ContentViewerComponent {
  constructor(public cardsService: CardsService){

  }
}
