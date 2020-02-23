import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
//shapes:any=["SELECT A SHAPE","Circle","Rectangle","Square"]
  constructor() { }

  ngOnInit() {
  }
  selectOption(value){
    if(value=="Circle"){
      console.log("ccc")
      // var canvas = document.getElementById('myCanvas');
      // if (canvas.getContext) {
      //   var ctx = canvas.getContext('2d');
  
      //   ctx.fillStyle = "#D74022";
      //   ctx.fillRect(25, 25, 150, 150);
  
      //   ctx.fillStyle = "rgba(0,0,0,0.5)";
      //   ctx.clearRect(60, 60, 120, 120);
      //   ctx.strokeRect(90, 90, 80, 80);
   // }
  }
    if(value=="Rectangle"){
      console.log("RRR")
    }
    if(value=="Square"){
    console.log("SSS")
    }
  }
  // canvas: HTMLCanvasElement;
  //      ctx: CanvasRenderingContext2D ;
  //      container : any;
  //      cw : any;
  //      ch : any;


  //         ngAfterViewInit() {
  //           this.container = document.getElementById('container');
  //           this.cw = this.container.clientWidth;
  //         this.ch = this.container.clientHeight;
  //           this.canvas = document.createElement('canvas');
  //         this.ctx = this.canvas.getContext('2d');
  //         this.canvas.width = this.cw;
  //         this.canvas.height = this.ch;
  //        this.container.appendChild(this.canvas);
  // }
}
