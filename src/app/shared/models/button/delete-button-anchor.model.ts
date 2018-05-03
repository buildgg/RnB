import {ButtonAnchor} from './button-anchor.model';

export class DeleteButtonAnchor implements ButtonAnchor {
  srcImg?: string;
  titleHover?: string;
/*  actionButton?: string;*/


  constructor(public anchorRouterLink: string = null) {
    this.srcImg = '/assets/img/delete10.png';
    this.titleHover = 'Удалить';
    /*this.actionButton = '';*/
  }
  actionButton() {}
}
