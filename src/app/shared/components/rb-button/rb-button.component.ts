import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'rb-button',
  templateUrl: './rb-button.component.html',
  styleUrls: ['./rb-button.component.css']
})
export class RbButtonComponent {
  @Input() titleHover;
  @Input() anchorRouterLink;
  @Input() srcImg;
  @Output() actionButton = new EventEmitter();

  onClickButton () {
    this.actionButton.emit();
  }


}
