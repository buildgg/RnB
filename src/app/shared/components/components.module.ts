import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {NavHeaderComponent} from './nav-header/nav-header.component';
import { RbFooterComponent } from './rb-footer/rb-footer.component';
import { NavListComponent } from './nav-list/nav-list.component';
import { NavRootComponent } from './nav-root/nav-root.component';
import {RouterModule} from "@angular/router";

export const COMPONENTS = [
  NavHeaderComponent,
  RbFooterComponent,
  NavListComponent,
  NavRootComponent
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    PageNotFoundComponent,
    NavHeaderComponent,
    RbFooterComponent,
    NavListComponent,
    NavRootComponent],
  exports: [COMPONENTS]
})
export class ComponentsModule { }
