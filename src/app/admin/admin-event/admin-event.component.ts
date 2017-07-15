import { Component, OnInit } from '@angular/core';
import { EventService } from '../../event/event.service';
import { Event } from '../../event/event';

@Component({
  selector: 'app-admin-event',
  templateUrl: './admin-event.component.html',
  styleUrls: ['./admin-event.component.css']
})
export class AdminEventComponent implements OnInit {

  private events: Event[];

  constructor(private es: EventService) {
    this.events = [];
   }

  ngOnInit() {

    this.es.getEvents().subscribe(
      data => {
        this.events = [];
        for(let i = 0; i < data.length; i++){
          this.events.push(data[i]);
          this.events[i].idFirebase = data[i].$key; 
        }
      }
    )
  }
}
