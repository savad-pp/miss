import { IProduct } from './interface'

export class Product implements IProduct {
    id
    price
    name
    constructor(id,name,price){
       this.id=id,
        this.price=price,
        this.name=name
    }
}
