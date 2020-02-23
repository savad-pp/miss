import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  operator:string=""
  constructor() { }

  ngOnInit() {
  }
values:any=[11,22,33]  
  test(e){
    console.log("Called",e)
  }
value1:any
value2:any
result:number
/*add(){
  this.result=parseInt(this.value1) + parseInt(this.value2)
}
*/
getResult(){
  if(this.operator=='+'){
  this.result=parseInt(this.value1) + parseInt(this.value2)
  console.log(this,this.result)
  this.operator=''
}
}
setOperator(opr){
this.operator=opr
}
setValue(i){
  if(this.operator==''){
    this.value1=i
  }
  else{
    this.value2=i
  }
}
reset(){
  this.operator=''
  this.result=0
  this.value1=0
  this.value2=0
}
}
