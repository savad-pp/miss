/// <reference path="ishape.ts" />
/// <reference path="circle.ts" />
/// <reference path="triangle.ts" />
function drawAllShapes(shape:Drawing.IShape){ 
    shape.draw();
    }
    let circle=new Drawing.Circle()
    let triangl=new Drawing.Triangle()
    drawAllShapes(circle); 
    drawAllShapes(triangl);
    