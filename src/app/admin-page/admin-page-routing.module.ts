import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminPageComponent} from './admin-page.component';
import {RoleComponent} from './role/role.component';
import {UserComponent} from './user/user.component';
import {AuthGuard} from '../auth/auth-guard.service';
import {BudgetIssueComponent} from '../budget-issue/budget-issue.component';
import {HomeScreenComponent} from '../home-screen/home-screen.component';
import {routesBudgetBaseDocument} from '../budget-base-document/budget-base-document-routing.module';
import {routesAdminPageUser} from './user/user-routing.module';

export const routesAdminPage: Routes = [
  {
  path: '',
  component: AdminPageComponent,
  canActivate: [AuthGuard],
  children: [{path: 'user', children: [...routesAdminPageUser]}]
  }
  ];

/*
    { path: 'user', component: UserComponent  },
    { path: 'role', component: RoleComponent }
export const routesHomeScreen: Routes = [
  {
    path: '', component: HomeScreenComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'budget-issue', component: BudgetIssueComponent},
      {path: 'budget-base-document',
          children: [...routesBudgetBaseDocument]},
      {path: 'admin-page',
        children: [...routesAdminPage]
      }
    ]
  }
];
*/

@NgModule({
  imports: [RouterModule.forChild(routesAdminPage)],
  exports: [RouterModule]
})
export class AdminPageRoutingModule { }
