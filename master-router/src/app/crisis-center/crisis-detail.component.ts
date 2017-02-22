import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {Crisis, CrisisService} from "./crisis.service";


import 'rxjs/add/operator/switchMap';
@Component({
    moduleId:module.id,
    template:`<div *ngIf="crisis">
    <div>
        id:{{crisis.id}}
    </div>
    <div>
        内容: <input #crisisName [ngModel]="crisis.name">
    </div>
    <button (click)="saveCrisis(crisis.id, crisisName.value)">保存</button>
    <button (click)="cancel()">取消</button>
</div>`
})

export class CrisisDetailComponent implements OnInit{
    crisis:Crisis;
    constructor(private service:CrisisService,
    private route:ActivatedRoute,
    private router:Router){

    }

    gotoCrises(){

    }
    ngOnInit(){
        this.route.params
            .switchMap((params:Params) =>this.service.getCrisis(+params['id']))
            .subscribe((crisis:Crisis) => this.crisis = crisis)
    }
    cancel(){
        let crisisId = this.crisis? this.crisis.id : null;
        this.router.navigate(['../', {id:crisisId}]);
    }
    saveCrisis(id:number, name:string){
        console.log(id, name);
    }
}