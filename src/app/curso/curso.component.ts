import { Component } from '@angular/core';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.css'
})
export class CursoComponent {
  nomePortal:string;
  cursos:string[] = ["Javac","Python","Django"] ;
  cursos2:string[] = [];
  
  constructor( private cursoService:CursoService){
    this.nomePortal = "resumepage.com";
    this.cursos2 = this.cursoService.getCursos();
    
  }
}
