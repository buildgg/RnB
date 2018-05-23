import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ButtonAnchor} from '../../shared/models/button/button-anchor.model';

@Component({
    moduleId: module.id,
    selector: 'bbd-list',
    templateUrl: './bbd-list.component.html',
    styleUrls: ['./bbd-list.component.css']
})
export class BBDListComponent implements OnInit {

    @Input() tableHeadList;
    @Input() bbdList$;
    @Input() checked;
    @Input() updateButton: ButtonAnchor;
    @Input() deleteButton: ButtonAnchor;

    @Output() actionButtonUpdate = new EventEmitter();
    @Output() actionButtonDelete = new EventEmitter();

    private selectedIdArray: string[] = [];

    private onChangeCheck(id, valueCheck) {
        valueCheck.checked ? this.selectedIdArray.push(id) :
            this.selectedIdArray.splice(this.selectedIdArray.indexOf(id), 1);
    }
    getSelectedIdArray() {
        return this.selectedIdArray;
    }

    onActionButtonUpdate(data) {
        this.actionButtonUpdate.emit(data);
    }
    onActionButtonDelete(data) {
        this.actionButtonDelete.emit(data);
    }

    constructor() {
    }

    ngOnInit() {
    }
}
