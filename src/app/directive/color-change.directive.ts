import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorChange]'
})
export class ColorChangeDirective {
  constructor(element: ElementRef, render: Renderer2) {
    render.setStyle(element.nativeElement, 'color', 'red');
    for (let i = 5; i < 30; i++) {
      setTimeout(() => {
        render.setStyle(element.nativeElement, 'font-size', i + "px");

      }, 5000);

    }
  }

}
