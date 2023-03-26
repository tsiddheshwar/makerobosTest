import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  selectedCard: any;
  openPopup: boolean = false;

  constructor() { }
}
