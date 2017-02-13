import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import{date1ComponentClass} from './date1.component';
import {ExponentialPipe} from './exponential.pipe';
import {FlyHeroPipe, FlyHeroImpurePipe} from './fly-hero.pipe';
@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        date1ComponentClass,
        ExponentialPipe,
        FlyHeroPipe,
        FlyHeroImpurePipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
