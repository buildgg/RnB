import {Component, Input, OnChanges, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'rb-modal-universal',
  templateUrl: './rb-modal-universal.component.html',
  styleUrls: ['./rb-modal-universal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RbModalUniversalComponent {
  @Input()
  visible: boolean;
}
