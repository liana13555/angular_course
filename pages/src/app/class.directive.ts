import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
  
export class ClassDirective {
  constructor(private element: ElementRef) {
  }

  @Input('appClass') set classNames (classObj: any) {
    for (const key in classObj) {
      if (classObj[key]) {
        this.element.nativeElement.classList.add(key)        
      } else {
        this.element.nativeElement.classList.remove(key)
      }
    }
  }

  // @Input('appClass') set backgroundColor (color:string) {
  //   this.element.nativeElement.style.backgroundColor = color;
  // }

  // @Input() set appClass (color:string) {
  //   this.element.nativeElement.style.backgroundColor = color;
  // }
}
