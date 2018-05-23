import {Component, OnInit, ViewChild} from '@angular/core';
import {BBD} from '../shared/models/bbd.model';
import {BBDListComponent} from './bbd-list/bbd-list.component';
import {BBDMockData} from './bbd-mock-data';
import {Observable} from 'rxjs/Observable';
import {ButtonAnchor} from '../shared/models/view-model/button/button-anchor.model';
import {UpdateButtonAnchor} from '../shared/models/view-model/button/update-button-anchor.model';
import {DeleteButtonAnchor} from '../shared/models/view-model/button/delete-button-anchor.model';
import {ViewButtonAnchor} from '../shared/models/view-model/button/view-button-anchor.model';


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
    viewButton: ButtonAnchor = new ViewButtonAnchor();
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
