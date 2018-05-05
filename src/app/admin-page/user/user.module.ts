import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserLinkRoleListComponent} from './user-link-role-list/user-link-role-list.component';
import {UserComponent} from './user.component';
import {UserLinkRoleEditFormComponent} from './user-link-role-edit-form/user-link-role-edit-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
    exports: [UserLinkRoleListComponent, UserComponent, UserLinkRoleEditFormComponent],
  declarations: []
})
export class UserModule { }
