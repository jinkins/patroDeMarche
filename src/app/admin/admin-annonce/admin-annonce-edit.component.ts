import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Rx";

import { AnnonceService } from '../../annonce/annonce.service';
import { Annonce } from '../../annonce/annonce';
import { TranslateStatusPipe } from './translate-status.pipe';

import {
  FormArray,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

@Component({
  selector: 'app-admin-annonce-edit',
  templateUrl: './admin-annonce-edit.component.html'
})
export class AdminAnnonceEditComponent implements OnInit {

  private id: string;
  private subscription: Subscription;
  private modeEdit: boolean;
  private annonceForm: FormGroup;
  private resultat: any;
  private annonce: Annonce;

  constructor(private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private annonceService: AnnonceService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.id = params['id'];
          if (this.id === 'new') {
            this.modeEdit = false;
          }
          else {
            this.modeEdit = true;
            this.annonceService.getAnnonce(this.id).subscribe(
              (data) => {
                this.annonce = data as Annonce;
                this.annonce.idFirebase = this.id;
                this.initForm();
              }
            )
          }
        }
      }
    )

    this.initForm();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private initForm() {
    let t: string;
    let d: string;
    let a: FormArray = this.formBuilder.array(
      [
        new FormControl('', Validators.required)
      ]
    );
    let dp: Date = new Date(Date.now());
    let idFirebase: string = '';

    if (this.modeEdit == true && this.annonce) {
      t = this.annonce.titre;
      d = this.annonce.description;
      if (this.annonce.hasOwnProperty('audience')) {
        let fc: FormControl[] = [];
        for (let i = 0; i < this.annonce.audience.length; i++) {
          fc.push(new FormControl(this.annonce.audience[i], Validators.required))
        }
        a = this.formBuilder.array(fc);
      }
      dp = this.annonce.datePublication;
      idFirebase = this.annonce.idFirebase;
    }


    this.annonceForm = this.formBuilder.group({
      'titre': [t, Validators.required],
      'description': [d, Validators.required],
      'audience': a,
      'datePublication': [dp],
      'idFirebase': [idFirebase]
    });

  }

  onAddItem(qui: string) {
    (<FormArray>this.annonceForm.controls['audience']).push(
      new FormControl('', Validators.required)
    );
  }

  onSubmit() {
    let titre: string = this.annonceForm.value["titre"];
    let description: string = this.annonceForm.value["description"];
    let audience: string[] = this.annonceForm.value["audience"];
    let datePublication: Date = new Date(this.annonceForm.value["datePublication"]);
    let idFirebase: string = this.annonceForm.value["idFirebase"];

    let annonce: Annonce = new Annonce(titre, description, audience, datePublication, idFirebase);


    if (this.modeEdit) {
      this.annonceService.updateAnnonce(annonce).subscribe(

        (data) => {
          this.resultat = data;
        }
      );
    }
    else {
      this.annonceService.addAnnonce(annonce).subscribe(
        (data) => {
          this.resultat = data;
          annonce.idFirebase = data.json().name;
          
          this.annonceService.annonceAdded.emit(annonce);
          this.router.navigate(['/Admin/Annonces']);
        }
      )
    }

  }

  onRemoveItem(i: number) {
    (<FormArray>this.annonceForm.controls["audience"]).removeAt(i);
  }

  onRemoveAnnonce(){
    if(this.id != "new"){
      this.annonceService.removeAnnonce(this.id).subscribe(
        (data) => {
          this.annonceService.annonceDeleted.emit(this.id);
          this.router.navigate(['/Admin/Annonces']);
        }
      )
    }
  }

}
