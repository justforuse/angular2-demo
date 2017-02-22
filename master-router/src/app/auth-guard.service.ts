import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
	constructor(private authService:AuthService, private router:Router){

	}
	checkLogin(url:string):boolean{
		if(this.authService.isLoggedIn){
			return true;
		}
		this.authService.redirectUrl = url;
		this.router.navigate(['/login']);
		return false;
	}
	canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean{
		let url:string = state.url;
		console.log("AuthGuard#canActivate called");
		return this.checkLogin(url);

	}
}