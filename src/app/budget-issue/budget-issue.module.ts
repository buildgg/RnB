import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetIssueRoutingModule } from './budget-issue-routing.module';
import {BudgetIssueComponent} from './budget-issue.component';
import {LayoutModule} from '../shared/containers/layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    BudgetIssueRoutingModule,
    LayoutModule
  ],
  declarations: [
    BudgetIssueComponent]
})
export class BudgetIssueModule { }
