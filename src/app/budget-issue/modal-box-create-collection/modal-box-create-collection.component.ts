import { Component, OnInit } from '@angular/core';
import {ManageModalBox} from '../../shared/components/rb-modal-box/rb-modal-universal/manage-modal-box';

@Component({
  selector: 'rb-modal-box-create-collection',
  templateUrl: './modal-box-create-collection.component.html',
  styleUrls: ['./modal-box-create-collection.component.css']
})
export class ModalBoxCreateCollectionComponent extends ManageModalBox implements OnInit {

  ngOnInit() {
  }

}
