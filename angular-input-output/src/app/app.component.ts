import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  data = [1,2,3];

  getChildEvent(index){
    console.log(index);
    this.data.splice(index,1);
  }
}
