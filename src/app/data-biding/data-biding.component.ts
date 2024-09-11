import { Component } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrl: './data-biding.component.css'
})
export class DataBidingComponent {
  url = 'https://resumepage.com';
  urlImagem = 'http://lorempixel.com.br/500/400/?1';
  urlImagem2 = 'http://lorempixel.com.br/500/400/?2';
  valorAtual = "";
  valorSalvo = "";
  nomeCurso = 'Angular';
  valor = 0;
  deletar = false;
  

  
  isMouseOver = false;
  nome = "abc"
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
    console.log((evento.target as HTMLInputElement).value);
    this.valorAtual= (evento.target as HTMLInputElement).value;

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
