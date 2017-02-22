import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';

@Component({
	moduleId:module.id,
	template:`<h2>登录</h2>
<p>{{message}}</p>
<p>
    <button (click)="login()" *ngIf="!authService.isLoggedIn">登录</button>
    <button (click)="logout()" *ngIf="authService.isLoggedIn">退出</button>
</p>`
})

export class LoginComponent implements OnInit{
	message:string;

	constructor(public authService:AuthService, public router:Router){
		this.setMessaeg();
	}
	setMessage(){
		this.message = "状态:" + (this.authService.isLoggedIn? "在线": "离线");
	}
	login(){
		this.message = "登录中...";
		this.authService.login().subscribe(() => {
			this.setMessage();

			if(this.authService.isLoggedIn){
				let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/crisis-center/admin';
				this.router.navigate([redirect]);
			}
		})
	}
	logout(){
		this.authService.logout();
		this.setMessage();
	}
	ngOnInit(){

	}
}
