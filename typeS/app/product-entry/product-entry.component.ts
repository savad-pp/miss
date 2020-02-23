import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-entry',
  templateUrl: './product-entry.component.html',
  styleUrls: ['./product-entry.component.css']
})
export class ProductEntryComponent implements OnInit {
  model:Product

  constructor() { 
    this.model=new Product()
  }

  ngOnInit() {
  }
          save() {
          /*console.log("name",this.model.name)
          console.log("id",this.model.pid)
          console.log("price",this.model.price)
          */
         }
      
  
  

}
