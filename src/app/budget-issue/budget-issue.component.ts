import {AfterContentChecked, Component, OnChanges, OnInit, ViewChild} from '@angular/core';
import {IssueMockData} from './issue-mock-data';
import {ButtonAnchor} from '../shared/models/view-model/button/button-anchor.model';
import {UpdateButtonAnchor} from '../shared/models/view-model/button/update-button-anchor.model';
import {DeleteButtonAnchor} from '../shared/models/view-model/button/delete-button-anchor.model';
import {IssueListComponent} from './issue-list/issue-list.component';
import {ColumnTable} from '../shared/models/view-model/column-table';
import {DropDownMenu} from '../shared/models/view-model/drop-down-menu.model';
import {ViewButtonAnchor} from '../shared/models/view-model/button/view-button-anchor.model';

const columnsExample: ColumnTable[] = [
  {columnDef: 'description', headerName: 'Описание'},
  {columnDef: 'count', headerName: 'Количество'},
  {columnDef: 'budgetArticleType', headerName: 'Категория статьи'},
  {columnDef: 'issuer', headerName: 'Инициатор'},
  {columnDef: 'responsiblePerson', headerName: 'Ответственный'},
  {columnDef: 'collectionName', headerName: 'Свод'},
  {columnDef: 'date', headerName: 'Дата'}
];

const operations: DropDownMenu[] = [
  {id: '111', name: 'сделать Свод'},
  {id: '222', name: 'отвязать от Свода'},
  {id: '333', name: 'первести в состояние'}
];

@Component({
  selector: 'budget-issue',
  templateUrl: './budget-issue.component.html',
  styleUrls: ['./budget-issue.component.css']
})

export class BudgetIssueComponent implements OnInit {

  columns: ColumnTable[] = columnsExample;
  issueList$;
  /*: Observable<Issue[]>*/

  updateButton: ButtonAnchor = new UpdateButtonAnchor();
  deleteButton: ButtonAnchor = new DeleteButtonAnchor();
  viewButton: ButtonAnchor = new ViewButtonAnchor();

  isVisibleList: boolean = true;

  menuOperation = operations;
  menuOperationName = 'Операции';
  menuOperationName2 = 'Фильтры';

  @ViewChild(IssueListComponent)
  issueListComponent: IssueListComponent;

  constructor(private issueMockService: IssueMockData) {}

  ngOnInit() {
    this.issueList$ = this.issueMockService.getIssues();
  }

  applyFilter(value) {

  }

  makeOperation(operation) {
    console.log(' operation = ' + operation.name);
  }

  getSelectedIssue() {
    this.issueListComponent.getSelectedIdArray();
  }

  onActionButtonUpdate(data) {
    console.log(data.$id);
    this.toggleVisibleList();
  }

  onActionButtonDelete($event) {
    console.log('Delete');
  }

  toggleVisibleList() {
    this.isVisibleList = !this.isVisibleList;
  }

  onClickUpdate(data) {
    console.log(data + ' onClickUpdate');
  }

  onClickDelete(data) {
    console.log(data + ' onClickUpdate');
  }

  onClickView(data) {
    console.log(data + ' onClickUpdate');
  }
}
