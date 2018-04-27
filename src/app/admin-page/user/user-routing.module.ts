import {NgModule} from '@angular/core';
import {AuthGuard} from '../../auth/auth-guard.service';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from './user.component';
import {UserEditFormComponent} from './user-edit-form/user-edit-form.component';

export const routesAdminPageUser: Routes = [
    {path: '', component: UserComponent, canActivate: [AuthGuard]},
    {path: 'usereditform/:id', component: UserEditFormComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routesAdminPageUser)],
    exports: [RouterModule]
})
export class UserRoutingModule {
}
