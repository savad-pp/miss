import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
   //event bubbling -->

  onDivClick(){
    console.log("div clicked")
  }

  onSave(){
    console.log("save button clicked")
    console.log(event)
  }


  add(a,b)
  {
    return a+b
  }
}
