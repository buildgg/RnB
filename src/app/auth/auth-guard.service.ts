import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor (private service: AuthService,
               private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {

    const url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.service.isLoggedIn) { return true; }

    this.service.redirectUrl = url;

    this.router.navigate(['/sign-in']);
    return false;
  }

  /*

    console.log('AuthGuard#canActivate called');
    this.service.checkUser('test2', '123321');
    return true;*/

}
