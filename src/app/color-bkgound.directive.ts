import { Directive, HostBinding, ElementRef, HostListener, Input } from '@angular/core';
import { ElementDef } from '@angular/core/src/view';

@Directive({
  selector: '[appColorBkgound]'
})
export class ColorBkgoundDirective {
  @Input() highlightbycolor:string;

  constructor(private e1:ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    //this.e1.nativeElement.style.backgroundColor = 'red';
    this.hightLightBackground(this.highlightbycolor||'red');
  }

  @HostListener('mouseout') onMouseOut() {
    this.hightLightBackground(null);
  }

  private hightLightBackground(color:string){
    this.e1.nativeElement.style.backgroundColor = color;
  }

}
