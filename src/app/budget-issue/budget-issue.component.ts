import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { take } from 'rxjs/operators';
import { Subject } from 'rxjs';

import {ButtonAnchor} from '../shared/models/view-model/button/button-anchor.model';
import * as Button from '../shared/models/view-model/button/index';
import {ColumnTable} from '../shared/models/view-model/column-table';
import {Issue} from '../shared/models/issue.model';
import {DropDownMenu} from '../shared/models/view-model/drop-down-menu.model';
import {IssueService} from './issue.service';
import {RbModalBoxDeleteComponent} from '../shared/components/rb-modal-box/rb-modal-box-delete/rb-modal-box-delete.component';
import {TableButtons} from '../shared/models/view-model/button/table-buttons';
import {IssueModalBoxViewComponent} from './issue-modal-box-view/issue-modal-box-view.component';
import {RbMatTableComponent} from '../shared/components/rb-material/rb-mat-table/rb-mat-table.component';

@Component({
  selector: 'budget-issue',
  templateUrl: './budget-issue.component.html',
  styleUrls: ['./budget-issue.component.css']
})

export class BudgetIssueComponent implements OnInit, OnDestroy{

  columns: ColumnTable[];
  issueList: Issue[];
  operations: DropDownMenu[];

  @ViewChild(RbModalBoxDeleteComponent)
  modelBoxDelete: RbModalBoxDeleteComponent;
  isDeleteRow = new Subject();

  @ViewChild(IssueModalBoxViewComponent)
  viewModalBox: IssueModalBoxViewComponent;

  @ViewChild(RbMatTableComponent)
  selectedArray: RbMatTableComponent;

  tableButtons: TableButtons = {
    update:    new Button.UpdateButton(),
    deleteRow: new Button.DeleteButton(),
    view:      new Button.ViewButton()
  };

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

    this.issueService.idChanged.subscribe(
      val => {
        this.selectedRowId = val;
      }
   );
  }

  ngOnDestroy() {
    this.selectedRowId = null;
  }
  isLoadedData() {
    return this.columns !== undefined && this.issueList !== undefined;
  }

  applyFilter(value){
    this.filterValue = value;
  }

  makeOperation(operation) {
    console.log(' operation = ' + operation.name);
    console.log(this.getSelectedItems().length);

  }

  onClickUpdate(data) {
    this.selectedRowId = data.id;
    this.router.navigate(['../edit', data.id], {relativeTo: this.activatedRoute});
  }

  onClickAdd() {
    console.log(' onClickAdd()');
    this.router.navigate(['../add'], {relativeTo: this.activatedRoute});
  }

  onClickDelete(data: Issue) {
    this.modelBoxDelete.open();
    this.isDeleteRow.pipe(take(1)).subscribe(
      val => {
        if (val) {
        this.issueService.deleteIssue(+data.id);
        }
      }
    );
  }

  onIsDeleteRow(data): void {
    this.isDeleteRow.next(data);
  }

  onClickView(data) {
    this.viewModalBox.launch(data);
  }

  getSelectedItems(): Issue[] {
    return this.selectedArray.selection.selected;
  }



}
