import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { LoggerService } from '../logger.service';
@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    // you can also add providers in hero-list.component
    providers:[HeroService],
    template: `
        <h2>Heroes</h2>
        <hero-list></hero-list>
    `
})
export class HeroesComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}