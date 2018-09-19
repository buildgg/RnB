import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { map } from 'rxjs/operators';
import {of} from 'rxjs';

import {ButtonAnchor} from '../shared/models/view-model/button/button-anchor.model';
import * as Button from '../shared/models/view-model/button/index';
import {ColumnTable} from '../shared/models/view-model/column-table';
import {Issue} from '../shared/models/issue.model';
import {DropDownMenu} from '../shared/models/view-model/drop-down-menu.model';
import {IssueService} from './issue.service';

@Component({
  selector: 'budget-issue',
  templateUrl: './budget-issue.component.html',
  styleUrls: ['./budget-issue.component.css']
})

export class BudgetIssueComponent implements OnInit{

  columns: ColumnTable[];
  issueList: Issue[];
  operations: DropDownMenu[];

  updateButton: ButtonAnchor = new Button.UpdateButton();
  deleteButton: ButtonAnchor = new Button.DeleteButton();
  viewButton: ButtonAnchor = new Button.ViewButton();
  addButton: ButtonAnchor = new Button.AddButton();

  filterValue: string;
  selectedRowId: string;

  constructor(private issueService: IssueService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(param => this.selectedRowId = param.get('id'));

    this.issueService.getIssues().subscribe(
      (val: Issue[]) => this.issueList = val
    );

    this.issueService.getColumnsTable().subscribe(
      (val: ColumnTable[]) => this.columns = val
    );

    this.issueService.getOperations().subscribe(
      (val: DropDownMenu[]) => this.operations = val
    );


  }

  isLoadedData() {
    return this.columns !== undefined && this.issueList !== undefined;
  }

  applyFilter(value){
    this.filterValue = value;
  }

  makeOperation(operation) {
    console.log(' operation = ' + operation.name);
  }

  onClickUpdate(data) {
    this.selectedRowId = data.id;
    this.router.navigate(['../edit', data.id], {relativeTo: this.activatedRoute});
  }

  onClickDelete(data) {
    console.log(data + ' onClickUpdate');
  }

  onClickView(data) {
    console.log(data + ' onClickUpdate');
  }

}
