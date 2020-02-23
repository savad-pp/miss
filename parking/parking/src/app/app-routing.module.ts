import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './pages/about/about.component'; 
import {MenuComponent} from './menu/menu.component'; 
import { TwoWheelerComponent } from './pages/two-wheeler/two-wheeler.component';
import { FourWheelerComponent } from './pages/four-wheeler/four-wheeler.component'

const routes: Routes = [  
    {path: '',component: MenuComponent},  
    {path: 'two_wheeler',component: TwoWheelerComponent},  
    {path: 'four_wheeler',component: FourWheelerComponent}, 
    {path: 'about',component: AboutComponent}, 
      
    ];  
    @NgModule({  
        imports: [RouterModule.forRoot(routes)],  
        exports: [RouterModule]  
      })  
      export class AppRoutingModule { } 