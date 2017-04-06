import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import { Camp } from '../../camp/camp';
import { CampService } from '../../camp/camp.service';

import {
  FormArray,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

@Component({
  selector: 'app-admin-camp',
  templateUrl: './admin-camp.component.html',
  styleUrls: ['./admin-camp.component.css']
})
export class AdminCampComponent implements OnInit {

  private campForm: FormGroup;
  private camp:Camp; 
  private resultat;


  constructor(private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private cs: CampService) {
    
   }

  ngOnInit() {
    this.cs.getCamp().subscribe(
      (data) => {
        this.camp = data as Camp;
        this.camp.quand = this.convertDate(data.quand);
        this.initForm(); 
      }
    );
    this.camp = new Camp('a', new Date(), 'a','a','a','a','a','a','a','a','a',1,1,1,true)
    this.initForm(); 
  }

  initForm(){
    this.campForm = this.formBuilder.group({
      'description': [this.camp.description, Validators.required],
      'lieu': [this.camp.lieu, Validators.required],
      'jour': [this.camp.quand.getDate()],
      'mois': [this.camp.quand.getMonth()],
      'annee': [this.camp.quand.getFullYear()],
      'heure': [this.camp.quand.getHours()],
      'minute': [this.camp.quand.getMinutes()],
      'iTous': [this.camp.infos.tous],
      'iBenjamines': [this.camp.infos.benjamines],
      'iPEtincelles': [this.camp.infos.petitesEtincelles],
      'iGEtincelles': [this.camp.infos.grandesEtincelles],
      'iAlpines': [this.camp.infos.alpines],
      'iGrandes': [this.camp.infos.grandes],
      'iban': [this.camp.iban],
      'communication': [this.camp.communication],
      'complet': [this.camp.prix.one],
      'demi': [this.camp.prix.demi],
      'soeur': [this.camp.prix.soeur],
      'show': [this.showText(this.camp.show)]
      }
    )
  }

  onSubmit(){

    this.camp = new Camp(
      this.campForm.value['description'],
      new Date(this.campForm.value['annee'],this.campForm.value['mois'],this.campForm.value['jour'],this.campForm.value['heure'],this.campForm.value['minute']),
      this.campForm.value['lieu'],
      this.campForm.value['iTous'],
      this.campForm.value['iBenjamines'],
      this.campForm.value['iPEtincelles'],
      this.campForm.value['iGEtincelles'],
      this.campForm.value['iAlpines'],
      this.campForm.value['iGrandes'],
      this.campForm.value['iban'],
      this.campForm.value['communication'],
      this.campForm.value['complet'],
      this.campForm.value['demi'],
      this.campForm.value['soeur'],
      this.showBool(this.campForm.value['show'])
    );

    this.cs.updateCamp(this.camp).subscribe(
      (data) => {
        this.resultat = data.json();
        if(data.status == 200){
          this.router.navigate(['/Camp'])
        }
      }
    );
  }

  // Fonctions annexes

  ceJour(i: number){
    if(typeof this.camp.quand != "undefined"){
      return this.camp.quand.getDate() == i;
    }
    return false; 
  }

  ceMois(i: number){
    if(typeof this.camp.quand != "undefined"){
      return this.camp.quand.getMonth() == i;
    }
    
  }

  convertDate(d: string){
    let jours:number = parseInt(d.substr(8,2)) ;
    let mois:number = parseInt(d.substr(5,2));
    let annee:number = parseInt(d.substr(0,4));

    let heure:number = parseInt(d.substr(11,2));
    let minutes:number = parseInt(d.substr(14,2));

    return new Date(annee, (mois-1), jours, heure, minutes);

  }

  showBool(show){
    return show == "afficher";
  }

  showText(show){
    if(show){
      return "afficher";
    }
    else{
      return "masquer";
    }
  }

}