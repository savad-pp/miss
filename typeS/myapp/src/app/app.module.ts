import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ProductComponent } from './product/product.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import {FontComponent} from './font/font.component';
import { TemplateComponent } from './template/template.component'

@NgModule({
  declarations: [  //register components
    AppComponent, TestComponent, CalculatorComponent, ProductComponent,FontComponent, TemplateComponent 
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],   //use services and give name
  bootstrap: [AppComponent]  //which component see load
})
export class AppModule { }
