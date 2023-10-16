import { Component, EventEmitter, Input, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { ProgressIndicatorService } from './progress-indicator.service';

@Component({
  selector: 'gx-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProgressComponent {
  @Input() modelProgress: string = '';
  value: number = 0;
  view: boolean = false;
  @Input() onChangeViewOfParent: boolean = false;
  @Output() onChangeViewOfChild = new EventEmitter<boolean>(false);
  private destroy: Subject<void> = new Subject<void>();
  constructor(private progressIndicatorServ: ProgressIndicatorService) { }

  ngOnInit(): void {
    this.processView();
  }

  ngOnDestroy(): void {
    this.destroy.next()
    this.destroy.complete()
  }

  ngOnChanges(changes: SimpleChanges): void {
    changes['onChangeViewOfParent'].currentValue && this.processView()
  }

  processView() {
    const interval = setInterval(() => {
      if (this.value < 100) {
        this.value += 10;
        this.view = true;
      } else {
        clearInterval(interval);
        this.view = false;
        this.value = 0;
        this.progressIndicatorServ.updateProgressIndicator({ value: 100, view: true })
        this.onChangeViewOfChild.emit(false);
      }
    }, 500);
    return interval;
  }
}
