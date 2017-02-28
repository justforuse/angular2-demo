import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {CrisisCenterRoutingModule} from './crisis-center-routing.module';
import {CrisisService} from './crisis.service';
import {CanDeactivateGuard} from '../can-deactivate-guard.service';

import {CrisisCenterComponent} from './crisis-center.component';
import {CrisisListComponent} from './crisis-list.component';
import {CrisisDetailComponent} from './crisis-detail.component';
import {CrisisCenterHomeComponent} from './crisis-center-home.component';
@NgModule({
    imports:[
        FormsModule,
        CommonModule,
        CrisisCenterRoutingModule
    ],
    declarations:[
        CrisisCenterComponent,
        CrisisListComponent,
        CrisisDetailComponent,
        CrisisCenterHomeComponent
    ],
    providers:[
        CrisisService,
        CanDeactivateGuard
    ]

})

export class CrisisCenterModule{

}