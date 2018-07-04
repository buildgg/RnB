import {Injectable} from '@angular/core';
import {Issue} from '../shared/models/issue.model';
import {Observable, of} from 'rxjs/index';
import {issues} from './issue-mock-data';
import { filter } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class IssueService {

  constructor(private http: HttpClient) {}

  getAllIssues(): Observable<Issue[]> {
  let issueList = [];
    this.http.get<Issue[]>('https://api.myjson.com/bins/7nb1a').subscribe(
      val => {
        issueList = val as Issue[];
      }
    );
        return of(issueList);
  }

  getIssueById(id: string): Observable<Issue> {
    return of(issues.find(value => value.id === id));
  }



}
