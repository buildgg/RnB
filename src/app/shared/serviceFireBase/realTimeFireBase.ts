import {Injectable} from '@angular/core';
import {$id, RnBRecord} from '../models/rnb-shared-structures';
import {Subject, Observable,  from } from 'rxjs';



const FIRE_TIMEOUT = 10000;

@Injectable()
export class RnbRealTimeFireBaseService {

    private _dataList;

    constructor() {
    }

    innerGetDataList(listName: string){
       /* this._dataList = this.db.list(listName);
        return this._dataList;*/
    }


    getDataList<T>(listName: string): Observable<T[]> {
        /*const pubSub = new Subject<T[]>();
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
        return pubSub.asObservable();*/
        return null;
    }

    insertRecord(oneRecord: RnBRecord, listName: string): Observable<$id> {
        /*const pubSub = new Subject<$id>();
        const rezInstance = {} as RnBRecord;
        for (const objProp in oneRecord) {
            if (objProp !== '$id') {
                rezInstance[objProp] = oneRecord[objProp];
            }
        }
        from<$id>(this.innerGetDataList(listName).push(rezInstance).then<$id>(value => {
                pubSub.next(value.key);
                return null;
            },
            value => {
                pubSub.error('ошибка при попытке insert');
                return null;
            }));
        return pubSub.asObservable();*/return null;
    }

    updateRecord(oneRecord: RnBRecord, listName: string): Observable<$id>{
    /*    const pubSub = new Subject<string>();
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
        return pubSub.asObservable();*/return null;
    }


    deleteRecord(oneRecord: RnBRecord, listName: string) {
       /* const pubSub = new Subject<string>();
        this.innerGetDataList(listName).remove(oneRecord.$id).then(
            value => {
                pubSub.next(oneRecord.$id);
            },
            value => {
                pubSub.next('ошибка при попытке delete');
            });
        return pubSub.asObservable();*/
      return null;
    }


}
