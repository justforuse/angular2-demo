import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import {HeroService} from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls:['app.component.css']
})
export class AppComponent implements OnInit {
  title = "Tour of Heroes";
  

  constructor(){

  }
  
  ngOnInit(){
    
  }
}
