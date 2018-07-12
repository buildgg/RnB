import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'rb-checkbox',
  templateUrl: './rb-checkbox.component.html',
  styleUrls: ['./rb-checkbox.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: RbCheckboxComponent,
    multi: true
  }]
})
export class RbCheckboxComponent implements ControlValueAccessor{
  @Input() labelCheckBox: string;

  checked: boolean;
  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(value: any ): void {
    if (value !== null) {
      this.checked = value;
    }
  }

  registerOnChange(fn: any ): void {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  constructor() { }
}
