import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

import { Annonce } from './annonce';

@Injectable()
export class AnnonceService {

  private annonces: Annonce[];
  public annonceAdded = new EventEmitter<Annonce>();
  public annonceEdited = new EventEmitter<Annonce>();
  public annonceDeleted = new EventEmitter<string>(); 

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

  getAnnonce(id: string) {
    return this.http.get("https://patro-de-marche.firebaseio.com/annonces/" + id + ".json")
      .map(
      (response: Response) => response.json()
      );
  }

  addAnnonce(a: Annonce) {

    let a2 = new AnnonceJSON(a);
    const body = JSON.stringify(a2);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post('https://patro-de-marche.firebaseio.com/annonces.json', body, { headers: headers });
  }

  updateAnnonce(a: Annonce) {
    let a2 = new AnnonceJSON(a);
    const body = JSON.stringify(a2);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.put("https://patro-de-marche.firebaseio.com/annonces/" + a.idFirebase + ".json", body, { headers: headers });

  }

  removeAnnonce(id){
    return this.http.delete("https://patro-de-marche.firebaseio.com/annonces/" + id + ".json");
  }

  valuesToArray(obj) {
    var result = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        obj[key].idFirebase = key;
        result.push(obj[key]);
      }
    }
    return result;
  }

}

class AnnonceJSON {
  public titre: string;
  public description: string;
  public audience: string[];
  public datePublication: Date;

  constructor(a: Annonce) {
    this.audience = a.audience;
    this.description = a.description;
    this.titre = a.titre;
    this.datePublication = a.datePublication;
  }
}
