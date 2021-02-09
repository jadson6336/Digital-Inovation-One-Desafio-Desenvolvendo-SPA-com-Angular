import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormularioComponent } from './formulario.component';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [
    FormularioComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule

  ],
  exports: [
    FormularioComponent
  ]
})
export class FormularioModule { }
