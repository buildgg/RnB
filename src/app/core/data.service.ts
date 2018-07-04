import { Injectable } from '@angular/core';
import {CoreModule} from './core.module';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  configUrl = 'assets/config/config.json';
  issuerUrl = 'assets/mock/issuers.json';
  budgetArticleTypeUrl = 'assets/mock/budgetArticleType.json';
  constructor(private http: HttpClient) { }

  getData<T> (url: string):  Observable<T[]> {
    return this.http.get<T[]>(url);
  }
}
