import { ChantService } from './../../chant/chant.service';
import { Chant } from './../../chant/chant';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin-chant',
  templateUrl: './admin-chant.component.html',
  styleUrls: ['./admin-chant.component.css']
})
export class AdminChantComponent implements OnInit {

  chants: Chant[];

  constructor(private cs: ChantService) {
    this.chants = [];
   }

  ngOnInit() {
    this.cs.getChants().subscribe(
      data => {
        console.log(data);
        this.chants = [];
        for (let i = 0; i < data.length; i++) {
          this.chants.push(data[i]);
          this.chants[i].idFirebase = data[i].$key;
        }
      }
    );
  }
}
