import { Component, OnInit, Input } from '@angular/core';

import {Hero} from './hero';
@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: 'hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
    @Input() hero:Hero;
    constructor() { }

    ngOnInit() {

     }
}