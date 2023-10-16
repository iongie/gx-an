import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'gx-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavDrawerComponent {
  @Input() model: string = ''
}
