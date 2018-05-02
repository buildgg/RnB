import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BudgetBaseDocumentRoutingModule} from './budget-base-document-routing.module';
import {LayoutModule} from '../shared/containers/layout/layout.module';
import {BudgetBaseDocumentComponent} from './budget-base-document.component';
import {BudgetBaseDocumentListComponent} from './budget-base-document-list/budget-base-document-list.component';
import {BudgetBaseDocumentEditComponent} from './budget-base-document-edit/budget-base-document-edit.component';
import {ComponentsModule} from '../shared/components/components.module';
import {BudgetBaseDocumentMockData} from './budget-base-document-mock-data';
import {ReactiveFormsModule} from '@angular/forms';
import {BudgetPositionListComponent} from './budget-base-document-edit/budget-position-list/budget-position-list.component';
import {BudgetPositionEditComponent} from './budget-base-document-edit/budget-position-edit/budget-position-edit.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        BudgetBaseDocumentRoutingModule,
        ComponentsModule,
        ReactiveFormsModule
    ],
    declarations: [BudgetBaseDocumentComponent, BudgetBaseDocumentListComponent, BudgetBaseDocumentEditComponent, BudgetPositionListComponent, BudgetPositionEditComponent],
    providers: [BudgetBaseDocumentMockData]
})
export class BudgetBaseDocumentModule {
}
