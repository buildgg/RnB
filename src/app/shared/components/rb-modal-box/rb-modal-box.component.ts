import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'rb-modal-box',
  templateUrl: './rb-modal-box.component.html',
  styleUrls: ['./rb-modal-box.component.css']
})
export class RbModalBoxComponent implements OnInit{

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
  close() {
    this.visible = false;
  }

  apply(form) {
    console.log(this.filterGroup);
    console.log('apply');
    this.close();
  }

}
