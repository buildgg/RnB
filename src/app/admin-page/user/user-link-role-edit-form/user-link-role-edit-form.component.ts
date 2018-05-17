import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../shared/models/user.model';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserClassProxy} from '../../../shared/proxy-data-source/userClassProxy';
import {Role} from '../../../shared/models/role.model';
import {RoleClassProxy} from '../../../shared/proxy-data-source/roleClassProxy';
import {Router} from '@angular/router';

@Component({
    selector: 'user-link-role-edit-form',
    templateUrl: './user-link-role-edit-form.component.html'
})

export class UserLinkRoleEditFormComponent implements OnInit {
    @Input() user;
    userEditForm: FormGroup;
    users: User[] = [];
    roles: Role[] = [];

    constructor(private formBuilder: FormBuilder,
                private  usersClassProxy: UserClassProxy,
                private  roleClassProxy: RoleClassProxy,
                private router: Router) {
        roleClassProxy.getUsers().subscribe(value => this.roles = value);
    }


    ngOnInit() {
        this.userEditForm = this.formBuilder.group({
            'user': [this.usersClassProxy.selectdUser.name],
            'role': [null] // ПРОБЛЕМА - в списке не вібрана нужная роль
        });
    }

    onSubmit(value: any): void {

        this.usersClassProxy.updateUser({
            $id: this.usersClassProxy.selectdUser.$id,
            name: this.usersClassProxy.selectdUser.name,
            password: this.usersClassProxy.selectdUser.password,
            role: value.role.name
        }).subscribe(value => alert('Всё ОК, id = ' + value ), value => alert(value));

        this.router.navigate(['../admin-page/user']);
    }


}


