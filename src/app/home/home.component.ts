import { Component, OnInit, OnDestroy } from '@angular/core';
import { Annonce } from '../annonce/annonce';
import { AnnonceDetailComponent } from '../annonce/annonce-detail.component';
import { AnnonceService } from '../annonce/annonce.service';
import { EventDetailComponent } from '../event/event-detail/event-detail.component';
import { EventService } from '../event/event.service';
import { Event } from '../event/event';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  derniereAnnonce: Annonce = null; 
  dernierEvent: Event = null;
  quand: string = 'Chaque samedi'; 
  heure: string = 'De 14h00 à 17h00'
  lieu: string = 'Parc Van Der Straeten, Marche-en-Famenne'
  prix: number = 30; 
  presidente =  {
    nom: 'Beckers',
    prenom: 'Claire',
    telephone: '0471/34.23.63'
  };
  vp = {
    nom: 'Denis',
    prenom: 'Aline',
    telephone: '0483/42.00.30'
  };

  constructor(private as: AnnonceService, private es: EventService) { }

  ngOnInit() {
    this.as.getAnnonces().subscribe(
      (data: Annonce[]) => {
        data = this.as.valuesToArray(data);
        let allAnnonces: Annonce[] = data as Annonce[];
        this.as.triParDate(allAnnonces);
        this.derniereAnnonce = allAnnonces[0];
      }
    );
    this.es.getEvents().subscribe(
      (data: Event[]) => {
        let allEvents: Event[] = data as Event[];
        this.es.triParDate(allEvents);
        this.dernierEvent = allEvents[0];
      }
    )
  }

  ngOnDestroy() {
  }

  

}
