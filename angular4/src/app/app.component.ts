import {Component, OnInit} from '@angular/core';
import {Meta} from '@angular/platform-browser';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    users;
    constructor(private meta:Meta){

    }
    ngOnInit() {
        this.users = [];
        this.meta.addTag({
            name:"author",
            content:"Allen"
        })
    }

    addUser(){
        this.users.push({
            name:"default"
        });

        this.meta.updateTag({
            name:"author",
            content:"Allen2"
        })
    }
    deleteUser(){
        this.users.shift();
    }
}
