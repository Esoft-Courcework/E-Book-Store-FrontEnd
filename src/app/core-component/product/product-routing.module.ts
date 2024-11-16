import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';

const routes: Routes = [
  { path: '', redirectTo: 'productlist', pathMatch: 'full' },
  {
    path: '',
    children: [
      {
        path: 'productlist',
        loadChildren: () =>
          import('./productlist/productlist.module').then(
            (m) => m.ProductlistModule
          ),
      },
      {
        path: 'addproduct',
        loadChildren: () =>
          import('./addproduct/addproduct.module').then(
            (m) => m.AddproductModule
          ),
      },
      {
        path: 'categorylist',
        loadChildren: () =>
          import('./categorylist/categorylist.module').then(
            (m) => m.CategorylistModule
          ),
      },
      {
        path: 'addcategory',
        loadChildren: () =>
          import('./addcategory/addcategory.module').then(
            (m) => m.AddcategoryModule
          ),
      },
      {
        path: 'editproduct',
        loadChildren: () =>
          import('./editproduct/editproduct.module').then(
            (m) => m.EditproductModule
          ),
      },
      {
        path: 'editcategory',
        loadChildren: () =>
          import('./editcategory/editcategory.module').then(
            (m) => m.EditcategoryModule
          ),
      },
      {
        path: 'product-details',
        loadChildren: () =>
          import('./product-details/product-details.module').then(
            (m) => m.ProductDetailsModule
          ),
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
