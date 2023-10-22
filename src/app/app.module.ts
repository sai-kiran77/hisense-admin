import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { MaterialExampleModule } from './material.module';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { ProductVarientsListComponent } from './components/product-varients-list/product-varients-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductGroupsListComponent } from './components/product-groups-list/product-groups-list.component';
import { ProductGroupComponent } from './components/product-group/product-group.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryComponent } from './components/category/category.component';
import { StatsCardComponent } from './components/stats-card/stats-card.component';
import { ContactRequestsComponent } from './components/contact-requests/contact-requests.component';
import { PressCoveragesComponent } from './components/press-coverages/press-coverages.component';
import { PressCoverageModalComponent } from './components/press-coverage-modal/press-coverage-modal.component';
import { TechTestimonialsComponent } from './components/tech-testimonials/tech-testimonials.component';
import { TechTestimonialsModalComponent } from './components/tech-testimonials-modal/tech-testimonials-modal.component';
import { OffersAndPromotionsComponent } from './components/offers-and-promotions/offers-and-promotions.component';
import { OffersAndPromotionsModalComponent } from './components/offers-and-promotions-modal/offers-and-promotions-modal.component';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { HomeSliderModalComponent } from './components/home-slider-modal/home-slider-modal.component';
import { LoaderInterceptor } from './session-interceptor.service';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { TermsAndConditionsModalComponent } from './components/terms-and-conditions-modal/terms-and-conditions-modal.component';
import { WarrantyInfoComponent } from './components/warranty-info/warranty-info.component';
import { WarrantyInfoModalComponent } from './components/warranty-info-modal/warranty-info-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    SidebarComponent,
    DashboardComponent,
    ProductsComponent,
    MyProfileComponent,
    ProductVarientsListComponent,
    NavbarComponent,
    ProductGroupsListComponent,
    ProductGroupComponent,
    CategoryListComponent,
    CategoryComponent,
    StatsCardComponent,
    ContactRequestsComponent,
    PressCoveragesComponent,
    PressCoverageModalComponent,
    TechTestimonialsComponent,
    TechTestimonialsModalComponent,
    OffersAndPromotionsComponent,
    OffersAndPromotionsModalComponent,
    HomeSliderComponent,
    HomeSliderModalComponent,
    TermsAndConditionsComponent,
    WarrantyInfoComponent,
    TermsAndConditionsModalComponent,
    WarrantyInfoModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    // MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 6000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
    MaterialExampleModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
   },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
