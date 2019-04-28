import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatRadioModule} from '@angular/material';
import {
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,

  MatPaginatorModule ,
  MatTableModule,
  MatSelectModule,
  
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule,
     MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule ,
    MatTableModule,
    MatFormFieldModule],
  exports: [MatButtonModule,
     MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,

    MatPaginatorModule ,
    MatTableModule,
    MatFormFieldModule],
  declarations: []
})
export class MaterialModule { }
