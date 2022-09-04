import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryComponent } from './components/category/category.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { ProductGroupComponent } from './components/product-group/product-group.component';
import { ProductGroupsListComponent } from './components/product-groups-list/product-groups-list.component';
import { ProductVarientsListComponent } from './components/product-varients-list/product-varients-list.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', 
    component: LayoutComponent,
    children:[
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'create/product-varients',
        component: ProductsComponent,
        data: { type: 'create' }
      },
      {
        path: 'update/product-varients/:id',
        component: ProductsComponent,
        data: { type: 'update' }
      },
      {
        path: 'list/product-varients',
        component: ProductVarientsListComponent
      },
      {
        path: 'create/category',
        component: CategoryComponent,
        data: { type: 'create' }
      },
      {
        path: 'update/category/:id',
        component: CategoryComponent,
        data: { type: 'update' }
      },
      {
        path: 'list/category',
        component: CategoryListComponent
      },
      {
        path: 'create/product-group',
        component: ProductGroupComponent,
        data: { type: 'create' }
      },
      {
        path: 'update/product-group/:id',
        component: ProductGroupComponent,
        data: { type: 'update' }
      },
      {
        path: 'list/product-group',
        component: ProductGroupsListComponent
      },
      {
        path: 'user-profile',
        component: MyProfileComponent
      },
      {
        path: '', redirectTo: '/dashboard', pathMatch: 'full'
      }
    ]
  },
  {
    path: '**', redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
