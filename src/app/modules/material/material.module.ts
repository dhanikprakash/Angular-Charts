import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatRadioModule} from '@angular/material';
import {
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatDialogModule,

  MatSelectModule
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
    MatFormFieldModule],
  declarations: []
})
export class MaterialModule { }
