import {User} from './user.model';
import {RnBRecord} from './rnb-shared-structures';

export class Role implements RnBRecord{
  constructor(public name: string,
              public users: User[],
              public $id: string) {
  }
}
