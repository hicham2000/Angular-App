import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

@HostBinding("class.open") isopen=false;
@HostListener('document:click',['$event'])  onclick(event:Event){
  this.isopen=this.ele.nativeElement.contains(event.target)? !this.isopen:false;
  }

  constructor(private ele:ElementRef) {
  }

}
