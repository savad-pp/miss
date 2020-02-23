export class Car{
    engin:string
    distancecoverd:number
    constructor(e:string,distance:number){
this.engin=e
this.distancecoverd=distance
console.log()

    }
    getEngin(){
        return this.engin
    }
    getMilage(fuekinliters:number){
return this.distancecoverd/fuekinliters

    }
    add(x,y){
        return x+y;
    }
}