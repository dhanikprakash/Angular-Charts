import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  events: string[] = [];
  width: number;
  @ViewChild('inputForm') pieChartForm: ElementRef;
  constructor() { }

  ngOnInit() {
    this.width = this.pieChartForm.nativeElement.offsetWidth;
  }



  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }
}
