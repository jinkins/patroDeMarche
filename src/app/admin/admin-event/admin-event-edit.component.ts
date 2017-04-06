import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Rx";

import { EventService } from '../../event/event.service';
import { Event } from '../../event/event';
import {
  FormArray,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";



@Component({
  selector: 'app-admin-event-edit',
  templateUrl: './admin-event-edit.component.html'
})
export class AdminEventEditComponent implements OnInit {

  private event: Event;
  private subscription: Subscription;
  private id: string;
  private modeEdit: boolean = false;
  private eventForm;
  private resultat: any;

  constructor(private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private es: EventService) {
    this.event = new Event('', '', new Date(), [], '')
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.id = params['id'];
          if (this.id === 'new') {
            this.modeEdit = false;
            console.log("CREATION");
          }
          else {
            this.modeEdit = true;
            this.es.getEvent(this.id).subscribe(
              (data) => {
                if (data) {
                  this.event = data as Event;
                  this.event.idFirebase = this.id;
                  this.event.quand = this.convertDate(data.quand);
                  this.initForm();
                }
                else{
                  this.router.navigate(['/Admin/Events']);
                }
              }
            )
          }
        }
      }
    )
    this.initForm();
  }

  private initForm() {
    let t: string;
    let d: string;
    let a: FormArray = this.formBuilder.array(
      [
        new FormControl('', Validators.required)
      ]
    );
    let quand: Date = new Date(Date.now());

    let idFirebase: string = '';

    if (this.modeEdit == true && this.event) {
      t = this.event.titre;
      d = this.event.description;
      if (this.event.hasOwnProperty('audience')) {
        let fc: FormControl[] = [];
        for (let i = 0; i < this.event.audience.length; i++) {
          fc.push(new FormControl(this.event.audience[i], Validators.required))
        }
        a = this.formBuilder.array(fc);
        quand = this.event.quand;
        idFirebase = this.event.idFirebase;
      }
    }

    this.eventForm = this.formBuilder.group({
      'titre': [t, Validators.required],
      'description': [d, Validators.required],
      'audience': a,
      'jour': [quand.getDate()],
      'mois': [quand.getMonth()],
      'annee': [quand.getFullYear()],
      'heure': [quand.getHours()],
      'minute': [quand.getMinutes()],
      'idFirebase': [idFirebase]
    });
  }

  onAddItem(qui: string) {
    (<FormArray>this.eventForm.controls['audience']).push(
      new FormControl('', Validators.required)
    );
  }

  onSubmit() {
    let titre: string = this.eventForm.value["titre"];
    let description: string = this.eventForm.value["description"];
    let audience: string[] = this.eventForm.value["audience"];

    let quand = new Date(
      this.eventForm.value["annee"],
      this.eventForm.value["mois"],
      this.eventForm.value["jour"],
      this.eventForm.value["heure"],
      this.eventForm.value["minute"],
      0
    );

    let idFirebase: string = this.eventForm.value["idFirebase"];

    let event: Event = new Event(titre, description, quand, audience, idFirebase);

    if (this.modeEdit) {
      this.es.updateEvent(event).catch(
        e => console.log(e)
      ).then(() => console.log("Success"))
    }
    else {
      this.es.addEvent(event).catch(
        e => console.log(e)
      ).then(
        () => console.log("Success")
        )
    }

  }

  onRemoveItem(i: number) {
    (<FormArray>this.eventForm.controls["audience"]).removeAt(i);
  }

  onRemoveEvent() {
    this.es.deleteEvent(this.event);
    this.router.navigate(['/Admin/Events']);
  }

  convertDate(d: string) {
    let jours: number = parseInt(d.substr(8, 2));
    let mois: number = parseInt(d.substr(5, 2));
    let annee: number = parseInt(d.substr(0, 4));

    let heure: number = parseInt(d.substr(11, 2));
    let minutes: number = parseInt(d.substr(14, 2));

    return new Date(annee, (mois - 1), jours, heure, minutes);
  }

  ceJour(i: number) {
    if (typeof this.event.quand != "undefined") {
      return this.event.quand.getDate() == i;
    }
    return false;
  }

  ceMois(i: number) {
    if (typeof this.event.quand != "undefined") {
      return this.event.quand.getMonth() == i;
    }
    return false;
  }
}
