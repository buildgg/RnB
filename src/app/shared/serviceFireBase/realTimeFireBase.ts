import { Injectable} from '@angular/core';
import {$id, RnBRecord} from '../models/rnb-shared-structures';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import {AngularFireDatabase,  AngularFireList} from 'angularfire2/database';


@Injectable()
export class RnbRealTimeFireBaseService  {

    private _dataList: AngularFireList<any>;

    constructor(private db: AngularFireDatabase) {
    }

    innerGetDataList(listName: string): AngularFireList<any> {
        this._dataList = this.db.list(listName);
        return this._dataList;
    }


    getDataList<T>(listName: string): Observable<T[]> {
        const pubSub = new Subject<T[]>();
        let innerArray = new Array<T>();
        this.innerGetDataList(listName).snapshotChanges().subscribe(
            item => {
                innerArray = [];
                item.forEach(element => {
                    const y = element.payload.toJSON();
                    y['$id'] = element.key;
                    innerArray.push(y as T);
                });
                pubSub.next(innerArray);
            }
        );
        return pubSub.asObservable();
    }

    insertRecord(oneRecord: RnBRecord, listName: string): Observable<$id> {
        const pubSub = new Subject<$id>();
        const rezInstance = {} as RnBRecord;
        for (const objProp in oneRecord) {
            if (objProp !== '$id') {
                rezInstance[objProp] = oneRecord[objProp];
            }
        }
        Observable.fromPromise<$id>(this.innerGetDataList(listName).push(rezInstance).then<$id>(value => {
                pubSub.next(value.key);
                return value.key;
            },
            value => {
                pubSub.next('ошибка при попытке push');
                return value.key;
            }));
        return pubSub.asObservable();
    }

    updateRecord(oneRecord: RnBRecord, listName: string) {
        const rezultInstance = {} as RnBRecord;
        const rezultInstanceIDField = {} as RnBRecord;
        for (const objProp in oneRecord) {
            if (objProp !== '$id') {
                rezultInstance[objProp] = oneRecord[objProp];
            } else {
                rezultInstanceIDField[objProp] = oneRecord[objProp];
            }
        }
        this.innerGetDataList(listName).update(rezultInstanceIDField.$id, rezultInstance);
    }


    deleteRecord(oneRecord: RnBRecord, listName: string) {
        this.innerGetDataList(listName).remove(oneRecord.$id);
    }


}
