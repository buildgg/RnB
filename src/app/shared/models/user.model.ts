import {Role} from './role.model';

export class User {
  constructor(public name: string,
              public password: string,
              public role: Role,
              public $id?: string) {
  }
}
