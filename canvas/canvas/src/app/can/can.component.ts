import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-can',
  templateUrl: './can.component.html',
  styleUrls: ['./can.component.css']
})

interface IShape{
  circle()
}
export class CanComponent implements OnInit,IShape {
  circle() {
    throw new Error("Method not implemented.");
  }
 
  constructor() { }

  ngOnInit() {
    

  }

   DrawCircle() {
    var c:any = document.getElementById("myCanvas")
    var context:any=c.getContext("2d");
    var centerX = c.width / 2
    var centerY = c.height / 2;
    var radius = 70;

    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = 'green';
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = '#003300';
    context.stroke();
 
}
DrawRectangle(){
  var c:any = document.getElementById("myCanvas")
  var context:any=c.getContext("2d");
  context.beginPath();
context.rect(20, 20, 150, 100);
context.stroke();
}
clear(){
  var c:any = document.getElementById("myCanvas")
  var context:any=c.getContext("2d");
  context.clearRect(0, 0, c.width, c.height);
}

}
