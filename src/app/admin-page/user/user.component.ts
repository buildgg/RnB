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
    selectedUser: User;
    users: User[];
    showUserLinkRoleViewComponent: boolean = false;
    showUserLinkRoleEditFormComponent: boolean = false;
    showUserLinkRoleListComponent: boolean = true;

    constructor(private  usersClassProxy: UserClassProxy, private router: Router, private route: ActivatedRoute) {
        usersClassProxy.getUsers().subscribe(value => this.users = value);
    }

    ngOnInit() {
    }

    onSelectToView(user: User ){
        this.selectedUser = user;
        //this.showUserLinkRoleViewComponent = false;
        //this.showUserLinkRoleEditFormComponent = false;
        this.showUserLinkRoleListComponent = true;
    }
}


