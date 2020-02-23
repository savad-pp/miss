interface IPolygon{
    nsides:number
    area():number
    getSides():number

}

// class Square implements IPolygon{
//     getSides(): number {
//         throw new Error("Method not implemented.");
//     }
//     nsides=10
//     sides:number
// constructor(sides:number,nsides){
//     this.sides=sides
//     this.nsides=nsides
// }

//     area():number{
//         console.log("i have "+this.nsides+" sides")
//        return this.sides**4
//     }
    
// }

// let s:IPolygon=new Square(10,4)
// let area=s.area()
// console.log("area===",area)

// class Rectangle implements Polygon{
//     nsides: number;  l:number;b:number
//     constructor(l:number,b:number,nsides:number){
//         this.l=l
//         this.b=b
//         this.nsides=nsides
//     }
//     area(): number {
//         throw new Error("Method not implemented.");
//     }

    
// }

interface IPaint extends IPolygon{
    drawImage():void
}
class Circle implements IPaint{

    nsides: number
    getSides(): number {
        console.log("sides")
        return this.nsides
    }
    r=15
    drawImage(): void {
       console.log("drawing a circle")
    
    }    
    
    area(): number {
        return 3.14*this.r**2
    }


}
let c=new Circle()
    c.drawImage()
    let ar=c.area()
    console.log(ar)
    c.getSides()

