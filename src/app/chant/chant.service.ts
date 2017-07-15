import { Injectable } from '@angular/core';
import { Chant } from './chant';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { AngularFire } from 'angularfire2';

@Injectable()
export class ChantService {

  constructor(private http: Http, private af: AngularFire) { }

  getChants(){
    return this.af.database.list('/chansons');
  }

  getChant(id:string){
    return this.af.database.object('/chansons/'+id);
  }

  addChant(c: Chant){
    return this.af.database.list('/chansons/').push({
      titre: c.titre,
      url: c.url
    });
  }

  updateChant(c: Chant){
    return this.af.database.object('/chansons/'+c.idFirebase).set({
      titre: c.titre,
      url: c.url
    })
  }
  

}
