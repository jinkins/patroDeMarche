import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { AuthService } from './auth.service';

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private as: AuthService, private r: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

        var userID: string = this.as.getUserID();
        if (userID) {
            if (userID === "9HrJ3AYiPaRsVIuxwr6OAgZKdTe2") {
                return true;
            }
        }
        return false;
    }
}
