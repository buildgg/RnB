import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'rb-modal-box-delete',
  templateUrl: './rb-modal-box-delete.component.html',
  styleUrls: ['./rb-modal-box-delete.component.css']
})
export class RbModalBoxDeleteComponent {

  visible: boolean;
  @Output() isDeleteRow = new EventEmitter();

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  cancel(): void {
    this.isDeleteRow.emit(false);
    this.close();
  }

  apply(): void {
    this.isDeleteRow.emit(true);
    this.close();
  }
}
