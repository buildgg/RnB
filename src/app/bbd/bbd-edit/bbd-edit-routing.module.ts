import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BBDEditComponent} from './bbd-edit.component';
import {AuthGuard} from '../../auth/auth-guard.service';
import {BudgetPositionListComponent} from './budget-position-list/budget-position-list.component';
import {BudgetPositionEditComponent} from './budget-position-edit/budget-position-edit.component';

export const routesBBDEdit: Routes = [
    {
        path: '', component: BBDEditComponent,
        canActivate: [AuthGuard],
        children: [
            {path: '', component: BudgetPositionListComponent},
            {path: 'positionlist', component: BudgetPositionListComponent},
            {path: 'positionedit', component: BudgetPositionEditComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routesBBDEdit)],
    exports: [RouterModule]
})
export class BBDEditRoutingModule {
}
