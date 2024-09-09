import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrl: './ciclo.component.css'
})
export class CicloComponent implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentInit, AfterContentChecked,
 AfterViewInit, AfterViewChecked{
   
  @Input() valorInicial:number = 10;
  constructor(){
    this.log("construtor");
  }

  ngOnInit(): void {
    this.log("OnInit");
      
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.log("Onchanges");
  }
  
  ngOnDestroy(): void {
    this.log("Destroy");
  }

  ngAfterViewInit(): void {
      this.log("afterViewinit");
  }
  ngAfterContentInit(): void {
      this.log("AfterContentInit")
  }
  ngAfterContentChecked(): void {
      this.log("fterContentChecked");
  }

  ngAfterViewChecked(): void {
      this.log("AfterViewChecked")
  }
  ngDoCheck(){
    this.log("Oncheck");
  }

  private log(hook:string){
    console.log(hook);
  }

}
