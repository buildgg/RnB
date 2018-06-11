import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BBDRoutingModule} from './bbd-routing.module';
import {LayoutModule} from '../shared/containers/layout/layout.module';
import {BBDComponent} from './bbd.component';
import {BBDListComponent} from './bbd-list/bbd-list.component';
import {BBDEditComponent} from './bbd-edit/bbd-edit.component';
import {ComponentsModule} from '../shared/components/components.module';
import {BBDMockData} from './bbd-mock-data';
import {ReactiveFormsModule} from '@angular/forms';
import {BudgetPositionListComponent} from './bbd-edit/budget-position-list/budget-position-list.component';
import {BudgetPositionEditComponent} from './bbd-edit/budget-position-edit/budget-position-edit.component';
import {RbMaterialModule} from '../shared/components/rb-material/rb-material.module';

@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        BBDRoutingModule,
        ComponentsModule,
        ReactiveFormsModule,
        RbMaterialModule
    ],
    declarations: [BBDComponent, BBDListComponent, BBDEditComponent, BudgetPositionListComponent, BudgetPositionEditComponent],
    providers: [BBDMockData]
})
export class BBDModule {
}
