import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {HttpClient} from '@angular/common/http'
import { tap,map } from 'rxjs/operators'
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProdService {
url="http://localhost:4200/asset/prod.json"
  constructor(private http:HttpClient) { }

  getProducts():Observable<any>{

return this.http.get(this.url).pipe(map(data) <any> =>  data),tap(data=>console.log(JSON.stringify (data)))

  } 

}
