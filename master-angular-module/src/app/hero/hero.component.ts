/**
 * Created by Administrator on 2017/2/11.
 */
import {Component, OnInit} from '@angular/core';
import {HeroService} from './hero.service';
import {UserService}from '../user.service';
@Component({
  moduleId:module.id,
  templateUrl: 'hero.component.html',
  providers:[HeroService]
})
export class HeroComponent implements OnInit {
  userName = '';
  constructor(private userService:UserService) {
    this.userName = userService.userName;
  }

  ngOnInit() {
  }
}
