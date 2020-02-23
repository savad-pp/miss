import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  el: any;

  constructor(el: ElementRef) {  
    el.nativeElement.style.backgroundColor = 'yellow'; 
 }






}
