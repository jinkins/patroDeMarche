import { Pipe, PipeTransform } from '@angular/core';
import { Event } from './event';

@Pipe({
  name: 'futureAndSorted'
})
export class FutureAndSortedPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    if(value.length === 0){
      return value; 
    }

    let futureEvents: Event[] = new Array<Event>(); 

    for (let event of value){
      console.log(event.quand.getTime());
      if(event.quand.getTime() >= Date.now()){
        futureEvents.push(event); 
      }
    }

    if(!futureEvents){
      return futureEvents; 
    }
    
    return futureEvents.sort(
      (a:Event, b:Event) => {
        if(a.quand.getTime() > b.quand.getTime()){
          return 1; 
        }
        else if(a.quand.getTime() === b.quand.getTime()) {
          return 0;
        }
        else{
          return -1; 
        }
      }
    );
    
  }

}
