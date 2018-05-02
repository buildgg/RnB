import {ButtonAnchor} from './button-anchor.model';

export class UpdateButtonAnchor implements ButtonAnchor {
  srcImg?: string;
  titleHover?: string;
  actionButton?: string;

  constructor(public anchorRouterLink: string) {
    this.srcImg = '/assets/img/update2.png';
    this.titleHover = 'Изменить';
    this.actionButton = '';
  }
}
