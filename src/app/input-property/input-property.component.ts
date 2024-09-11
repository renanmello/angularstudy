import { Component, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrl: './input-property.component.css'
})
export class InputPropertyComponent {
  @ViewChild('campoInput', {static: true}) campoValorInput!: HTMLElement;
 
  @Input() nome = '';
  valor = 10;
  incrementa(){
   console.log(this.campoValorInput);
   this.valor ++;
  }
  decrementa(){
    this.valor --;
  }
}
