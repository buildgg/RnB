import {Component, OnInit} from '@angular/core';
import {User} from '../../../shared/models/user.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UserStaticData} from '../../../shared/staticDataMockup/userStaticData';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from '../../../app.component';
import {thLocale} from 'ngx-bootstrap';
import {UserClassProxy} from '../../../shared/proxy-data-source/userClassProxy';
import {Role} from '../../../shared/models/role.model';
import {RoleClassProxy} from '../../../shared/proxy-data-source/roleClassProxy';

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

@Component({
    selector: 'user-link-role',
    templateUrl: './user-link-role.component.html'
})

export class UserLinkRoleEditFormComponent implements OnInit {

    userEditForm: FormGroup;
    users: User[] = [];
    roles: Role[] = [];

    constructor(private formBuilder: FormBuilder,
                private  usersClassProxy: UserClassProxy,
                private  roleClassProxy: RoleClassProxy,
                private router: Router) {
        usersClassProxy.getUsers().subscribe(value => this.users = value);
        roleClassProxy.getUsers().subscribe(value => this.roles = value);
    }


    ngOnInit() {
        console.log(this.users);   // проверка
        this.userEditForm = this.formBuilder.group({
            'user': [this.usersClassProxy.selectdUser.name],
            'role': [null]
        });
    }

    onSubmit(value: any): void {
        //  console.log(value);
        this.usersClassProxy.updateUser({$id: this.usersClassProxy.selectdUser.$id,
                                                       name: this.usersClassProxy.selectdUser.name,
                                                       password: this.usersClassProxy.selectdUser.password,
                                                       role: value.role.name});
        this.router.navigate(['../admin-page/user']);
    }


}


