import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {RnbRealTimeFireBaseService} from '../serviceFireBase/realTimeFireBase';
import {$id} from '../models/rnb-shared-structures';

@Injectable()
export class UserClassProxy {

    selectdUser: User = new User(null, null, null, null);

    constructor(private fireservice: RnbRealTimeFireBaseService) {}

    getUsers(): Observable<User[]> { return this.fireservice.getDataList <User>('user'); }

    updateUser (recordToUpdate: User): Observable <$id> { return this.fireservice.updateRecord( recordToUpdate, 'user' ); }

    deleteUser (recordToDelete: User): Observable <$id> { return this.fireservice.deleteRecord( recordToDelete, 'user' ); }

}