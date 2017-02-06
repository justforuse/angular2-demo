import { Component } from '@angular/core';
import { Hero } from './hero'
@Component({
    moduleId: module.id,
    selector: 'hero-form',
    templateUrl: 'hero-form.component.html'
})
export class HeroFromComponent {
    powers: string[];
    model: Hero;
    submitted: boolean;
    constructor() {
        this.powers = ["智慧", "灵活", "力量", "强壮"];
        this.model = new Hero(1, "Allen", this.powers[2], "alterego-test");
        this.submitted = false;
    }

    onSubmit() {
        this.submitted = true;
    }

    // get the diagnostic value function
    get diagnostic() {
        return JSON.stringify(this.model);
    }

    newHero(){
        this.model = new Hero(42, "", "");
    }
}