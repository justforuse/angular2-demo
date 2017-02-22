import {Injectable} from '@angular/core';


export class Hero {
    constructor(public id:number,  public name:string) {

    }
}
let HEROES:Hero[] = [
    new Hero(1, "蜘蛛侠"),
    new Hero(2, "蝙蝠侠"),
    new Hero(3, "闪电侠"),
    new Hero(4, "煎饼侠"),
];

let heroesPromise = Promise.resolve(HEROES);

@Injectable()
export class HeroService {
    getHeroes() { return heroesPromise; }

    getHero(id: number | string) {
        return heroesPromise
            .then(heroes => heroes.find(hero => hero.id === +id));
    }
}