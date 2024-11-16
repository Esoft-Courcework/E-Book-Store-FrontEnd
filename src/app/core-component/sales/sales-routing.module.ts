import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesComponent } from './sales.component';

const routes: Routes = [
  { path: '', redirectTo: 'saleslist', pathMatch: 'full' },
  {
    path: '',
    children: [
      {
        path: 'saleslist',
        loadChildren: () =>
          import('./saleslist/saleslist.module').then((m) => m.SaleslistModule),
      },
    ],
  },
  {
    path: 'pos',
    loadChildren: () => import('./pos/pos.module').then((m) => m.PosModule),
  },
  {
    path: 'salesreturnlists',
    loadChildren: () =>
      import('./salesreturnlists/salesreturnlists.module').then(
        (m) => m.SalesreturnlistsModule
      ),
  },
  {
    path: 'add-sales',
    loadChildren: () =>
      import('./add-sales/add-sales.module').then((m) => m.AddSalesModule),
  },
  {
    path: 'edit-sales',
    loadChildren: () =>
      import('./edit-sales/edit-sales.module').then(
        (m) => m.EditSalesModule
      ),
  },
  {
    path: 'sales-details',
    loadChildren: () =>
      import('./sales-details/sales-details.module').then(
        (m) => m.SalesDetailsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesRoutingModule {}
