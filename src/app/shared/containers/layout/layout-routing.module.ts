
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {BudgetIssueComponent} from '../../../budget-issue/budget-issue.component';

const routeLayout: Routes = [
/*  {path: 'home-screen/budget-issue',
   component: BudgetIssueComponent
  }*/

];
@NgModule({
  imports: [RouterModule.forChild(routeLayout)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

