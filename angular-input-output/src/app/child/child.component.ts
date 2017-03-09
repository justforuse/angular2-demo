import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() values;
  @Output() childEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {

  }
  fireChildEvent(index){
    this.childEvent.emit(index);
  }
}
