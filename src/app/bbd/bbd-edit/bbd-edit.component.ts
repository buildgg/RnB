import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BBDMockData} from '../bbd-mock-data';
import {BBD} from '../../shared/models/bbd.model';
import {BudgetPosition} from '../../shared/models/budget-position.model';
import {Observable} from 'rxjs';
import {ButtonAnchor} from '../../shared/models/view-model/button/button-anchor.model';
import {UpdateButtonAnchor} from '../../shared/models/view-model/button/update-button-anchor.model';
import {DeleteButtonAnchor} from '../../shared/models/view-model/button/delete-button-anchor.model';
import {ViewButtonAnchor} from '../../shared/models/view-model/button/view-button-anchor.model';
import {ColumnTable} from '../../shared/models/view-model/column-table';

const columnsBBDPosition: ColumnTable[] = [
    {columnDef: '$id', headerName: 'Номер'},
    {columnDef: 'budgetDate', headerName: 'Бюджетная дата'},
    {columnDef: 'realBudgetDate', headerName: 'Реальная дата бюджета'},
    {columnDef: 'comments', headerName: 'Описание'},
    {columnDef: 'mngResponsCenter', headerName: 'ЦО'},
    {columnDef: 'division', headerName: 'Подразделение'},
    {columnDef: 'count', headerName: 'Количество'},
    {columnDef: 'measure', headerName: 'Ед.изм.'},
    {columnDef: 'budgetArticle', headerName: 'Статья бюджета'},
    {columnDef: 'approximateAmount', headerName: 'Ориентировочная сумма'},
    {columnDef: 'amount', headerName: 'Сумма'},
    {columnDef: 'payedAmount', headerName: 'Оплачено'},
    {columnDef: 'utilizedAmount', headerName: 'Закрыто'},
    {columnDef: 'budgetPositionState', headerName: 'Состояние'}
];
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
    
    // tableHeadList: string[] = tableHeads;
    
    bbdPositionList: BudgetPosition[];
    selectedBBDPosition: BudgetPosition;
    
    isVisibleList: boolean = true;

    columns: ColumnTable[] = columnsBBDPosition;

    updateButton: ButtonAnchor = new UpdateButtonAnchor();
    deleteButton: ButtonAnchor = new DeleteButtonAnchor();
    viewButton: ButtonAnchor = new ViewButtonAnchor();
    
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

    onClickUpdate(data) {
        // this.selectedBBD = this.bbdMockService.getBBDbyID(data.$id);
        console.log('Edit ' + data.$id);
        this.toggleVisibleList();
    }

    onClickDelete(data) {
        console.log('Delete ' + data.$id);
    }

    onClickView(data) {
        // this.selectedBBD = this.bbdMockService.getBBDbyID(data.$id);
        console.log('View ' + data.$id);
        this.toggleVisibleList();
    }

    toggleVisibleList() {
        this.isVisibleList = !this.isVisibleList;
    }
}
