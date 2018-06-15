import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'rb-mat-filter',
  templateUrl: './rb-mat-filter.component.html',
  styleUrls: ['./rb-mat-filter.component.css']
})
export class RbMatFilterComponent {
  @Input() placeHolder = 'Фильтр нажмите Enter';
  @Output() applyFilter = new EventEmitter;

  onApplyFilter(value) {
    console.log(' RbMatFilterComponent = ' + value);
    this.applyFilter.emit(value);
   
  }

}
