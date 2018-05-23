import {ButtonAnchor} from './button-anchor.model';

export class ViewButtonAnchor implements ButtonAnchor {
  srcImg?: string;
  titleHover?: string;

  constructor(public anchorRouterLink: string = null) {
    this.srcImg = '/assets/img/view7.png';
    this.titleHover = 'Подробнее';
  }
}
