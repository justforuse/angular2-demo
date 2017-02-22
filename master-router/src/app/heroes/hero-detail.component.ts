import 'rxjs/add/operator/switchMap';
import {Component, OnInit, HostBinding, trigger, transition, animate, style, state} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';


import {Hero, HeroService} from "./hero.service";

@Component({
    moduleId: module.id,
    template: `<h3>英雄详情</h3>

<div *ngIf="hero">
    <div>
        id: <span >{{hero.id}}</span>
    </div>
    <div>
        名字: <input type="text" [(ngModel)]="hero.name">
    </div>
    <p>
        <button (click) = "gotoHeroes()">返回</button>
    </p></div>

`,
    animations: [
        trigger('routeAnimation', [
            state("*",
                style({
                    opacity: 1,
                    transform: 'translateX(0)'
                })
            ),
            transition(":enter",[
                style({
                    opacity:0,
                    transform:'translateX(-100%)'
                }),
                animate('0.2s ease-in')
            ]),
            transition(":leave",[
                animate('0.5s ease-out', style({
                    opacity:0,
                    transform:'translateY(100%)'
                }))
            ])
        ])
    ]
})

export class HeroDetailComponent implements OnInit {
    @HostBinding("@routeAnimation") get routeAnimation() {
        return true;
    }

    @HostBinding("style.display") get display() {
        return 'block';
    }

    @HostBinding("style.position") get position() {
        return 'absolute';
    }

    hero:Hero;

    constructor(private route:ActivatedRoute,
                private router:Router,
                private service:HeroService) {

    }

    ngOnInit() {
        this.route.params
            .switchMap((params:Params) => this.service.getHero(+params['id']))
            .subscribe((hero:Hero) => this.hero = hero);
    }

    gotoHeroes() {
        let heroId = this.hero ? this.hero.id : null;
        this.router.navigate(["/heroes", {id: heroId}]);
    }
}