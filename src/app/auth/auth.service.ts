import {Injectable} from '@angular/core';
import {User} from '../shared/models/user.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/filter';

export const USERS: User[] = [
  new User('admin', '123321', '10'),
  new User('boss', '123321', '20'),
  new User('test', '123321', '30')
];


@Injectable()
export class AuthService {
  isLoggedIn = false;
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
      .do(user => {
        if (user.name === name && user.password === password) {
          this.isLoggedIn = true;
          this.currentUser = user;
        }
      })
      .filter(user => user.name === name && user.password === password);
  }

  logout(): void {
    this.isLoggedIn = false;
    this.currentUser = null;
  }
}
