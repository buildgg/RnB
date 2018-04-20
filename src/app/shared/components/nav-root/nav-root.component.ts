import {Component, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'rb-nav-root',
  templateUrl: './nav-root.component.html',
  styleUrls: ['./nav-root.component.css']
})
export class NavRootComponent {
  @Input() navRootsName = null;
  @Input() navRootsPath = null;

  constructor(activeRouter: ActivatedRoute) {
    console.log(`root = ${activeRouter.root} 
    routeConfig = ${activeRouter.routeConfig.path}
    url = ${activeRouter.url.subscribe(v => console.log(v.forEach(e => console.log(e.path))))
      
    }
    `  );
  }

  returnHome() {
    this.navRootsName = null;
  }
  isEmptyNavRootsName() {
    return this.navRootsName === null ? true : false;
  }

}
