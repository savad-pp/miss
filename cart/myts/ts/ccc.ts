export class Car{
    engin:string
    distancecoverd:number
    constructor(e:string,distance:number){
this.engin=e
this.distancecoverd=distance

    }
    getEngin(){
        return this.engin
    }
    getMilage(fuekinliters:number){
return this.distancecoverd/fuekinliters

    }
}