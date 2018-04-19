import { Component, OnInit } from '@angular/core';
import {UserStaticData} from '../../shared/staticDataMockup/userStaticData';
import {User} from '../../shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[];
  constructor(private userStaticData: UserStaticData, private router: Router ) {}
  getData () {
    this.users = this.userStaticData.getdata();
}
  ngOnInit() {
      this.getData();
  }
  onSelect (selected: User){

          // При клике по элементу списка перенаправляем пользователя по адресу /phrases/id
          // адрес с обязательным параметром указан в настройках маршрутизации в файле    app.routes.ts
          this.router.navigate(['UserEditForm', selected.$id]);
      }
  }


