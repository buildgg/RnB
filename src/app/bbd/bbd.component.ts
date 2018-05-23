import {Component, OnInit, ViewChild} from '@angular/core';
import {UpdateButtonAnchor} from '../shared/models/button/update-button-anchor.model';
import {ButtonAnchor} from '../shared/models/button/button-anchor.model';
import {BBD} from '../shared/models/bbd.model';
import {DeleteButtonAnchor} from '../shared/models/button/delete-button-anchor.model';
import {BBDListComponent} from './bbd-list/bbd-list.component';
import {BBDMockData} from './bbd-mock-data';
import {Observable} from 'rxjs/Observable';


const tableHeads: string[] = ['', 'Номер', 'Дата договора', 'Поставщик', 'Ответственный',
    'Состояние', 'Ориентировочная сумма', 'Сумма договора', 'Оплачено', 'Закрыто', 'Операции'];

@Component({
    moduleId: module.id,
    selector: 'bbd',
    templateUrl: './bbd.component.html',
    styleUrls: ['./bbd.component.css']
})
export class BBDComponent implements OnInit {

    tableHeadList: string[] = tableHeads;
    bbdList$: Observable<BBD[]>;
    selectedBBD: BBD;
    updateButton: ButtonAnchor = new UpdateButtonAnchor();
    deleteButton: ButtonAnchor = new DeleteButtonAnchor();
    isVisibleList: boolean = true;

    @ViewChild(BBDListComponent)
    bbdListComponent: BBDListComponent;

    constructor(private bbdMockService: BBDMockData) {
    }

    ngOnInit() {
        this.bbdList$ = this.bbdMockService.getBBD();
    }

    onActionButtonUpdate(data) {
        this.selectedBBD = this.bbdMockService.getBBDbyID(data.$id);
        this.toggleVisibleList();
    }

    onActionButtonDelete(data) {
        console.log('Delete ' + data.$id);
    }

    toggleVisibleList() {
        this.isVisibleList = !this.isVisibleList;
    }
}
