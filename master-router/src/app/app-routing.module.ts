import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './not-found.component'


const appRoutes: Routes = [
  {
    path:"404",
    component:NotFoundComponent
  },
  {
    path: "**",
    redirectTo:'404'
  }
];
@NgModule({
    imports :[
        RouterModule.forRoot(appRoutes,{
	useHash:true})
    ],
    exports:[
        RouterModule
    ]

})

export class AppRoutingModule{

}
