import {ButtonAnchor} from './button-anchor.model';

export class AddButtonAnchor implements ButtonAnchor {
  srcImg?: string;
  titleHover?: string;

  constructor(public anchorRouterLink: string = null) {
    this.srcImg = '/assets/img/plus48.png';
    this.titleHover = 'Добавить';
  }
}
