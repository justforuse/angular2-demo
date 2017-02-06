import { Component } from '@angular/core';

@Component({
    selector: 'key-up',
    templateUrl: './app/keyup.component.html'
})
export class KeyUpComponent {
    values: string;
    constructor() {
        this.values = "";
    }
    onKey(event: KeyboardEvent) {
        // when event type is any, use this segment
        // this.values += event.target.value + " | ";
        this.values += (<HTMLInputElement>event.target).value + " | ";
    }
}