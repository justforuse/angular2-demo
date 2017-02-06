import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ClickMeComponent } from './click-me.component';
import { KeyUpComponent } from './keyup.component';
import { LoopBackComponent } from './loop-back.component';
import { KeyUpEnterComponent } from './keyup-enter.component';
import { BlurComponent } from './blur.component';
import { LittleTourComponent } from './little-tour.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [ClickMeComponent, KeyUpComponent, LoopBackComponent, KeyUpEnterComponent, BlurComponent,LittleTourComponent],
  bootstrap: [ClickMeComponent, KeyUpComponent, LoopBackComponent, KeyUpEnterComponent, BlurComponent,LittleTourComponent]
})
export class AppModule { }
