import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserClassProxy} from '../../../shared/proxy-data-source/userClassProxy';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../shared/models/user.model';

@Component({
  selector: 'user-link-role-list',
  templateUrl: './user-link-role-list.component.html'
})
export class UserLinkRoleListComponent implements OnInit {


  //   usersClassProxy: UserClassProxy;

    @Output() selectedUser = new EventEmitter<User>();
    @Input() users: User[];

    UserListSelected(user) {
        this.selectedUser.emit(user);
    }


    constructor() {
    }

    ngOnInit() {
    }

/*    onEdit(selectedUser: User) {
        this.usersClassProxy.selectdUser = Object.assign({}, selectedUser );
        this.router.navigate(['../usereditform', selectedUser.$id], {relativeTo: this.route});
    }

    onView(selected: User) {
        this.router.navigate(['ТУТ НАДО ДОБАВИТЬ ПУТЬ', selected.$id], {relativeTo: this.route});
    }*/

}
