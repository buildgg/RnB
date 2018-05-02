import {NgModule} from '@angular/core';
import {AuthGuard} from '../../auth/auth-guard.service';
import {Routes, RouterModule} from '@angular/router';
import {RoleComponent} from './role.component';
import {RoleEditFormComponent} from './role-edit-form/role-edit-form.component';


export const routesAdminPageRole: Routes = [
    {path: '', component: RoleComponent, canActivate: [AuthGuard]},
    {path: 'roleeditform/:id', component: RoleEditFormComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routesAdminPageRole)],
    exports: [RouterModule]
})
export class UserRoutingModule {
}
