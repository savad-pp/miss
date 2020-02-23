import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-app';
  todoArray=[]
  todo=""
  addTodo(value){  
      this.todoArray.push(value)  
      
        console.log(this.todoArray) 
        }
        deleteItem(todo: any){   

            console.log("delete item",todo) 
            var ind=this.todoArray.indexOf(todo)
            console.log(ind)
            var rm=this.todoArray.splice(ind,1)
            console.log('removed is',rm)
          }


}
