import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
<p *myUnless="show">hahaha</p>
<button type="button" (click)="toggle()">点击切换</button>`,
})
export class AppComponent  {
  name = 'Angular';
  show = true;
  constructor(){

  }
  toggle(){
    this.show = !this.show;
  }
}
