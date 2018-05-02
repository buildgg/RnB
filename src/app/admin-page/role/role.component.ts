import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Role} from '../../shared/models/role.model';
import {RoleClassProxy} from '../../shared/proxy-data-source/roleClassProxy';

@Component({
    selector: 'app-role',
    templateUrl: './role.component.html'
})
export class RoleComponent implements OnInit {

    roles: Role[];

    constructor(private  roleClassProxy: RoleClassProxy, private router: Router, private route: ActivatedRoute) {
        roleClassProxy.getUsers().subscribe(value => this.roles = value);
    }

    ngOnInit() {
    }

    onEdit(selected: Role) {
        this.router.navigate(['../roleeditform', selected.$id], {relativeTo: this.route});
    }

    onView(selected: Role) {
        this.router.navigate(['ТУТ НАДО ДОБАВИТЬ ПУТЬ', selected.$id], {relativeTo: this.route});
    }


}