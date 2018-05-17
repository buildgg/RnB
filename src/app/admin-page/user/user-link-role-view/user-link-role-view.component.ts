import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserClassProxy} from "../../../shared/proxy-data-source/userClassProxy";
import {RoleClassProxy} from "../../../shared/proxy-data-source/roleClassProxy";
import {ActivatedRoute, Router} from "@angular/router";
import {Role} from "../../../shared/models/role.model";
import {User} from "../../../shared/models/user.model";



@Component({
  selector: 'app-user-link-role-view',
  templateUrl: './user-link-role-view.component.html',

})
export class UserLinkRoleViewComponent implements OnInit {
    users: User[];
    @Output() selectedUser = new EventEmitter();

    UserListSelected(user) {
        this.selectedUser .emit(user);
    }


    constructor(private  usersClassProxy: UserClassProxy, private router: Router, private route: ActivatedRoute) {
        usersClassProxy.getUsers().subscribe(value => this.users = value);
    }

    ngOnInit() {
    }




}
