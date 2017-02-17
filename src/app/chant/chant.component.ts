import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ChantService } from './chant.service';
import { Chant } from './chant';

@Component({
  selector: 'app-chant',
  templateUrl: './chant.component.html',
  styleUrls: ['./chant.component.css']
})
export class ChantComponent implements OnInit {

  constructor(private cs: ChantService) {
   }

  chant: Chant; 

  ngOnInit() { 
  }

  chantSelected(event){
    this.chant = event; 
  }
}
