import {Injectable} from '@angular/core';
import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/observable';
import {CrisisDetailComponent} from './crisis-center/crisis-detail.component';

export interface CanComponentDeactivate{
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(component:CanComponentDeactivate){
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}