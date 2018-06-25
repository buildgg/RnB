import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {map, startWith} from 'rxjs/internal/operators';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/index';

@Component({
  selector: 'rb-mat-drop-down',
  templateUrl: './rb-mat-drop-down.component.html',
  styleUrls: ['./rb-mat-drop-down.component.css']
})
export class RbMatDropDownComponent implements OnInit {

  @Input() dropDownList;
  @Input() placeHolder;
  @Input() widthCss;
  @Output() selectedItem = new EventEmitter();

  formControl: FormControl = new FormControl();
  filterOptions: Observable<any>;

  constructor() { }

  ngOnInit() {
    this.filterOptions = this.formControl
      .valueChanges
      .pipe(
        startWith(''),
        map(val =>
        this.filter(val)

        )
      );
  }

  filter(val: string): string[] {
    return this.dropDownList.filter(
      value => value.toLowerCase().includes(val.toLowerCase())
    );
  }

  onSelected(option) {
    this.selectedItem.emit(option);
  }
}
