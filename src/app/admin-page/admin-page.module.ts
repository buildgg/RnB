import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminPageRoutingModule} from './admin-page-routing.module';
import {LayoutModule} from '../shared/containers/layout/layout.module';
import {AdminPageComponent} from './admin-page.component';
import {UserComponent} from './user/user.component';
import {RoleComponent} from './role/role.component';
import {UserEditFormComponent} from './user/user-edit-form/user-edit-form.component';
import { RoleEditFormComponent } from './role/role-edit-form/role-edit-form.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        AdminPageRoutingModule,
        LayoutModule,
        ReactiveFormsModule
    ],
    declarations: [AdminPageComponent, UserComponent, RoleComponent, UserEditFormComponent, RoleEditFormComponent],
    exports: [AdminPageComponent, UserComponent, RoleComponent ]
})
export class AdminPageModule {
}
