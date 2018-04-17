import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeScreenComponent} from './home-screen.component';
import {LayoutModule} from '../shared/containers/layout/layout.module';
/*import {RouterModule} from "@angular/router";
import {LayoutRoutingModule} from "../shared/containers/layout/layout-routing.module";*/
import {HomeScreenRoutingModule} from './home-screen-routing.module';


@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    HomeScreenRoutingModule
  ],
  declarations: [HomeScreenComponent],
  exports: [HomeScreenComponent]
})
export class HomeScreenModule { }
