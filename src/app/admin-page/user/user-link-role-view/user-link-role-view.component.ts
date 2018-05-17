import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserClassProxy} from "../../../shared/proxy-data-source/userClassProxy";
import {RoleClassProxy} from "../../../shared/proxy-data-source/roleClassProxy";
import {ActivatedRoute, Router} from "@angular/router";
import {Role} from "../../../shared/models/role.model";
import {User} from "../../../shared/models/user.model";


@Component({
    selector: 'user-link-role-view',
    templateUrl: './user-link-role-view.component.html',

})
export class UserLinkRoleViewComponent implements OnInit {

    userLinkRoleViewForm: FormGroup;
    @Input() user: User;

    constructor(private  usersClassProxy: UserClassProxy,
                private router: Router,
                private route: ActivatedRoute,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.userLinkRoleViewForm = this.formBuilder.group({
            'user': [this.user.name],
            'role': [this.user.role]
        });
    }

    onSubmit(value: any) {
        this.router.navigate(['../admin-page/user']);
    }


}
