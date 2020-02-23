import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chilevent',
 //templateUrl: './chilevent.component.html',
  styleUrls: ['./chilevent.component.css'],
  template:"<button (click)='myEvent()'>click</button>"
})
export class ChileventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

@Output() messageevent=new EventEmitter<string>()

myEvent(){
  console.log(event)
  this.messageevent.emit('he .. all')

}

}
