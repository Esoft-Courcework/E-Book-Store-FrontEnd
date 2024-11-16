import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductlistRoutingModule } from './productlist-routing.module';
import { ProductlistComponent } from './productlist.component';
import { DataTablesModule } from 'angular-datatables';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductlistComponent
  ],
  imports: [
    CommonModule,
    ProductlistRoutingModule,
    DataTablesModule,
    FormsModule,
    SweetAlert2Module.forRoot()
  ]
})
export class ProductlistModule { }
