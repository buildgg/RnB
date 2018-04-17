import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeScreenComponent} from './home-screen.component';
import {PageNotFoundComponent} from '../shared/components/page-not-found/page-not-found.component';
import {BudgetIssueComponent} from '../budget-issue/budget-issue.component';
import {BudgetBaseDocumentComponent} from '../budget-base-document/budget-base-document.component';
import {AdminPageComponent} from '../admin-page/admin-page.component';
import {AuthGuard} from "../auth/auth-guard.service";

const routesHomeScreen: Routes = [
  /* {path: '', redirectTo: '/home-screen', pathMatch: 'full' },*/
  /* {path: 'home-screen', component: HomeScreenComponent},*/
  /* {path: 'home-screen/budget-issue', component: BudgetIssueComponent},
   {path: 'home-screen/budget-base-document', component: BudgetBaseDocumentComponent},
   {path: 'home-screen/admin-page', component: AdminPageComponent}*/
  {
    path: 'home-screen', component: HomeScreenComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'budget-issue', component: BudgetIssueComponent},
      {path: 'budget-base-document', component: BudgetBaseDocumentComponent},
      {path: 'admin-page', component: AdminPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesHomeScreen)],
  exports: [RouterModule]
})
export class HomeScreenRoutingModule {
}
