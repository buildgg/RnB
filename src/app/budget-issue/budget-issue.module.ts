import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetIssueRoutingModule } from './budget-issue-routing.module';
import {BudgetIssueComponent} from './budget-issue.component';
import {LayoutModule} from '../shared/containers/layout/layout.module';
import {ComponentsModule} from '../shared/components/components.module';
import {IssueMockData} from './issue-mock-data';

@NgModule({
  imports: [
    CommonModule,
    BudgetIssueRoutingModule,
    LayoutModule,
    ComponentsModule
  ],
  declarations: [
    BudgetIssueComponent],
  providers: [IssueMockData]
})
export class BudgetIssueModule { }
