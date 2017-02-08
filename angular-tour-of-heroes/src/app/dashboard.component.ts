import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';
@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    heroes: Hero[];
    constructor(private heroService: HeroService) { }

    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(0,4))
    }
    ngOnInit() {
        this.getHeroes();
    }
}