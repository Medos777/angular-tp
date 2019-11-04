import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidat-view',
  templateUrl: './candidat-view.component.html',
  styleUrls: ['./candidat-view.component.css']
})
export class CandidatViewComponent implements OnInit {
  tabCandidats = [
    {nom:'Popey',image:'../assets/popey.jpg', nb:16, parti:true},
    {nom:'Sam',image:'../assets/happy.jpg', nb:14, parti:false },
    {nom:'Donald',image:'../assets/donald.png', nb:44, parti:false}
    ];
 

    count()
    {
      let n:number=0;
      for (let i=0;i<3;i++)
      {
        if (this.tabCandidats[i].parti==false)
        n++;
      }
       
      return n;
    }
 add1(i)
 {
  this.tabCandidats[i].nb++;
 }
  constructor() { 
 
  }

  ngOnInit() {
  }

}
