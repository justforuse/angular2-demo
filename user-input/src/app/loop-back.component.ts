import { Component } from '@angular/core';

@Component({
    selector: 'loop-back',
    templateUrl: './app/loop-back.component.html'
})
export class LoopBackComponent {
    values:string;
    constructor() {
        this.values = "";
     }
     onKeyUp(v:any){
        // v is an element
         console.log(v.value);

         this.values += v + " | ";
     }
}