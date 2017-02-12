/**
 * Created by Administrator on 2017/2/11.
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute}from '@angular/router';
@Component({
  moduleId: module.id,
  templateUrl: 'crisis-detail.component.html'
})
export class CrisisDetailComponent implements OnInit {
  id:number;
  constructor(private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
  }
}
