import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saison',
  templateUrl: './saison.component.html',
  styleUrls: ['./saison.component.css']
})
export class SaisonComponent implements OnInit {
  titre:string="Correspondance Mois/Saison";
  val:number;
  constructor() { }

  ngOnInit() {
  }

}
