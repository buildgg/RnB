import {User} from './user.model';

export class Role {
  constructor(public name: string,
              public users: User[],
              public $id?: string) {
  }
}
