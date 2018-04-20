import {Component, Input} from '@angular/core';
import {ButtonAnchor} from '../../models/button/button-anchor.model';

@Component({
  selector: 'rb-table',
  templateUrl: './rb-table.component.html',
  styleUrls: ['./rb-table.component.css']
})
export class RbTableComponent {

  @Input() tableHead;
  @Input() dataList$;
  @Input() updateButton: ButtonAnchor;
  @Input() deleteButton: ButtonAnchor;


}
