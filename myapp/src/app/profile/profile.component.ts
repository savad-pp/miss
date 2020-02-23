import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from "@angular/forms"
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private fb:FormBuilder) {
    this.fb=fb
   }

  ngOnInit() {
  }
customerform=this.fb.group({
  name:['',[Validators.required,Validators.minLength(3)]],
  email:['',[Validators.required,Validators.email]],
  address:this.fb.group({
    no:['',[Validators.min(1),Validators.max(5)]],
    street:[''],
    city:['']
  })

})

save(){
   
  console.log(this.customerform.value)
}
}
