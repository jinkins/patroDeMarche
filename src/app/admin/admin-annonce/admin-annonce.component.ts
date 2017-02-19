import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../../annonce/annonce.service';
import { Annonce } from '../../annonce/annonce';

@Component({
  selector: 'app-admin-annonce',
  templateUrl: './admin-annonce.component.html'
})
export class AdminAnnonceComponent implements OnInit {

  private annonces: Annonce[]; 

  constructor(private sa: AnnonceService) { }

  ngOnInit() {
    this.sa.getAnnonces().subscribe(
      (data) => {
        this.annonces = data as Annonce[];
        console.log(this.annonces);
        this.annonces = this.sa.triParDate(this.annonces);
      }
    )
  }

}
