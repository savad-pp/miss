import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [StoreComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [StoreComponent]
})
export class StoreModule { }
