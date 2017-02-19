import { Route } from '@angular/router';
import { AdminAnnonceEditComponent } from './admin-annonce-edit.component'; 

export const ADMIN_ANNONCE_ROUTES = [
    { path: 'new', component: AdminAnnonceEditComponent}, 
    { path : ':id' , component: AdminAnnonceEditComponent}
]