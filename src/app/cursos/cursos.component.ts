import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'spa-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursosInfo: string;
  cursosList: object;

  constructor(private cursosService: CursosService) { 
    this.cursosInfo = "Curso Teste1";
    this.cursosList = this.cursosService.getCursos();
    
  }

  ngOnInit(): void {
  }

}
