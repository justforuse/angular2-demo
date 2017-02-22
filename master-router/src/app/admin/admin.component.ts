import {Component, OnInit} from '@angular/core';

@Component({
		moduleId: module.id,
		template:`<h3>Admin</h3>
<nav>
    <a routerLink="./" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Dashboard</a>
    <a routerLink="./crises" routerLinkActive="active">危机管理</a>
    <a routerLink="./heroes" routerLinkActive="active">英雄管理</a>
    
</nav>
<router-outlet></router-outlet>`,
	styles:['nav a.active{color:red}']
})
export class AdminComponent implements OnInit {
		constructor() {
		}

		ngOnInit() {
		}
}