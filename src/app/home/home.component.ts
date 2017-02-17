import { Component, OnInit, OnDestroy } from '@angular/core';
import { Annonce } from '../annonce/annonce';
import { AnnonceDetailComponent } from '../annonce/annonce-detail.component';
import { AnnonceService } from '../annonce/annonce.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  derniereAnnonce: Annonce = null; 
  quand: string = 'Chaque samedi'; 
  heure: string = 'De 14h00 à 17h00'
  lieu: string = 'Parc Van Der Straeten, Marche-en-Famenne'
  prix: number = 30; 
  presidente =  {
    nom: 'Beckers',
    prenom: 'Claire',
    telephone: ''
  };
  vp = {
    nom: 'Denis',
    prenom: 'Aline',
    telephone: ''
  };

  constructor(private as: AnnonceService) { }

  ngOnInit() {
    this.as.getAnnonces().subscribe(
      (data: Annonce[]) => {
        let allAnnonces: Annonce[] = data as Annonce[];
        this.as.triParDate(allAnnonces);
        this.derniereAnnonce = data[0];
      }
    );
  }

  ngOnDestroy() {
  }

  

}
