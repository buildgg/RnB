import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BudgetBaseDocumentComponent} from './budget-base-document.component';
import {AuthGuard} from '../auth/auth-guard.service';
import {BudgetBaseDocumentListComponent} from './budget-base-document-list/budget-base-document-list.component';
import {BudgetBaseDocumentEditComponent} from './budget-base-document-edit/budget-base-document-edit.component';

export const routesBudgetBaseDocument: Routes = [
    {
        path: '', component: BudgetBaseDocumentComponent,
        canActivate: [AuthGuard],
        children: [
            {path: '', component: BudgetBaseDocumentListComponent},
            {path: 'list', component: BudgetBaseDocumentListComponent},
            {path: 'edit', component: BudgetBaseDocumentEditComponent}
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routesBudgetBaseDocument)],
    exports: [RouterModule]
})
export class BudgetBaseDocumentRoutingModule {
}
