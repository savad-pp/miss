import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
value1:any=0
value2:any=0

result:number=0
add(){

  this.result=parseInt(this.value1)+parseInt(this.value2)
}
test(e){
  console.log("event",e)
}
setvl(i){
   this.value1=i
}
}
