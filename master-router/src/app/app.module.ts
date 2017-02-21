import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import {CrisisListComponent} from './crisis-center/crisis-center.component';
import {HeroListComponent} from './heroes/heroes.component';
const appRoutes: Routes = [
    // {
    //     path: "hero/:id",
    //     component: HeroDetailComponent
    // },
    {
        path: "crisis-center",
        component: CrisisListComponent
    },
    {
        path: "heroes",
        component: HeroListComponent,
        data: {
            title: "Heroes List"
        }
    },
    {
        path: "",
        component: CrisisListComponent
    },
    // {
    //     path: "**",
    //     component: PageNotFountComponent
    // }
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        AppComponent,
        CrisisListComponent,
        HeroListComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
