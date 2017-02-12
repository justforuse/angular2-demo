import './rxjs-extensions';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ContactModule} from './contact/contact.module';
import {} from './app-routing.module.3';
import {AppComponent} from './app.component';
import {TitleComponent} from './title.component';


import {HighlightDirective} from './highlight.directive';

import {UserService} from './user.service';
import {AppRoutingModule} from './app-routing.module.3';
@NgModule({
  imports: [
    BrowserModule,
    ContactModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HighlightDirective,
    TitleComponent
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
