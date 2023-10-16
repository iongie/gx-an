import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProgressIndicator } from '../../components/progress/progress.enum';

@Injectable({
  providedIn: 'root'
})
export class ProgressIndicatorService {
  progressIndicatorState = new BehaviorSubject<ProgressIndicator>({
    value: 0,
    view: false
  })
  constructor() { }

  getProgressIndicator = this.progressIndicatorState.asObservable()

  updateProgressIndicator(newState: ProgressIndicator){
    this.progressIndicatorState.next(newState)
  }
}
