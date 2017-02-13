import {Component} from '@angular/core';

@Component({
    moduleId:module.id,
    selector: 'my-app',
    templateUrl:"app.component.html",
})

export class AppComponent {
    name = 'Angular';
    heroes = [
        {
            name: "allen",
            canFly: true
        },
        {
            name: "bob",
            canFly: false
        }
    ]

    addHero(name:string) {
        // push modify the origin object
        this.heroes.push({
            name:name,
            canFly:true
        });

        //concat return an new Array object
        // this.heroes = this.heroes.concat({
        //     name:name,
        //     canFly:true
        // });
    }
}
