import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import {RouterModule,Routes} from '@angular/router'

import { ClientComponent } from './client/client.component';

const mypath: Routes =[

{
  path:"client/:1",component:ClientComponent
}

]



@NgModule({
  declarations: [
    AppComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(mypath)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
