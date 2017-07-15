import { Component } from '@angular/core';
import { AuthService } from "./shared/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private auth: AuthService){ }

  isLogged(): boolean{
    
    if(this.auth.getUser()) {
      return true; 
    } else{
      return false; 
    }  
  }

  logout(){
    this.auth.logout(); 
  }

  isAdmin(){
    if(this.auth.getUserID() === "9HrJ3AYiPaRsVIuxwr6OAgZKdTe2"){
      return true; 
    }
    else{
      return false; 
    }
  }
  
}
