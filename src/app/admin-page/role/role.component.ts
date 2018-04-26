import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../shared/models/user.model';
import {RoleStaticData} from '../../shared/staticDataMockup/roleStaticData';
import {Role} from '../../shared/models/role.model';

@Component({
    selector: 'app-role',
    templateUrl: './role.component.html',
    styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

    roles: Role[];

    constructor(private roleStaticData: RoleStaticData, private router: Router) {
    }

    getData() {
        this.roles = this.roleStaticData.getdata();
    }

    ngOnInit() {
        this.getData();
    }

    onSelect(selected: Role) {
        this.router.navigate(['RoleEditForm', selected.$id]);
    }

    onView(selected: Role) {
        this.router.navigate(['RoleViewForm', selected.$id]);
    }

    onDelete(selected: Role) {
        this.router.navigate(['RoleDeleteForm', selected.$id]);
    }

    onAdd() {
          }

}