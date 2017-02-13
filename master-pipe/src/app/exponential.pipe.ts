import {Pipe, PipeTransform} from '@angular/core';

//name is the pipe's name
@Pipe({name:'exponential'})
export class ExponentialPipe implements PipeTransform{
    //value is the meta data(before pipe) exponent is the additional arguments( if have)
    transform(value:number, exponent:string):number{
        let exp = parseFloat(exponent);
        return Math.pow(value, isNaN(exp) ? 1 : exp);
    }

    // transform(value){
    //     return value * 4;
    // }
}