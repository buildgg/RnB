import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BBDComponent} from './bbd.component';
import {AuthGuard} from '../auth/auth-guard.service';
import {BBDListComponent} from './bbd-list/bbd-list.component';
import {routesBBDEdit} from './bbd-edit/bbd-edit-routing.module';

export const routesBBD: Routes = [
    {
        path: '', component: BBDComponent,
        canActivate: [AuthGuard],
        children: [
            {path: '', component: BBDListComponent},
            {path: 'list', component: BBDListComponent},
            {
                path: 'edit',
                children: [...routesBBDEdit]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routesBBD)],
    exports: [RouterModule]
})
export class BBDRoutingModule {
}
