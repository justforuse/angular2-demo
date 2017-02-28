import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { UnlessDirective }  from './unless.directive';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, UnlessDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
