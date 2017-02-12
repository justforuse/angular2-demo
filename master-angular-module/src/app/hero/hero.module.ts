/**
 * Created by Administrator on 2017/2/11.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {HeroComponent}   from './hero.component';
import {HeroDetailComponent}   from './hero-detail.component';
import {HeroListComponent}   from './hero-list.component';
import {HighlightDirective}   from './hightlight.directive';

import {HeroRoutingModule} from './hero-routing.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroRoutingModule
  ],
  exports: [],
  declarations: [
    HeroComponent,
    HeroDetailComponent,
    HeroListComponent,
    HighlightDirective
  ],
  providers: [],
})
export class HeroModule {
}
