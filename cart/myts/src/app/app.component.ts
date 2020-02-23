import { Component } from '@angular/core';
import { slideInAnimation } from './animation';
import {RouterOutlet} from '@angular/router'
import {CounterDirective} from './counter-directive'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[slideInAnimation]
})
export class AppComponent {
  prepareRoute(outlet:RouterOutlet){
    return outlet
  }
}


