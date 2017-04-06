import { Component, OnInit, OnDestroy } from '@angular/core';
import { Annonce } from './annonce';
import { AnnonceService } from './annonce.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {

  annonces: Annonce[];
  constructor(private sa: AnnonceService) {}

  ngOnInit() {
    this.sa.getAnnonces().subscribe(
      (data) => {
        data = this.sa.valuesToArray(data);
        this.annonces = data as Annonce[];
        console.log(this.annonces);
        this.annonces = this.sa.triParDate(this.annonces);
      }
    )
  }
}