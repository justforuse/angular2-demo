import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
@Injectable()
export class HeroService {

    constructor() { }
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
    getHero(id: number) {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id == id));
    }
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => setTimeout(resolve, 2000)).then(() => this.getHeroes());
    }
}