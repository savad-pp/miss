import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms'
import {FormGroup} from '@angular/forms'
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  customerform=new FormGroup({
  name:new FormControl('name'),
  email:new FormControl('email'),
  
  address:new FormGroup({
    no:new FormControl('1'),
    street:new FormControl('street'),
    city:new FormControl('ity')

  })
 })
 save(){
   
   console.log(this.customerform.value)
 }
}
