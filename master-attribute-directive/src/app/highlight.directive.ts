import {Directive, ElementRef, Renderer, Input, HostListener, Host} from '@angular/core';

@Directive({
		selector:"[myHighlight]"
})

export class myHighlightDirective{
		private _defaultColor = 'red';

		@Input("myHighlight") highlightColor:string;

		@Input() set defaultColor(colorName:string){
				this._defaultColor = colorName || this._defaultColor;
		}

		constructor(private el:ElementRef,private render:Renderer){

		}

		@HostListener("mouseenter") onMouseEnter(){
				this.highlight(this.highlightColor || this._defaultColor);
		}

		@HostListener("mouseleave") onMouseLeave(){
				this.highlight(null);
		}
		private highlight(color:string){
				this.render.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
		}
}