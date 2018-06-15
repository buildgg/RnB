import {Component, OnInit} from '@angular/core';
import {ButtonAnchor} from '../shared/models/view-model/button/button-anchor.model';
import {UpdateButtonAnchor} from '../shared/models/view-model/button/update-button-anchor.model';
import {DeleteButtonAnchor} from '../shared/models/view-model/button/delete-button-anchor.model';
import {ColumnTable} from '../shared/models/view-model/column-table';
import {DropDownMenu} from '../shared/models/view-model/drop-down-menu.model';
import {ViewButtonAnchor} from '../shared/models/view-model/button/view-button-anchor.model';
import {AddButtonAnchor} from '../shared/models/view-model/button/add-button-anchor.model';
import {IssueService} from './issue.service';
import {Issue} from '../shared/models/issue.model';

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
  issueList: Issue[];
  updateButton: ButtonAnchor = new UpdateButtonAnchor();
  deleteButton: ButtonAnchor = new DeleteButtonAnchor();
  viewButton: ButtonAnchor = new ViewButtonAnchor();
  addButton: ButtonAnchor = new AddButtonAnchor();

  filterValue: any;
  isVisibleList: boolean = true;

  menuOperation = operations;
  menuOperationName = 'Операции';
  menuFilterName = 'Фильтры';

  issueRow: Issue;

/*  @ViewChild(IssueListComponent)
  issueListComponent: IssueListComponent;*/

  constructor(private issueService: IssueService) {}

  ngOnInit() {
    this.issueService.getAllIssues().subscribe(value => this.issueList = value);
  }

  applyFilter(value) {
    console.log('matTable = ' + value);
    this.filterValue = value;
  }

  makeOperation(operation) {
    console.log(' operation = ' + operation.name);
  }

/*  getSelectedIssue() {
    this.issueListComponent.getSelectedIdArray();
  }*/

  toggleVisibleList() {
    this.isVisibleList = !this.isVisibleList;
  }

  onClickUpdate(data) {
    this.toggleVisibleList();
    this.issueRow = data;

  }

  onClickDelete(data) {
    console.log(data + ' onClickUpdate');
  }

  onClickView(data) {
    console.log(data + ' onClickUpdate');
  }
}
