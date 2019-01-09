import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {CollectionIssueComponent} from './collection-issue.component';

export const routesCollectionIssue: Routes = [
  {path: '', component: CollectionIssueComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routesCollectionIssue)],
  exports: [RouterModule]
})
export class CollectionIssueRoutingModule { }
