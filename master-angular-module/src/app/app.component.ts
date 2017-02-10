import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
// 可以在根模块声明服务，即提供providers参数，但组建内部仍需要导入相应服务
import {HeroService} from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls:['app.component.css']
})
export class AppComponent implements OnInit {
  title = "Tour of Heroes";
  
  subtitle:"this is subtitle";
  constructor(){
    
  }
  
  ngOnInit(){
    
  }
}
