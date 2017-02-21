import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
    {
        path: "hero/:id",
        component: HeroDetailComponent
    },
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
        component: HomeComponent
    },
    {
        path: "**",
        component: PageNotFountComponent
    }
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        CrisisListComponent,
        HeroListComponent,
        HomeComponent,
        PageNotFountComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
