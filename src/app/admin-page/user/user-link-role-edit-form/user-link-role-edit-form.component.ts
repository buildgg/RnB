import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
    @Input() user: User;
    @Input() roles: Role[];
    @Output() editedUser = new EventEmitter<User>();
    userEditForm: FormGroup;


    constructor(private formBuilder: FormBuilder) {
    }


    ngOnInit() {
        this.userEditForm = this.formBuilder.group({
            'user': [this.user.name],
            'role': [this.roles] // ПРОБЛЕМА - в списке не вібрана нужная роль
        });
    }


    onSubmit(formValue: any) {
        // console.log(formValue);
        this.user.roleid = formValue.role.$id;
        this.user.rolename = formValue.role.name;
        console.log(this.user);
        this.editedUser.emit(this.user);
    }



}


