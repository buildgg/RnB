import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminPageComponent} from './admin-page.component';
import {AuthGuard} from '../auth/auth-guard.service';
import {routesAdminPageUser} from './user/user-routing.module';
import {routesAdminPageRole} from './role/role-routing.module';

export const routesAdminPage: Routes = [
  {
  path: '',
  component: AdminPageComponent,
  canActivate: [AuthGuard],
  children: [{path: 'user', children: [...routesAdminPageUser]},
      {path: 'role', children: [...routesAdminPageRole]},
  ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routesAdminPage)],
  exports: [RouterModule]
})
export class AdminPageRoutingModule { }
