import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Component({
  selector: 'rb-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.css']
})
export class NavListComponent {

  @Input() navList;
  visibleAdminListItem: boolean;

  open(): void {
    this.visibleAdminListItem = true;
  }
  close(): void {
    this.visibleAdminListItem = false;
  }

  navListSelected(item) {
    this.close();
    console.log( <{name: string, path: string, classI: string}> item.name );
  }

}
