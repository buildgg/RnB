import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {LayoutModule} from '../shared/containers/layout/layout.module';
import {CollectionIssueComponent} from './collection-issue.component';
import {ComponentsModule} from '../shared/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: [CollectionIssueComponent]
})
export class CollectionIssueModule { }
