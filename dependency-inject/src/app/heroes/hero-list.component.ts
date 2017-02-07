import { Component, OnInit } from '@angular/core';
import { HEROES } from './mock-heroes';
import { HeroService } from './hero.service';
import { LoggerService } from '../logger.service';
@Component({
    moduleId: module.id,
    selector: 'hero-list',
    
    template: `
        <div *ngFor="let hero of heroes">
            {{hero.id}}: {{hero.name}}
        </div>
    `
})
export class HeroListComponent implements OnInit {
    heroes: Array<any>;
    constructor(private heroService: HeroService) { }

    ngOnInit() {
        this.heroes = this.heroService.getHeroes();
    }
}