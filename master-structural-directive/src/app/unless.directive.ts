import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
	selector: '[myUnless]'
})
export class UnlessDirective{

	//TemplateRef 来访问模板 ViewContainerRef是渲染器
	constructor(private templateRef : TemplateRef<any>,
	            private viewContainer: ViewContainerRef){

	}

	@Input() set myUnless(condition: boolean){
		if(!condition){
			this.viewContainer.createEmbeddedView(this.templateRef);
		}else{
			this.viewContainer.clear();
		}
	}
}