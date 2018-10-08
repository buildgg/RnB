import {Component, EventEmitter, Output} from '@angular/core';
import {ManageModalBox} from '../rb-modal-universal/manage-modal-box';

@Component({
  selector: 'rb-modal-box-delete',
  templateUrl: './rb-modal-box-delete.component.html'
})
export class RbModalBoxDeleteComponent extends ManageModalBox{

  @Output() isDeleteRow = new EventEmitter();

  cancel(): void {
    this.isDeleteRow.emit(false);
    this.close();
  }

  apply(): void {
    this.isDeleteRow.emit(true);
    this.close();
  }
}
