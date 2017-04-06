import { Component, OnInit } from '@angular/core';
import { Camp } from './camp';
import { CampService } from './camp.service';

@Component({
  selector: 'app-camp',
  templateUrl: './camp.component.html',
  styleUrls: ['./camp.component.css']
})
export class CampComponent implements OnInit {

  camp: Camp;

  constructor(private cs: CampService) { }

  ngOnInit() {
    this.cs.getCamp().subscribe(
      (data) => {
        this.camp = data as Camp;
      }
    )
  }
}
