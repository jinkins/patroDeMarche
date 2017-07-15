import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Rx";
import { Router } from "@angular/router";

import { AuthService } from "../shared/auth.service";

import {
  FormArray,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  private loginForm: any; 

  constructor(private formBuilder: FormBuilder, private af: AuthService, private r: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    }
    )
  }

  onSubmit(){
    this.af.signUpUSer(this.loginForm.value["email"], this.loginForm.value["password"]);
    if(this.getError() === null){
      this.r.navigate(['/']);
    }

  }

  getError()
  {
    return this.af.getErrorText()
  }
}
