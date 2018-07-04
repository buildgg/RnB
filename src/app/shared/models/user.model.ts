import {RnBRecord} from './rnb-shared-structures';

export class User implements RnBRecord{
  constructor( public $id: string,
               public name: string,
               public password: string,
              // public role: Role
               public roleid: string,
               public rolename: string
              ) {
  }
}

