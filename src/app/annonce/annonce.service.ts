import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { Annonce } from './annonce';

@Injectable()
export class AnnonceService {

  private annonces: Annonce[];
  annoncesChanged = new EventEmitter<Annonce[]>();

  constructor(private http: Http) {
  }

  triParDate(annonces: Annonce[]) {
    // Convert string into Date. 
    for (let i = 0; i < annonces.length; i++) {
      annonces[i].datePublication = new Date(annonces[i].datePublication);
    }

    // Sort the array by DatePublication DESC. 
    annonces.sort((a: Annonce, b: Annonce) => {
      if (a.datePublication.getTime() === b.datePublication.getTime()) {
        return 0;
      }
      else if (a.datePublication.getTime() > b.datePublication.getTime()) {
        return 1;
      }
      else {
        return -1;
      }
    }).reverse();
    return annonces; 
  }

  getAnnonces() {
    return this.http.get("https://patro-de-marche.firebaseio.com/annonces.json")
      .map(
        (response: Response) => response.json()
      );
  }

}
