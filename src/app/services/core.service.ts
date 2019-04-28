import { CoreEvent } from '../models/core-event';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  private coreEvent = new Subject<CoreEvent>();
  coreEvent$ = this.coreEvent.asObservable();
  constructor() { }
  raiseEvent(coreEvent: CoreEvent) {
    this.coreEvent.next(coreEvent);
  }
}
