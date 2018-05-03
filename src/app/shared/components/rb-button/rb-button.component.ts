import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

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
    console.log('Button!! ');
    this.actionButton.emit();
  }


}
