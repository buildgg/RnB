import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ButtonAnchor} from '../../../shared/models/button/button-anchor.model';

@Component({
    moduleId: module.id,
    selector: 'budget-position-list',
    templateUrl: './budget-position-list.component.html',
    styleUrls: ['./budget-position-list.component.css']
})
export class BudgetPositionListComponent implements OnInit {
    @Input() tableHeadList;
    @Input() bbdPositionList;
    @Input() updateButton: ButtonAnchor;
    @Input() deleteButton: ButtonAnchor;
    
    @Output() actionButtonUpdate = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

}
