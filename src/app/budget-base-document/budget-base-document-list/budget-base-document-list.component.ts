import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BudgetBaseDocument} from '../../shared/models/budget-base-document.model';
import {ButtonAnchor} from '../../shared/models/button/button-anchor.model';
import {UpdateButtonAnchor} from '../../shared/models/button/update-button-anchor.model';
import {DeleteButtonAnchor} from '../../shared/models/button/delete-button-anchor.model';
import {BudgetBaseDocumentMockData} from '../budget-base-document-mock-data';

const tableHeads: string[] = ['', 'Номер', 'Дата договора', 'Поставщик', 'Ответственный',
    'Состояние', 'Ориентировочная сумма', 'Сумма договора', 'Оплачено', 'Закрыто', 'Операции'];

@Component({
    moduleId: module.id,
    selector: 'budget-base-document-list',
    templateUrl: './budget-base-document-list.component.html',
    styleUrls: ['./budget-base-document-list.component.css']
})
export class BudgetBaseDocumentListComponent implements OnInit {

    tableHeadList: string[] = tableHeads;

    budgetBaseDocumentList$: Observable<BudgetBaseDocument[]>;

    updateButton: ButtonAnchor = new UpdateButtonAnchor('/home-screen/budget-base-document/edit');
    deleteButton: ButtonAnchor = new DeleteButtonAnchor();

    constructor(private budgetBaseDocumentMockService: BudgetBaseDocumentMockData) {
    }

    ngOnInit() {
        this.budgetBaseDocumentMockService
            .getBudgetBaseDocuments()
            .subscribe(
                (budgetBaseDocumentList: BudgetBaseDocument[]) =>
                    console.log(budgetBaseDocumentList[0])
            );

        this.budgetBaseDocumentList$ = this.budgetBaseDocumentMockService.getBudgetBaseDocuments();
    }

    onEdit(bbd: BudgetBaseDocument) {
        console.log('ON_EDIT');
        console.log(bbd.documentNo);
        this.budgetBaseDocumentMockService.selectedBudgetBaseDocument = Object.assign({}, bbd);
        console.log(this.budgetBaseDocumentMockService.selectedBudgetBaseDocument.documentNo);
    }

    onDelete(bbd: BudgetBaseDocument) {
        console.log('ON_DELETE');
    }
}
