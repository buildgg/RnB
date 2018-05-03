import {Component, OnChanges, OnInit, ViewChild} from '@angular/core';
import {IssueMockData} from './issue-mock-data';
import {Issue} from '../shared/models/issue.model';
import {Observable} from 'rxjs/Observable';
import {ButtonAnchor} from '../shared/models/button/button-anchor.model';
import {UpdateButtonAnchor} from '../shared/models/button/update-button-anchor.model';
import {DeleteButtonAnchor} from '../shared/models/button/delete-button-anchor.model';
import {IssueListComponent} from './issue-list/issue-list.component';

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
  updateButton: ButtonAnchor = new UpdateButtonAnchor();
  deleteButton: ButtonAnchor = new DeleteButtonAnchor();
  isVisibleList: boolean = true;

  @ViewChild(IssueListComponent)
  issueListComponent: IssueListComponent;

  constructor(private issueMockService: IssueMockData) { }

  ngOnInit() {
    this.issueList$ = this.issueMockService.getIssues();
  }

  getSelectedIssue () {
    this.issueListComponent.getSelectedIdArray();
  }

  onActionButtonUpdate (data) {
    console.log(data.$id);
    this.toggleVisibleList();
  }
  onActionButtonDelete($event) {
    console.log('Delete');
  }
  toggleVisibleList() {
    this.isVisibleList = !this.isVisibleList;
  }


}
