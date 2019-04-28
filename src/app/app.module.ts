import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material/material.module';
import { UserinputComponent } from './components/userinput/userinput.component';
import { ResultComponent } from './components/mortgage/result.component';
import { FormsModule } from '@angular/forms';
import { RentComponent } from './components/rent/rent.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { PiechartComponent } from './components/piechart/piechart.component';
import { BarchartComponent } from './components/barchart/barchart.component';
import { InputComponent } from './components/input/input.component';
import { GoogleChartsModule } from 'angular-google-charts';
import {MAT_DATE_LOCALE} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    UserinputComponent,
    ResultComponent,
    RentComponent,
    PiechartComponent,
    BarchartComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatInputModule,
    GoogleChartsModule,
    MatFormFieldModule
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-GB'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
