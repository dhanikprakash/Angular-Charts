import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material/material.module';
import { UserinputComponent } from './components/roi/userinput.component';
import { ResultComponent } from './components/mortgage/result.component';
import { FormsModule } from '@angular/forms';
import { RentComponent } from './components/rent/rent.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    UserinputComponent,
    ResultComponent,
    RentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
