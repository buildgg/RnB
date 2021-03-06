import {AfterViewChecked, Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, Output, Renderer2} from '@angular/core';
import {distinctUntilChanged, map, startWith} from 'rxjs/internal/operators';
import {Observable, Subject} from 'rxjs/index';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {element} from 'protractor';

@Component({
  selector: 'rb-look-up',
  templateUrl: './rb-look-up.component.html',
  styleUrls: ['./rb-look-up.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: RbLookUpComponent,
    multi: true
  }]

})
export class RbLookUpComponent implements AfterViewChecked, OnChanges, ControlValueAccessor {

  @Input() lookUpArray: string[];
  @Input() styleList;
  @Input() styleInput;
/*  @Output() valueLookUp = new EventEmitter();*/

  value: string;
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

  onChange = (_: any) => {};
  onTouched = () => {};

  onBlur(value) {
    console.log(` -- onBlur() -- ${value}`);
  this.setItem(value);
  this.onTouched();
  this.value = value;

  }

  writeValue(value: any ): void {
    console.log(` -- writeValue() -- ${value}`);
    this.value = value;
  }

  registerOnChange(fn: any ): void {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  constructor(private eRef: ElementRef, private render: Renderer2) {}

  ngOnChanges() {


    this.filterLookUp$ = this.searchFilter
      .pipe(
        startWith(''),
        distinctUntilChanged(),
        map((value: string) => this.filter(value))
      );
  }

  find(val) {
    this.searchFilter.next(val);
  }

  filter(changeValue: string): string[] {
    return this.lookUpArray
      .filter(val => val.toLowerCase().includes(changeValue.toLowerCase()));
  }

  ngAfterViewChecked() {
    this.maxItem = this.eRef.nativeElement.getElementsByTagName('a').length;
  }

  getElementByIndex(index) {
    return this.eRef.nativeElement.getElementsByTagName('a')[index];
  }

  onKeyUpItem(event) {

    this.find(event.target.value);
    if (event.keyCode === 27) {
      this.close();
      return;
    }
    if (event.keyCode === 13 && this.hoverItem !== -1) {

      this.filterLookUp$.subscribe(value => this.filerValue = value);

      const item = this.filerValue[this.hoverItem];
      /*this.selectItem(item, this.hoverItem);*/

      this.selectedItem = this.hoverItem;
      this.setItem(item);
      this.close();
     /* return;*/
    }

    if (event.keyCode === 40) {

console.log(` -- First --
              keyCode: ${event.keyCode} 
              this.visible: ${this.visible} 
              this.hoverItem: ${this.hoverItem}`);

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

  open() {
    this.visible = true;
  }

  close() {
    this.visible = false;
    this.resetScrolling();
  }

  selectItemClick(option, index) {
    this.setItem(option);
    this.value = option;
    this.selectedItem = index;
    this.close();

  }

  setItem(value) {
    this.writeValue(value);
    this.onChange(value);
  }

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
