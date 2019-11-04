import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orientation',
  templateUrl: './orientation.component.html',
  styleUrls: ['./orientation.component.css']
})
export class OrientationComponent implements OnInit {
  etudiant={nom:'Ali', moyenne:19.85};
  parcour=['DSI','RSI','SEM']
  titre="Orientation Etudiant";
  choix:string='DSI';

  constructor() { }

  ngOnInit() {
  }

}
