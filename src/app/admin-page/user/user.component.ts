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
    roles: Role[];
    switchComponent: string = 'LIST';

    constructor(private  /*us: UserStaticData*/ usersClassProxy: UserClassProxy, private  roleClassProxy: RoleClassProxy, private router: Router, private route: ActivatedRoute) {
        usersClassProxy.getUsers().subscribe(value => this.users = value);
        roleClassProxy.getRole().subscribe(value => this.roles = value);
    /* this.users= us.getdata();*/
    }

    ngOnInit() {
        this.switchComponent = 'LIST';
    }

    onSelectToView(user: User ){
        this.selectedUser = user;
        this.switchComponent = 'VIEW';

    }

    onSelectToEdit(user: User ){
        this.selectedUser = user;
        this.switchComponent = 'EDIT';

    }

    onReturnToListFromView (user: User ){
        this.selectedUser = user;
        this.switchComponent = 'LIST';

    }

    onReturnToListFromEdit(user: User ){

        this.selectedUser = user;

        this.usersClassProxy.updateUser({
            $id: this.selectedUser.$id,
            name: this.selectedUser.name,
            password: this.selectedUser.password,
            roleid: this.selectedUser.roleid,
            rolename: this.selectedUser.rolename
        }).subscribe(value => alert('Всё ОК, id = ' + value ), value => alert(value));

        this.switchComponent = 'LIST';
    }



}


