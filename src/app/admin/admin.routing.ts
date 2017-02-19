import { Routes, RouterModule } from '@angular/router';
import { AdminAnnonceComponent} from './admin-annonce/admin-annonce.component';
import { ADMIN_ANNONCE_ROUTES } from './admin-annonce/admin-annonce.routing';

export const ADMIN_ROUTES = [
    { path: 'Annonces', component: AdminAnnonceComponent, children: ADMIN_ANNONCE_ROUTES}
]
