import { Component, OnInit } from '@angular/core';
import {Router, Params, ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';

import {Hero, HeroService} from './hero.service';

@Component({
    moduleId: module.id,
    template:`<h2>Heroes</h2>
<ul class="items">
    <li *ngFor="let hero of heroes | async" 
    (click) = "onSelect(hero)" [class.selected] = 'isSelected(hero)'>
        {{hero.id}}, {{hero.name}}
    </li>
</ul>`,
    styleUrls:['hero-list.component.css']
})
export class HeroListComponent implements OnInit {
    heroes:Observable<Hero[]>;
    private selectedId:number;
    constructor(private router:Router, private service:HeroService, private route:ActivatedRoute) { }

    onSelect(hero: Hero){
        this.router.navigate(['/hero', hero.id]);
    }
    isSelected(hero:Hero){
        return this.selectedId === hero.id;
    }
    ngOnInit() {
        this.heroes = this.route.params
            .switchMap((params:Params) => {
                this.selectedId = +params['id'];
                return this.service.getHeroes();
            })
    }

}