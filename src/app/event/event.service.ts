import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Event } from './event';

@Injectable()
export class EventService {

  constructor(private http: Http) { }

  private events: Event[]; 

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

    triParDate(events: Event[]) {
    // Convert string into Date. 
    for (let i = 0; i < events.length; i++) {
      events[i].quand = new Date(events[i].quand);
    }

    // Sort the array by quand DESC. 
    events.sort((a: Event, b: Event) => {
      if (a.quand.getTime() === b.quand.getTime()) {
        return 0;
      }
      else if (a.quand.getTime() > b.quand.getTime()) {
        return 1;
      }
      else {
        return -1;
      }
    }).reverse();
    return this.events; 
  }


}
