import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user.model';
// import {UserStaticData} from '../staticDataMockup/userStaticData';
import {RnbRealTimeFireBaseService} from '../serviceFireBase/realTimeFireBase';

@Injectable()
export class UserClassProxy {
    private users: User[];

    constructor(private fireservice: RnbRealTimeFireBaseService) {
        // this.users = usersData.getdata();
    }

    getUsers(): Observable<User[]> {
        // return Observable.from([this.users]);
        return this.fireservice.getDataList <User>('user');
    }

}