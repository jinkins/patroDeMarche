import { ChantService } from './../../chant/chant.service';
import { Chant } from './../../chant/chant';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy } from '@angular/core';

import {
  FormArray,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

@Component({
  selector: 'app-admin-chant-edit',
  templateUrl: './admin-chant-edit.component.html',
  styleUrls: ['./admin-chant-edit.component.css']
})
export class AdminChantEditComponent implements OnInit {

  private id: string;
  private modeEdit: boolean = false;
  private chant: Chant;
  private chantForm: FormGroup;
  private subscription: Subscription

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private cs: ChantService) { }

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
            this.cs.getChant(this.id).subscribe(
              (data) => {
                this.chant = data as Chant;
                this.chant.idFirebase = this.id;
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

  initForm() {
    let t: string;
    let url: string;

    if (this.modeEdit === true && this.chant) {
      t = this.chant.titre;
      url = this.chant.url;
    }

    this.chantForm = this.formBuilder.group({
      titre: [t, Validators.required],
      url: [url, Validators.required]
    })
  }

  onSubmit() {
    console.log(this.chantForm.value);

    let titre: string = this.chantForm.value['titre'];
    let url: string = this.chantForm.value['url'];

    if (this.modeEdit === true) {
      this.chant.titre = titre;
      this.chant.url = url;
      console.log(this.chant);
      this.cs.updateChant(this.chant);
    }
    else {
      this.chant = new Chant(titre, url);
      console.log(this.chant);
      this.cs.addChant(this.chant); 
    }
  }
}



