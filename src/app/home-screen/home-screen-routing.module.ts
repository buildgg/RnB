import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {HomeScreenComponent} from './home-screen.component';
import {AuthGuard} from '../auth/auth-guard.service';
import {BBDComponent} from '../bbd/bbd.component';
import {routesAdminPage} from '../admin-page/admin-page-routing.module';
import {routesIssue} from '../budget-issue/budget-issue-routing.module';
import {routesCollectionIssue} from '../collection-issue/collection-issue-routing.module';

export const routesHomeScreen: Routes = [
  {
    path: '', component: HomeScreenComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'issues', children: [...routesIssue]}
      /*       loadChildren: 'app/budget-issue/budget-issue.module#BudgetIssueModule'*/
      /*   component: BudgetIssueComponent*/

      /* loadChildren: 'app/budget-issue/budget-issue.module#BudgetIssueModule'*/
      ,
      /*,*/
      {path: 'collection-issue', children: [...routesCollectionIssue]},

      {path: 'bbd', component: BBDComponent},
      {
        path: 'admin-page',
        /*loadChildren: 'app/customers/customers.module#CustomersModule',*/
        /* loadChildren: 'app/admin-page/admin-page.module#AdminPageModule'
         ,*/
        children: [...routesAdminPage]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesHomeScreen)],
  exports: [RouterModule]
})
export class HomeScreenRoutingModule {
}
