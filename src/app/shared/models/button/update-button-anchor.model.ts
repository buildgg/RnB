import {ButtonAnchor} from './button-anchor.model';
import {EventEmitter} from '@angular/core';

export class UpdateButtonAnchor implements ButtonAnchor {
  srcImg?: string;
  titleHover?: string;
 /* actionButton?;*/

  constructor(public anchorRouterLink: string = null) {
    this.srcImg = '/assets/img/update2.png';
    this.titleHover = 'Изменить';
  }
  actionButton(data) {
    console.log('CLICK 2 = ' + data);
    return new EventEmitter().emit(data.name);
  }

}
