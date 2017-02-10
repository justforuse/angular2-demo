import './rxjs-extensions';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ContactModule } from './contact/contact.module';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from './hero-search.component';
import { TitleComponent } from './title.component';


import { HighlightDirective } from './highlight.directive';


import { HeroService } from './hero.service';
import { UserService } from './user.service';
import { HeroSearchService } from './hero-search.service';

import { AppRoutingModule } from './app-routing.module';


import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
@NgModule({
  imports: [BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    ContactModule
  ],
  declarations: [AppComponent, HeroDetailComponent, HeroesComponent,
    DashboardComponent, HeroSearchComponent,
    HighlightDirective,
    TitleComponent],
  providers: [HeroService, UserService, HeroSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
