import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorHandler, HandleError } from '../common/http-error-handler';
import { Observable, of } from 'rxjs';
import { mockBarChart } from '../models/mocks/mock-bar-chart';

@Injectable({
  providedIn: 'root'
})
export class BarchartService {
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('ChartService');
  }

   getChartDataByDate(date: string): Observable<any> {
    return of(mockBarChart);
    }
  //  getchartData(): Observable<any> {
  //  return this.http.get<Employee[]>(environment.employeeURL)
  //   .pipe(
  //     catchError(this.handleError('getChartDataByDate', []))
  //   );
  //  }
}
