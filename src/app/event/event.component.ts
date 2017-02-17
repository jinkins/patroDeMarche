import { Component, OnInit } from '@angular/core';
import { Event } from './event';
import { EventService } from './event.service';
import { FutureAndSortedPipe } from './future-and-sorted.pipe';
import 'rxjs/Rx';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  private events: Event[]

  constructor(private es: EventService) { }

  ngOnInit() {
    this.es.getEvents().subscribe(
      (data) => {
        this.events = data as Event[]; 
        for( let i=0; i< this.events.length; i++){
          this.events[i].quand = new Date(this.events[i].quand); 
        }
      } 
    )
  }

  getTemplateClass(i:number){
    if(i % 2 == 0){
      return "";
    }
    else{
      return "timeline-inverted";
    }

  }

}
