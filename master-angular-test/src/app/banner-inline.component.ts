import {Component} from '@angular/core';

@Component({
  selector:'app-banner',
  template:'<h1>{{title}}</h1>'
})
export class BannerComponent{
  title = "test tour of heroes";
}
