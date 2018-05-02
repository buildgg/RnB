import {RnBRecord} from './rnb-shared-structures';

export class User implements RnBRecord{
  constructor(public name: string,
              public password: string,
              public role: string,
              public $id: string) {
  }
}

