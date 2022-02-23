import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: '[customDirective]'
})
export class CustomDirective {

  @Input("customDirective") color: string;
  @Input("defaultColor") defaultColor: string;

  constructor(private elementRef: ElementRef) { }


  @HostListener('mouseover')
  onMouseOver() {
    this.elementRef.nativeElement.style.backgroundColor = this.color || this.defaultColor;
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.elementRef.nativeElement.style.backgroundColor = '';
  }
}
