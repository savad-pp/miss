import { Component, OnInit } from '@angular/core';
import {faCoffee} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-font',
  templateUrl: './font.component.html',
  styleUrls: ['./font.component.css']
})
export class FontComponent implements OnInit {

    facoffeeicon=faCoffee
    




  constructor() { }

  ngOnInit() {
  }
  colors: string[]=["red","green","yellow"]
 textcolor:string="red"
color='disable'
//color='active'
colorvalue=""
test(){
  console.log(this.colorvalue)
}
}
