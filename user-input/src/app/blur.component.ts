import {Component}from '@angular/core';

@Component({
    selector:"blur",
    template:`
        <input #box (blur) = "onBlur(box.value)">
        <p>{{value}}</p>
    `
})
export class BlurComponent{
    value:string;
    constructor(){
        this.value = "";
    }
    onBlur(v:string){
        this.value = v;
    }
}