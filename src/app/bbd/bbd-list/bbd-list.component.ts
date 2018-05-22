import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {BBD} from '../../shared/models/bbd.model';
import {ButtonAnchor} from '../../shared/models/view-model/button/button-anchor.model';
import {UpdateButtonAnchor} from '../../shared/models/view-model/button/update-button-anchor.model';
import {DeleteButtonAnchor} from '../../shared/models/view-model/button/delete-button-anchor.model';
import {BBDMockData} from '../bbd-mock-data';

const tableHeads: string[] = ['', 'Номер', 'Дата договора', 'Поставщик', 'Ответственный',
    'Состояние', 'Ориентировочная сумма', 'Сумма договора', 'Оплачено', 'Закрыто', 'Операции'];

@Component({
    moduleId: module.id,
    selector: 'bbd-list',
    templateUrl: './bbd-list.component.html',
    styleUrls: ['./bbd-list.component.css']
})
export class BBDListComponent implements OnInit {

    tableHeadList: string[] = tableHeads;

    bbdList$: Observable<BBD[]>;

    updateButton: ButtonAnchor = new UpdateButtonAnchor('/home-screen/bbd/edit');
    deleteButton: ButtonAnchor = new DeleteButtonAnchor();

    constructor(private bbdMockService: BBDMockData) {
    }

    ngOnInit() {
        this.bbdMockService
            .getBBD()
            .subscribe(
                (bbdList: BBD[]) =>
                    console.log(bbdList[0])
            );

        this.bbdList$ = this.bbdMockService.getBBD();
    }

    onEdit(bbd: BBD) {
        console.log('ON_EDIT');
        console.log(bbd.documentNo);
        this.bbdMockService.selectedBBD = Object.assign({}, bbd);
        console.log(this.bbdMockService.selectedBBD.documentNo);
    }

    onDelete(bbd: BBD) {
        console.log('ON_DELETE');
    }
}
