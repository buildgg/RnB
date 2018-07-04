import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {NavHeaderComponent} from './nav-header/nav-header.component';
import { RbFooterComponent } from './rb-footer/rb-footer.component';
import { NavListComponent } from './nav-list/nav-list.component';
import { NavRootComponent } from './nav-root/nav-root.component';
import {RouterModule} from '@angular/router';
import { RbTableComponent } from './rb-table/rb-table.component';
import { RbButtonComponent } from './rb-button/rb-button.component';
import { RbFiltersComponent } from './rb-filters/rb-filters.component';
import { RbOperationsComponent } from './rb-operations/rb-operations.component';
import {RbDropDownMenuComponent} from './drop-down-menu/drop-down-menu.component';
import { RbLinkComponent } from './rb-link/rb-link.component';
import { RbLookUpComponent } from './rb-look-up/rb-look-up.component';
import { LookUpDirective } from './rb-look-up/look-up.directive';


export const COMPONENTS = [
  NavHeaderComponent,
  RbFooterComponent,
  NavListComponent,
  NavRootComponent,
  RbTableComponent,
  RbFiltersComponent,
  RbButtonComponent,
  RbOperationsComponent,
  RbDropDownMenuComponent,
  RbLinkComponent,
  RbLookUpComponent
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
    NavRootComponent,
    RbTableComponent,
    RbButtonComponent,
    RbFiltersComponent,
    RbOperationsComponent,
    RbDropDownMenuComponent,
    RbLinkComponent,
    RbLookUpComponent,
    LookUpDirective],
  exports: [COMPONENTS]
})
export class ComponentsModule { }
