import { Component } from '@angular/core';

@Component({
    selector: 'keyup-enter',
    template: `
        <input #box (keyup.enter) = "onEnter(box.value)">
        <p>{{values}}</p>
    `
})
export class KeyUpEnterComponent {
    values: string;
    constructor() {
        this.values = "";
    }
    onEnter(value: string) {
        this.values = value;
    }

}