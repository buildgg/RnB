import {AfterViewInit, Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild} from '@angular/core';
import {Operation} from '../../models/operation.model';
import {Observable} from 'rxjs/Observable';

const operations: Operation[] = [
  {$id: '111', name: 'сделать Свод'},
  {$id: '222', name: 'отвязать от Свода'},
  {$id: '333', name: 'первести в состояние'}
];

@Component({
  selector: 'rb-operations',
  templateUrl: './rb-operations.component.html',
  styleUrls: ['./rb-operations.component.css']
})
export class RbOperationsComponent implements OnInit {
  isShow = false;
  operationArray: Operation[] = operations;

  @Output() selectedOperation = new EventEmitter();

  constructor(private eRef: ElementRef) {
  }

  ngOnInit() {
    this.operationArray = operations;
  }
  toggleOperation() {
    this.isShow = !this.isShow;
  }

  closeOperation() {
    this.isShow = false;
  }

  onSelectedOperation(operation) {
    this.closeOperation();
    this.selectedOperation.emit(operation);
    console.log(` Selected operation id = ${operation.$id}`);
  }

  @HostListener('document:click', ['$event'])
  clickOut(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.closeOperation();
    }
  }
}
