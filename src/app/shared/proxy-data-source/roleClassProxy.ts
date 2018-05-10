import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {RnbRealTimeFireBaseService} from '../serviceFireBase/realTimeFireBase';
import {Role} from '../models';

@Injectable()
export class RoleClassProxy {


    constructor(private fireservice: RnbRealTimeFireBaseService) {
    }

    getUsers(): Observable<Role[]> {
        return this.fireservice.getDataList <Role>('role');
    }

}