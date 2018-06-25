import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BudgetIssueComponent} from './budget-issue.component';


const routes: Routes = [
  {
    path: '',
    component: BudgetIssueComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetIssueRoutingModule { }
