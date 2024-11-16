import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportComponent } from './report.component';

const routes: Routes = [
  { path: '', redirectTo: 'purchaseorderreport', pathMatch: 'full' },
  {
    path: '',
    children: [
  {
    path: 'inventoryreport',
    loadChildren: () =>
      import('./inventoryreport/inventoryreport.module').then(
        (m) => m.InventoryreportModule
      ),
  },
  {
    path: 'salesreport',
    loadChildren: () =>
      import('./salesreport/salesreport.module').then(
        (m) => m.SalesreportModule
      ),
  },
  {
    path: 'customerreport',
    loadChildren: () =>
      import('./customerreport/customerreport.module').then(
        (m) => m.CustomerreportModule
      ),
  },
],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportRoutingModule {}
