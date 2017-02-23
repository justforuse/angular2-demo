import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {Crisis, CrisisService} from "./crisis.service";
import {DialogService} from '../dialog.service';

import 'rxjs/add/operator/switchMap';
@Component({
    moduleId: module.id,
    template: `<div *ngIf="crisis">
    <div>
        id:{{crisis.id}}
    </div>
    <div>
        内容: <input #crisisName [(ngModel)]="editName">
    </div>
    <button (click)="saveCrisis()">保存</button>
    <button (click)="cancel()">取消</button>
</div>`
})

export class CrisisDetailComponent implements OnInit {
    crisis:Crisis;
    editName:string;

    constructor(private service:CrisisService,
                private route:ActivatedRoute,
                private router:Router,
    private dialogService:DialogService) {

    }

    canDeactivate():Promise<boolean> | boolean{
        if(!this.crisis || this.crisis.name == this.editName){
            return true;
        }
        return this.dialogService.confirm();
    }
    gotoCrises() {

    }

    ngOnInit() {
        this.route.params
            .switchMap((params:Params) =>this.service.getCrisis(+params['id']))
            .subscribe((crisis:Crisis) => {
                this.editName = crisis.name;
                this.crisis = crisis;
            });
        // this.route.data
        //     .subscribe((data:{crisis:Crisis}) => {
        //         this.editName = data.crisis.name;
        //         this.crisis = data.crisis;
        //     })
    }

    cancel() {
        let crisisId = this.crisis ? this.crisis.id : null;
        this.router.navigate(['../', {id: crisisId}]);
    }

    saveCrisis() {
        this.crisis.name = this.editName;
        this.gotoCrises();
    }
}