import { Component, OnInit } from '@angular/core';
//import { Route } from '@angular/compiler/src/core';
import { SharedService } from '../shared.service';
//import {ProdService} from '../'

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
data:any
  constructor(private sharedData:SharedService,private product:ProdService) {
  }

  ngOnInit() {
  this.sharedData.currentData.subscribe(data=>{this.data=data})
  
  }
changaData(){
  this.sharedData.changeData({name:'aaasss'})
  
}
}
