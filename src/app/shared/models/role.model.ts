import {User} from './user.model';

export class Role {
  constructor(public name: string,
              public user: User[],
              public $id?: string) {
  }
}
