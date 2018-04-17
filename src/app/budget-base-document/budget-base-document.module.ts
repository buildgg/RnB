import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetBaseDocumentRoutingModule } from './budget-base-document-routing.module';
import {LayoutModule} from '../shared/containers/layout/layout.module';
import {BudgetBaseDocumentComponent} from './budget-base-document.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    BudgetBaseDocumentRoutingModule
  ],
  declarations: [BudgetBaseDocumentComponent]
})
export class BudgetBaseDocumentModule { }
