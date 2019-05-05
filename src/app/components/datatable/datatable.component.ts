import { Component, OnInit, ViewChild } from '@angular/core';
import { PeriodicElement } from 'src/app/models/periodic-element';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { EventmanagerService } from 'src/app/services/eventmanager.service';
import { DatatableService } from 'src/app/services/datatable.service';
import { CoreEvent } from 'src/app/models/core-event';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  ELEMENT_DATA: PeriodicElement[];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private eventManagerService: EventmanagerService,
    private chartService: DatatableService
  ) {
    this.eventManagerService.setHost(this);
  }

  ngOnInit() {
    this.ELEMENT_DATA = [
      { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
      { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
      { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
      { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
      { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
      { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
      { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
      { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
      { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
      { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
      { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
      { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
      { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
      { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
      { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
      { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
      { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
      { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
      { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' }
    ];
    this.dataSource = new MatTableDataSource<PeriodicElement>(
      this.ELEMENT_DATA
    );
    this.eventManagerService.on(
      'updateDataTable',
      this.updateDataTable.bind(this)
    );
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  updateDataTable(coreEvent: CoreEvent) {
    const selectedDate = coreEvent.eventObject as string;
    this.chartService
      .getChartDataByDate(selectedDate)
      .subscribe(
        x => {this.dataSource = new MatTableDataSource<PeriodicElement>(x);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      );
    console.log('updateDataTable');
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
