import { Route } from '@angular/router';
import { AdminChantEditComponent } from './admin-chant-edit.component'; 

export const ADMIN_CHANT_ROUTES = [
    { path: 'new', component: AdminChantEditComponent}, 
    { path : ':id' , component: AdminChantEditComponent}
]