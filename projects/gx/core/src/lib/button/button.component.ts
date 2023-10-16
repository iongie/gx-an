import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'gx-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
  @Input() type: string = 'button';
  @Input() model: string = '';
  @Input() label: string = '';
  @Input() disabled: boolean = false;
}
