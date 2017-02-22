import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {Crisis, CrisisService} from './crisis.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
@Component({
    moduleId:module.id,
    template:`
<ul>
    <li *ngFor="let crisis of crises | async" 
    (click)="onSelect(crisis)" [class.selected]="isSelect(crisis)">
        {{crisis.id}}, {{crisis.name}}
    </li>
</ul>
<router-outlet></router-outlet>`,
    styles:[`li.selected{color:red}`]
})
export class CrisisListComponent implements  OnInit{
    crises:Observable<Crisis[]>;
    selectedId:number;


    constructor(private router:Router,
    private route:ActivatedRoute,
    private service:CrisisService){

    }

    ngOnInit(){
        this.crises = this.route.params
            .switchMap((params:Params) => {
                this.selectedId = +params['id'];
                return this.service.getCrises();
            })
    }
    onSelect(crisis:Crisis){
        this.selectedId = crisis.id;

        this.router.navigate([crisis.id], {
            relativeTo:this.route
        })
    }
    isSelect(crisis:Crisis){
        return this.selectedId === crisis.id;
    }
}