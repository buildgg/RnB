import {NgModule} from '@angular/core';
import {AuthGuard} from '../../auth/auth-guard.service';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from './user.component';
import {UserLinkRoleEditFormComponent} from './user-link-role-edit-form/user-link-role-edit-form.component';
import {UserLinkRoleListComponent} from "./user-link-role-list/user-link-role-list.component";
import {UserLinkRoleViewComponent} from "./user-link-role-view/user-link-role-view.component";

export const routesAdminPageUser: Routes = [
    {path: '', component: UserComponent, canActivate: [AuthGuard]},
    {path: 'usereditform/:id', component: UserLinkRoleEditFormComponent},
    {path: 'userview/:id', component: UserLinkRoleViewComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routesAdminPageUser)],
    exports: [RouterModule]
})
export class UserRoutingModule {
}
