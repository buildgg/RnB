import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminPageRoutingModule} from './admin-page-routing.module';
import {LayoutModule} from '../shared/containers/layout/layout.module';
import {AdminPageComponent} from './admin-page.component';
import {UserComponent} from './user/user.component';
import {RoleComponent} from './role/role.component';
import {UserLinkRoleEditFormComponent} from './user/user-link-role-edit-form/user-link-role-edit-form.component';
import {RoleEditFormComponent} from './role/role-edit-form/role-edit-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ComponentsModule} from '../shared/components/components.module';

/***** Model ****/
import {UserClassProxy} from '../shared/proxy-data-source/userClassProxy';
import {RoleClassProxy} from '../shared/proxy-data-source/roleClassProxy';

/*****  FireBase  ****/
import {RnbRealTimeFireBaseService} from '../shared/serviceFireBase/realTimeFireBase';
import {environment} from '../../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { UserLinkRoleListComponent } from './user/user-link-role-list/user-link-role-list.component';
import {UserLinkRoleViewComponent} from "./user/user-link-role-view/user-link-role-view.component";
import {UserStaticData} from '../shared/staticDataMockup/userStaticData';






@NgModule({
    imports: [
        CommonModule,
        AdminPageRoutingModule,
        LayoutModule,
        ReactiveFormsModule,
        ComponentsModule,
        /*****  FireBase  ****/
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebaseConfig)
    ],
    declarations: [AdminPageComponent, UserComponent, RoleComponent, UserLinkRoleEditFormComponent, RoleEditFormComponent, UserLinkRoleListComponent, UserLinkRoleViewComponent],
    exports: [AdminPageComponent, UserComponent, RoleComponent ],
    providers: [ UserClassProxy, RoleClassProxy, RnbRealTimeFireBaseService, UserStaticData ]
})
export class AdminPageModule {
}
