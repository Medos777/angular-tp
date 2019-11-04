import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
 nom:string ="amine";
 age =20;


  actif:boolean=true;

   taille= this.nom.length;

maj= this.nom.toUpperCase();

infos()
{ return this.nom +" a pour âge " + this.age; }
onAffiche(chaine:string)
{
  console.log(chaine);
}

  constructor() { }

  ngOnInit() {
  }

}

