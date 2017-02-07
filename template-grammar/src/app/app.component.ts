import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent  { 
  classValue = 'red';
  isRed = true;
  isLarge = false;
  switchValue = 'value12';
}
