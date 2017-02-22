import {Component, OnInit} from '@angular/core';
import {Crisis} from "./crisis.service";
@Component({
    moduleId: module.id,
    selector: 'crisis-center',
    template: `<h2>危机中心</h2>
<router-outlet></router-outlet>`
})
export class CrisisCenterComponent implements OnInit {
    crises:Crisis[];

    constructor() {
    }

    ngOnInit() {

    }

}