import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDirec]'
})
export class CustomDirecDirective {
  @HostBinding('style.backgroundColor')bg = "withe";
  @HostBinding('style.color') cl="black"

  constructor() { }
  @HostListener('mouseenter')mouseenter(){
    this.bg="black";
    this.cl="withe"
  }
  @HostListener('mouseleave')mouseleave(){
    this.bg="withe";
    this.cl="black";
  }

}
