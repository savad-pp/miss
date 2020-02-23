import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  
  
  private dataSource = new BehaviorSubject({name:'sava'})
  currentData = this.dataSource.asObservable()

  constructor() { }

  
  changeData(data:any){
    this.dataSource.next(data)
    this.dataSource.error("error")
  }
 
  
}
