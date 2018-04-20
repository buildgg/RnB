import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import {ComponentsModule} from '../../components/components.module';
import {LayoutRoutingModule} from './layout-routing.module';
import {AuthModule} from '../../../auth/auth.module';
import {AuthService} from '../../../auth/auth.service';



@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    LayoutRoutingModule,
    AuthModule
  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent]
})
export class LayoutModule { }
