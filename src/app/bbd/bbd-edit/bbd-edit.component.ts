import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BBDMockData} from '../bbd-mock-data';
import {BBD} from '../../shared/models/bbd.model';
import {BudgetPosition} from '../../shared/models/budget-position.model';
import {ButtonAnchor} from '../../shared/models/button/button-anchor.model';
import {UpdateButtonAnchor} from '../../shared/models/button/update-button-anchor.model';
import {DeleteButtonAnchor} from '../../shared/models/button/delete-button-anchor.model';
import {Observable} from 'rxjs/Observable';

const tableHeads: string[] = ['', 'Номер', 'Бюджетная дата', 'Реальная дата бюджета', 'Описание', 'ЦО', 'Подразделение',
    'Количество', 'Ед.изм.', 'Статья бюджета', 'Ориентировочная сумма', 'Сумма договора', 'Оплачено', 'Закрыто', 'Состояние', 'Операции'];

@Component({
    moduleId: module.id,
    selector: 'bbd-edit',
    templateUrl: './bbd-edit.component.html',
    styleUrls: ['./bbd-edit.component.css']
})

export class BBDEditComponent implements OnInit {

    bbdEditForm: FormGroup;

    @Input()
    public bbdView: BBD;
    tableHeadList: string[] = tableHeads;
    bbdPositionList: BudgetPosition[];
    selectedBBDPosition: BudgetPosition;
    isVisibleList: boolean = true;
    updateButton: ButtonAnchor = new UpdateButtonAnchor();
    deleteButton: ButtonAnchor = new DeleteButtonAnchor();

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        if (this.bbdView.$id === '') {
            this.bbdEditForm = this.fb.group({
                'documentNo': [''],
                'documentDate': [''],
                'supplier': [''],
                'responsiblePerson': [''],
                'approximateAmount': ['0.00'],
                'amount': ['0.00'],
                'payedAmount': ['0.00'],
                'utilizedAmount': ['0.00'],
                'bbdState': ['Введен']
            });
        } else {
            this.bbdEditForm = this.fb.group({
                'documentNo': [this.bbdView.documentNo],
                'documentDate': [this.bbdView.documentDate],
                'supplier': [this.bbdView.supplier],
                'responsiblePerson': [this.bbdView.responsiblePerson],
                'approximateAmount': [this.bbdView.approximateAmount],
                'amount': [this.bbdView.amount],
                'payedAmount': [this.bbdView.payedAmount],
                'utilizedAmount': [this.bbdView.utilizedAmount],
                'bbdState': [this.bbdView.bbdState]
            });
            this.bbdPositionList = this.bbdView.budgetPositionList;
        }
        // this.bbdEditForm.valueChanges.subscribe(data=>this.onValueChange(data));
        // this.onValueChange();

    }

    onActionButtonUpdate(data) {
        // this.selectedBBD = this.bbdMockService.getBBDbyID(data.$id);
        console.log('Edit ' + data.$id);
        this.toggleVisibleList();
    }

    onActionButtonDelete(data) {
        console.log('Delete ' + data.$id);
    }

    toggleVisibleList() {
        this.isVisibleList = !this.isVisibleList;
    }
}
