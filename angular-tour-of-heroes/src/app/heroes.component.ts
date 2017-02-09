import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';
@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    templateUrl: 'heroes.component.html',
    styleUrls: ['heroes.component.css']
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
    gotoDetail(){
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
    add(name:string){
        name = name.trim();
        if(!name){
            return false;
        }
        this.heroService.create(name)
            .then(hero=>{
                this.heroes.push(hero);
                this.selectedHero = null;
            })
    }
    delete(hero:Hero){
        this.heroService
            .delete(hero.id)
            .then(()=>{
                this.heroes = this.heroes.filter(h=>h !== hero);
                if(this.selectedHero === hero){
                    this.selectedHero = null;
                }
            })
    }
    constructor(private heroService: HeroService,
    private router:Router) { }

    ngOnInit() {
        this.getHeroes();
    }

}