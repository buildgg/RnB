import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminPageComponent} from './admin-page.component';
import {RoleComponent} from './role/role.component';
import {UserComponent} from './user/user.component';
import {AuthGuard} from '../auth/auth-guard.service';

export const routesAdminPage: Routes = [
  {
  path: '',
  component: AdminPageComponent,
  canActivate: [AuthGuard],
  children: [
    { path: 'user', component: UserComponent  },
    { path: 'role', component: RoleComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routesAdminPage)],
  exports: [RouterModule]
})
export class AdminPageRoutingModule { }
