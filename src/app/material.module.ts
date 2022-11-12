import {NgModule} from '@angular/core'
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatButtonModule} from '@angular/material/button'


@NgModule({
  imports: [MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
  MatButtonModule],
  exports: [MatFormFieldModule, MatInputModule,
    MatCheckboxModule, MatDatepickerModule,
    MatNativeDateModule, MatButtonModule]
})

export class MaterialModule {

}
