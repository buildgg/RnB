import {Component, Input, OnInit} from '@angular/core';
import {BudgetPosition} from '../../../shared/models/budget-position.model';

@Component({
  selector: 'budget-position-edit',
  templateUrl: './budget-position-edit.component.html',
  styleUrls: ['./budget-position-edit.component.css']
})
export class BudgetPositionEditComponent implements OnInit {
  @Input() bbdPositionView: BudgetPosition;

  constructor() { }

  ngOnInit() {
  }

}
