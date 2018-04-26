import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-operations',
  templateUrl: './rb-operations.component.html',
  styleUrls: ['./rb-operations.component.css']
})
export class RbOperationsComponent {
  isShow = false;

  showOperation() {
    this.isShow = !this.isShow;
  }

}
