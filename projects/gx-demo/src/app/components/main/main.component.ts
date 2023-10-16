import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'gxd-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent {
  @Input() model: string = '';
}
