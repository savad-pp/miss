import { Component, OnInit } from '@angular/core';
import {Person}  from './datamodel'
@Component({
  selector: 'app-four-wheeler',
  templateUrl: './four-wheeler.component.html',
  styleUrls: ['./four-wheeler.component.css']
})
export class FourWheelerComponent implements OnInit {
  tcode : string;
  constructor() { }

  ngOnInit() {
  }
  submit() {
    console.log("the code :" + this.tcode);
}
}
