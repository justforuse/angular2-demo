import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';


import {AppRoutingModule} from './app-routing.module';
import {HeroModule} from './heroes/heroes.module';
import {CrisisCenterModule} from './crisis-center/crisis-center.module';
import {AdminModule} from './admin/admin.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HeroModule,
        CrisisCenterModule,
        AdminModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
