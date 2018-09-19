import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BudgetIssueComponent} from './budget-issue.component';
import {IssueEditComponent} from './issue-edit/issue-edit.component';


export const routesIssue: Routes = [
  {path: '', component: BudgetIssueComponent},
  {path: 'edit/:id', component: IssueEditComponent},
  {path: 'add', component: IssueEditComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routesIssue)],
  exports: [RouterModule]
})
export class BudgetIssueRoutingModule { }
