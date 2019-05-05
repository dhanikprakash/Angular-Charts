import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { EventmanagerService } from 'src/app/services/eventmanager.service';
import { ChartService } from 'src/app/services/chart.service';
import { CoreEvent } from 'src/app/models/core-event';
import { isDataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css'],
  providers: [ChartService]
})
export class PiechartComponent implements OnInit, AfterViewInit {

  @ViewChild('pieChartForm') pieChartForm: ElementRef;
  title = 'Browser market shares at a specific website, 2014';
  type = 'PieChart';
  data:any;
  columnNames = ['Browser', 'Percentage'];
  options = { };
  width: number;
  height = 350;
  constructor(private eventManagerService: EventmanagerService, private chartService: ChartService) {
    this.eventManagerService.setHost(this);
  }
  ngAfterViewInit() {
  }
  ngOnInit() {
    this.data = [
      ['Firefox', 45.0],
      ['IE', 26.8],
      ['Chrome', 12.8],
      ['Safari', 8.5],
      ['Opera', 6.2],
      ['Others', 0.7]
   ];
    this.eventManagerService.on('updatePieChart', this.updatePieChart.bind(this));
    this.width = this.pieChartForm.nativeElement.offsetWidth;
  }
  updatePieChart(coreEvent: CoreEvent) {
    const selectedDate = coreEvent.eventObject as string;
    this.chartService.getChartDataByDate(selectedDate)
    .subscribe(x => this.data = x);
   console.log('updatePieChart');
  }


}
