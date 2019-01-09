import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HomeScreenModule} from './home-screen/home-screen.module';
import {Router} from '@angular/router';

import {HomeScreenRoutingModule} from './home-screen/home-screen-routing.module';
import {BudgetIssueModule} from './budget-issue/budget-issue.module';
import {AuthModule} from './auth/auth.module';
import {AdminPageModule} from './admin-page/admin-page.module';
import {AppRoutingModule} from './app-routing.module';
import {BBDModule} from './bbd/bbd.module';
import {CoreModule} from './core/core.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CollectionIssueModule} from './collection-issue/collection-issue.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeScreenModule,
    HomeScreenRoutingModule,
    BudgetIssueModule,
    BBDModule,
    AuthModule,
    AdminPageModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    CollectionIssueModule

  ],
  bootstrap: [AppComponent]

})
export class AppModule {
  constructor(router: Router) {
    /*console.log('Routes: ', JSON.stringify(router.config, undefined, 2));*/
  }
}
