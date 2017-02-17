import { Injectable } from '@angular/core';
import { Chant } from './chant';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ChantService {

  constructor(private http: Http) { }

  getChants(){
    return this.http.get('https://patro-de-marche.firebaseio.com/chants.json').map(
        (response: Response) => response.json()
      );
  }
  

}
