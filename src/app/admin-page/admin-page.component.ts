import { Component, OnInit } from '@angular/core';
import {RbButtonComponent} from '../shared/components/rb-button/rb-button.component';
import {ButtonAnchor} from '../shared/models/view-model/button/button-anchor.model';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {User} from '../shared/models';
import {filter} from 'rxjs/operators';

const urlHomeScreen: string[] = ['/', '/home-screen/admin-page'];

@Component({
    selector: 'admin-page',
    templateUrl: './admin-page.component.html'})
export class AdminPageComponent implements OnInit {

    userButton: RbButtonComponent;
    userButtonAnchor: ButtonAnchor;

    isVisible: boolean = true;

    constructor(private router: Router, private route: ActivatedRoute)
    {  }

    ngOnInit() {
        this.toggleVisible();
    }


    onClickUser() {
        this.router.navigate(['../home-screen/admin-page/user'] );
    }

    onClickRole() {
        this.router.navigate(['../home-screen/admin-page/role']);

    }

    toggleVisible() {
        if (urlHomeScreen.indexOf(this.router.url) === -1) {
            this.isVisible = false;
        }
        this.router.events.pipe(filter(
            (event) => event instanceof NavigationEnd))
            .subscribe(
                (event: NavigationEnd) => {
                    if (urlHomeScreen.indexOf(event.url) === -1) {
                        this.isVisible = false;
                    } else {
                        this.isVisible = true;
                    }
                }
            );
    }

}
