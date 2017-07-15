import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { AnnonceDetailComponent } from './annonce/annonce-detail.component';
import { CampComponent } from './camp/camp.component';
import { EquipeComponent } from './equipe/equipe.component';
import { AnnonceService } from './annonce/annonce.service';
import { ChantComponent } from './chant/chant.component';
import { ChantListComponent } from './chant/chant-list/chant-list.component';
import { ChantStartComponent } from './chant/chant-start/chant-start.component';
import { ChantService } from './chant/chant.service';
import { EventComponent } from './event/event.component';
import { EventService } from './event/event.service';
import { FutureAndSortedPipe } from './event/future-and-sorted.pipe';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { AdminAnnonceComponent } from './admin/admin-annonce/admin-annonce.component';
import { AdminComponent } from './admin/admin.component';
import { AdminAnnonceEditComponent } from './admin/admin-annonce/admin-annonce-edit.component';
import { TranslateStatusPipe } from './admin/admin-annonce/translate-status.pipe';
import { AdminCampComponent } from './admin/admin-camp/admin-camp.component';
import { CampService } from './camp/camp.service';
import { AdminEventComponent } from './admin/admin-event/admin-event.component';
import { AdminEventEditComponent } from './admin/admin-event/admin-event-edit.component';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { AuthService } from './shared/auth.service';
import { LoginComponent } from './login/login.component';
import { PhotoComponent } from './photo/photo.component';
import { AuthGuard } from './shared/auth.guard';
import { AdminGuard } from './shared/admin.guard';
import { AdminChantComponent } from './admin/admin-chant/admin-chant.component';
import { AdminChantEditComponent } from './admin/admin-chant/admin-chant-edit.component'; 

export const firebaseConfig = {
  apiKey: "AIzaSyBb8MuJRpBNijjeRBP7-LU8-ov34-FnE-Q",
  authDomain: "patro-de-marche.firebaseapp.com",
  databaseURL: "https://patro-de-marche.firebaseio.com",
  storageBucket: "patro-de-marche.appspot.com",
  messagingSenderId: "419705544637"
};

export const firebaseAuthConfig = {
  method: AuthMethods.Password,
  provider: AuthProviders.Password
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnnonceComponent,
    AnnonceDetailComponent,
    CampComponent,
    EquipeComponent,
    ChantComponent,
    ChantListComponent,
    ChantStartComponent,
    EventComponent,
    FutureAndSortedPipe,
    EventDetailComponent,
    AdminAnnonceComponent,
    AdminComponent,
    AdminAnnonceEditComponent,
    TranslateStatusPipe,
    AdminCampComponent,
    AdminEventComponent,
    AdminEventEditComponent,
    LoginComponent,
    PhotoComponent,
    AdminChantComponent,
    AdminChantEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [AnnonceService, ChantService, EventService, CampService, AuthService, AuthGuard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
