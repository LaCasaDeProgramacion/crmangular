import { UserService } from './user.service';

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService implements CanActivate {
  constructor(private serviceUser : UserService , private route : Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if((localStorage.getItem('loggedIn')=="true"))
      {
        return true ;
      }
      else {
        this.route.navigate(['login']) ;
      }
      return false ;
  }
}
