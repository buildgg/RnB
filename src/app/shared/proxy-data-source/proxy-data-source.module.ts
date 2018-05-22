import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BBDProxyService} from './bbd-proxy.service';
import {RoleClassProxy} from './roleClassProxy';
import {UserClassProxy} from './userClassProxy';
import {RnbRealTimeFireBaseService} from '../serviceFireBase/realTimeFireBase';
import {UserStaticData} from '../staticDataMockup/userStaticData';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BBDProxyService, RoleClassProxy, UserClassProxy],
    providers: [ UserClassProxy, RoleClassProxy, RnbRealTimeFireBaseService, UserStaticData ]
})
export class ProxyDataSourceModule { }
