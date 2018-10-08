import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetIssueRoutingModule } from './budget-issue-routing.module';
import {BudgetIssueComponent} from './budget-issue.component';
import {LayoutModule} from '../shared/containers/layout/layout.module';
import {ComponentsModule} from '../shared/components/components.module';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueEditComponent } from './issue-edit/issue-edit.component';
import {RbMaterialModule} from '../shared/components/rb-material/rb-material.module';
import {IssueService} from './issue.service';
import {ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { IssueModalBoxViewComponent } from './issue-modal-box-view/issue-modal-box-view.component';

@NgModule({
  imports: [
    CommonModule,
    BudgetIssueRoutingModule,
    LayoutModule,
    ComponentsModule,
    RbMaterialModule,
    ReactiveFormsModule,
    MatAutocompleteModule
  ],
  declarations: [
    BudgetIssueComponent,
    IssueListComponent,
    IssueEditComponent,
    IssueModalBoxViewComponent],
  providers: [IssueService]
})
export class BudgetIssueModule { }
