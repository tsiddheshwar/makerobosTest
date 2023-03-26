import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-intent-card',
  templateUrl: './intent-card.component.html',
  styleUrls: ['./intent-card.component.css']
})
export class IntentCardComponent {
  @Input() card:any;

}
