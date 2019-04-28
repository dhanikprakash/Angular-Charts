import { Component, OnInit } from '@angular/core';
import { EventmanagerService } from 'src/app/services/eventmanager.service';
import { CoreEvent } from 'src/app/models/core-event';
import { InputData } from 'src/app/models/input-data';
import { Mortgage } from 'src/app/models/mortgage';
import { Rent } from 'src/app/models/rent';


@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css'],
  providers: [EventmanagerService]
})
export class RentComponent implements OnInit {

   rent: Rent;
   roi: number;
  constructor(private eventManagerService: EventmanagerService) {
    this.eventManagerService.setHost(this);

  }

  ngOnInit() {
    this.eventManagerService.on('calculateResult', this.calculateRent);
    this.rent = new Rent();
  }
  calculateRent(coreEvent: CoreEvent) {
    const inputData = coreEvent.eventObject as InputData;
    this.rent.monthlyRent  = inputData.houseRent;
    this.rent.agentFee = inputData.houseRent * .1;
    this.rent.maintaince = inputData.houseRent * .1;
    this.rent.mortgagePayment = inputData.houseprice * .75 * .03 / 12 ;
    this.rent.netRent = this.rent.monthlyRent - this.rent.agentFee - this.rent.maintaince - this.rent.mortgagePayment;
    this.roi = ((this.rent.netRent * 12) / (inputData.houseprice * .29)) * 100;
 }

}
