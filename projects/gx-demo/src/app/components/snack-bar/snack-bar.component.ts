import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'gxd-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SnackBarComponent {
  @Input() model: string = ''
}
