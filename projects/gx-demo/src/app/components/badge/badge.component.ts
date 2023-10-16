import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'gxd-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BadgeComponent {
  @Input() model: string = '';
}
