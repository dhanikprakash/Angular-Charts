import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit, AfterViewInit {

  @ViewChild('pieChartForm') pieChartForm: ElementRef;
  title = 'Browser market shares at a specific website, 2014';
  type = 'PieChart';
  data = [
     ['Firefox', 45.0],
     ['IE', 26.8],
     ['Chrome', 12.8],
     ['Safari', 8.5],
     ['Opera', 6.2],
     ['Others', 0.7]
  ];
  columnNames = ['Browser', 'Percentage'];
  options = { };
  width: number;
  height = 350;
  constructor() { }
  ngAfterViewInit() {
  }
  ngOnInit() {
    this.width = this.pieChartForm.nativeElement.offsetWidth;
  }


}
