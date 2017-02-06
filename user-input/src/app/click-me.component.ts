import { Component } from '@angular/core';

@Component({
    selector: 'click-me',
    templateUrl: './app/click-me.component.html'
})
export class ClickMeComponent {
    clickMessage: string;
    constructor() {
        this.clickMessage = "";
    }
    onClickMe() {
        this.clickMessage = "you are me hero!!";
    }
}