import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {HeroListComponent} from './hero-list.component';
import {HeroDetailComponent} from './hero-detail.component';

import {HeroRoutingModule} from './heroes-routing.module';
import {HeroService} from './hero.service';
@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        HeroRoutingModule
    ],
    declarations: [
        HeroListComponent,
        HeroDetailComponent
    ],
    providers: [
        HeroService
    ]
})

export class HeroModule {
}