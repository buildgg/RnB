import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Component({
  selector: 'rb-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.css']
})
export class NavListComponent {
  @Input() navList;
  isVisible: boolean = false;

  navListSelected(item) {
    console.log( <{name: string, path: string, classI: string}> item.name );
  }

}
