import {Injectable} from '@angular/core';

import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Injectable()
export class AuthSandbox {
  url: string;
    constructor(private authService: AuthService,
              public router: Router) {}

  signIn(name: string, password: string) {

    this.authService.login(name, password).subscribe(() => {
      if (this.authService.isLoggedIn) {
          if (this.authService.redirectUrl) {
            this.url = this.authService.redirectUrl;
          } else {
            this.url = '';
          }
          this.router.navigate([this.url]);
      } else {
        console.log('false!!');
          return false;
        }

    }
    );
  }
}
