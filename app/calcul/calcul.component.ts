import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculComponent implements OnInit {
n1: number = 0;
n2: number = 0;

s: number = 0;
somme(n1,n2)
{
  this.s = this.n1 + this.n2;
  

}

onAffiche(n1:number)
{
  console.log(n1);
}

  constructor() { }

  ngOnInit() {
  }

}
