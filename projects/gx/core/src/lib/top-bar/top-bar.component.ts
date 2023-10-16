import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'gx-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TopBarComponent {
  @Input() model: string = '';
  @Input() title: string = '';
}
