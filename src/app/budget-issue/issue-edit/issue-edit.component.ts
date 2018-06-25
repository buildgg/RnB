import {Component, Input, OnInit} from '@angular/core';
import {Issue} from '../../shared/models/issue.model';
import {FormBuilder, FormGroup} from '@angular/forms';

/*const options2 = ['first', 'second', 'next', 'fire', 'angular'];*/
const options2 = ['first', 'second', 'next', 'fire', 'angular',
  'AfterContentInit',
  'Component',
  'ContentChildren',
  'ElementRef',
  'Input',
  'QueryList',
  'TemplateRef',
  'ViewChild',
  'ViewEncapsulation',
  'ChangeDetectorRef',
  'ChangeDetectionStrategy',
  'EventEmitter',
  'Output',
  'InjectionToken',
  'Inject'
];
const issuerArray = ['Azusa',
'Azusena',
'Azzah',
'Azzam',
'Azzaria',
'Azzure',
'Baal',
'Bab',
'Bab',
'Babafemi',
'Babatunde',
'Babette',
'Babette',
'Babu',
'Babukar',
'Bac',
'Backstere',
'Bacstair',
'Badal',
'Badawi',
'Bader',
'Badi',
'Badr',
'Badr',
'Badr Al Din',
'Badra',
'Badriyyah',
'Badru'];

@Component({
  selector: 'issue-edit',
  templateUrl: './issue-edit.component.html',
  styleUrls: ['./issue-edit.component.css']
})
export class IssueEditComponent implements OnInit {
  @Input() issueRow: Issue;
  options = options2;
  issueGroup: FormGroup;
  issuer = issuerArray;
  styleList = {
    'background-color': 'lime',
    'font-size': '20px',
    'font-weight': 'bold',
    'width': '40%'
  };
  styleInput = {
    'background-color': 'lime',
    'font-size': '20px',
    'font-weight': 'bold',
    'width': '40%'
  };



  onValueLookUp($event) {
    console.log('onValueLookUp value = ' + $event);
  }
  onValueLookUpIssuer($event) {
    console.log('onValueLookUpIssuer value = ' + $event);
  }

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
