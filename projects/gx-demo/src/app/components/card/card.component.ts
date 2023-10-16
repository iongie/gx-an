import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'gxd-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent {
  @Input() model: string = '';
  @Input() hover: boolean = false;
}
