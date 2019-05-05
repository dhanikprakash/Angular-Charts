import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HandleError, HttpErrorHandler } from '../common/http-error-handler';
import { Employee } from '../models/employee';
import { environment } from 'src/environments/environment';
import { mockPieChart } from '../models/mocks/mock-pie-chart';



@Injectable({
  providedIn: 'root'
})
export class ChartService {


  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('ChartService');
  }

   getChartDataByDate(date: string): Observable<(string|number)[][]> {
    return of(mockPieChart);
    }
  //  getchartData(): Observable<any> {
  //  return this.http.get<Employee[]>(environment.employeeURL)
  //   .pipe(
  //     catchError(this.handleError('getChartDataByDate', []))
  //   );
  //  }
}
