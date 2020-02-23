import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chiled',
  templateUrl: './chiled.component.html',
  styleUrls: ['./chiled.component.css'],
  template:'msg:{{message}}  <p *ngFor="let item of ar">{{item}}</p>'
  
})
export class ChiledComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  @Input() message:string
  @Input() ar:string[]

  

}
