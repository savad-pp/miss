import { Component, OnInit } from '@angular/core';
import {trigger,state,style,transition, animate} from '@angular/animations'

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [ trigger(("openclose"),[
    state('open',style({
      height: '200px',
      opacity:1,
      backgroundColor:'yellow'
    })),
    state('close',style({
      height: '200px',
      opacity:0.5,
      backgroundColor:'green'
    })),
    transition(('open => close'),[
      animate('0.1s')
    ]),
    transition(('close => open'),[
      animate('0.5s')
    ])
  ]

  )]
})
export class AnimationComponent implements OnInit {
state = 'open';
  constructor() { }

  ngOnInit() {
  }
  changeState(){
    if(this.state=='open'){
      this.state='close'
    }else{
      this.state='open'
    }
    
  }
}
