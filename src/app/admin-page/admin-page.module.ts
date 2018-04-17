import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPageRoutingModule } from './admin-page-routing.module';
import {LayoutModule} from '../shared/containers/layout/layout.module';
import {AdminPageComponent} from './admin-page.component';

@NgModule({
  imports: [
    CommonModule,
    AdminPageRoutingModule,
    LayoutModule
  ],
  declarations: [AdminPageComponent]
})
export class AdminPageModule { }
