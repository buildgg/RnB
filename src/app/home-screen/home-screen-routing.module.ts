import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeScreenComponent} from './home-screen.component';
import {BudgetIssueComponent} from '../budget-issue/budget-issue.component';
import {AuthGuard} from '../auth/auth-guard.service';
import {routesAdminPage} from '../admin-page/admin-page-routing.module';
import {BBDComponent} from '../bbd/bbd.component';

export const routesHomeScreen: Routes = [
  {
    path: '', component: HomeScreenComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'budget-issue', component: BudgetIssueComponent},
      {path: 'bbd', component: BBDComponent},
      {path: 'admin-page',
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
