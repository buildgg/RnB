import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetIssueRoutingModule } from './budget-issue-routing.module';
import {BudgetIssueComponent} from './budget-issue.component';
import {LayoutModule} from '../shared/containers/layout/layout.module';
import {ComponentsModule} from '../shared/components/components.module';
import {IssueMockData} from './issue-mock-data';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueEditComponent } from './issue-edit/issue-edit.component';
import {RbMaterialModule} from '../shared/components/rb-material/rb-material.module';
import {MatSortModule, MatTableModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BudgetIssueRoutingModule,
    LayoutModule,
    ComponentsModule,
    RbMaterialModule
  ],
  declarations: [
    BudgetIssueComponent,
    IssueListComponent,
    IssueEditComponent],
  providers: [IssueMockData]
})
export class BudgetIssueModule { }
