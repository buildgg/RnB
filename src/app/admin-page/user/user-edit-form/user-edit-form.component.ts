import {Component, OnInit} from '@angular/core';
import {User} from '../../../shared/models/user.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UserStaticData} from '../../../shared/staticDataMockup/userStaticData';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from '../../../app.component';
import {thLocale} from "ngx-bootstrap";
import {UserClassProxy} from "../../../shared/ProxyDataSource/userClassProxy";
import {Role} from "../../../shared/models/role.model";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

@Component({
    selector: 'app-user-edit-form',
    templateUrl: './user-edit-form.component.html',
    styleUrls: ['./user-edit-form.component.css']})

export class UserEditFormComponent implements OnInit {

    usersform: FormGroup;
    users: User[] = [];
    roles: Role[] = [];
    private router: Router;

    constructor(private usersProxy: UserClassProxy, private formBuilder: FormBuilder) {
        usersProxy.getUsers().subscribe(value => this.users = value);
    }


    ngOnInit() {
        console.log(this.users);   // проверка
        this.usersform = new FormGroup({
            users: new FormControl(),
            roles: new FormControl()
        });
    }
    onSubmit(){
        const users = this.usersform.get('users') as FormArray;
        users.push(new FormControl());
    }



}


