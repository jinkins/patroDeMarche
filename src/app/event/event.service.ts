import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Event } from './event';
import { AngularFire } from 'angularfire2';

@Injectable()
export class EventService {

  constructor(private http: Http, private af: AngularFire) { }

  private events: Event[];

  getEvents() {
    return this.af.database.list('/events');
  }

  public isInThePast(date: Date) {
    let now = new Date();
    if (date.getTime() >= now.getTime()) {
      return false;
    } else {
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

  getEvent(id: string) {
    return this.af.database.object("/events/"+id);  
  }

  updateEvent(e: Event){
    let event = new EventJSON(e);
    return this.af.database.object("/events/"+e.idFirebase).set(event);
  }

  addEvent(e: Event){
    let event = new EventJSON(e);
    return this.af.database.list("/events/").push(event);
  }

  deleteEvent(e: Event){
    let event = new EventJSON(e);
    return this.af.database.object("/events/"+e.idFirebase).set(null);
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

class EventJSON{
    public titre: string;
    public description: string;
    public quand: string;
    public audience: string[];

    constructor(e:Event) {
        this.titre = e.titre;
        this.description = e.description;
        this.quand = e.quand.toJSON();
        this.audience = e.audience;
    }
}