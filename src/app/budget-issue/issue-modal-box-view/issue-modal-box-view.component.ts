import { Component } from '@angular/core';
import {ManageModalBox} from '../../shared/components/rb-modal-box/rb-modal-universal/manage-modal-box';
import {Issue} from '../../shared/models/issue.model';


@Component({
  selector: 'issue-modal-box-view',
  templateUrl: './issue-modal-box-view.component.html',
  styleUrls: ['./issue-modal-box-view.component.css']
})
export class IssueModalBoxViewComponent extends ManageModalBox{

  issue: Issue;

  launch(data): void {
   this.open();
   this.issue = data;
  }
}
