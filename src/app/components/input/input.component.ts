import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { ChartService } from 'src/app/services/chart.service';
import { Employee } from 'src/app/models/employee';
import { EventmanagerService } from 'src/app/services/eventmanager.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  events: string[] = [];
  width: number;
  employees: Employee[];
  selectedDate: string;
  @ViewChild('inputForm') pieChartForm: ElementRef;
  constructor(private chartService: ChartService, private managerService: EventmanagerService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.width = this.pieChartForm.nativeElement.offsetWidth;
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.selectedDate  = this.datePipe.transform(event.value, 'yyyyMMdd');
    this.managerService.raiseEvent({eventName: 'updatePieChart', eventObject: this.selectedDate});
    this.managerService.raiseEvent({eventName: 'updateBarChart', eventObject: this.selectedDate});
    this.managerService.raiseEvent({eventName: 'updateDataTable', eventObject: this.selectedDate});
    // this.chartService.getChartDataByDate()
    // .subscribe(employee => {this.employees = employee; console.log(this.employees)});

  }
}
