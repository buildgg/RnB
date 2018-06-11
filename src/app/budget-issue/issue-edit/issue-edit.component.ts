import {Component, Input, OnInit} from '@angular/core';
import {Issue} from '../../shared/models/issue.model';
import {FormBuilder, FormGroup} from '@angular/forms';

const options2 = ['first', 'second', 'next', 'fire', 'angular'];

@Component({
  selector: 'issue-edit',
  templateUrl: './issue-edit.component.html',
  styleUrls: ['./issue-edit.component.css']
})
export class IssueEditComponent implements OnInit {
  @Input() issueRow: Issue;
  options = options2;
  issueGroup: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.issueGroup = this.fb.group({
      description: '333',
      count: '2',
      budgetArticleType: '',
      issuer: '',
      responsiblePerson: '',
      collectionName: '',
      date: '',
      issueNo: '',
      state: '',
      myControl: ''
    });
  }

  onSelectedItem(value) {
    console.log('v: ' + value);
    this.issueGroup.patchValue({'myControl': value});
  }


}
