import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BudgetBaseDocumentMockData} from '../budget-base-document-mock-data';

@Component({
    moduleId: module.id,
    selector: 'budget-base-document-edit',
    templateUrl: './budget-base-document-edit.component.html',
    styleUrls: ['./budget-base-document-edit.component.css']
})
export class BudgetBaseDocumentEditComponent implements OnInit {

    bbdEditForm: FormGroup;

    constructor(public budgetBaseDocumentMockService: BudgetBaseDocumentMockData, private fb: FormBuilder) {
    }

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        if (this.budgetBaseDocumentMockService.selectedBudgetBaseDocument.$id == '') {
            this.bbdEditForm = this.fb.group({
                'documentNo': [''],
                'documentDate': [''],
                'supplier': [''],
                'responsiblePerson': [''],
                'approximateAmount': ['0.00'],
                'amount': ['0.00'],
                'payedAmount': ['0.00'],
                'utilizedAmount': ['0.00'],
                'budgetBaseDocumentState': ['Введен']
            });
        } else {
            this.bbdEditForm = this.fb.group({
                'documentNo': [this.budgetBaseDocumentMockService.selectedBudgetBaseDocument.documentNo],
                'documentDate': [this.budgetBaseDocumentMockService.selectedBudgetBaseDocument.documentDate],
                'supplier': [this.budgetBaseDocumentMockService.selectedBudgetBaseDocument.supplier],
                'responsiblePerson': [this.budgetBaseDocumentMockService.selectedBudgetBaseDocument.responsiblePerson],
                'approximateAmount': [this.budgetBaseDocumentMockService.selectedBudgetBaseDocument.approximateAmount],
                'amount': [this.budgetBaseDocumentMockService.selectedBudgetBaseDocument.amount],
                'payedAmount': [this.budgetBaseDocumentMockService.selectedBudgetBaseDocument.payedAmount],
                'utilizedAmount': [this.budgetBaseDocumentMockService.selectedBudgetBaseDocument.utilizedAmount],
                'budgetBaseDocumentState': [this.budgetBaseDocumentMockService.selectedBudgetBaseDocument.budgetBaseDocumentState]
            });
        }
        // this.bbdEditForm.valueChanges.subscribe(data=>this.onValueChange(data));
        // this.onValueChange();

    }
}
