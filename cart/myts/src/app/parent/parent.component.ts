import { Component, OnInit } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  // template:'<app-chiled [ar]="array" [message]="msg_frm_parent"></app-chiled>'
  // template:
  // "{{eventmessage}} <app-chilevent (messageevent)='recieveEvent($event)'></app-chilevent>"
})
export class ParentComponent implements OnInit {
  msg_frm_parent:string="hellow"
  eventmessage:string="hel"
  constructor() { }

  ngOnInit() {
  }
array:Array<any>=['s','a','v','d']

recieveEvent($event){
this.eventmessage=$event
console.log(this.eventmessage)
console.log("event")
}
}
