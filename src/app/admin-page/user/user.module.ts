import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserLinkRoleListComponent} from './user-link-role-list/user-link-role-list.component';
import {UserComponent} from './user.component';
import {UserLinkRoleEditFormComponent} from './user-link-role-edit-form/user-link-role-edit-form.component';
import { UserLinkRoleViewComponent } from './user-link-role-view/user-link-role-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
    exports: [UserLinkRoleListComponent, UserComponent, UserLinkRoleEditFormComponent, UserLinkRoleViewComponent],
  declarations: [UserLinkRoleViewComponent]
})
export class UserModule { }
