import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    AdminAnnonceEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    routing
  ],
  providers: [AnnonceService, ChantService, EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
