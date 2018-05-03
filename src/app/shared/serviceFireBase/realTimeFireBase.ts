import {Injectable} from '@angular/core';
import {$id, RnBRecord} from '../models/rnb-shared-structures';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import 'rxjs/add/operator/timeout';

const FIRE_TIMEOUT = 10000; // ТАЙМАУТ НЕ ПОМАГАЕТ - ОН ТУПО ГЕНЕРИТ ERROR ЧЕРЕЗ ТАЙМАУТ, если ничего не прихоидт с обзёрвбла , на который подписались

@Injectable()
export class RnbRealTimeFireBaseService {

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
            value => {
                innerArray = [];
                value.forEach(element => {
                    const y = element.payload.toJSON();
                    y['$id'] = element.key;
                    innerArray.push(y as T);
                });
                pubSub.next(innerArray);
            },
            value => {pubSub.next(null); }
        );
        return pubSub.asObservable().timeout(FIRE_TIMEOUT);
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
            },
            value => {
                pubSub.error('ошибка при попытке insert');
            }));
        return pubSub.asObservable().timeout(FIRE_TIMEOUT);
    }

    updateRecord(oneRecord: RnBRecord, listName: string): Observable<$id>{
        const pubSub = new Subject<string>();
        const rezultInstance = {} as RnBRecord;
        const rezultInstanceIDField = {} as RnBRecord;
        for (const objProp in oneRecord) {
            if (objProp !== '$id') {
                rezultInstance[objProp] = oneRecord[objProp];
            } else {
                rezultInstanceIDField[objProp] = oneRecord[objProp];
            }
        }
        this.innerGetDataList(listName).update(rezultInstanceIDField.$id, rezultInstance).then(
            value => {
                pubSub.next(rezultInstanceIDField.$id);
            },
            value => {
                pubSub.next('ошибка при попытке update');
            });
        return pubSub.asObservable().timeout(FIRE_TIMEOUT);
    }


    deleteRecord(oneRecord: RnBRecord, listName: string) {
        const pubSub = new Subject<string>();
        this.innerGetDataList(listName).remove(oneRecord.$id).then(
            value => {
                pubSub.next(oneRecord.$id);
            },
            value => {
                pubSub.next('ошибка при попытке delete');
            });
        return pubSub.asObservable().timeout(FIRE_TIMEOUT);
    }


}
