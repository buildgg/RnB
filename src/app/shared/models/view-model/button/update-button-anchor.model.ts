import {ButtonAnchor} from './button-anchor.model';

export class UpdateButtonAnchor implements ButtonAnchor {
  srcImg?: string;
  titleHover?: string;

  constructor(public anchorRouterLink: string = null) {
    this.srcImg = '/assets/img/update4.png';
    this.titleHover = 'Изменить';
  }
}
