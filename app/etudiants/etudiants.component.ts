import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {
  titre:string="Affichage des étudiants";
  etudiants =[
    {nom:'Ben Ali', prenom:'Ahmed', date:new Date(1980,4,15), ville:'Tunis', moyenne:12.37},
    {nom:'Rajhi', prenom:'Samar', date:new Date(2000,6,23), ville:'Sfax', moyenne:15.87},
    {nom:'Ammar', prenom:'Ali', date:new Date(2003,7,10), ville:'Tunis', moyenne:10.3},
    {nom:'Smiri', prenom:'Maroua', date:new Date(2001,1,11), ville:'Nabeul', moyenne:16.3}
    ]
  constructor() { }

  ngOnInit() {
  }

}
