import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  data:any
  constructor(private sharedData:SharedService) {
  }

  ngOnInit() {
  this.sharedData.currentData.subscribe(data=>{this.data=data})
  }
changaData(){
  this.sharedData.changeData({name:'bbbsss'})
  
}
}
