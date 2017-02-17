import { Component, OnInit } from '@angular/core';
import { Camp } from './camp';

@Component({
  selector: 'app-camp',
  templateUrl: './camp.component.html',
  styleUrls: ['./camp.component.css']
})
export class CampComponent implements OnInit {

  camp: Camp;

  constructor() { }

  ngOnInit() {
    this.camp = new Camp(
            "description",
            new Date(),
            "ou",
            "infos pour benjamines",
            "infos pour petites etincelles",
            "infos pour les grandes etincelles",
            "alpines",
            "grandes",
            "numero de compte",
            "communication",
            120,
            60,
            60
    ); 
    console.log(this.camp);
  }

}
