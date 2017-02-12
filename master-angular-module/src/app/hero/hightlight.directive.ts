/**
 * Created by Administrator on 2017/2/11.
 */
import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({selector: "[highlight]"})

export class HighlightDirective {
  constructor(renderer: Renderer, el: ElementRef) {
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'beige');
    console.log(`* Hero highlight called for ${el.nativeElement.tagName}`);
  }
}
