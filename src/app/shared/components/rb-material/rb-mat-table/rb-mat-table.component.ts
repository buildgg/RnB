import {Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import {SelectionModel} from '@angular/cdk/collections';
import {ButtonAnchor} from '../../../models/view-model/button/button-anchor.model';
import {ColumnTable} from '../../../models/view-model/column-table';

@Component({
  selector: 'rb-mat-table',
  templateUrl: './rb-mat-table.component.html',
  styleUrls: ['./rb-mat-table.component.css']
})

export class RbMatTableComponent implements OnInit, OnChanges{

  @Input() columns: ColumnTable[];
  @Input() dataList;
  @Input() updateButton: ButtonAnchor;
  @Output() clickUpdate = new EventEmitter;
  @Input() deleteButton: ButtonAnchor;
  @Output() clickDelete = new EventEmitter;
  @Input() viewButton: ButtonAnchor;
  @Output() clickView = new EventEmitter;
  @Input() filterValue: string;
  @Input() selectedRowId;


  dataSource;
  displayedColumns: string[] = [];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
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
    console.log('!!! row ' + row.$id + ' valueCheck = ' + valueCheck.checked);
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
