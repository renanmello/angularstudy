import { Component } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrl: './data-biding.component.css'
})
export class DataBidingComponent {
  url:string = 'https://resumepage.com';
  urlImagem:string = 'http://lorempixel.com.br/500/400/?1';
  urlImagem2:string = 'http://lorempixel.com.br/500/400/?2';
  valorAtual = "";
  valorSalvo = "";
  nomeCurso: string = 'Angular';
  valor = 0;
  deletar: boolean = false;
  

  
  isMouseOver:boolean = false;
  nome:string = "abc"
  pessoa = {
    nome:"Def",
    idade: 20
  }
  getValor(){
    return 8;
  }
  botaoClicado(){
    alert("Botão clicado");
  }

  onKeyUp(evento: KeyboardEvent){
    console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual= (<HTMLInputElement>evento.target).value;

  }
  salvarValor(valor: any){
    this.valorSalvo = valor.value;
  }
  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  mudarValor(){
    this.valor++;
  }
  destruirCiclo(){
    this.deletar = true;
  }

}
