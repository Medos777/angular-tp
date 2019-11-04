import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {

tab=[41,18,23,58];
titre:string="Operations sur un tableau";


 minimum()
{let m=this.tab[0];
 for(let i=0;i<4;i++)
{
  if(this.tab[i]<m)
  {m=this.tab[i];}
}
return m;
}
  constructor() { }

  ngOnInit() {
  }

}
