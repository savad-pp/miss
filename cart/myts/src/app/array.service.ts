import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {
  datacart:any
  constructor() { }
  getArrayData(){
    console.log("service====",this.datacart)
    return this.datacart=[]
  }
}
