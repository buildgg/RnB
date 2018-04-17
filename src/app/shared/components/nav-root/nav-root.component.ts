import {Component, Input } from '@angular/core';

@Component({
  selector: 'rb-nav-root',
  templateUrl: './nav-root.component.html',
  styleUrls: ['./nav-root.component.css']
})
export class NavRootComponent {
  @Input() navRootsName = null;
  @Input() navRootsPath = null;

  returnHome() {
    this.navRootsName = null;
  }
  isEmptyNavRootsName() {
    return this.navRootsName === null ? true : false;
  }
}
