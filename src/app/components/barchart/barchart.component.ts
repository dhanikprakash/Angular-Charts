import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EventmanagerService } from 'src/app/services/eventmanager.service';
import { CoreEvent } from 'src/app/models/core-event';
import { BarchartService } from 'src/app/services/barchart.service';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  @ViewChild('barChartForm') barChartForm: ElementRef;
  title = 'Population (in millions)';
  type = 'ColumnChart';
  data: any;
  columnNames = ['Year', 'Asia', 'Europe'];
  width: number;
  height = 350;
  options  = {
    title: 'Motivation and Energy Level Throughout the Day',
    colors: ['#9575cd', '#33ac71'],
    hAxis: {
      title: 'Time of Day',
      format: 'h:mm a',
      viewWindow: {
        min: [7, 30, 0],
        max: [17, 30, 0]
      }
    },
    vAxis: {
      title: 'Rating (scale of 1-10)'
    }
  };

  constructor(private eventManagerService: EventmanagerService, private chartService: BarchartService) {
    this.eventManagerService.setHost(this);
  }

  ngOnInit() {
    this.data = [
      [{v: [8, 0, 0], f: '8 am'}, 1, .25],
      [{v: [9, 0, 0], f: '9 am'}, 2, .5],
      [{v: [10, 0, 0], f: '10 am'}, 3, 1],
      [{v: [11, 0, 0], f: '11 am'}, 4, 2.25],
      [{v: [12, 0, 0], f: '12 pm'}, 5, 2.25],
      [{v: [13, 0, 0], f: '1 pm'}, 6, 3],
      [{v: [14, 0, 0], f: '2 pm'}, 7, 4],
      [{v: [15, 0, 0], f: '3 pm'}, 8, 5.25],
      [{v: [16, 0, 0], f: '4 pm'}, 9, 7.5],
      [{v: [17, 0, 0], f: '5 pm'}, 10, 10],
    ];
    this.eventManagerService.on('updateBarChart', this.updateBarChart.bind(this));
    this.width = this.barChartForm.nativeElement.offsetWidth;
  }

  updateBarChart(coreEvent: CoreEvent) {
    const selectedDate = coreEvent.eventObject as string;
    this.chartService.getChartDataByDate(selectedDate)
    .subscribe(x => this.data = x);
   console.log('updateBarChart');
  }
}
