import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class EventService {

  constructor(private http: Http) { }

  getEvents() {
    return this.http.get('https://patro-de-marche.firebaseio.com/events.json').map(
      (response: Response) => response.json()
    )
  }

  public isInThePast(date: Date) {
        let now = new Date();
        if (date.getTime() >= now.getTime()) {
            console.log("Future");
            return false;
        } else {
            console.log("Passé");
            return true;
        }
    }


}
