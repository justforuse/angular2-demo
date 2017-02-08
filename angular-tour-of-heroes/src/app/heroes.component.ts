import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    templateUrl: 'heroes.component.html',
    styleUrls: ['app.component.css']
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;
    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    constructor(private heroService: HeroService) { }

    ngOnInit() {
        this.getHeroes();
    }

}