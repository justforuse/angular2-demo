import {Route, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {ContactComponent} from './contact.component';
@NgModule({
  imports:[
    RouterModule.forChild([
      {
        path:"contact",
        component:ContactComponent
      }
    ])
  ],
  exports:[
    RouterModule
  ]
})

export class ContactRoutingModule{

}
