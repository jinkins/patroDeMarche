import { Route } from '@angular/router';
import { AdminEventEditComponent} from './admin-event-edit.component';

export const ADMIN_EVENT_ROUTES = [
    { path: 'new', component: AdminEventEditComponent}, 
    { path : ':id' , component: AdminEventEditComponent}
]