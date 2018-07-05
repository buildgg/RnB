import {Component, OnInit} from '@angular/core';
import {ButtonAnchor} from '../shared/models/view-model/button/button-anchor.model';
import {UpdateButtonAnchor} from '../shared/models/view-model/button/update-button-anchor.model';
import {DeleteButtonAnchor} from '../shared/models/view-model/button/delete-button-anchor.model';
import {ColumnTable} from '../shared/models/view-model/column-table';
import {DropDownMenu} from '../shared/models/view-model/drop-down-menu.model';
import {ViewButtonAnchor} from '../shared/models/view-model/button/view-button-anchor.model';
import {AddButtonAnchor} from '../shared/models/view-model/button/add-button-anchor.model';
import {Issue} from '../shared/models/issue.model';
import {DataService} from '../core/data.service';

const columnsExample: ColumnTable[] = [
  {columnDef: 'description', headerName: 'Описание'},
  {columnDef: 'count', headerName: 'Количество'},
  {columnDef: 'budgetArticleType', headerName: 'Категория статьи'},
  {columnDef: 'issuer', headerName: 'Инициатор'},
  {columnDef: 'responsiblePerson', headerName: 'Ответственный'},
  {columnDef: 'collectionName', headerName: 'Свод'},
  {columnDef: 'date', headerName: 'Дата'}
];

const operations: DropDownMenu[] = [
  {id: '111', name: 'сделать Свод'},
  {id: '222', name: 'отвязать от Свода'},
  {id: '333', name: 'первести в состояние'}
];

@Component({
  selector: 'budget-issue',
  templateUrl: './budget-issue.component.html',
  styleUrls: ['./budget-issue.component.css']/*,
  animations: [fadeInAnimation],

  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '' }*/
})

export class BudgetIssueComponent implements OnInit {

  columns: ColumnTable[] = columnsExample;
  issueList: Issue[];
  updateButton: ButtonAnchor = new UpdateButtonAnchor();
  deleteButton: ButtonAnchor = new DeleteButtonAnchor();
  viewButton: ButtonAnchor = new ViewButtonAnchor();
  addButton: ButtonAnchor = new AddButtonAnchor();

  filterValue: any;
  isVisibleList: boolean = true;

  menuOperation = operations;
  menuOperationName = 'Операции';
  menuFilterName = 'Фильтры';
  issueRow: Issue;


  constructor(private ds: DataService) {
  }

  ngOnInit() {
    this.ds.getData<Issue>(this.ds.issuerUrl).subscribe(
      (x: any) => this.issueList = x.issuers
    );

    /*    this.http.get<Issue[]>('https://api.myjson.com/bins/7nb1a').subscribe(
          val => {
            this.issueList = val as Issue[];
          }
        );*/


    /*    this.http.get<Issue[]>('assets/mock/issuers.json').subscribe(
          val => {
            this.issueList = val;
            console.log('val = ' + val);
          }
        );*/
    /*    this.http.get<Issue[]>('https://api.myjson.com/bins/7nb1a').subscribe(
          val => {
            this.issueList = val as Issue[];
            console.log('val = ' + val[0].description);
          }
        );*/
    /* this.issueService.getAllIssues().subscribe(
       value => {
         this.issueList = value;
         console.log('value= ' + value);
       }
     );
 */

    /*    this.ds.getData<Issue>(this.ds.issuerUrl).subscribe(
          (x: Issue[]) => {
            this.issueList = x as Issue[];
            console.log('trset ' + this.issueList);
          }

        );*/


    /*  issuerUrl = 'assets/mock/issuers.json';
      constructor(private http: HttpClient) { }

      getData<T> (url: string):  Observable<T[]> {
        return this.http.get<T[]>(url);
      }
    *
    * */

    /*    this.issueService.getAllIssues().subscribe(
          value => {
            this.issueList = value;
            console.log(value);
          }
        );*/
    /*  new Issue(item.description,
              item.count,
              item.count,
              item.budgetArticleType,
              item.issuer,
              item.responsiblePerson,
              item.collectionName,
              item.date,
              item.issueNo,
              item.state,
              item.id*/


  }

  applyFilter(value) {
    console.log('matTable = ' + value);
    this.filterValue = value;
  }

  makeOperation(operation) {
    console.log(' operation = ' + operation.name);
  }

  /*  getSelectedIssue() {
      this.issueListComponent.getSelectedIdArray();
    }*/

  toggleVisibleList() {
    this.isVisibleList = !this.isVisibleList;
  }

  onClickUpdate(data) {
     this.toggleVisibleList();
    this.issueRow = data;

  }

  onClickDelete(data) {
    console.log(data + ' onClickUpdate');
  }

  onClickView(data) {
    console.log(data + ' onClickUpdate');
  }
}
