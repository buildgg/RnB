import {Component, OnInit} from '@angular/core';
import {UserStaticData} from '../../shared/staticDataMockup/userStaticData';
import {User} from '../../shared/models/user.model';
import {ActivatedRoute, Router} from '@angular/router';
import {UserClassProxy} from '../../shared/proxy-data-source/userClassProxy';
import {RoleClassProxy} from '../../shared/proxy-data-source/roleClassProxy';
import {Role} from '../../shared/models/role.model';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

    ngOnInit() {
    }

}


