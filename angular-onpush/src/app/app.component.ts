import { Component } from '@angular/core';
import * as Immutable from 'immutable';
class Todo{
  label:string;
  completed:boolean
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = {
    label:'works'
  }

  todos:Todo[] = [
    {
      label:"code",
      completed:false
    },
    {
      label:"wash",
      completed:false
    }
  ];
  todosImmutable : Immutable.List<any> = Immutable.fromJS([
    {
      label:"code",
      completed:false
    },
    {
      label:"wash",
      completed:false
    }
  ]);
  addTodo(label:string){
    this.todos.push({
      label,
      completed:false
    })
  }

  changeTitle(){
    this.title.label = "changed title";
  }

  changeObj(){
    this.title = {
      label:"changed object"
    }
  }
  changeTodos(label){
    // let temp = Immutable.fromJS(this.todos);
    // this.todos = temp.push({
    //   label,
    //   complete:false
    // })

    this.todos = [...this.todos, {label, completed:false}]
  }
}
