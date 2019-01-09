import {Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import {SelectionModel} from '@angular/cdk/collections';
import {ButtonAnchor} from '../../../models/view-model/button/button-anchor.model';
import {ColumnTable} from '../../../models/view-model/column-table';
import {TableButtons} from '../../../models/view-model/button/table-buttons';
import {Issue} from '../../../models/issue.model';


@Component({
  selector: 'rb-mat-table',
  templateUrl: './rb-mat-table.component.html',
  styleUrls: ['./rb-mat-table.component.css']
})

export class RbMatTableComponent implements OnInit, OnChanges{

  @Input() columns: ColumnTable[];
  @Input() dataList;
  @Input() filterValue: string;
  @Input() selectedRowId;
  @Input() tableButtons: TableButtons;

  @Output() clickUpdate = new EventEmitter;
  @Output() clickDelete = new EventEmitter;
  @Output() clickView = new EventEmitter;

  dataSource;
  displayedColumns: string[] = [];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  selection = new SelectionModel(true, []);

  ngOnInit() {
    this.displayedColumns = ['select'].concat(this.columns.map(value => value.columnDef).concat(['actions']));
  }
  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.dataList);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.applyFilter(this.filterValue);
  }

  onSelectedChange(row, valueCheck) {
    this.selection.toggle(row);
  }

  applyFilter(filterValue: string) {
    if (filterValue != null) {
      filterValue = filterValue.trim();
      filterValue = filterValue.toLowerCase();
      this.dataSource.filter = filterValue;
    }
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  onActionButtonUpdate(element) {
    this.clickUpdate.emit(element);
  }

  onActionButtonDelete(element) {
    this.clickDelete.emit(element);
  }
  onActionButtonView(element) {
    this.clickView.emit(element);
  }
}
