import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user.model';
// import {UserStaticData} from '../staticDataMockup/userStaticData';
import {RnbRealTimeFireBaseService} from '../serviceFireBase/realTimeFireBase';

@Injectable()
export class UserClassProxy {

    selectdUser: User = new User(null, null, null, null);

    constructor(private fireservice: RnbRealTimeFireBaseService) {
     }

    getUsers(): Observable<User[]> {
         return this.fireservice.getDataList <User>('user');
    }

    updateUser (recordToUpdate: User) { this.fireservice.updateRecord( recordToUpdate, 'user' ); }

}