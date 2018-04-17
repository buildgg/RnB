import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'rb-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent {
  @Input() user;
  @Output() logout = new EventEmitter();

  onLogout() {
    this.logout.emit();
  }

}
