import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BBD} from '../models/bbd.model';
import {RnbRealTimeFireBaseService} from '../serviceFireBase/realTimeFireBase';

@Injectable()
export class BBDProxyService {


    constructor(private fireservice: RnbRealTimeFireBaseService) {
    }

    getBBD(): Observable<BBD[]> {
        return this.fireservice.getDataList <BBD>('BBD');
    }

}