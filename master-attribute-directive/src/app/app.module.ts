import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './app.component';

import {myHighlightDirective} from './highlight.directive';
@NgModule({
		imports: [BrowserModule],
		declarations: [
				AppComponent,
				myHighlightDirective
		],
		providers: [],
		bootstrap:[AppComponent]
})
export class AppModule {
}
