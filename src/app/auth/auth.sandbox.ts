import {Injectable} from '@angular/core';

import {AuthService} from './auth.service';
import {Router} from '@angular/router';

import {Observable} from 'rxjs';
import {User} from '../shared/models/user.model';

@Injectable()
/*@Deprecated()*/
export class AuthSandbox {
  url: string;
  user: User;


  constructor(private authService: AuthService,
              public router: Router) {
    this.user = new User(null, null, null, null, null);
  }

  signIn(name: string, password: string) {

    this.authService.login(name, password).subscribe((user) => {

        if (this.authService.isLoggedIn) {

          if (this.authService.redirectUrl) {
            this.url = this.authService.redirectUrl;
          } else {
            this.url = '';
          }
          this.router.navigate([this.url]);
        }
        this.user = user;
      },
      () => {
        this.user = null;
      }
    );


  }
}
