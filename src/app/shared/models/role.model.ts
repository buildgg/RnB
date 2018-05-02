import {User} from './user.model';
import {RnBRecord} from './rnb-shared-structures';

export class Role implements RnBRecord{
  constructor( public $id: string,
              public name: string,
              public user: string,
              public isAdministrator: string) {
  }
}
