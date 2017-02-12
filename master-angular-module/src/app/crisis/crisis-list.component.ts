/**
 * Created by Administrator on 2017/2/11.
 */
import {Component, OnInit} from '@angular/core';
import {Crisis, CrisisService} from './crisis.service';
@Component({
  moduleId: module.id,
  templateUrl: 'crisis-list.component.html'
})
export class CrisisListComponent implements OnInit {
  crisises : Promise<Crisis[]>;
  constructor(private crisisService:CrisisService) {
  }

  ngOnInit() {
    this.crisises = this.crisisService.getCrises();
  }
}
