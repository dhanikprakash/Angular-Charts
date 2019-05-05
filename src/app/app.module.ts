import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material/material.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { PiechartComponent } from './components/piechart/piechart.component';
import { BarchartComponent } from './components/barchart/barchart.component';
import { InputComponent } from './components/input/input.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { MAT_DATE_LOCALE } from '@angular/material';
import { DatatableComponent } from './components/datatable/datatable.component';
import { httpInterceptorProviders } from './http-interceptor/http-interceptor-providers';
import { MessagesComponent } from './components/messages/messages.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';
import { HttpErrorHandler } from './common/http-error-handler';
import { MessageService } from './common/message-service';
import { AuthService } from './common/auth-service';
import { RequestCacheWithMap, RequestCache } from './common/request-cache';
import { MomentModule } from 'ngx-moment';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PiechartComponent,
    BarchartComponent,
    InputComponent,
    DatatableComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),
    MaterialModule,
    FormsModule,
    MatInputModule,
    GoogleChartsModule,
    MatFormFieldModule,
    MomentModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  { provide: RequestCache, useClass: RequestCacheWithMap },
    httpInterceptorProviders, HttpErrorHandler, MessageService, AuthService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
