import {
  AfterViewChecked, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2,
  ViewChild, ViewEncapsulation
} from '@angular/core';
import {FormControl} from '@angular/forms';
import {distinctUntilChanged, map, startWith} from 'rxjs/internal/operators';
import {Observable, Subject} from 'rxjs/index';

const dropDownList = ['first', 'second', 'next', 'fire', 'angular',
  'AfterContentInit',
  'Component',
  'ContentChildren',
  'ElementRef',
  'Input',
  'QueryList',
  'TemplateRef',
  'ViewChild',
  'ViewEncapsulation',
  'ChangeDetectorRef',
  'ChangeDetectionStrategy',
  'EventEmitter',
  'Output',
  'InjectionToken',
  'Inject'
];

@Component({
  selector: 'rb-look-up',
  templateUrl: './rb-look-up.component.html',
  styleUrls: ['./rb-look-up.component.css']
})
export class RbLookUpComponent implements OnInit, AfterViewChecked {

  @Input() lookUpArray;
  @Input() styleList;
  @Input() styleInput;
  @Output() valueLookUp = new EventEmitter();
  value = '';
  visible: boolean = false;
  filterLookUp$: Observable<any>;

  private selectedItem = -1;
  private hoverItem = -1;
  private maxItem = 0;
  private mixItem = 0;
  private arrowKeyType = {UP: 'UP', DOWN: 'DOWN'};
  private windowHeight: number  = 0;
  private currentPosition: number  = 0;
  private scrollFrom: number  = 0;
  private scrollTo: number  = 0;
  private maxWindowHeight: number  = 0;
  private minWindowHeight: number  = 0;
  private initKeyType: boolean = false;
  private searchFilter = new Subject();
  private filerValue: string;


  constructor(private eRef: ElementRef, private render: Renderer2) {}

  ngOnInit() {
    this.filterLookUp$ = this.searchFilter
      .pipe(
        startWith(''),
        distinctUntilChanged(),
        map(value => this.filter(value))
      );

    this.filterLookUp$.subscribe(val => this.filerValue = val);
  }

  ngAfterViewChecked() {
    this.maxItem = this.eRef.nativeElement.getElementsByTagName('a').length;
  }

  getElementByIndex(index) {
    return this.eRef.nativeElement.getElementsByTagName('a')[index];
  }

  onKeyUpItem(event) {
    if (event.keyCode === 27) {
      this.close();
      return;
    }
    if (event.keyCode === 13 && this.hoverItem !== -1) {

      const item = this.filerValue[this.hoverItem];
      this.selectItem(item, this.hoverItem);
      return;
    }

    if (event.keyCode === 40) {

      if (this.visible && this.hoverItem === -1) {
        this.hoverItem = 0;

        this.addClassToElem(this.hoverItem);
        this.scrolling(this.arrowKeyType.DOWN, this.hoverItem);

      } else if (this.visible && this.hoverItem !== -1) {

        const prevElem = this.getElementByIndex(this.hoverItem);
        this.clearElement(prevElem);

        if (!this.isMaxItem()) {
          this.hoverItem = ++this.hoverItem;
        } else {
          this.hoverItem = 0;
        }
        this.scrolling(this.arrowKeyType.DOWN, this.hoverItem);
        this.addClassToElem(this.hoverItem);
      } else if (!this.visible) {
        this.open();
      }

    } else if (event.keyCode === 38) {

      if (this.visible && this.hoverItem === -1) {

        this.hoverItem = this.maxItem - 1;
        this.addClassToElem(this.hoverItem);
        this.scrolling(this.arrowKeyType.UP, this.hoverItem);

      } else if (this.visible && this.hoverItem !== -1) {

        const prevElem = this.getElementByIndex(this.hoverItem);
        this.clearElement(prevElem);

        if (this.mixItem !== this.hoverItem) {
          this.hoverItem = --this.hoverItem;
        } else {
          this.hoverItem = this.maxItem - 1;
        }

        this.scrolling(this.arrowKeyType.UP, this.hoverItem);
        this.addClassToElem(this.hoverItem);

      } else if (!this.visible) {
        this.open();
      }
    }
  }

  private scrolling(keyType, item) {

    const parentElem = this.render.parentNode(this.eRef.nativeElement.getElementsByTagName('a')[item]);
    const scrollHeight = this.getElementByIndex(this.hoverItem).scrollHeight;

    if (!this.initKeyType) {
      this.windowHeight = scrollHeight * 5;
      this.scrollFrom = scrollHeight;
      this.scrollTo = this.windowHeight;
      this.maxWindowHeight = this.maxItem * scrollHeight;
      this.minWindowHeight = scrollHeight;
      this.initKeyType = true;
    }

    if (keyType === this.arrowKeyType.DOWN) {
      this.currentPosition = this.currentPosition + scrollHeight;
    } else if (keyType === this.arrowKeyType.UP) {
      this.currentPosition = Math.max(0, this.currentPosition - scrollHeight);
    }

    if (this.currentPosition > this.scrollTo && this.currentPosition <= this.maxWindowHeight) {
      this.scrollFrom = this.scrollFrom + scrollHeight;
      this.scrollTo = this.scrollTo + scrollHeight;
      parentElem.scrollTop = parentElem.scrollTop + scrollHeight;

    } else if (this.currentPosition > this.scrollTo && this.currentPosition > this.maxWindowHeight) {
      this.scrollFrom = scrollHeight;
      this.scrollTo = this.windowHeight;
      parentElem.scrollTop = 0;
      this.currentPosition = scrollHeight;
    }
    else if (this.currentPosition < this.scrollFrom && this.currentPosition >= this.minWindowHeight){
      this.scrollFrom = this.scrollFrom - scrollHeight;
      this.scrollTo = this.scrollTo - scrollHeight;
      parentElem.scrollTop = parentElem.scrollTop - scrollHeight;
    }
    else if (this.currentPosition < this.scrollFrom && this.currentPosition < this.minWindowHeight){

      this.scrollFrom = this.maxWindowHeight - this.windowHeight + scrollHeight;
      this.scrollTo = this.maxWindowHeight;
      parentElem.scrollTop = this.maxWindowHeight;
      this.currentPosition = this.maxWindowHeight;
    }

/*    console.log(`----${keyType}-----`);
    console.log(`minWindowHeight = ${this.minWindowHeight} -- maxWindowHeight = ${this.maxWindowHeight}`);
    console.log(`currentPosition = ${this.currentPosition}`);
    console.log(`item ${item}`);
    console.log(`scrollFrom = ${this.scrollFrom} -- scrollTo = ${this.scrollTo}`);
    console.log(`-----------------\n`);*/

  }

  clearElement(elem) {
    this.render.removeClass(elem, 'selected');
  }

  addClassToElem(hoverItem) {
    const elem = this.getElementByIndex(hoverItem);
    this.render.addClass(elem, 'selected');

  }

  isMaxItem() {
    return this.hoverItem === this.maxItem - 1;
  }


  find(val) {
    this.searchFilter.next(val);
  }

  filter(changeValue: string): string[] {
    return this.lookUpArray
      .filter(val => val.toLowerCase().includes(changeValue.toLowerCase()));
  }

  open() {
    this.visible = true;
  }

  close() {
    this.visible = false;
    this.resetScrolling();
  }

  selectItem(option, index) {
    this.value = option;
    this.selectedItem = index;
    this.close();
    this.valueLookUp.emit(this.value);
  }

  /*mouseOverItem(index) {
    if (index == null) {
      return;
    }
    this.hoverItem = index;
    }*/

/*    const scrollHeight = this.getElementByIndex(this.hoverItem).scrollHeight;
    this.currentPosition = (this.hoverItem + 1) * scrollHeight;
    this.scrollFrom = this.currentPosition;
    this.scrollTo = this.scrollFrom + (scrollHeight * 4);*/

   /* this.addClassToElem(this.hoverItem);*/

/*    console.log(`----Mouse-----`);
    console.log(`minWindowHeight = ${this.minWindowHeight} -- maxWindowHeight = ${this.maxWindowHeight}`);
    console.log(`currentPosition = ${this.currentPosition}`);
    console.log(`hoverItem ${this.hoverItem}`);
    console.log(`scrollFrom = ${this.scrollFrom} -- scrollTo = ${this.scrollTo}`);
    console.log(`-----------------\n`);*/


  mouseLeaveItem(index) {
    if (index == null) {
      return;
    }
    const elem = this.getElementByIndex(index);
    this.clearElement(elem);
  }
  @HostListener('document:click', ['$event'])
  clickOutLookUp(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.resetScrolling();
      this.close();
    }
  }
  private resetScrolling () {
    this.hoverItem = -1;
    this.currentPosition = 0;
    this.initKeyType = false;
  }
}