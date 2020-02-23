import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent implements OnInit {

  constructor(public service:DataService) { }

  ngOnInit() {
    this.service.observable.subscribe({  
      next(x){console.log("next",x)},
      error(err){console.log("er",err)},
      complete(){console.log("compleate")}

    })
  }

}
