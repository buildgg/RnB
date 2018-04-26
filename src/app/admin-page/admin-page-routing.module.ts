import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoleComponent} from "./role/role.component";
import {UserComponent} from "./user/user.component";
import {UserEditFormComponent} from "./user/user-edit-form/user-edit-form.component";
import {AdminPageComponent} from "./admin-page.component";
import {AuthGuard} from "../auth/auth-guard.service";

/* const routes: Routes = [
   // {path: '', redirectTo: '/admin-page' },
    { path: "User", component: UserComponent  },
    { path: "UserEditForm/:id", component: UserEditFormComponent  },
    { path: "Role", component: RoleComponent }
];*/


const routes: Routes = [

    {
        path: 'admin-page', component: AdminPageComponent
        //  canActivate: [AuthGuard],

    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminPageRoutingModule { }