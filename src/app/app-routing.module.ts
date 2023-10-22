import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryComponent } from './components/category/category.component';
import { ContactRequestsComponent } from './components/contact-requests/contact-requests.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { OffersAndPromotionsModalComponent } from './components/offers-and-promotions-modal/offers-and-promotions-modal.component';
import { OffersAndPromotionsComponent } from './components/offers-and-promotions/offers-and-promotions.component';
import { PressCoveragesComponent } from './components/press-coverages/press-coverages.component';
import { ProductGroupComponent } from './components/product-group/product-group.component';
import { ProductGroupsListComponent } from './components/product-groups-list/product-groups-list.component';
import { ProductVarientsListComponent } from './components/product-varients-list/product-varients-list.component';
import { ProductsComponent } from './components/products/products.component';
import { TechTestimonialsComponent } from './components/tech-testimonials/tech-testimonials.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { WarrantyInfoComponent } from './components/warranty-info/warranty-info.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '',
    canActivate: [AuthGuard],
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
        path: 'contact-requests',
        component: ContactRequestsComponent
      },
      {
        path: 'press-coverages',
        component: PressCoveragesComponent
      },
      {
        path: 'tech-testimonials',
        component: TechTestimonialsComponent
      },
      {
        path: 'offers-and-promotions',
        component: OffersAndPromotionsComponent
      },
      {
        path: 'home-slider',
        component: HomeSliderComponent
      },
      {
        path: 'terms-and-conditions',
        component: TermsAndConditionsComponent
      },
      {
        path: 'warranty-information',
        component: WarrantyInfoComponent
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
