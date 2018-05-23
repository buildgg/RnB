import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'rb-mat-filter',
  templateUrl: './rb-mat-filter.component.html',
  styleUrls: ['./rb-mat-filter.component.css']
})
export class RbMatFilterComponent {
  @Output() applyFilter = new EventEmitter;

  onApplyFilter(value) {
    this.applyFilter.emit(value);
  }

}
