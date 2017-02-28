import {Component} from '@angular/core';

@Component({
  select:'app-banner',
  template:'<h1>{{title}}</h1>'
})
export class BannerComponent{
  title = "test tour of heroes";
}
