import {Injectable} from '@angular/core';
import {Issue} from '../shared/models/issue.model';
import {Observable, of} from 'rxjs/index';
import {issues} from './issue-mock-data';
import { filter } from 'rxjs/operators';

@Injectable()
export class IssueService {

  getAllIssues(): Observable<Issue[]> {
    return of(issues);
  }

  getIssueById(id: string): Observable<Issue> {
    return of(issues.find(value => value.$id === id));
    }

}
