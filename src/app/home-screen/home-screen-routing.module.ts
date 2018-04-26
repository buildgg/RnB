import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeScreenComponent} from './home-screen.component';
import {PageNotFoundComponent} from '../shared/components/page-not-found/page-not-found.component';
import {BudgetIssueComponent} from '../budget-issue/budget-issue.component';
import {BudgetBaseDocumentComponent} from '../budget-base-document/budget-base-document.component';
import {AdminPageComponent} from '../admin-page/admin-page.component';
import {AuthGuard} from '../auth/auth-guard.service';
import {RoleComponent} from '../admin-page/role/role.component';
import {UserComponent} from '../admin-page/user/user.component';
import {UserEditFormComponent} from '../admin-page/user/user-edit-form/user-edit-form.component';

const routesHomeScreen: Routes = [
    {
        path: 'home-screen', component: HomeScreenComponent,
        canActivate: [AuthGuard],
        children: [
            {path: 'budget-issue', component: BudgetIssueComponent},
            {path: 'budget-base-document', component: BudgetBaseDocumentComponent},
            {
                path: 'admin-page', component: AdminPageComponent,
                children: [
                    { path: 'user', component: UserComponent},
                    {path: 'usereditform/:id', component: UserEditFormComponent},
                    {path: 'role', component: RoleComponent}
                ]
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
