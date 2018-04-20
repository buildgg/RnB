import { Component, OnInit } from '@angular/core';
import {IssueMockData} from './issue-mock-data';
import {Issue} from '../shared/models/issue.model';
import {Observable} from 'rxjs/Observable';
import {ButtonAnchor} from '../shared/models/button-anchor.model';
import {UpdateButtonAnchor} from '../shared/models/update-button-anchor.model';
import {DeleteButtonAnchor} from '../shared/models/delete-button-anchor.model';

const tableHeads: string[] = [
  '', 'Номер', 'Дата заявки', 'Состояние', 'Свод', 'Инициатор',
  'Ответственный', 'Категория статьи', 'Операции'];

@Component({
  selector: 'budget-issue',
  templateUrl: './budget-issue.component.html',
  styleUrls: ['./budget-issue.component.css']
})
export class BudgetIssueComponent implements OnInit {

  tableHeadList: string[] = tableHeads;
  issueList$: Observable<Issue[]>;
  updateButton: ButtonAnchor = new UpdateButtonAnchor('/home-screen/admin-page');
  deleteButton: ButtonAnchor = new DeleteButtonAnchor();


  constructor(private issueMockService: IssueMockData) { }

  ngOnInit() {
    console.log('Start!');
    this.issueMockService
      .getIssues()
      .subscribe(
        (issueList: Issue[]) =>
          console.log(issueList[0])
      );

    this.issueList$ = this.issueMockService.getIssues();
  }

}
