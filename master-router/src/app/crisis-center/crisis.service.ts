import {Injectable} from '@angular/core';

export class Crisis{
		constructor(public id:number,public name:string){

		}
}

let CRISES:Crisis[] = [
    new Crisis(1, "大火"),
    new Crisis(2, "火星撞地球"),
    new Crisis(3, "海啸"),
];

let crisesPromise = Promise.resolve(CRISES);

@Injectable()
export class CrisisService{
	getCrises(){
        return crisesPromise;
	}
	getCrisis(id:number){
        return crisesPromise.then(crises => crises.find(crisis => crisis.id === id));
	}
}

