import { Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnChanges {

  @Input() todos:any;
  constructor() { }

  ngOnInit() {
    console.log("init");
  }
  ngOnChanges(changes){
    console.log(changes)
  }
}
