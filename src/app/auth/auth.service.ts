import {Injectable} from '@angular/core';
import {User} from '../shared/models/user.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';

export const USERS: User[] = [
  new User('admin', '123321', '10'),
  new User('boss', '123321', '20'),
  new User('test', '123321', '30')
];


@Injectable()
export class AuthService {
  isLoggedIn = true;
  redirectUrl: string;
  currentUser: User = new User(null, null, null);


  checkUser(name: string, password: string) {
    USERS.forEach(
      (value: User) =>
        console.log(value.name === name && value.password === password)
    );
  }

  login(name: string, password: string) {
    return Observable.from(USERS)
      .delay(300)
      .filter(user => user.name === name && user.password === password)
      .do(user => {
        if (user.name === name && user.password === password) {
          this.isLoggedIn = true;
          this.currentUser = user;
        }
      }).first();
  }

  logout(): void {
    this.isLoggedIn = false;
    this.currentUser = null;
  }
}
