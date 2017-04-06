import { Component, OnInit, Input } from '@angular/core';
import { Annonce } from '../annonce/annonce'; 

@Component({
  selector: 'app-annonce-detail',
  templateUrl: './annonce-detail.component.html',
  styleUrls: ['./annonce-detail.component.css']
})
export class AnnonceDetailComponent implements OnInit {

  @Input() annonce:Annonce = null; 

  constructor() { }

  ngOnInit() {
    
  }

}