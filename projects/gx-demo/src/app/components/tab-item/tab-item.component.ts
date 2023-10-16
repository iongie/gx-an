import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'gxd-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TabItemComponent {
  @Input() model: string = ''
  @Input() itemIndicator: boolean = false
}
