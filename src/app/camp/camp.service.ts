import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Camp } from './camp';

@Injectable()
export class CampService {

  constructor(private http: Http) { }

  getCamp(){
    return this.http.get("https://patro-de-marche.firebaseio.com/camp.json").map(
      (response: Response) => response.json()
    );
  }

  updateCamp(camp: Camp){
    
    const body = JSON.stringify(camp);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.put("https://patro-de-marche.firebaseio.com/camp.json", body, { headers: headers} )
  }


}
