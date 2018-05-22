import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ButtonAnchor} from '../../shared/models/view-model/button/button-anchor.model';

@Component({
  selector: 'issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  @Input() tableHeadList;
  @Input() issueList$;
  @Input() checked;
  @Input() updateButton: ButtonAnchor;
  @Input() deleteButton: ButtonAnchor;

  @Output() actionButtonUpdate = new EventEmitter();
  @Output() actionButtonDelete = new EventEmitter();

  private selectedIdArray: string[] = [];

  private onChangeCheck(id, valueCheck) {
   valueCheck.checked ? this.selectedIdArray.push(id) :
     this.selectedIdArray.splice(this.selectedIdArray.indexOf(id), 1);
  }
  getSelectedIdArray() {
    return this.selectedIdArray;
  }

  onActionButtonUpdate(data) {
    this.actionButtonUpdate.emit(data);
    console.log('onActionButtonUpdate(data)');
  }
  onActionButtonDelete(data) {
    this.actionButtonDelete.emit(data);
    console.log('onActionButtonDelete(data)');
  }

  constructor() { }

  ngOnInit() {
  }

}
