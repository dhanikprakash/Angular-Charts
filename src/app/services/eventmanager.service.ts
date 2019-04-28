import { CoreEvent } from '../models/core-event';
import { Injectable, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { CoreService } from './core.service';

@Injectable({
  providedIn: 'root'
})
export class EventmanagerService implements OnDestroy {

  private eventCallback: Map<string, (event: CoreEvent) => void>;
  private filters: string[] = [];
  private subscriptions: Subscription = new Subscription();
  private host: any;

    constructor(private eventSevice: CoreService) {
    const eventBusSubscription =
    this.eventSevice.coreEvent$.subscribe( ke => this.processEvent(ke) );
    this.subscriptions.add(eventBusSubscription);
    this.eventCallback = new Map<string, (event: CoreEvent) => void>();
  }
  private processEvent(coreEvent: CoreEvent) {
    if (!this.filters) {
      return;
    } else if (this.filters.indexOf('*') !== -1) { // subscribes to all events
      this.eventCallback.get(coreEvent.eventName)(coreEvent);
    } else if (this.filters.indexOf(coreEvent.eventName) !== -1) {
      this.eventCallback.get(coreEvent.eventName)(coreEvent);
    }
  }

  raiseEvent(coreEvent: CoreEvent) {
    this.eventSevice.raiseEvent(coreEvent);
  }

  on(eventName: string, callback: (event: CoreEvent) => void) {
    this.filters.push(eventName);
    this.eventCallback.set(eventName, callback.bind(this.host));
  }

  setHost(host: any) {
    this.host = host;
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
