/**
 * Created by Administrator on 2017/2/11.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HeroComponent}   from './hero.component';
import {HeroDetailComponent}   from './hero-detail.component';
import {HeroListComponent}   from './hero-list.component';

const routes:Routes = [
  {
    path:"",
    component:HeroComponent,
    children:[
      {
        path:"",
        component:HeroListComponent
      },
      {
        path:":id",
        component :HeroDetailComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HeroRoutingModule {
}
