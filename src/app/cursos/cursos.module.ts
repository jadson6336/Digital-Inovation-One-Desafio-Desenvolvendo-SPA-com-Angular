import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

import { CursosComponent } from './cursos.component';
import { CursosService } from './cursos.service';



@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports:[
    CursosComponent
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
