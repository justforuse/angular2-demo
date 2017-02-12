/**
 * Created by Administrator on 2017/2/11.
 */
import {Component, OnInit} from '@angular/core';
import{Hero, HeroService} from './hero.service';
@Component({
  moduleId:module.id,
  templateUrl: 'hero-list.component.html'
})
export class HeroListComponent implements OnInit {
  heroes:Promise<Hero[]>;
  constructor(private heroService:HeroService) {

  }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }
}
