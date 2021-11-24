import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({ selector: '[appDropdown]' })
export class DropdownDirective {
  open: boolean = false;
  //   @HostBinding('class') class: String;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    // this.class = 'button-group';
    console.log('In Constructor');
    this.renderer.addClass(elRef, 'open');
  }

  @HostListener('click') onClick(event: Event) {
    console.log(event);
    // if (this.open) {
    //   this.class = 'button-group open';
    // } else {
    //   this.class = 'button-group';
    // }
    this.open = !this.open;
  }
}
