import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HomeScreenModule} from './home-screen/home-screen.module';
import {AlertModule} from 'ngx-bootstrap';
import {Router} from '@angular/router';

import {HomeScreenRoutingModule} from './home-screen/home-screen-routing.module';
import {BudgetIssueModule} from './budget-issue/budget-issue.module';
import {BudgetBaseDocumentModule} from './budget-base-document/budget-base-document.module';
import {AuthModule} from './auth/auth.module';
import {AdminPageModule} from './admin-page/admin-page.module';
import {AppRoutingModule} from './app-routing.module';
import {UserStaticData} from './shared/staticDataMockup/userStaticData';
import {RoleStaticData} from './shared/staticDataMockup/roleStaticData';
import {ReactiveFormsModule} from "@angular/forms";
import {UserClassProxy} from './shared/ProxyDataSource/userClassProxy';
import {AngularFireModule} from 'angularfire2';
import { environment } from '../environments/environment';
import {RnbRealTimeFireBaseService} from './shared/serviceFireBase/realTimeFireBase';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeScreenModule,
    AlertModule.forRoot(),
    HomeScreenRoutingModule,
    BudgetIssueModule,
    BudgetBaseDocumentModule,
    AuthModule,
    AdminPageModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [UserStaticData, RoleStaticData, UserClassProxy, UserStaticData , RnbRealTimeFireBaseService],
  bootstrap: [AppComponent]

})
export class AppModule {
  constructor(router: Router) {
    /*console.log('Routes: ', JSON.stringify(router.config, undefined, 2));*/
  }
}
