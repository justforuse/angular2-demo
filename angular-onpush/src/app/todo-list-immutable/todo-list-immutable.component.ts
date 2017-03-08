import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';

@Component({
  selector: 'todo-list-immutable',
  templateUrl: './todo-list-immutable.component.html',
  styleUrls: ['./todo-list-immutable.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TodoListImmutableComponent implements OnInit, OnChanges {
  @Input() todos:any;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(change){
    console.log(change);
  }
}
