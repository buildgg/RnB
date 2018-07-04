import {Directive, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';

@Directive({
  selector: '[lookup]'
})
export class LookUpDirective implements OnInit{
/*
  @ViewChild('myMap')
  map: ElementRef;*/

  ngOnInit() {
/*    this.render.listen(this.map.nativeElement, 'keyup', (event) => {
     console.log(event + 'event')
    });*/
  }

  constructor(private eRef: ElementRef, private render: Renderer2) {
    /*console.log(this.eRef.nativeElement.outerHTML);*/
    /*this.render.addClass(someattribute, 'selected');*/
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor('red');
   /* const dataIndex = this.eRef.nativeElement.getAttribute('data-index');
    console.log('data-Index = ' + dataIndex);*/
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor(null);
  }
  @HostListener('keyup') onEnterKey() {
    console.log('[LookUp keyup]');
    this.render.addClass(this.eRef.nativeElement, 'selected');
  }

  private changeColor(color: string) {
    this.render.setStyle(this.eRef.nativeElement, 'color', color);
  }
}
