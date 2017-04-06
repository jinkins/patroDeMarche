import { Routes, RouterModule } from '@angular/router';
import { AdminAnnonceComponent} from './admin-annonce/admin-annonce.component';
import { ADMIN_ANNONCE_ROUTES } from './admin-annonce/admin-annonce.routing';
import { AdminCampComponent} from './admin-camp/admin-camp.component';
import { ADMIN_EVENT_ROUTES } from './admin-event/admin-event.routing';
import { AdminEventComponent } from './admin-event/admin-event.component';

export const ADMIN_ROUTES = [
    { path: 'Annonces', component: AdminAnnonceComponent, children: ADMIN_ANNONCE_ROUTES},
    { path: 'Camp', component: AdminCampComponent},
    { path: 'Events', component: AdminEventComponent, children: ADMIN_EVENT_ROUTES},
]
