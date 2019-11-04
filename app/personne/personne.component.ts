import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {

nom:string;
age:string;

  constructor() {
    this.nom="popey";
    this.age="20" ;

  }

  ngOnInit() {
  }

}
