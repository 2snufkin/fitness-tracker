import {NgModule} from '@angular/core'
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";






@NgModule({
  imports: [MatFormFieldModule,MatInputModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule],
  exports: [MatFormFieldModule, MatInputModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule]
})

export class MaterialModule{

}
