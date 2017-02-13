import {Component, ViewEncapsulation, OnInit, OnDestroy} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `<h1>Hello {{name}}</h1>`,
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.Native
})
export class AppComponent implements  OnInit, OnDestroy{
    name = 'Angular';

    constructor(){
        console.log('constructor...')
    }
    ngOnInit(){
        console.log('oninit...')
    }
    ngOnDestroy(){
        console.log("destroy...")
    }
}
