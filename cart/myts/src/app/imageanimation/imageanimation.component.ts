import { Component, OnInit } from '@angular/core';
import {trigger,state,style,transition, animate} from '@angular/animations'

@Component({
  selector: 'app-imageanimation',
  templateUrl: './imageanimation.component.html',
  styleUrls: ['./imageanimation.component.css'],
  animations:[trigger('imagetransition',[
    state('translate',style({
      transform:'translateX(50px)'
    })),
    state('rotate',style({
      transform:'rotateY(180deg) rotateZ(90deg)'
    })),
    state('zoom',style({
      transform:'scale(1.5)'
    })),
    
    state('hide',style({
      opacity:0
    })),
    
    state('show',style({
      opacity:1
    })),
    transition('*=>*',[animate('5s')]),
    transition('translate=>rotate',[animate('1s')]),
    transition('show<=>hide',[animate('0.5')])
  ])]
})
export class ImageanimationComponent implements OnInit {
state=""
  constructor() { }

  ngOnInit() {
  }
change(i){
  console.log(i)
 this.state=i  
}
}
