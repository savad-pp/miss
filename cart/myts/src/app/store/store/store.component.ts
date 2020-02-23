import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from "@angular/forms"
import {StoreData} from '../store-data'
import { StoreModule } from '../store.module';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
stor_array:any= []
view_array:any[]=[]
  constructor(private fb: FormBuilder) {
    this.fb = fb;
   }
   model=new StoreData('','','')
  // storeregister = this.fb.group({
  //   storename:['',[Validators.required,Validators.minLength(3)]],
  //   gst:['',[Validators.required,Validators.minLength(3)]],
  //   licence:['',[Validators.required,Validators.minLength(3)]]
  // })

  ngOnInit() {
  }


  save(storeform) {
    //console.log(storeform)
    //console.log(this.model)
   // this.storeregister.reset()
    // this.stor_array.push(storeform);
    //  localStorage.setItem(StoreData.storeid.toString(),JSON.stringify(this.model));
    // let obj=localStorage.getItem('1')
    // let data=JSON.parse(obj)
    //  console.log("storearray",this.stor_array)
    //  console.log("obj",obj)
    //  console.log("data",data)
    // //storeform.form.reset()

    console.log(this.model)
    let count=localStorage.length

    if(count<1){
      localStorage.setItem("1",JSON.stringify(this.model))
      let obj= localStorage.getItem("1")
    }else{
      count=count+1
      localStorage.setItem(count.toString(),JSON.stringify(this.model))
    }

     storeform.form.reset()



  }
  view(){
    for(var i=0;i<=localStorage.length;i++){
     let k=i+1
     let data=localStorage.getItem(k.toString())
     this.view_array.push(JSON.parse(data))
     this.view_array.push(data)
     console.log("ARRAY:\n",this.view_array.pop())
     }
    }
}
