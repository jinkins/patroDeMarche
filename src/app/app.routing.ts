import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { CampComponent } from './camp/camp.component';
import { EquipeComponent } from './equipe/equipe.component';
import { ChantComponent } from './chant/chant.component';
import { EventComponent } from './event/event.component';
import { AdminComponent} from './admin/admin.component';
import { ADMIN_ROUTES } from './admin/admin.routing';
import { LoginComponent } from './login/login.component';
import { PhotoComponent } from './photo/photo.component';
import { AuthGuard } from './shared/auth.guard';
import { AdminGuard } from './shared/admin.guard';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
  { path: 'Annonces', component: AnnonceComponent},
  { path: 'Camp', component: CampComponent, canActivate: [AuthGuard] },
  { path: 'Equipes', component: EquipeComponent },
  { path: 'Chants', component: ChantComponent },
  { path: 'Calendrier', component: EventComponent}, 
  { path: 'Photos', component: PhotoComponent, canActivate: [AuthGuard]}, 
  { path: 'Admin', component: AdminComponent, children: ADMIN_ROUTES, canActivate: [AdminGuard] }
];


export class NameRoutingModule { }

export const routing = RouterModule.forRoot(APP_ROUTES)