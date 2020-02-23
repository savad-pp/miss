import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './template/footer/footer.component';
import {AppRoutingModule} from './app-routing.module';
import { TwoWheelerComponent } from './pages/two-wheeler/two-wheeler.component';
import { FourWheelerComponent } from './pages/four-wheeler/four-wheeler.component'
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    TwoWheelerComponent,
    FourWheelerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
