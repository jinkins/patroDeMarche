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
        this.annonces = this.sa.valuesToArray(data)

        this.annonces = this.annonces as Annonce[];

        if (this.annonces) {
          if (this.annonces.length > 0) {
            this.annonces = this.sa.triParDate(this.annonces);
          }
        }
      }
    );

    this.sa.annonceAdded.subscribe(
      (a: Annonce) => this.annonces.unshift(a)
    );

    this.sa.annonceDeleted.subscribe(
      (id) => {
        for (let i = 0; i < this.annonces.length; i++) {
          this.annonces = this.annonces.filter(
            (e) => {
              return e.idFirebase != id
            }
          )
        }
      }
    )


  }





}
