import {Component} from '@angular/core';

@Component({
    selector:"date1",
    template:`
        {{date1 | date | uppercase}}    
    `,

})

export class date1ComponentClass{
    date1 = new Date();
}