import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {Issue} from '../shared/models/issue.model';
import {ColumnTable} from '../shared/models/view-model/column-table';
import {DropDownMenu} from '../shared/models/view-model/drop-down-menu.model';


@Injectable()
export class IssueService {

  issuerUrl = 'assets/mock/issuers.json';
  issueList = new BehaviorSubject(null);
  arrayIssue: Issue[];

  firstStart: boolean = true;


  constructor(private http: HttpClient) {}

  getIssues(): Observable<Issue[]> {
    if (this.firstStart) {
      this.http.get<Issue[]>(this.issuerUrl).pipe(
        map((value: any) => <Issue[]>value.issuers))
        .subscribe(
          (val: Issue[]) =>
          {
            this.arrayIssue = val;
            this.issueList.next(this.arrayIssue);
          }
        );
      this.firstStart = false;
    } else {

      this.issueList.next(this.arrayIssue);
    }

    return this.issueList.asObservable();
  }

  getColumnsTable(): Observable<ColumnTable[]> {
    return this.http.get<ColumnTable[]>(this.issuerUrl)
      .pipe(
        map((value: any) => <ColumnTable[]>value.columntable)
      );
  }

  getOperations(): Observable<DropDownMenu[]> {
    return this.http.get<DropDownMenu[]>(this.issuerUrl).pipe(
      map((value: any) => <DropDownMenu[]>value.operations)
    );
  }

  getBudgetType(): Observable<string[]> {
    return this.http.get<string[]>(this.issuerUrl).pipe(
      map((value: any) => <string[]>value.budgetArticleType)
    );
  }

  getIssuer(): Observable<string[]> {
    return this.http.get<string[]>(this.issuerUrl).pipe(
      map((value: any) => <string[]>value.issuer)
    );
  }

  getResponsiblePerson(): Observable<string[]> {
    return this.http.get<string[]>(this.issuerUrl).pipe(
      map((value: any) => <string[]>value.responsiblePerson)
    );
  }

  getIssueById(id: string): Observable<Issue> {
    return this.http.get<Issue>(this.issuerUrl)
      .pipe(
        map((value: any) =>
          <Issue>value
            .issuers
            .find((val: Issue) => +val.id === +id)
        )
      );
  }

  updateIssue(issue: Issue) {
    this.issueList.pipe(
      map((value: Issue[]) => {
          const index = value.findIndex((val: Issue) => +val.id === +issue.id);
          value[index] = issue;
          return value;
        }
      ))
      .subscribe(v => this.arrayIssue = v);
    this.issueList.next(this.arrayIssue);
  }
}
