import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {CalculatorComponent} from './calculator/calculator.component'
// import { TestComponent } from './test/test.component';
import {AnimationComponent} from './animation/animation.component'
import { ImageanimationComponent} from './imageanimation/imageanimation.component'
import {ProductListComponent} from './product-list/product-list.component'

// jan 6th hyperlink
const routes: Routes = [{path:"calculator",component:AnimationComponent},
{path:"product",component:ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }