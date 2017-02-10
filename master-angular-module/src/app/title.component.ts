import { Component, OnInit, Input } from '@angular/core';

import {UserService} from './user.service';
@Component({
    moduleId: module.id,
    selector: 'app-title',
    templateUrl: 'title.component.html'
})
export class TitleComponent implements OnInit {
    title = 'Angular Modules';
    @Input() subtitle = '';
    user = '';
    constructor(private userService:UserService) {
        this.user = this.userService.userName;
     }

    ngOnInit() { }
}