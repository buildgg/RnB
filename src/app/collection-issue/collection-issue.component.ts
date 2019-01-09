import { Component, OnInit } from '@angular/core';
import {DropDownMenu} from '../shared/models/view-model/drop-down-menu.model';

@Component({
  selector: 'collection-issue',
  templateUrl: './collection-issue.component.html',
  styleUrls: ['./collection-issue.component.css']
})
export class CollectionIssueComponent implements OnInit {

  operations: DropDownMenu[] = [
    {'id': '1', 'name': 'operation 1'},
    {'id': '2', 'name': 'operation 2'}];

  constructor() { }

  ngOnInit() {
  }
  isLoadedData() {
    return true;
    /*this.columns !== undefined && this.issueList !== undefined;*/
  }
  makeOperation(operation) {
    console.log(' operation = ' + operation.name);
  }
}
