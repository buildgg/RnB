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
  checked;

  ngOnChange() {
    console.log(this.checked + ' check');
  }

  onChangeCheck(data, val) {
    console.log(data.issuer + ' : ' + val.checked);
}
}
