import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor() { }

  getCursos(){
    return ['Java', 'Angular2','React'];
  }
}
