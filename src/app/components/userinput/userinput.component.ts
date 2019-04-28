import { Component, OnInit } from '@angular/core';
import { EventmanagerService } from 'src/app/services/eventmanager.service';
import { InputData } from 'src/app/models/input-data';


@Component({
  selector: 'app-userinput',
  templateUrl: './userinput.component.html',
  styleUrls: ['./userinput.component.css'],
  providers: [EventmanagerService]
})
export class UserinputComponent implements OnInit {

   inputData: InputData = new InputData();
  constructor(private managerService: EventmanagerService) {

   }

  ngOnInit() {
    this.inputData.houseprice = 50000;
    this.inputData.houseRent = 450;
    setTimeout(() => { this.managerService.raiseEvent({eventName: 'calculateResult', eventObject: this.inputData}); }, 200);
  }
  calculateResult() {
     this.managerService.raiseEvent({eventName: 'calculateResult', eventObject: this.inputData});
  }

}
