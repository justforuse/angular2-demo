import { Component } from '@angular/core';

@Component({
    selector: 'little-tour',
    template: `
        <h3>{{title}}</h3>
        <input #box (keyup.enter) = "addHero(box.value); box.value=''">
        <button (click)="addHero(box.value)">Add</button>
        <ul>
            <li *ngFor="let hero of heroes">
                {{hero}}
            </li>
        </ul>
    `
})
export class LittleTourComponent {
    title: string;
    heroes: string[];
    constructor() {
        this.title = "Hero List";
        this.heroes = [
            "allen",
            "bob",
            "cuurry"
        ]
    }
    addHero(name: string) {
        // todo: reset input value after add hero in function not in element
        if (name.trim()) {
            this.heroes.push(name);
        }

    }

}