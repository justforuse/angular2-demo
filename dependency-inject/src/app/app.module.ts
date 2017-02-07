import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroListComponent } from './heroes/hero-list.component';
import { LoggerService } from './logger.service';

@NgModule({
  imports: [BrowserModule],
  // we put the LoggerService in root app providers, so every component can use it
  providers: [LoggerService],
  declarations: [HeroesComponent, HeroListComponent],
  bootstrap: [HeroesComponent]
})
export class AppModule { }
