import {Injectable} from '@angular/core';
import {User} from '../shared/models/user.model';
import {Observable} from 'rxjs';
import { tap, filter, first } from 'rxjs/operators';
import { from } from 'rxjs';





export const USERS: User[] = [
    new User('10', 'admin', '123321', '10', 'Тестовая Роль1'),
    new User('20', 'boss', '123321', '11', 'Тестовая Роль2'),
    new User('30', 'test', '123321', '12', 'Тестовая Роль3'),
    new User('40', 'otherboss', '123321', '14', 'Тестовая Роль4')
];

@Injectable()
export class AuthService {
  isLoggedIn = true;
  redirectUrl: string;
  currentUser: User = new User(null, null, null, null, null);

  checkUser(name: string, password: string) {
    USERS.forEach(
      (value: User) =>
        console.log(value.name === name && value.password === password)
    );
  }

  login(name: string, password: string) {
    return from(USERS).pipe(
      filter(user => user.name === name && user.password === password),
      tap(user => {
        if (user.name === name && user.password === password) {
          this.isLoggedIn = true;
          this.currentUser = user;
        }
      }),
        first());
  }

  logout(): void {
    this.isLoggedIn = false;
    this.currentUser = null;
  }
}
