import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { TestBed } from '@angular/core/testing';
import { TestComponent } from './test/test.component';


const routes: Routes = [{
  path:"calculator",
  component:CalculatorComponent
},

{
path:"test",
  component:TestComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
