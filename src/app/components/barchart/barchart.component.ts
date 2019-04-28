import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  @ViewChild('barChartForm') barChartForm: ElementRef;
  title = 'Population (in millions)';
  type = 'ColumnChart';
  data = [
     ['2012', 900, 390],
     ['2013', 1000, 400],
     ['2014', 1170, 440],
     ['2015', 1250, 480],
     ['2016', 1000, 400],
     ['2017', 1170, 440],
     ['2018', 1250, 480],
     ['2019', 1530, 540]
  ];
  columnNames = ['Year', 'Asia', 'Europe'];
  options = {};
  width: number;
  height = 350;

  constructor() { }

  ngOnInit() {
    this.width = this.barChartForm.nativeElement.offsetWidth;
  }

}
