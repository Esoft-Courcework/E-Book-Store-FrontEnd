import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteCoreComponentRoutingModule } from './site-core-component-routing.module';
import { SiteCoreComponentComponent } from './site-core-component.component';


@NgModule({
  declarations: [
    SiteCoreComponentComponent
  ],
  imports: [
    CommonModule,
    SiteCoreComponentRoutingModule
  ]
})
export class SiteCoreComponentModule { }
