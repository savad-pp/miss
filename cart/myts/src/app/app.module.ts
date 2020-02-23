import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {MatDatepickerModule,} from '@angular/material/datepicker';
import { MatToolbarModule, MatIconModule, 
  MatListModule, MatButtonModule,MatInputModule,MatNativeDateModule 
,MatOptionModule,MatSelectModule} from '@angular/material';
import { AppComponent } from './app.component';
import { ServiceTestComponent } from './service-test/service-test.component';
import { ProductListComponent } from './product-list/product-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav'

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {MatFormField} from '@angular/material'
import { ViewcartComponent } from './viewcart/viewcart.component';
import { StoreModule } from './store/store.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {EmployeeComponent} from './employee/employee.component';
import { AnimationComponent } from './animation/animation.component';
import { ImageanimationComponent } from './imageanimation/imageanimation.component';
import {AppRoutingModule} from './app-routing.module'
import {MatMenuModule} from '@angular/material/menu';
import { ParentComponent } from './parent/parent.component';
import { ChiledComponent } from './chiled/chiled.component';
import { ChileventComponent } from './chilevent/chilevent.component';
import { HighlightDirective } from './highlight.directive';
import { AppnotDirective } from './appnot.directive'


@NgModule({
  declarations: [
    AppComponent,
    ServiceTestComponent,
    ProductListComponent,
    NavbarComponent,
    ViewcartComponent,
    EmployeeComponent,
    AnimationComponent,
    ImageanimationComponent,
    ParentComponent,
    ChiledComponent,
    ChileventComponent,
    HighlightDirective,
    AppnotDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    StoreModule,
    NgxPaginationModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule ,
    MatOptionModule,
    MatSelectModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
