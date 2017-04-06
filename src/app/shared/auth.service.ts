import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { Observable, Subject } from "rxjs/Rx";

import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class AuthService {
  constructor(private router: Router, private af: AngularFire, private r: Router) {
    this.af.auth.subscribe(
      (authState) => {
      this.authState = authState;
      }
    )
  }

  private authState: FirebaseAuthState;
  private error: any = null;

  getState() {
    if (this.error) {
      return this.authState
    }
    return null;
  }

  getError() {
    if (this.error) {
      return this.error;
    }
    return null;
  }

  getErrorCode() {
    var r = this.getError();
    if (r) {
      return r.code;
    }

    return null;
  }

  getErrorText() {
    var r = this.getErrorCode();
    if (r) {
      if (r === "auth/wrong-password") {
        return "Mot de passe incorrect"
      }
      else if (r === "auth/user-not-found") {
        return "Aucun utilisateur connu pour cette adresse email"
      }
      else {
        return "Erreur lors de la connexion";
      }
    }
  }

  getUser() {
    return this.authState;
  }

  getUserID(): string{
    if(this.authState){
      return this.authState.uid;
    }
    return null; 
  }

  signUpUSer(e, p): void {
    this.af.auth.login({
      email: e,
      password: p,
    },
    ).then(
      authState => {
        this.authState = authState;
        this.r.navigate(['/']);
      }
      )
      .catch(
      error => {
        this.error = error;
      }
      )
  }

  logout(): void {
    this.af.auth.logout();
  }

}
