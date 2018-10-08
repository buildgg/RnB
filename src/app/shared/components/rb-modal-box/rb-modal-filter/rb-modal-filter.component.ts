import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ManageModalBox} from '../rb-modal-universal/manage-modal-box';

@Component({
  selector: 'rb-modal-filter',
  templateUrl: './rb-modal-filter.component.html',
  styleUrls: ['./rb-modal-filter.component.css']
})
export class RbModalFilterComponent implements OnInit {

  visible: boolean = false;
  filterGroup: FormGroup;

  ngOnInit() {
    this.filterGroup = this.fb.group(
      { checkedIssuer: 'true',
        iIssuer: '',
        myBranch: 'true',
        sumFrom: '',
        sumTill: '',
        dateFrom: '',
        dateTill: '',
        branch: '',
        articleType: '',
        issuer: '',
        description: ''
      }
    );
  }

  constructor(private fb: FormBuilder) { }

  open() {
    this.visible = true;
  }
  cancel() {
    this.visible = false;
  }

  apply(form) {
    console.log(this.filterGroup);
    console.log('apply');
    this.cancel();
  }

}
