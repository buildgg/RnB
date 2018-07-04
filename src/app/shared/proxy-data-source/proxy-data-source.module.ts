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
    declarations: [],
    providers: [ UserClassProxy,
        RoleClassProxy,
        RnbRealTimeFireBaseService,
        UserStaticData, BBDProxyService, RoleClassProxy, UserClassProxy ]
})
export class ProxyDataSourceModule { }