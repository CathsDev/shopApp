import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-components/product-details/product-details.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'product-list',
        pathMatch: 'full'
    },
    {
        path: 'product-list',
        component: ProductListComponent
    },
    {
        path: 'product-list/:id',
        component: ProductDetailsComponent
    },
    {
        path: 'shopping-cart',
        component: ShoppingCartComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
