
import { InputData } from './../../models/input-data';

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { EventmanagerService } from 'src/app/services/eventmanager.service';
import { CoreEvent } from 'src/app/models/core-event';
import { Mortgage } from 'src/app/models/mortgage';
import { Observable, of, Subject, Subscription } from 'rxjs';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  providers: [EventmanagerService]
})
export class ResultComponent implements OnInit {

   mortgage: Mortgage;

   subscriptions: Subscription = new Subscription();
  constructor(private eventManagerService: EventmanagerService) {
    this.eventManagerService.setHost(this);
    this.mortgage = new Mortgage();
  }

  ngOnInit() {

    this.eventManagerService.on('calculateResult', this.calculateResult);
  }
  changeValues() {
     console.log(this.mortgage.housePrice);
  }
  calculateResult(coreEvent: CoreEvent) {
    const inputData = coreEvent.eventObject as InputData;
   this.mortgage.housePrice = inputData.houseprice;
   this.mortgage.mortgageAmount = inputData.houseprice * .75;
   this.mortgage.amountRequired = inputData.houseprice * .29;
   this.mortgage.deposit = inputData.houseprice * .25;
   this.mortgage.fees =  inputData.houseprice * .04;
  }
}
