import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import {HeroService} from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers:[HeroService]
})
export class AppComponent implements OnInit {
  title = "Tour of Heroes";
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService : HeroService){

  }
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
  getHeroes(){
    this.heroes = this.heroService.getHeroes();
  }
  ngOninit(){
    this.getHeroes();
  }
}
