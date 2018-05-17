import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserClassProxy} from '../../../shared/proxy-data-source/userClassProxy';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../shared/models/user.model';

@Component({
  selector: 'app-user-link-role-list',
  templateUrl: './user-link-role-list.component.html'
})
export class UserLinkRoleListComponent implements OnInit {
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

    onEdit(selectedUser: User) {
        this.usersClassProxy.selectdUser = Object.assign({}, selectedUser );
        this.router.navigate(['../usereditform', selectedUser.$id], {relativeTo: this.route});
    }

    onView(selected: User) {
        this.router.navigate(['ТУТ НАДО ДОБАВИТЬ ПУТЬ', selected.$id], {relativeTo: this.route});
    }

}
