import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BudgetPositionListComponent} from './budget-position-list/budget-position-list.component';
import {BudgetPositionEditComponent} from './budget-position-edit/budget-position-edit.component';
import {BudgetBaseDocumentEditComponent} from './budget-base-document-edit.component';
import {AuthGuard} from '../../auth/auth-guard.service';

export const routesBudgetBaseDocumentEdit: Routes = [
    {
        path: '', component: BudgetBaseDocumentEditComponent,
        canActivate: [AuthGuard],
        children: [
            {path: '', component: BudgetPositionListComponent},
            {path: 'positionlist', component: BudgetPositionListComponent},
            {path: 'positionedit', component: BudgetPositionEditComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routesBudgetBaseDocumentEdit)],
    exports: [RouterModule]
})
export class BudgetBaseDocumentEditRoutingModule {
}
