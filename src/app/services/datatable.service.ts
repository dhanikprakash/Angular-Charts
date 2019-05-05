import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorHandler, HandleError } from '../common/http-error-handler';
import { Observable, of } from 'rxjs';
import { mockDataTable } from '../models/mocks/mock-data-table';
import { PeriodicElement } from '../models/periodic-element';

@Injectable({
  providedIn: 'root'
})
export class DatatableService {

  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('DatatableService');
  }

   getChartDataByDate(date: string): Observable<PeriodicElement[]> {
    return of(mockDataTable);
    }
  //  getchartData(): Observable<any> {
  //  return this.http.get<Employee[]>(environment.employeeURL)
  //   .pipe(
  //     catchError(this.handleError('getChartDataByDate', []))
  //   );
  //  }
}
