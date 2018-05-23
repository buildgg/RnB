import {Component, ElementRef, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {DropDownMenu} from '../../models/view-model/drop-down-menu.model';

@Component({
  selector: 'rb-drop-down-menu',
  templateUrl: './drop-down-menu.component.html',
  styleUrls: ['./drop-down-menu.component.css']
})
export class RbDropDownMenuComponent {

  isShow = false;

  @Input() dropDownArray: DropDownMenu;
  @Input() nameDropDown: string;
  @Output() selectedItemMenu = new EventEmitter();

  constructor(private eRef: ElementRef) {
  }

  toggleMenu() {
    this.isShow = !this.isShow;
  }

  closeOperation() {
    this.isShow = false;
  }

  onSelected(item) {
    this.closeOperation();
    this.selectedItemMenu.emit(item);
  }

  @HostListener('document:click', ['$event'])
  clickOut(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.closeOperation();
    }
  }
}
