import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'rb-link',
  templateUrl: './rb-link.component.html',
  styleUrls: ['./rb-link.component.css']
})
export class RbLinkComponent {
  @Input() routerLink;
  @Input() classCss;
  @Output() clickLink = new EventEmitter;

  onClickLink() {
    this.clickLink.emit();
  }

}
