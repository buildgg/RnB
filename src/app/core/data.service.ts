import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  issuerState = new Subject();
  issuerUrl = 'assets/mock/issuers.json';

  constructor(private http: HttpClient) { }

  getData<T> (url: string):  Observable<T[]> {
    return this.http.get<T[]>(url);
  }
}
