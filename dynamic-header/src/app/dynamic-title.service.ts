import { Injectable, setTestabilityGetter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DynamicTitleService {

  constructor() { }

  public title = new BehaviorSubject('Dynamic Title Example')

  setTitle(title) {
    this.title.next(title)
  }
}
