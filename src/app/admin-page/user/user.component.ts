import { Component, OnInit } from '@angular/core';
import {UserStaticData} from '../../shared/staticDataMockup/userStaticData';
import {User} from '../../shared/models/user.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[];
  constructor(private userStaticData: UserStaticData, private router: Router, private route: ActivatedRoute ) {}

  getData () {
    this.users = this.userStaticData.getdata();
}
  ngOnInit() {
      this.getData();
  }
  onEdit (selected: User) {
      this.router.navigate(['../usereditform', selected.$id], {relativeTo: this.route});
  }

  onView (selected: User) {   this.router.navigate(['UserViewForm', selected.$id]);   }
}


