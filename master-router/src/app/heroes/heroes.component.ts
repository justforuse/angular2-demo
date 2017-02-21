import { Component, OnInit } from '@angular/core';
import {Hero} from './hero.service';
@Component({
    moduleId: module.id,
    template:`<h2>Heroes</h2>
<ul class="items">
    <li *ngFor="let hero of heroes">
        {{hero.id}}, {{hero.name}}
    </li>
</ul>`
})
export class HeroListComponent implements OnInit {
    heroes:Hero[];
    constructor() { }

    ngOnInit() {
        this.heroes = [
            {
                id:1,
                name:"超人"
            },
            {
                id:2,
                name:"蝙蝠侠"
            }
        ]
    }

}