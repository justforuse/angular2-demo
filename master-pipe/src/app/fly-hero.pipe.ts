import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: "canFly"
})
export class FlyHeroPipe implements PipeTransform {
    transform(value:Array<any>) {
        return value.filter(item=>item.canFly);
    }
}

@Pipe({
    name:"canFlyImpure",
    pure:false
})

export class FlyHeroImpurePipe extends FlyHeroPipe{

}