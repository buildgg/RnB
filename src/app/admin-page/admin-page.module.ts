import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPageRoutingModule } from './admin-page-routing.module';
import {LayoutModule} from '../shared/containers/layout/layout.module';
import {AdminPageComponent} from './admin-page.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { UserEditFormComponent } from './user/user-edit-form/user-edit-form.component';

@NgModule({
  imports: [
    CommonModule,
    AdminPageRoutingModule,
    LayoutModule
  ],
  declarations: [AdminPageComponent, UserComponent, RoleComponent, UserEditFormComponent]
})
export class AdminPageModule { }
