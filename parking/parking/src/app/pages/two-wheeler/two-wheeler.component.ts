import { Component, OnInit } from '@angular/core';
import {twowlr} from './twowlr'

@Component({
  selector: 'app-two-wheeler',
  templateUrl: './two-wheeler.component.html',
  styleUrls: ['./two-wheeler.component.css']
})
export class TwoWheelerComponent implements OnInit {
  date: any;
vehicle_number:string
data: twowlr[];
lenth:number;
vehicle_number_remove:string
idToDelete:number


  constructor() {
    this.date = new Date()
    console.log(this.date)
    console.log(this.date)
   }


  ngOnInit() {
    // var str:string = "Apples are round, and apples are juicy."; 
    // var sliced = str.slice(3, -2); 
    // console.log(sliced);
    this.vehicle_number =""
    this.data=[]
    
  }

  submit(){
   // alert(this.vehicle_number)
    if(this.data.length<3){
    if(this.vehicle_number !==""){
      const additm: twowlr={
        id:this.date,
        vehicle_no: this.vehicle_number,
        type:"two_wheeler"
        
        }
        this.data.push(additm)
        alert("vehicle number :: "+this.vehicle_number+" PARKING")
        
        this.lenth=this.data.length
        console.log(this.data)
    }
    this.vehicle_number=""
  }
  else{
    alert("PARKING FILL")
  }
  }
 

submit_remove(){
    console.log(this.vehicle_number_remove)
    console.log(this.data[0])
for(var i = 0; i < this.data.length; i++)
{
  if(this.data[i].vehicle_no == this.vehicle_number_remove)
  {
    console.log("looop",this.data[i])
    this.idToDelete= this.data.indexOf (this.data[i])
    this.data.splice(this.idToDelete,1)
    this.lenth=this.data.length
    alert("VEHICLE NUMBER"+" "+this.vehicle_number_remove+ " "+"REMOVED FROM SLOT")
    
  }
  if(i==this.data.length-1){
    alert("VEHICLE NUMBER NOT FOUND")
  }
  
}

  



  }
// saveItem(){
  
// if(this.vehicle_number !==""){
// const additm: twowlr={
// id:this.date,
// vehicle_no: this.vehicle_number,
// type:"two_wheeler"

// }
// this.data.push(additm)
// }
// this.vehicle_number=""
// }
}
