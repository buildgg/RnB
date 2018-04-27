import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Component({
  selector: 'rb-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.css']
})
export class NavListComponent {
  @Input() navList;
  @Output() selectedItem = new EventEmitter();

  navListSelected(item) {
    this.selectedItem.emit(item);
  }

}