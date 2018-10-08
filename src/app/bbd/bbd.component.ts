import {Component, OnInit, ViewChild} from '@angular/core';
import {BBD} from '../shared/models/bbd.model';
import {BBDListComponent} from './bbd-list/bbd-list.component';
import {BBDMockData} from './bbd-mock-data';
import {Observable} from 'rxjs/Observable';
import {ButtonAnchor} from '../shared/models/view-model/button/button-anchor.model';
import {UpdateButtonAnchor} from '../shared/models/view-model/button/update-button-anchor.model';
import {DeleteButtonAnchor} from '../shared/models/view-model/button/delete-button-anchor.model';
import {ViewButtonAnchor} from '../shared/models/view-model/button/view-button-anchor.model';
import {ColumnTable} from '../shared/models/view-model/column-table';
import {DropDownMenu} from '../shared/models/view-model/drop-down-menu.model';

const columnsBBD: ColumnTable[] = [
    {columnDef: 'documentNo', headerName: 'Номер'},
    {columnDef: 'documentDate', headerName: 'Дата договора'},
    {columnDef: 'supplier', headerName: 'Поставщик'},
    {columnDef: 'responsiblePerson', headerName: 'Ответственный'},
    {columnDef: 'bbdState', headerName: 'Состояние'},
    {columnDef: 'approximateAmount', headerName: 'Ориентировочная сумма'},
    {columnDef: 'amount', headerName: 'Сумма договора'},
    {columnDef: 'payedAmount', headerName: 'Оплачено'},
    {columnDef: 'utilizedAmount', headerName: 'Закрыто'}
];

const operations: DropDownMenu[] = [
    {id: '112', name: 'Операция 1'},
    {id: '221', name: 'Операция 2'},
    {id: '331', name: 'Операция 3'}
];
@Component({
    moduleId: module.id,
    selector: 'bbd',
    templateUrl: './bbd.component.html',
    styleUrls: ['./bbd.component.css']
})
export class BBDComponent implements OnInit {

    // tableHeadList: string[] = tableHeads;
    columns: ColumnTable[] = columnsBBD;
    // bbdList$: Observable<BBD[]>;
    bbdList$;
    selectedBBD: BBD;

/*    updateButton: ButtonAnchor/!* = new UpdateButtonAnchor()*!/;
    deleteButton: ButtonAnchor/!* = new DeleteButtonAnchor()*!/;
    viewButton: ButtonAnchor/!* = new ViewButtonAnchor()*!/;*/

    isVisibleList: boolean = true;

    menuOperation = operations;
    menuOperationName = 'Операции';
    menuOperationName2 = 'Фильтры';

    @ViewChild(BBDListComponent)
    bbdListComponent: BBDListComponent;


    constructor(private bbdMockService: BBDMockData) {
    }

    ngOnInit() {
        this.bbdList$ = this.bbdMockService.getBBD();
    }

    applyFilter(value) {

    }

    makeOperation(operation) {
        console.log(' operation = ' + operation.name);
    }

    getSelectedIssue() {
        this.bbdListComponent.getSelectedIdArray();
    }

    onClickUpdate(data) {
        this.selectedBBD = this.bbdMockService.getBBDbyID(data.$id);
        this.toggleVisibleList();
    }

    onClickDelete(data) {
        console.log('Delete ' + data.$id);
    }

    onClickView(data) {
        this.selectedBBD = this.bbdMockService.getBBDbyID(data.$id);
        this.toggleVisibleList();
    }

    toggleVisibleList() {
        this.isVisibleList = !this.isVisibleList;
    }
}
