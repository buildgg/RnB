import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeScreenComponent} from './home-screen.component';
import {BudgetIssueComponent} from '../budget-issue/budget-issue.component';
import {AuthGuard} from '../auth/auth-guard.service';
import {routesAdminPage} from '../admin-page/admin-page-routing.module';
import {routesBBD} from '../bbd/bbd-routing.module';

export const routesHomeScreen: Routes = [
  {
    path: '', component: HomeScreenComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'budget-issue', component: BudgetIssueComponent},
      {path: 'bbd',
          children: [...routesBBD]},
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
