import {Component, OnChanges, OnInit} from '@angular/core';
import {AuthService} from '../../../auth/auth.service';

const NAV_LIST = [
  {name: 'Заявки инициаторов', path: '/home-screen/budget-issue'},
  {name: 'Базовые договора', path: '/home-screen/budget-base-document'},
  {name: 'Администрирование', path: '/home-screen/admin-page'}
  ];

@Component({
  selector: 'rb-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  navList = NAV_LIST;
  navRootName: string;
  navRootPath: string;
  userName: string;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userName = this.authService.currentUser.name;
    console.log(this.userName);
  }

  onSelectedItem(item) {
    this.navRootName = item.name;
    this.navRootPath = item.path;
  }

  onLogout() {
    this.authService.logout();
  }


}
