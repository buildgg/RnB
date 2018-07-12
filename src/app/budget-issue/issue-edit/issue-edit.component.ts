import {Component, Input, OnInit} from '@angular/core';
import {Issue} from '../../shared/models/issue.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DataService} from '../../core/data.service';
import {Observable} from 'rxjs/index';
import {animate, state, style, transition, trigger} from '@angular/animations';

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
/*  animations:
    [
      trigger('triggerBackgroundChange',
        [
          state ('first', style({'background-color': 'yellow'})),
          state ('second', style({'background-color': 'red'})),
          transition ('first => second', animate(2000))
        ])
    ]*/
  // make slide in/out animation available to this component
/*  animations: [slideInOutAnimation],

  // attach the slide in/out animation to the host (root) element of this component
  host: { '[@slideInOutAnimation]': '' }*/
})
export class IssueEditComponent implements OnInit {
  @Input() issueRow: Issue;
  budgetType: string[];
  options;
  issueGroup: FormGroup;
  issuer = issuerArray;
  color = 'first';



/*
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
*/


/*
  onValueLookUp($event) {
    console.log('onValueLookUp value = ' + $event);
  }
  onValueLookUpIssuer($event) {
    console.log('onValueLookUpIssuer value = ' + $event);
  }*/

  constructor(private fb: FormBuilder, private ds: DataService) {}

  ngOnInit() {
    this.ds.getData<string>(this.ds.issuerUrl).subscribe(
      (val: any) => this.budgetType = val.budgetArticleType
    );


/*    const configUrl = 'assets/mock/issuers.json';
    this.ds.getData(configUrl).subscribe(
      val => {
        console.log('val: ' + val + ' val.budgetArticleType: ' + val.budgetArticleType);
        this.options = val.budgetArticleType;
      }
        );*/

    this.issueGroup = this.fb.group({
      description: '333',
      count: '2',
      budgetArticleType: 'Bab',
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
  accept(issueGroup) {

  }

}
