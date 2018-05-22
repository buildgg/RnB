import { Component, OnInit } from '@angular/core';
import {RbButtonComponent} from '../shared/components/rb-button/rb-button.component';
import {ButtonAnchor} from '../shared/models/view-model/button/button-anchor.model';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../shared/models';


@Component({
    selector: 'admin-page',
    templateUrl: './admin-page.component.html'})
export class AdminPageComponent implements OnInit {

    userButton: RbButtonComponent;
    userButtonAnchor: ButtonAnchor;

    constructor(private router: Router, private route: ActivatedRoute)
    {  }

    ngOnInit() {
    }

    onClickUser() {
        this.router.navigate(['../home-screen/admin-page/user'], );
    }

    onClickRole() {
        this.router.navigate(['../home-screen/admin-page/role']);

    }


}
