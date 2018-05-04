import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BBDMockData} from '../bbd-mock-data';

@Component({
    moduleId: module.id,
    selector: 'bbd-edit',
    templateUrl: './bbd-edit.component.html',
    styleUrls: ['./bbd-edit.component.css']
})
export class BBDEditComponent implements OnInit {

    bbdEditForm: FormGroup;

    constructor(public bbdMockService: BBDMockData, private fb: FormBuilder) {
    }

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        if (this.bbdMockService.selectedBBD.$id == '') {
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
                'documentNo': [this.bbdMockService.selectedBBD.documentNo],
                'documentDate': [this.bbdMockService.selectedBBD.documentDate],
                'supplier': [this.bbdMockService.selectedBBD.supplier],
                'responsiblePerson': [this.bbdMockService.selectedBBD.responsiblePerson],
                'approximateAmount': [this.bbdMockService.selectedBBD.approximateAmount],
                'amount': [this.bbdMockService.selectedBBD.amount],
                'payedAmount': [this.bbdMockService.selectedBBD.payedAmount],
                'utilizedAmount': [this.bbdMockService.selectedBBD.utilizedAmount],
                'bbdState': [this.bbdMockService.selectedBBD.bbdState]
            });
        }
        // this.bbdEditForm.valueChanges.subscribe(data=>this.onValueChange(data));
        // this.onValueChange();

    }
}
