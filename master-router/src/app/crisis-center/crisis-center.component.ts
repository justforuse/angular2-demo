import { Component, OnInit } from '@angular/core';
import {Crisis} from "./crisis.service";
@Component({
    moduleId: module.id,
    selector: 'crisis-center',
    template:`<ul>
    <li *ngFor="let item of crises">
        <span>{{item.id}}, {{item.name}}</span>
    </li>
</ul>`
})
export class CrisisListComponent implements OnInit {
    crises:Crisis[];
    constructor() { }

    ngOnInit() {
        this.crises = [
            {
                id:1,
                name:"火灾"
            },
            {
                id:2,
                name:"水灾"
            }
        ]
    }
    
}