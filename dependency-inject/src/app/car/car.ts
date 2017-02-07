
export class Engine{
    public cylinders = 4;
}

export class Tires{
    public make = "Flinstone";
    public model = "Square";
}

export class Car{
    public description = "NO  DI";

    constructor(public engine:Engine, public tires:Tires){
        
    }

    drive(){
        return `
            ${this.description} car with ${this.engine.cylinders} and ${this.tires.make} tires.
        `
    }
}
