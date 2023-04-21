"use strict";
(self["webpackChunkhisense_admin"] = self["webpackChunkhisense_admin"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ 2993);
/* harmony import */ var _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/category-list/category-list.component */ 3438);
/* harmony import */ var _components_category_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/category/category.component */ 9053);
/* harmony import */ var _components_contact_requests_contact_requests_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contact-requests/contact-requests.component */ 9164);
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ 619);
/* harmony import */ var _components_home_slider_home_slider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home-slider/home-slider.component */ 6052);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/layout/layout.component */ 9520);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/my-profile/my-profile.component */ 2429);
/* harmony import */ var _components_offers_and_promotions_offers_and_promotions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/offers-and-promotions/offers-and-promotions.component */ 2157);
/* harmony import */ var _components_press_coverages_press_coverages_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/press-coverages/press-coverages.component */ 9831);
/* harmony import */ var _components_product_group_product_group_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/product-group/product-group.component */ 7995);
/* harmony import */ var _components_product_groups_list_product_groups_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/product-groups-list/product-groups-list.component */ 3717);
/* harmony import */ var _components_product_varients_list_product_varients_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/product-varients-list/product-varients-list.component */ 685);
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/products/products.component */ 697);
/* harmony import */ var _components_tech_testimonials_tech_testimonials_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/tech-testimonials/tech-testimonials.component */ 5541);
/* harmony import */ var _components_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/terms-and-conditions/terms-and-conditions.component */ 8048);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2560);




















const routes = [{
  path: 'login',
  component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__.LoginComponent
}, {
  path: '',
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  component: _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_6__.LayoutComponent,
  children: [{
    path: 'dashboard',
    component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.DashboardComponent
  }, {
    path: 'create/product-varients',
    component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_14__.ProductsComponent,
    data: {
      type: 'create'
    }
  }, {
    path: 'update/product-varients/:id',
    component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_14__.ProductsComponent,
    data: {
      type: 'update'
    }
  }, {
    path: 'list/product-varients',
    component: _components_product_varients_list_product_varients_list_component__WEBPACK_IMPORTED_MODULE_13__.ProductVarientsListComponent
  }, {
    path: 'create/category',
    component: _components_category_category_component__WEBPACK_IMPORTED_MODULE_2__.CategoryComponent,
    data: {
      type: 'create'
    }
  }, {
    path: 'update/category/:id',
    component: _components_category_category_component__WEBPACK_IMPORTED_MODULE_2__.CategoryComponent,
    data: {
      type: 'update'
    }
  }, {
    path: 'list/category',
    component: _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_1__.CategoryListComponent
  }, {
    path: 'create/product-group',
    component: _components_product_group_product_group_component__WEBPACK_IMPORTED_MODULE_11__.ProductGroupComponent,
    data: {
      type: 'create'
    }
  }, {
    path: 'update/product-group/:id',
    component: _components_product_group_product_group_component__WEBPACK_IMPORTED_MODULE_11__.ProductGroupComponent,
    data: {
      type: 'update'
    }
  }, {
    path: 'list/product-group',
    component: _components_product_groups_list_product_groups_list_component__WEBPACK_IMPORTED_MODULE_12__.ProductGroupsListComponent
  }, {
    path: 'user-profile',
    component: _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_8__.MyProfileComponent
  }, {
    path: 'contact-requests',
    component: _components_contact_requests_contact_requests_component__WEBPACK_IMPORTED_MODULE_3__.ContactRequestsComponent
  }, {
    path: 'press-coverages',
    component: _components_press_coverages_press_coverages_component__WEBPACK_IMPORTED_MODULE_10__.PressCoveragesComponent
  }, {
    path: 'tech-testimonials',
    component: _components_tech_testimonials_tech_testimonials_component__WEBPACK_IMPORTED_MODULE_15__.TechTestimonialsComponent
  }, {
    path: 'offers-and-promotions',
    component: _components_offers_and_promotions_offers_and_promotions_component__WEBPACK_IMPORTED_MODULE_9__.OffersAndPromotionsComponent
  }, {
    path: 'home-slider',
    component: _components_home_slider_home_slider_component__WEBPACK_IMPORTED_MODULE_5__.HomeSliderComponent
  }, {
    path: 'terms-and-conditions',
    component: _components_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_16__.TermsAndConditionsComponent
  }, {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }]
}, {
  path: '**',
  redirectTo: '/login'
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/api.service */ 5830);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);





function AppComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-progress-spinner", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class AppComponent {
  constructor(api) {
    this.api = api;
    this.title = 'hisense-admin';
    this.isMenuCollapsed = true;
    this.isLoading = this.api.isLoading;
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 3,
  vars: 3,
  consts: [["class", "overlay", 4, "ngIf"], [1, "overlay"], ["color", "primary", "mode", "indeterminate", 1, "spinner"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AppComponent_div_0_Template, 2, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.isLoading));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__.MatProgressSpinner, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
  styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: auto;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n\n.progress-bar-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  width: 100%;\n  left: -10px;\n  z-index: 1030;\n}\n\n  .mat-progress-bar {\n  height: 3px !important;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(74, 74, 74, 0.8);\n  z-index: 99999;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n  .mat-progress-spinner circle, .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  stroke: #00b3ac !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vU2FpJTIwS2lyYW4vRG9jdW1lbnRzL2FkbWluLWhpc2Vuc2UvaGlzZW5zZS1hZG1pbi9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FESUE7RUFDSSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0RKOztBRElBO0VBQ0ksc0JBQUE7QUNESjs7QURLQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLHVDQUFBO0VBQ0EsY0FBQTtBQ0ZKOztBREtBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDRko7O0FES0E7RUFDSSwwQkFBQTtBQ0ZKIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnByb2dyZXNzLWJhciB7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICAgIC8vICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgLy8gICB0b3A6IDA7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1iYXItY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZWZ0OiAtMTBweDtcclxuICAgIHotaW5kZXg6IDEwMzA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXByb2dyZXNzLWJhciB7XHJcbiAgICBoZWlnaHQ6IDNweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyBsb2FkZXJcclxuLm92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc0LCA3NCwgNzQsIC44KTtcclxuICAgIHotaW5kZXg6IDk5OTk5O1xyXG59XHJcblxyXG4uc3Bpbm5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1zcGlubmVyIGNpcmNsZSwgLm1hdC1zcGlubmVyIGNpcmNsZSB7XHJcbiAgICBzdHJva2U6ICMwMGIzYWMgIWltcG9ydGFudDtcclxufSIsIi53cmFwcGVyIHtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ucHJvZ3Jlc3MtYmFyIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbi5wcm9ncmVzcy1iYXItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IC0xMHB4O1xuICB6LWluZGV4OiAxMDMwO1xufVxuXG46Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1iYXIge1xuICBoZWlnaHQ6IDNweCAhaW1wb3J0YW50O1xufVxuXG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NCwgNzQsIDc0LCAwLjgpO1xuICB6LWluZGV4OiA5OTk5OTtcbn1cblxuLnNwaW5uZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG46Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1zcGlubmVyIGNpcmNsZSwgLm1hdC1zcGlubmVyIGNpcmNsZSB7XG4gIHN0cm9rZTogIzAwYjNhYyAhaW1wb3J0YW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material.module */ 3806);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layout/layout.component */ 9520);
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ 9201);
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ 619);
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/products/products.component */ 697);
/* harmony import */ var _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/my-profile/my-profile.component */ 2429);
/* harmony import */ var _components_product_varients_list_product_varients_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/product-varients-list/product-varients-list.component */ 685);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 3252);
/* harmony import */ var _components_product_groups_list_product_groups_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/product-groups-list/product-groups-list.component */ 3717);
/* harmony import */ var _components_product_group_product_group_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/product-group/product-group.component */ 7995);
/* harmony import */ var _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/category-list/category-list.component */ 3438);
/* harmony import */ var _components_category_category_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/category/category.component */ 9053);
/* harmony import */ var _components_stats_card_stats_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/stats-card/stats-card.component */ 7298);
/* harmony import */ var _components_contact_requests_contact_requests_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/contact-requests/contact-requests.component */ 9164);
/* harmony import */ var _components_press_coverages_press_coverages_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/press-coverages/press-coverages.component */ 9831);
/* harmony import */ var _components_press_coverage_modal_press_coverage_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/press-coverage-modal/press-coverage-modal.component */ 6108);
/* harmony import */ var _components_tech_testimonials_tech_testimonials_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/tech-testimonials/tech-testimonials.component */ 5541);
/* harmony import */ var _components_tech_testimonials_modal_tech_testimonials_modal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/tech-testimonials-modal/tech-testimonials-modal.component */ 8144);
/* harmony import */ var _components_offers_and_promotions_offers_and_promotions_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/offers-and-promotions/offers-and-promotions.component */ 2157);
/* harmony import */ var _components_offers_and_promotions_modal_offers_and_promotions_modal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/offers-and-promotions-modal/offers-and-promotions-modal.component */ 5699);
/* harmony import */ var _components_home_slider_home_slider_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/home-slider/home-slider.component */ 6052);
/* harmony import */ var _components_home_slider_modal_home_slider_modal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/home-slider-modal/home-slider-modal.component */ 3027);
/* harmony import */ var _session_interceptor_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./session-interceptor.service */ 2904);
/* harmony import */ var _components_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/terms-and-conditions/terms-and-conditions.component */ 8048);
/* harmony import */ var _components_terms_and_conditions_modal_terms_and_conditions_modal_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/terms-and-conditions-modal/terms-and-conditions-modal.component */ 8603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ 2560);




































class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_29__.HTTP_INTERCEPTORS,
    useClass: _session_interceptor_service__WEBPACK_IMPORTED_MODULE_25__.LoaderInterceptor,
    multi: true
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_30__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__.NgbModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__.HttpClientModule,
  // MatInputModule,
  _angular_forms__WEBPACK_IMPORTED_MODULE_32__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.FormsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_33__.ToastrModule.forRoot({
    timeOut: 6000,
    positionClass: 'toast-top-right',
    preventDuplicates: true
  }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_34__.BrowserAnimationsModule, _material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialExampleModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__.LayoutComponent, _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__.SidebarComponent, _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__.DashboardComponent, _components_products_products_component__WEBPACK_IMPORTED_MODULE_7__.ProductsComponent, _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_8__.MyProfileComponent, _components_product_varients_list_product_varients_list_component__WEBPACK_IMPORTED_MODULE_9__.ProductVarientsListComponent, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__.NavbarComponent, _components_product_groups_list_product_groups_list_component__WEBPACK_IMPORTED_MODULE_11__.ProductGroupsListComponent, _components_product_group_product_group_component__WEBPACK_IMPORTED_MODULE_12__.ProductGroupComponent, _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_13__.CategoryListComponent, _components_category_category_component__WEBPACK_IMPORTED_MODULE_14__.CategoryComponent, _components_stats_card_stats_card_component__WEBPACK_IMPORTED_MODULE_15__.StatsCardComponent, _components_contact_requests_contact_requests_component__WEBPACK_IMPORTED_MODULE_16__.ContactRequestsComponent, _components_press_coverages_press_coverages_component__WEBPACK_IMPORTED_MODULE_17__.PressCoveragesComponent, _components_press_coverage_modal_press_coverage_modal_component__WEBPACK_IMPORTED_MODULE_18__.PressCoverageModalComponent, _components_tech_testimonials_tech_testimonials_component__WEBPACK_IMPORTED_MODULE_19__.TechTestimonialsComponent, _components_tech_testimonials_modal_tech_testimonials_modal_component__WEBPACK_IMPORTED_MODULE_20__.TechTestimonialsModalComponent, _components_offers_and_promotions_offers_and_promotions_component__WEBPACK_IMPORTED_MODULE_21__.OffersAndPromotionsComponent, _components_offers_and_promotions_modal_offers_and_promotions_modal_component__WEBPACK_IMPORTED_MODULE_22__.OffersAndPromotionsModalComponent, _components_home_slider_home_slider_component__WEBPACK_IMPORTED_MODULE_23__.HomeSliderComponent, _components_home_slider_modal_home_slider_modal_component__WEBPACK_IMPORTED_MODULE_24__.HomeSliderModalComponent, _components_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_26__.TermsAndConditionsComponent, _components_terms_and_conditions_modal_terms_and_conditions_modal_component__WEBPACK_IMPORTED_MODULE_27__.TermsAndConditionsModalComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_30__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__.NgbModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__.HttpClientModule,
    // MatInputModule,
    _angular_forms__WEBPACK_IMPORTED_MODULE_32__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.FormsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_33__.ToastrModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_34__.BrowserAnimationsModule, _material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialExampleModule]
  });
})();

/***/ }),

/***/ 2993:
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/api.service */ 5830);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class AuthGuard {
  constructor(api, router) {
    this.api = api;
    this.router = router;
  }
  canActivate(route, state) {
    const currentUser = this.api.getLocalStorage('currentUserSession');
    if (currentUser && currentUser.uuid && currentUser.uuid && currentUser.name === 'Hisense admin') {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) {
  return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AuthGuard,
  factory: AuthGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3438:
/*!*********************************************************************!*\
  !*** ./src/app/components/category-list/category-list.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryListComponent": () => (/* binding */ CategoryListComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);









function CategoryListComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Name. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CategoryListComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r14.name, " ");
  }
}
function CategoryListComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " View on website ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CategoryListComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22)(1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r15 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r3.environment.websiteUrl + element_r15.relative_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r3.environment.websiteUrl, "", element_r15.relative_url, "");
  }
}
function CategoryListComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CategoryListComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r16.code, " ");
  }
}
function CategoryListComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Product Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CategoryListComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r17.product.code, " ");
  }
}
function CategoryListComponent_th_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Variant Size ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CategoryListComponent_td_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r18.variant_size, " ");
  }
}
function CategoryListComponent_th_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a1) {
  return ["/update/category", a1];
};
function CategoryListComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22)(1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c0, element_r19.id));
  }
}
function CategoryListComponent_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 26);
  }
}
function CategoryListComponent_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 27);
  }
}
const _c1 = function () {
  return [50, 100, 200];
};
class CategoryListComponent {
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }
  constructor(api, toaster, location, router) {
    this.api = api;
    this.toaster = toaster;
    this.location = location;
    this.router = router;
    this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
    this.displayedColumns = ['name', 'code', 'View on website', 'Actions']; //'Product Code', 'size'
    this.isLoading = true;
    this.pageSize = 50;
    this.totalPages = 0;
  }
  ngOnInit() {
    this.getProductVarientList();
  }
  getProductVarientList(params = {
    page: 1,
    per_page: 50
  }) {
    this.api.getProductCategoryList(params).subscribe({
      next: res => {
        console.log(res);
        // this.dataSource = new MatTableDataSource<any>(res.data.data);
        this.dataSource = res.data.data;
        this.totalPages = res.data.total;
        // setTimeout(()=>{
        //   this.paginator.pageIndex = params.page - 1;
        //   this.paginator.length = res.data.total;
        // })
        // this.dataSource.paginator = this.paginator;
        this.isLoading = false;
      },
      error: err => {
        this.isLoading = false;
        console.log(err);
        this.toaster.error(err.error.message);
      }
    });
  }
  pageChanged(event) {
    console.log(event);
    this.pageSize = event.pageSize;
    this.getProductVarientList({
      page: event.pageIndex + 1,
      per_page: this.pageSize
    });
  }
  goBack() {
    this.location.back();
  }
}
CategoryListComponent.ɵfac = function CategoryListComponent_Factory(t) {
  return new (t || CategoryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};
CategoryListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CategoryListComponent,
  selectors: [["app-category-list"]],
  decls: 34,
  vars: 7,
  consts: [[1, "pb-1"], [1, "card"], [1, "card-header", "card-box-shadow", "bt-4"], [1, "card-title", "m-0", "font-weight-bold"], [1, "card-body"], [1, "w-100", "table-responsive"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "View on website"], ["matColumnDef", "code"], ["matColumnDef", "Product Code"], ["matColumnDef", "size"], ["matColumnDef", "Actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page", 3, "length", "pageSizeOptions", "pageSize", "page"], [1, "col-md-12", "border-top", "p-2", "button-container", "d-flex", "justify-content-between", "align-items-center"], [1, "forgot-link", 2, "color", "black", "cursor", "pointer", 3, "click"], [1, "fas", "fa-arrow-left"], ["mat-header-cell", ""], ["mat-cell", ""], ["target", "_blank", 3, "href"], ["matTooltip", "Edit Category", "matTooltipClass", "custom-tooltip", 3, "routerLink"], [1, "fas", "fa-2x", "fa-pen-square", 2, "font-size", "1.6em", "color", "#00b3ac"], ["mat-header-row", ""], ["mat-row", ""]],
  template: function CategoryListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Category List");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "table", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](8, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, CategoryListComponent_th_9_Template, 2, 0, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CategoryListComponent_td_10_Template, 2, 1, "td", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](11, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, CategoryListComponent_th_12_Template, 2, 0, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CategoryListComponent_td_13_Template, 3, 3, "td", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](14, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, CategoryListComponent_th_15_Template, 2, 0, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, CategoryListComponent_td_16_Template, 2, 1, "td", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](17, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, CategoryListComponent_th_18_Template, 2, 0, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, CategoryListComponent_td_19_Template, 2, 1, "td", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](20, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, CategoryListComponent_th_21_Template, 2, 0, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, CategoryListComponent_td_22_Template, 2, 1, "td", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](23, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, CategoryListComponent_th_24_Template, 2, 0, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, CategoryListComponent_td_25_Template, 3, 3, "td", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, CategoryListComponent_tr_26_Template, 1, 0, "tr", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, CategoryListComponent_tr_27_Template, 1, 0, "tr", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-paginator", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("page", function CategoryListComponent_Template_mat_paginator_page_28_listener($event) {
        return ctx.pageChanged($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 18)(30, "div")(31, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CategoryListComponent_Template_a_click_31_listener() {
        return ctx.goBack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " Go back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("length", ctx.totalPages)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c1))("pageSize", ctx.pageSize);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltip],
  styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yeS1saXN0L2NhdGVnb3J5LWxpc3QuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi9TYWklMjBLaXJhbi9Eb2N1bWVudHMvYWRtaW4taGlzZW5zZS9oaXNlbnNlLWFkbWluL3NyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yeS1saXN0L2NhdGVnb3J5LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9053:
/*!***********************************************************!*\
  !*** ./src/app/components/category/category.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryComponent": () => (/* binding */ CategoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
















const _c0 = ["inputMMultipleFiles"];
const _c1 = ["input"];
function CategoryComponent_a_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "(View on Website)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r0.environment.websiteUrl + ctx_r0.relativeUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function CategoryComponent_mat_error_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Category Code is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CategoryComponent_mat_error_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Category Name is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CategoryComponent_mat_option_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", product_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", product_r10.name, " ");
  }
}
function CategoryComponent_mat_error_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Product Category is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CategoryComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30)(1, "mat-slide-toggle", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Enable/Disable the category");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function CategoryComponent_mat_tab_36_th_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Product Group ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CategoryComponent_mat_tab_36_td_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r22.product.name, " ");
  }
}
function CategoryComponent_mat_tab_36_th_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Open on Website ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CategoryComponent_mat_tab_36_td_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 44)(1, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r23 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r14.environment.websiteUrl + element_r23.product.relative_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r14.environment.websiteUrl, "", element_r23.product.relative_url, "");
  }
}
function CategoryComponent_mat_tab_36_th_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Priority ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CategoryComponent_mat_tab_36_td_11_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const priority_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", priority_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", priority_r28, " ");
  }
}
function CategoryComponent_mat_tab_36_td_11_mat_hint_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Proority is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CategoryComponent_mat_tab_36_td_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 44)(1, "mat-form-field", 46)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-select", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CategoryComponent_mat_tab_36_td_11_Template_mat_select_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30);
      const element_r25 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](element_r25.priority = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CategoryComponent_mat_tab_36_td_11_mat_option_5_Template, 2, 2, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, CategoryComponent_mat_tab_36_td_11_mat_hint_6_Template, 2, 0, "mat-hint", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r25 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", element_r25.priority);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r16.priorities);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !element_r25.priority);
  }
}
function CategoryComponent_mat_tab_36_th_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c2 = function (a1) {
  return ["/update/product-group", a1];
};
function CategoryComponent_mat_tab_36_td_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c2, element_r31.product.id));
  }
}
function CategoryComponent_mat_tab_36_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 51);
  }
}
function CategoryComponent_mat_tab_36_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 52);
  }
}
function CategoryComponent_mat_tab_36_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No Records Found!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CategoryComponent_mat_tab_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-tab", 10)(1, "div", 32)(2, "table", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](3, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CategoryComponent_mat_tab_36_th_4_Template, 2, 0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CategoryComponent_mat_tab_36_td_5_Template, 2, 1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](6, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CategoryComponent_mat_tab_36_th_7_Template, 2, 0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CategoryComponent_mat_tab_36_td_8_Template, 3, 3, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](9, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CategoryComponent_mat_tab_36_th_10_Template, 2, 0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, CategoryComponent_mat_tab_36_td_11_Template, 7, 3, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](12, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CategoryComponent_mat_tab_36_th_13_Template, 2, 0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, CategoryComponent_mat_tab_36_td_14_Template, 2, 3, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, CategoryComponent_mat_tab_36_tr_15_Template, 1, 0, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, CategoryComponent_mat_tab_36_tr_16_Template, 1, 0, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, CategoryComponent_mat_tab_36_div_17_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "Product Groups");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx_r7.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx_r7.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx_r7.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r7.dataSource == null ? null : ctx_r7.dataSource.length));
  }
}
function CategoryComponent_mat_tab_37_th_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Image Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CategoryComponent_mat_tab_37_td_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r44.type, " ");
  }
}
function CategoryComponent_mat_tab_37_th_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Current Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CategoryComponent_mat_tab_37_td_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", element_r45.full_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function CategoryComponent_mat_tab_37_th_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Upload New Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CategoryComponent_mat_tab_37_td_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 44)(1, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CategoryComponent_mat_tab_37_td_14_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51);
      const i_r48 = restoredCtx.index;
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r50.browseFileButtonClicked(i_r48));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Browse Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 65, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CategoryComponent_mat_tab_37_td_14_Template_input_change_3_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51);
      const element_r47 = restoredCtx.$implicit;
      const i_r48 = restoredCtx.index;
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r52.inputChangeEventListener($event, element_r47.type, i_r48));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function CategoryComponent_mat_tab_37_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 51);
  }
}
function CategoryComponent_mat_tab_37_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 52);
  }
}
function CategoryComponent_mat_tab_37_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No Records Found!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CategoryComponent_mat_tab_37_i_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 67);
  }
}
const _c3 = function (a0) {
  return {
    "spiner": a0
  };
};
function CategoryComponent_mat_tab_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-tab", 10)(1, "div", 54)(2, "mat-tab-group", 55)(3, "mat-tab", 10)(4, "div", 56)(5, "table", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](6, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CategoryComponent_mat_tab_37_th_7_Template, 2, 0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CategoryComponent_mat_tab_37_td_8_Template, 2, 1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](9, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CategoryComponent_mat_tab_37_th_10_Template, 2, 0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, CategoryComponent_mat_tab_37_td_11_Template, 2, 1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](12, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CategoryComponent_mat_tab_37_th_13_Template, 2, 0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, CategoryComponent_mat_tab_37_td_14_Template, 5, 0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, CategoryComponent_mat_tab_37_tr_15_Template, 1, 0, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, CategoryComponent_mat_tab_37_tr_16_Template, 1, 0, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, CategoryComponent_mat_tab_37_div_17_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 60)(19, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CategoryComponent_mat_tab_37_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r55);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r54.uploadImages());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, CategoryComponent_mat_tab_37_i_21_Template, 1, 0, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selectedIndex", ctx_r8.imagesTabSelectedIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "Thumb Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx_r8.imagesDataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx_r8.imagesDisplayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx_r8.imagesDisplayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r8.imagesDataSource == null ? null : ctx_r8.imagesDataSource.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c3, ctx_r8.isLoader));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.isLoader);
  }
}
function CategoryComponent_button_43_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function CategoryComponent_button_43_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function CategoryComponent_button_43_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 67);
  }
}
const _c4 = function (a0) {
  return {
    "mr-2": a0
  };
};
function CategoryComponent_button_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CategoryComponent_button_43_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r60);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r59.saveProductDetailsForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CategoryComponent_button_43_ng_container_2_Template, 2, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CategoryComponent_button_43_ng_container_3_Template, 2, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CategoryComponent_button_43_i_4_Template, 1, 0, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c4, ctx_r9.isLoading));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.componentType == "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.componentType == "update");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.isLoading);
  }
}
class CategoryComponent {
  get formControl() {
    return this.productVarientForm.controls;
  }
  constructor(location, api, fb, toaster, activatedroute, router) {
    this.location = location;
    this.api = api;
    this.fb = fb;
    this.toaster = toaster;
    this.activatedroute = activatedroute;
    this.router = router;
    this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
    this.relativeUrl = '';
    this.products = [];
    this.purchaseLinksMetaData = [];
    this.componentType = 'create';
    this.selectedIndex = 0;
    this.purchaseLinks = {};
    this.displayedColumns = ['Product Group', 'Open on Website', 'priority', 'Actions']; //'Purchase Link'
    this.imagesDisplayedColumns = ['Image Type', 'Current Image', 'Upload New Image'];
    this.productImagesDisplayedColumns = ['Image', 'Actions'];
    this.priorities = [];
    this.isLoader = false;
    this.isLoading = false;
    this.productVarientFormSubmitted = false;
    this.productVarientForm = this.fb.group({
      code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      // variant_size: ['', [Validators.required]],
      parent_category_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      // short_description: ['', [Validators.required]],
      is_enabled: [0]
    });
    this.imagesCatalogMedia = [];
    this.myFiles = [];
    this.myFilesImages = [];
  }
  ngOnInit() {
    this.activatedroute.data.subscribe(data => {
      this.componentType = data.type;
      this.getMetaData(data);
    });
  }
  getMetaData(data) {
    this.api.getCategoryCreationMetaData().subscribe({
      next: res => {
        this.metaData = res?.data;
        this.products = [{
          id: 'null',
          name: 'No Category'
        }, ...res?.data?.categories];
        if (data.type == 'update') {
          this.loadProductInfo();
        }
      },
      error: err => {
        console.log(err);
        this.toaster.error(err.error.message);
      }
    });
  }
  loadProductInfo() {
    this.api.getCategoryInfo(this.activatedroute.snapshot.params['id']).subscribe({
      next: res => {
        // this.products = res?.data?.products;
        // this.purchaseLinksMetaData = this.metaData?.product_variant_purchase_link_vendors;
        // this.purchaseLinksMetaData.forEach((obj: any) => {
        //   this.purchaseLinks[obj.code] = res.data.product_variant_purchase_links.find((o: any) => o.vendor == obj.code)?.purchase_link;
        // })
        this.relativeUrl = res.data.relative_url;
        this.productVarientForm.patchValue({
          code: res?.data?.code,
          name: res?.data?.name,
          // variant_size: res?.data?.variant_size,
          parent_category_id: res?.data?.parent_category_id ? res?.data?.parent_category_id : 'null',
          // short_description: res?.data?.short_description,
          is_enabled: res?.data?.is_enabled
        });
        res.data.category_products = res.data?.category_products.map((obj, i) => {
          this.priorities.push(i + 1);
          return {
            ...obj,
            priority: i + 1
          };
        });
        // this.dataSource = new MatTableDataSource<any>(res?.data?.category_products);
        this.dataSource = res?.data?.category_products;
        const array = [];
        if (res.data.thumb_image) {
          res.data.thumb_image.type = 'Thumb Image';
          array.push(res.data.thumb_image);
        }
        if (res.data.thumb_image_medium) {
          res.data.thumb_image_medium.type = 'Thumb Image Medium';
          array.push(res.data.thumb_image_medium);
        }
        if (res.data.thumb_image_small) {
          res.data.thumb_image_small.type = 'Thumb Image Small';
          array.push(res.data.thumb_image_small);
        }
        // this.imagesDataSource = new MatTableDataSource<any>(array);
        this.imagesDataSource = array;
        // this.productImagesDataSource = new MatTableDataSource<any>(res.data.slider_images);
      },

      error: err => {
        console.log(err);
        this.toaster.error(err.error.message);
      }
    });
  }
  saveProductDetailsForm() {
    if (this.componentType === 'create') {
      this.productVarientForm.markAllAsTouched();
      this.productVarientFormSubmitted = true;
      if (!this.productVarientForm.valid) {
        return;
      }
      this.isLoading = true;
      delete this.productVarientForm.value.is_enabled;
      if (this.productVarientForm.value.parent_category_id == 'null') {
        this.productVarientForm.value.parent_category_id = null;
      }
      this.api.createCategory(this.productVarientForm.value).subscribe({
        next: res => {
          this.isLoading = false;
          this.toaster.success(res.message);
          this.router.navigate(['/update/category', res.data.id]);
        },
        error: err => {
          this.isLoading = false;
          console.log(err);
          this.toaster.error(err.error.message);
        }
      });
    } else {
      if (this.selectedIndex == 0) {
        this.productVarientForm.markAllAsTouched();
        this.productVarientFormSubmitted = true;
        if (!this.productVarientForm.valid) {
          return;
        }
        this.isLoading = true;
        if (this.productVarientForm.value.parent_category_id == 'null') {
          this.productVarientForm.value.parent_category_id = null;
        }
        this.productVarientForm.value.is_enabled = this.productVarientForm.value.is_enabled ? 1 : 0;
        this.api.updateCategoryInfo(this.activatedroute.snapshot.params['id'], this.productVarientForm.value).subscribe({
          next: res => {
            this.isLoading = false;
            this.toaster.success(res.message);
          },
          error: err => {
            this.isLoading = false;
            console.log(err);
            this.toaster.error(err.error.message);
          }
        });
      } else if (this.selectedIndex == 1) {
        this.isLoading = true;
        const data = this.dataSource?.data.map(obj => {
          return {
            id: obj.id,
            priority: obj.priority
          };
        });
        this.api.updateCategoryInfo(this.activatedroute.snapshot.params['id'], {
          category_products: data
        }).subscribe({
          next: res => {
            this.isLoading = false;
            this.toaster.success(res.message);
          },
          error: err => {
            this.isLoading = false;
            console.log(err);
            this.toaster.error(err.error.message);
          }
        });
      }
    }
  }
  changeTab(event) {
    this.selectedIndex = event.index;
    this.isLoading = false;
    this.productVarientFormSubmitted = false;
    // this.productVarientForm.reset();
    if (this.selectedIndex == 2) {
      this.imagesTabSelectedIndex = 1;
      setTimeout(() => {
        this.imagesTabSelectedIndex = 0;
      }, 100);
    }
  }
  browseFileButtonClicked(i) {
    // console.log(this.inputForFile[0]);
    // console.log(this.inputForFile[1]);
    this.inputForFile.forEach((a, index) => {
      if (i === index) {
        a.nativeElement.click();
      }
    });
  }
  inputChangeEventListener(event, type, i) {
    // console.log(i);
    // console.log(this.imagesDataSource);
    let mediaType = '';
    if (type == 'Thumb Image') {
      mediaType = 'thumb_image';
    } else if (type == 'Thumb Image Small') {
      mediaType = 'thumb_image_small';
    } else {
      mediaType = 'thumb_image_medium';
    }
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = _event => {
      this.imagesDataSource.data[i].full_url = reader.result;
    };
    this.imagesDataSource.data[i].media_type = mediaType;
    this.imagesDataSource.data[i].file = event.target.files[0];
  }
  uploadImages() {
    this.imagesCatalogMedia = [...this.imagesDataSource.data];
    // console.log(this.imagesCatalogMedia);
    // const catalog = [];
    this.imagesCatalogMedia = this.imagesCatalogMedia.filter(obj => obj.file && obj.media_type);
    console.log(this.imagesCatalogMedia);
    if (this.imagesCatalogMedia == 0) {
      this.toaster.error('Please modify files before uploading!');
      return;
    }
    let formData = new FormData();
    let index = 0;
    for (let obj of this.imagesCatalogMedia) {
      for (var key in obj) {
        formData.append(`catalog_media[${index}][${key}]`, obj[key]);
      }
      index++;
    }
    // for (var key1 of formData.entries()) {
    //   console.log(key1[0] + ', ' + key1[1]);
    // }
    // console.log(formData);
    this.api.uploadFiles(formData).subscribe({
      next: res => {
        this.toaster.success(res.message);
      },
      error: err => {
        console.log(err);
        this.toaster.error(err.error.message);
      }
    });
  }
  removeFile(ele) {
    swal({
      text: 'Are you sure you want to delete?',
      type: 'warning',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then(willDelete => {
      this.api.deleteFiles(ele.id).subscribe({
        next: res => {
          this.loadProductInfo();
          this.toaster.success(res.message);
        },
        error: err => {
          console.log(err);
          this.toaster.error(err.error.message);
        }
      });
    }, error => {});
  }
  browseMultipleFileButtonClicked() {
    this.inputMultipleFiles.nativeElement.click();
  }
  onFileChange(event) {
    for (let i = 0; i < event.target.files.length; i++) {
      this.myFiles.push({
        file: event.target.files[i],
        media_resource_type: 'product_variant',
        media_resource_id: this.activatedroute.snapshot.params['id'],
        media_type: 'slider_image'
      });
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[i]);
      reader.onload = _event => {
        this.myFilesImages.push(reader.result);
      };
    }
  }
  uploadMultipleImages() {
    const formData = new FormData();
    for (var i = 0; i < this.myFiles.length; i++) {
      for (var key in this.myFiles[i]) {
        formData.append(`catalog_media[${i}][${key}]`, this.myFiles[i][key]);
      }
    }
    this.api.uploadFiles(formData).subscribe({
      next: res => {
        this.toaster.success(res.message);
        this.loadProductInfo();
      },
      error: err => {
        console.log(err);
        this.toaster.error(err.error.message);
      }
    });
  }
  goBack() {
    this.location.back();
  }
}
CategoryComponent.ɵfac = function CategoryComponent_Factory(t) {
  return new (t || CategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
};
CategoryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CategoryComponent,
  selectors: [["app-category"]],
  viewQuery: function CategoryComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.inputMultipleFiles = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.inputForFile = _t);
    }
  },
  decls: 44,
  vars: 12,
  consts: [[1, "pb-1"], [1, "card"], [1, "card-header", "card-box-shadow", "bt-4", "d-flex", "align-items-center"], [1, "card-title", "m-0", "font-weight-bold"], ["style", "margin-left: 8px;", "target", "_blank", 3, "href", 4, "ngIf"], [1, "card-body"], [1, "row"], [1, "col-sm-12", "mt-3"], ["animationDuration", "0ms", 3, "selectedIndex", "selectedTabChange"], ["ctdTabset", ""], [3, "label"], [1, "row", "p-3"], [1, "col-md-12"], [3, "formGroup"], [1, "col-12", "col-sm-6", "col-md-6", "col-lg-3", "form-group"], ["appearance", "outline"], [1, "mat-label-field-padding"], ["matInput", "", "formControlName", "code", "type", "text"], [4, "ngIf"], ["matInput", "", "formControlName", "name", "type", "text"], ["formControlName", "parent_category_id"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "col-12 form-group", 4, "ngIf"], [3, "label", 4, "ngIf"], [1, "col-md-12", "mt-4", "border-top", "p-2", "button-container", "d-flex", "justify-content-between", "align-items-center"], [1, "forgot-link", 2, "color", "black", "cursor", "pointer", 3, "click"], [1, "fas", "fa-arrow-left"], ["mat-raised-button", "", "type", "submit", "class", "btn btn-info", "style", "display: flex; gap: 12px;", 3, "click", 4, "ngIf"], ["target", "_blank", 2, "margin-left", "8px", 3, "href"], [3, "value"], [1, "col-12", "form-group"], ["formControlName", "is_enabled", 1, "d-block", "example-margin"], [1, "w-100", "table-responsive"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "Product Group"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Open on Website"], ["matColumnDef", "priority"], ["matColumnDef", "Actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "text-center my-3", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", ""], ["target", "_blank", 3, "href"], ["appearance", "outline", 2, "max-width", "80px"], [3, "ngModel", "ngModelChange"], ["class", "error", 4, "ngIf"], [1, "error"], [1, "fas", "fa-2x", "fa-pen-square", "pointer", 2, "font-size", "1.6em", "color", "#00b3ac", 3, "routerLink"], ["mat-header-row", ""], ["mat-row", ""], [1, "text-center", "my-3"], [1, "m-3"], ["animationDuration", "0ms", 3, "selectedIndex"], [1, "w-100", "m-3", "table-responsive"], ["matColumnDef", "Image Type"], ["matColumnDef", "Current Image"], ["matColumnDef", "Upload New Image"], [1, "pt-1", "m-3"], ["mat-raised-button", "", "mat-button", "", "color", "primary", "type", "submit", 1, "btn-info", 2, "font-size", "16px", 3, "ngClass", "click"], ["class", "fas fa-circle-notch fa-spin ", 4, "ngIf"], ["width", "100", "height", "100", 1, "my-2", 3, "src"], ["href", "javascript:void(0);", 3, "click"], ["type", "file", "hidden", "", "accept", "image/png, image/jpeg, image/webp", 3, "change"], ["input", ""], [1, "fas", "fa-circle-notch", "fa-spin"], ["mat-raised-button", "", "type", "submit", 1, "btn", "btn-info", 2, "display", "flex", "gap", "12px", 3, "click"], [3, "ngClass"], ["class", "fas fa-circle-notch fa-spin", 4, "ngIf"]],
  template: function CategoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Categories");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CategoryComponent_a_5_Template, 2, 1, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "mat-tab-group", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectedTabChange", function CategoryComponent_Template_mat_tab_group_selectedTabChange_9_listener($event) {
        return ctx.changeTab($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-tab", 10)(12, "div", 11)(13, "div", 12)(14, "form", 13)(15, "div", 6)(16, "div", 14)(17, "mat-form-field", 15)(18, "mat-label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Category Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, CategoryComponent_mat_error_21_Template, 2, 0, "mat-error", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 14)(23, "mat-form-field", 15)(24, "mat-label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Category Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, CategoryComponent_mat_error_27_Template, 2, 0, "mat-error", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 14)(29, "mat-form-field", 15)(30, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Parent Category");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-select", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, CategoryComponent_mat_option_33_Template, 2, 2, "mat-option", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, CategoryComponent_mat_error_34_Template, 2, 0, "mat-error", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, CategoryComponent_div_35_Template, 3, 0, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, CategoryComponent_mat_tab_36_Template, 18, 5, "mat-tab", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, CategoryComponent_mat_tab_37_Template, 22, 11, "mat-tab", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 24)(39, "div")(40, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CategoryComponent_Template_a_click_40_listener() {
        return ctx.goBack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, " Go back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, CategoryComponent_button_43_Template, 5, 6, "button", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.relativeUrl);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selectedIndex", ctx.selectedIndex);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.productVarientForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.productVarientFormSubmitted || ctx.formControl["code"].errors && ctx.formControl["code"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.productVarientFormSubmitted || ctx.formControl["name"].errors && ctx.formControl["name"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.products);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.productVarientFormSubmitted || ctx.formControl["parent_category_id"].errors && ctx.formControl["parent_category_id"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.componentType == "update");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.componentType == "update");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.componentType == "update");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedIndex != 2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__.MatSlideToggle, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRow, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__.MatTabGroup],
  styles: ["input[type=file][_ngcontent-%COMP%] {\n  opacity: 0;\n  z-index: -1;\n  position: absolute;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uL1NhaSUyMEtpcmFuL0RvY3VtZW50cy9hZG1pbi1oaXNlbnNlL2hpc2Vuc2UtYWRtaW4vc3JjL2FwcC9jb21wb25lbnRzL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG50YWJsZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59IiwiaW5wdXRbdHlwZT1maWxlXSB7XG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IC0xO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9164:
/*!***************************************************************************!*\
  !*** ./src/app/components/contact-requests/contact-requests.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactRequestsComponent": () => (/* binding */ ContactRequestsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 5288);







function ContactRequestsComponent_th_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Customer Info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ContactRequestsComponent_td_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 20)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div")(4, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div")(7, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "mailto:", element_r10.email, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r10.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "tel:", element_r10.phone, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r10.phone);
  }
}
function ContactRequestsComponent_th_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Subject ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ContactRequestsComponent_td_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r11.subject, " ");
  }
}
function ContactRequestsComponent_th_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Body ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ContactRequestsComponent_td_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 20)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r12.body);
  }
}
function ContactRequestsComponent_th_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Created Time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ContactRequestsComponent_td_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r13.local_created_at, " ");
  }
}
function ContactRequestsComponent_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 23);
  }
}
function ContactRequestsComponent_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 24);
  }
}
const _c0 = function () {
  return [5, 10, 20, 50];
};
class ContactRequestsComponent {
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }
  constructor(api, toaster, location, router) {
    this.api = api;
    this.toaster = toaster;
    this.location = location;
    this.router = router;
    this.displayedColumns = ['Customer Info', 'Subject', 'Body', 'Created Time'];
    this.isLoading = true;
    this.pageSize = 50;
    this.totalPages = 0;
  }
  ngOnInit() {
    this.contactRequestList();
  }
  contactRequestList(params = {
    page: 1,
    per_page: 50
  }) {
    this.api.getContactRequests(params).subscribe({
      next: res => {
        console.log(res);
        // this.dataSource = new MatTableDataSource<any>(re s.data.data);
        this.dataSource = res.data.data;
        this.totalPages = res.data.total;
        // setTimeout(() => {
        //   this.paginator.pageIndex = params.page - 1;
        //   this.paginator.length = res.data.total;
        // })
        // this.dataSource.paginator = this.paginator;
        this.isLoading = false;
      },
      error: err => {
        this.isLoading = false;
        console.log(err);
        this.toaster.error(err.error.message);
      }
    });
  }
  pageChanged(event) {
    this.contactRequestList({
      page: event.pageIndex + 1,
      per_page: event.pageSize
    });
  }
  goBack() {
    this.location.back();
  }
}
ContactRequestsComponent.ɵfac = function ContactRequestsComponent_Factory(t) {
  return new (t || ContactRequestsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
ContactRequestsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ContactRequestsComponent,
  selectors: [["app-contact-requests"]],
  decls: 29,
  vars: 7,
  consts: [[1, "pb-1"], [1, "card"], [1, "card-header", "card-box-shadow", "bt-4"], [1, "card-title", "m-0", "font-weight-bold"], [1, "card-body"], [1, "w-100", "table-responsive"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "Customer Info"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Subject"], ["matColumnDef", "Body"], ["matColumnDef", "Created Time"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "length", "pageSizeOptions", "pageSize", "page"], [1, "col-md-12", "border-top", "p-2", "button-container", "d-flex", "justify-content-between", "align-items-center"], [1, "forgot-link", 2, "color", "black", "cursor", "pointer", 3, "click"], [1, "fas", "fa-arrow-left"], ["mat-header-cell", ""], ["mat-cell", ""], [3, "href"], [1, "my-3"], ["mat-header-row", ""], ["mat-row", ""]],
  template: function ContactRequestsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Contact Request List");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "table", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " \\ ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](9, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ContactRequestsComponent_th_10_Template, 2, 0, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ContactRequestsComponent_td_11_Template, 9, 5, "td", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](12, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ContactRequestsComponent_th_13_Template, 2, 0, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ContactRequestsComponent_td_14_Template, 2, 1, "td", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](15, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ContactRequestsComponent_th_16_Template, 2, 0, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ContactRequestsComponent_td_17_Template, 3, 1, "td", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](18, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ContactRequestsComponent_th_19_Template, 2, 0, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ContactRequestsComponent_td_20_Template, 2, 1, "td", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ContactRequestsComponent_tr_21_Template, 1, 0, "tr", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ContactRequestsComponent_tr_22_Template, 1, 0, "tr", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-paginator", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("page", function ContactRequestsComponent_Template_mat_paginator_page_23_listener($event) {
        return ctx.pageChanged($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 16)(25, "div")(26, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactRequestsComponent_Template_a_click_26_listener() {
        return ctx.goBack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Go back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("length", ctx.totalPages)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0))("pageSize", ctx.pageSize);
    }
  },
  dependencies: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRow],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 619:
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _stats_card_stats_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stats-card/stats-card.component */ 7298);



const _c0 = function () {
  return ["/list/category"];
};
const _c1 = function () {
  return ["/list/product-group"];
};
const _c2 = function () {
  return ["/list/product-varients"];
};
const _c3 = function () {
  return ["/contact-requests"];
};
const _c4 = function () {
  return ["/press-coverages"];
};
const _c5 = function () {
  return ["/tech-testimonials"];
};
const _c6 = function () {
  return ["/offers-and-promotions"];
};
const _c7 = function () {
  return ["/home-slider"];
};
class DashboardComponent {
  constructor() {}
  ngOnInit() {}
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
  return new (t || DashboardComponent)();
};
DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: DashboardComponent,
  selectors: [["app-dashboard"]],
  decls: 18,
  vars: 40,
  consts: [[1, "cards-container"], [1, "row"], [1, "col-md-4", "col-sm-6", "col-xs-12"], [1, "cursor-pointer", 3, "routerLink", "headerType", "cardIcon", "heading"], [1, "col-md-4", "col-sm-6", "col-xs-12", "cursor-pointer"]],
  template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "article", 1)(2, "article", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-stats-card", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "article", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-stats-card", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "article", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-stats-card", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "article", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "app-stats-card", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "article", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-stats-card", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "article", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "app-stats-card", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "article", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "app-stats-card", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "article", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "app-stats-card", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](32, _c0))("headerType", "card-header-warning")("cardIcon", "fas fa-users-cog")("heading", "Categories");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](33, _c1))("headerType", "card-header-success")("cardIcon", "fa fa-user-tie")("heading", "Product groups");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](34, _c2))("headerType", "card-header-rose")("cardIcon", "fas fa-bullhorn")("heading", "Products");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](35, _c3))("headerType", "card-header-contact-req")("cardIcon", "fa fa-plus")("heading", "Contact Requests");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](36, _c4))("headerType", "card-header-press")("cardIcon", "far fa-chart-bar")("heading", "Press coverages");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](37, _c5))("headerType", "card-header-drive")("cardIcon", "fab fa-google-drive")("heading", "Tech testimonials");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](38, _c6))("headerType", "card-header-offers")("cardIcon", "fa fa-credit-card")("heading", "Offers and promotions");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](39, _c7))("headerType", "card-header-invoice")("cardIcon", "fas fa-file-invoice")("heading", "Home Page Slides");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _stats_card_stats_card_component__WEBPACK_IMPORTED_MODULE_0__.StatsCardComponent],
  styles: [".dashboard-component-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.dashboard-component-container[_ngcontent-%COMP%]   .cards-container[_ngcontent-%COMP%]   .card-stats[_ngcontent-%COMP%]   .card-header.card-header-icon[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n.dashboard-component-container[_ngcontent-%COMP%]   .cards-container[_ngcontent-%COMP%]   .card-stats[_ngcontent-%COMP%]   .card-header.card-header-icon[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 26px !important;\n  line-height: 44px !important;\n  width: 44px !important;\n  height: 44px !important;\n}\n.dashboard-component-container[_ngcontent-%COMP%]   .cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vU2FpJTIwS2lyYW4vRG9jdW1lbnRzL2FkbWluLWhpc2Vuc2UvaGlzZW5zZS1hZG1pbi9zcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7QURDSTtFQUNFLFlBQUE7QUNDTjtBREFNO0VBQ0UsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNFUjtBREVJO0VBRUUsZUFBQTtBQ0ROIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZC1jb21wb25lbnQtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIFxyXG4gICAgLmNhcmRzLWNvbnRhaW5lciAuY2FyZC1zdGF0cyAuY2FyZC1oZWFkZXIuY2FyZC1oZWFkZXItaWNvbiAuY2FyZC1pY29uIHtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBpIHtcclxuICAgICAgICBmb250LXNpemU6IDI2cHggIWltcG9ydGFudDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiA0NHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC5jdXJzb3ItcG9pbnRlciBcclxuICAgIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBcclxuICAiLCIuZGFzaGJvYXJkLWNvbXBvbmVudC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmRhc2hib2FyZC1jb21wb25lbnQtY29udGFpbmVyIC5jYXJkcy1jb250YWluZXIgLmNhcmQtc3RhdHMgLmNhcmQtaGVhZGVyLmNhcmQtaGVhZGVyLWljb24gLmNhcmQtaWNvbiB7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5kYXNoYm9hcmQtY29tcG9uZW50LWNvbnRhaW5lciAuY2FyZHMtY29udGFpbmVyIC5jYXJkLXN0YXRzIC5jYXJkLWhlYWRlci5jYXJkLWhlYWRlci1pY29uIC5jYXJkLWljb24gaSB7XG4gIGZvbnQtc2l6ZTogMjZweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogNDRweCAhaW1wb3J0YW50O1xuICB3aWR0aDogNDRweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbn1cbi5kYXNoYm9hcmQtY29tcG9uZW50LWNvbnRhaW5lciAuY3Vyc29yLXBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3027:
/*!*****************************************************************************!*\
  !*** ./src/app/components/home-slider-modal/home-slider-modal.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeSliderModalComponent": () => (/* binding */ HomeSliderModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);













function HomeSliderModalComponent_mat_error_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Redirect Link is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function HomeSliderModalComponent_mat_error_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Redirect Link is invalid! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function HomeSliderModalComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21)(1, "div", 32)(2, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeSliderModalComponent_div_27_Template_i_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      ctx_r6.desktopthumbImage = null;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.UpdatedDesktopThumbImgFile = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r2.desktopthumbImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function HomeSliderModalComponent_mat_hint_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Desktop image is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function HomeSliderModalComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21)(1, "div", 32)(2, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeSliderModalComponent_div_39_Template_i_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      ctx_r8.mobileThumbImage = null;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.UpdatedMobileThumbImgFile = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r4.mobileThumbImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function HomeSliderModalComponent_mat_hint_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Mobile image is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class HomeSliderModalComponent {
  constructor(data, dialogRef, api, toaster, fb) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.api = api;
    this.toaster = toaster;
    this.fb = fb;
    this.isLoading = false;
    this.formSubmitted = false;
    // Validators.pattern(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/)
    this.form = this.fb.group({
      click_link: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      desktop_image: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      mobile_image: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      is_enabled: ['']
    });
  }
  ngOnInit() {}
  createPressCoverage() {
    this.formSubmitted = true;
    console.log(this.form.value);
    if (!this.form.valid) {
      return;
    }
    this.isLoading = true;
    const formData = new FormData();
    formData.append('click_link', this.form.value.click_link + '');
    formData.append('desktop_image', this.UpdatedDesktopThumbImgFile);
    formData.append('mobile_image', this.UpdatedMobileThumbImgFile);
    formData.append('is_enabled', this.form.value.is_enabled ? '1' : '0');
    this.api.createHomePageSlide(formData).subscribe({
      next: res => {
        console.log(res);
        this.dialogRef.close(true);
        this.isLoading = false;
      },
      error: err => {
        this.isLoading = false;
        console.log(err);
        this.toaster.error(err.error.message);
      }
    });
  }
  preview(event, device = 'mobile') {
    let files = event.target?.files;
    if (files.length === 0) return;
    let mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = _event => {
      console.log(device);
      if (device == 'desktop') {
        this.desktopthumbImage = reader.result;
        this.UpdatedDesktopThumbImgFile = files[0];
        this.form.controls.desktop_image.setValue(files[0]);
      } else {
        this.mobileThumbImage = reader.result;
        this.UpdatedMobileThumbImgFile = files[0];
        this.form.controls.mobile_image.setValue(files[0]);
      }
    };
  }
  get formControl() {
    return this.form.controls;
  }
}
HomeSliderModalComponent.ɵfac = function HomeSliderModalComponent_Factory(t) {
  return new (t || HomeSliderModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
};
HomeSliderModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HomeSliderModalComponent,
  selectors: [["app-home-slider-modal"]],
  decls: 51,
  vars: 8,
  consts: [[1, "modal-container"], [1, "header", "border-bottom"], ["mat-dialog-title", ""], [1, "close-icon", 3, "mat-dialog-close"], [1, "body"], [1, "mat-dialog"], [1, "row", "p-3"], [1, "col-12"], [3, "formGroup"], [1, "row"], [1, "col-12", "form-group"], ["appearance", "outline"], [1, "mat-label-field-padding"], ["matInput", "", "formControlName", "click_link", "type", "text"], [4, "ngIf"], [1, "col-12", "form-group", "my-3"], ["formControlName", "is_enabled", 1, "d-block", "example-margin"], [1, "col-md-12", "mt-4"], [1, "section-heading", "section-heading-not-first"], [1, "row", "col-12"], ["class", "col-12 mb-3", 4, "ngIf"], [1, "col-12", "mb-3"], ["id", "file-upload", "type", "file", "accept", "image/png, image/jpeg, image/webp", 1, "file-input", 3, "change"], ["mat-raised-button", "", "type", "button", 1, "file-upload-btn"], ["for", "file-upload"], ["class", "error", 4, "ngIf"], [1, "col-12", "mt-4"], ["id", "file-upload-mobile", "type", "file", "accept", "image/png, image/jpeg, image/webp", 1, "file-input", 3, "change"], ["for", "file-upload-mobile"], [1, "footer"], ["mat-raised-button", "", 1, "ml-3", "mb-3", 2, "color", "black !important", 3, "click"], [1, "btn", "btn-info", "ml-3", "mb-3", 3, "click"], [1, "logo-wrap"], ["aria-hidden", "true", 1, "fa", "fa-times", "fa-1x", 3, "click"], ["width", "100", "height", "100", 1, "logo-btn", 3, "src"], [1, "error"]],
  template: function HomeSliderModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Add a Home Page Slide");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "mat-dialog-content", 5)(8, "div", 6)(9, "div", 7)(10, "form", 8)(11, "div", 9)(12, "div", 10)(13, "mat-form-field", 11)(14, "mat-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Link");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, HomeSliderModalComponent_mat_error_17_Template, 2, 0, "mat-error", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, HomeSliderModalComponent_mat_error_18_Template, 2, 0, "mat-error", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15)(20, "mat-slide-toggle", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Enable/Disable the Home Page Slide ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 7)(23, "div", 17)(24, "h3", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Desktop Image ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, HomeSliderModalComponent_div_27_Template, 4, 1, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 21)(29, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HomeSliderModalComponent_Template_input_change_29_listener($event) {
        return ctx.preview($event, "desktop");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 23)(31, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Browse and upload Image for Desktop ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, HomeSliderModalComponent_mat_hint_33_Template, 2, 0, "mat-hint", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 7)(35, "div", 26)(36, "h3", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Mobile Image ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, HomeSliderModalComponent_div_39_Template, 4, 1, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 21)(41, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HomeSliderModalComponent_Template_input_change_41_listener($event) {
        return ctx.preview($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 23)(43, "label", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " Browse and upload Image for Mobile ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, HomeSliderModalComponent_mat_hint_45_Template, 2, 0, "mat-hint", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 29)(47, "button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeSliderModalComponent_Template_button_click_47_listener() {
        return ctx.dialogRef.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "button", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeSliderModalComponent_Template_button_click_49_listener() {
        return ctx.createPressCoverage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " Create ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formSubmitted || ctx.formControl["click_link"].errors && ctx.formControl["click_link"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formSubmitted || ctx.formControl["click_link"].errors && ctx.formControl["click_link"].errors["pattern"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.UpdatedDesktopThumbImgFile);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formSubmitted && ctx.formControl["desktop_image"].errors && ctx.formControl["desktop_image"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.UpdatedMobileThumbImgFile);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formSubmitted && ctx.formControl["mobile_image"].errors && ctx.formControl["mobile_image"].errors["required"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggle],
  styles: ["[_ngcontent-%COMP%]:root {\n  --primary: #00b3ac;\n  --white: #fff;\n  --black: #000;\n}\n\n.modal-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 10px;\n}\n\nh4[mat-dialog-title][_ngcontent-%COMP%] {\n  margin: 0 0 7px !important;\n}\n\n.subscription-card[_ngcontent-%COMP%] {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(27, 31, 35, 0.1) 0px 0px 0px 1px;\n  border-radius: 13px;\n}\n\n.plans-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n  gap: 25px;\n  margin: 15px 0;\n}\n\n.card-content[_ngcontent-%COMP%] {\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n  min-height: 270px;\n}\n\n.check-icon[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 36px;\n}\n\n.active-b[_ngcontent-%COMP%] {\n  border: 1px solid var(--primary);\n}\n\n.current-plan[_ngcontent-%COMP%] {\n  width: 100%;\n  color: var(--primary);\n  font-size: 16px;\n  font-weight: 400;\n  border-top-left-radius: 13px;\n  border-top-right-radius: 13px;\n  box-shadow: 0px 1px 3px var(--primary);\n}\n\n.recommended-plan[_ngcontent-%COMP%] {\n  mix-blend-mode: luminosity;\n}\n\n.planName[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 22px;\n  text-align: center;\n}\n\n.plan-price[_ngcontent-%COMP%] {\n  font-size: 38px;\n  text-align: center;\n}\n.plan-price[_ngcontent-%COMP%]   .fs-small[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.planDesc[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.mat-dialog[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n\n.features-heading[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px;\n  width: 100%;\n  border: none;\n  background: transparent;\n}\n.features-heading[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  background: #e7e0e0;\n  border-radius: 50%;\n}\n.features-heading[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]   .fa-caret-down[_ngcontent-%COMP%] {\n  font-size: 24px;\n  transform: rotate(-180deg);\n  transition: transform 250ms ease-in-out;\n}\n\n.collapsed[_ngcontent-%COMP%]   .fa-caret-down[_ngcontent-%COMP%] {\n  transform: rotate(0deg) !important;\n}\n\n@media screen and (max-width: 768px) {\n  .plans-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 1rem;\n  border-top: 1px solid rgba(0, 0, 0, 0.2);\n}\n\n.file-input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.file-upload-btn[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0;\n}\n.file-upload-btn[_ngcontent-%COMP%]   .mat-button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\n.file-upload-btn[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  cursor: pointer;\n  margin: 0;\n  padding: 12px;\n  background-color: var(--primary);\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9jb3JlL3RoZW1lcy9wcmltYXJ5LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi9TYWklMjBLaXJhbi9Eb2N1bWVudHMvYWRtaW4taGlzZW5zZS9oaXNlbnNlLWFkbWluL3NyYy9hcHAvY29tcG9uZW50cy9ob21lLXNsaWRlci1tb2RhbC9ob21lLXNsaWRlci1tb2RhbC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lLXNsaWRlci1tb2RhbC9ob21lLXNsaWRlci1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUNISjs7QUNESTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QURJUjs7QUNBQTtFQUNJLDBCQUFBO0FER0o7O0FDQUE7RUFDSSxxRkFBQTtFQUNBLG1CQUFBO0FER0o7O0FDQUE7RUFDSSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBREdKOztBQ0FBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBREdKOztBQ0FBO0VBQ0ksWUFBQTtBREdKOztBQ0FBO0VBQ0kscUJGeENZO0VFeUNaLGVBQUE7QURHSjs7QUNBQTtFQUNJLGdDQUFBO0FER0o7O0FDQUE7RUFDSSxXQUFBO0VBQ0EscUJGbERZO0VFbURaLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQ0FBQTtBREdKOztBQ0FBO0VBQ0ksMEJBQUE7QURHSjs7QUNBQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FER0o7O0FDQUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QURHSjtBQ0RJO0VBQ0ksZUFBQTtBREdSOztBQ0NBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURFSjs7QUNDQTtFQUNJLG9CQUFBO0FERUo7O0FDQ0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FERUo7QUNBSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBREVSO0FDQVE7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSx1Q0FBQTtBREVaOztBQ0lJO0VBQ0ksa0NBQUE7QUREUjs7QUNLQTtFQUNJO0lBQ0ksMEJBQUE7RURGTjtBQUNGO0FDS0E7RUFDSSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7QURISjs7QUNPQTtFQUNJLGFBQUE7QURKSjs7QUNPQTtFQUNJLGFBQUE7RUFDQSxVQUFBO0FESko7QUNNSTtFQUNJLGFBQUE7QURKUjtBQ09JO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxnQ0Z4SlE7RUV5SlIsdUJBQUE7QURMUiIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvci1wcmltYXJ5OiB2YXIoLS1wcmltYXJ5KTtcclxuJHdoaXRlLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiRibGFjay1jb2xvcjogdmFyKC0tYmxhY2spO1xyXG5cclxuOnJvb3R7XHJcbiAgICAtLXByaW1hcnk6ICMwMGIzYWM7XHJcbiAgICAtLXdoaXRlOiAjZmZmO1xyXG4gICAgLS1ibGFjazogIzAwMDtcclxufSIsIjpyb290IHtcbiAgLS1wcmltYXJ5OiAjMDBiM2FjO1xuICAtLXdoaXRlOiAjZmZmO1xuICAtLWJsYWNrOiAjMDAwO1xufVxuXG4ubW9kYWwtY29udGFpbmVyIC5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuXG5oNFttYXQtZGlhbG9nLXRpdGxlXSB7XG4gIG1hcmdpbjogMCAwIDdweCAhaW1wb3J0YW50O1xufVxuXG4uc3Vic2NyaXB0aW9uLWNhcmQge1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDFweCAzcHggMHB4LCByZ2JhKDI3LCAzMSwgMzUsIDAuMSkgMHB4IDBweCAwcHggMXB4O1xuICBib3JkZXItcmFkaXVzOiAxM3B4O1xufVxuXG4ucGxhbnMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMWZyKSk7XG4gIGdhcDogMjVweDtcbiAgbWFyZ2luOiAxNXB4IDA7XG59XG5cbi5jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIycHg7XG4gIG1pbi1oZWlnaHQ6IDI3MHB4O1xufVxuXG4uY2hlY2staWNvbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAzNnB4O1xufVxuXG4uYWN0aXZlLWIge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLmN1cnJlbnQtcGxhbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTNweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEzcHg7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IHZhcigtLXByaW1hcnkpO1xufVxuXG4ucmVjb21tZW5kZWQtcGxhbiB7XG4gIG1peC1ibGVuZC1tb2RlOiBsdW1pbm9zaXR5O1xufVxuXG4ucGxhbk5hbWUge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDIycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBsYW4tcHJpY2Uge1xuICBmb250LXNpemU6IDM4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wbGFuLXByaWNlIC5mcy1zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnBsYW5EZXNjIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5tYXQtZGlhbG9nIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5mZWF0dXJlcy1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmZlYXR1cmVzLWhlYWRpbmcgLmljb24td3JhcHBlciB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQ6ICNlN2UwZTA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5mZWF0dXJlcy1oZWFkaW5nIC5pY29uLXdyYXBwZXIgLmZhLWNhcmV0LWRvd24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5jb2xsYXBzZWQgLmZhLWNhcmV0LWRvd24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucGxhbnMtY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuLmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmZpbGUtaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZmlsZS11cGxvYWQtYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMDtcbn1cbi5maWxlLXVwbG9hZC1idG4gLm1hdC1idXR0b24td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZmlsZS11cGxvYWQtYnRuIGxhYmVsIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29yZS90aGVtZXMvcHJpbWFyeS5zY3NzXCI7XHJcblxyXG4ubW9kYWwtY29udGFpbmVyIHtcclxuICAgIC5oZWFkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbmg0W21hdC1kaWFsb2ctdGl0bGVdIHtcclxuICAgIG1hcmdpbjogMCAwIDdweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3Vic2NyaXB0aW9uLWNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAxcHggM3B4IDBweCwgcmdiYSgyNywgMzEsIDM1LCAwLjEpIDBweCAwcHggMHB4IDFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbn1cclxuXHJcbi5wbGFucy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDFmcikpO1xyXG4gICAgZ2FwOiAyNXB4O1xyXG4gICAgbWFyZ2luOiAxNXB4IDA7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAyMnB4O1xyXG4gICAgbWluLWhlaWdodDogMjcwcHg7XHJcbn1cclxuXHJcbi5jaGVjay1pY29uIHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbn1cclxuXHJcbi5hY3RpdmUtYiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItcHJpbWFyeTtcclxufVxyXG5cclxuLmN1cnJlbnQtcGxhbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxM3B4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEzcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDNweCB2YXIoLS1wcmltYXJ5KTtcclxufVxyXG5cclxuLnJlY29tbWVuZGVkLXBsYW4ge1xyXG4gICAgbWl4LWJsZW5kLW1vZGU6IGx1bWlub3NpdHk7XHJcbn1cclxuXHJcbi5wbGFuTmFtZSB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucGxhbi1wcmljZSB7XHJcbiAgICBmb250LXNpemU6IDM4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgLmZzLXNtYWxsIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wbGFuRGVzYyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ubWF0LWRpYWxvZyB7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZlYXR1cmVzLWhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgLmljb24td3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlN2UwZTA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cclxuICAgICAgICAuZmEtY2FyZXQtZG93biB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBlYXNlLWluLW91dDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb2xsYXBzZWQge1xyXG4gICAgLmZhLWNhcmV0LWRvd24ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpIHtcclxuICAgIC5wbGFucy1jb250YWluZXIge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG5cclxuLmZpbGUtaW5wdXQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmZpbGUtdXBsb2FkLWJ0biB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAubWF0LWJ1dHRvbi13cmFwcGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG5cclxuICAgIGxhYmVsIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6052:
/*!*****************************************************************!*\
  !*** ./src/app/components/home-slider/home-slider.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeSliderComponent": () => (/* binding */ HomeSliderComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _home_slider_modal_home_slider_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home-slider-modal/home-slider-modal.component */ 3027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);

















function HomeSliderComponent_th_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Link ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HomeSliderComponent_td_14_mat_hint_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-hint", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Redirect Link is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HomeSliderComponent_td_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-form-field", 27)(3, "mat-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HomeSliderComponent_td_14_Template_input_ngModelChange_5_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      const element_r16 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](element_r16.click_link = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, HomeSliderComponent_td_14_mat_hint_6_Template, 2, 0, "mat-hint", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", element_r16.click_link);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !element_r16.click_link);
  }
}
function HomeSliderComponent_th_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Desktop Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HomeSliderComponent_td_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", element_r20.desktop_image_full_url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function HomeSliderComponent_th_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Mobile Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HomeSliderComponent_td_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", element_r21.mobile_image_full_url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function HomeSliderComponent_th_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Priority ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HomeSliderComponent_td_23_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const priority_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", priority_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", priority_r25, " ");
  }
}
function HomeSliderComponent_td_23_mat_hint_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-hint", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Proority is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HomeSliderComponent_td_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 26)(1, "mat-form-field", 33)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HomeSliderComponent_td_23_Template_mat_select_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27);
      const element_r22 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](element_r22.priority = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, HomeSliderComponent_td_23_mat_option_5_Template, 2, 2, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, HomeSliderComponent_td_23_mat_hint_6_Template, 2, 0, "mat-hint", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r22 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", element_r22.priority);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r7.priorities);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !element_r22.priority);
  }
}
function HomeSliderComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Enable / Disable ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HomeSliderComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 26)(1, "mat-slide-toggle", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HomeSliderComponent_td_26_Template_mat_slide_toggle_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30);
      const element_r28 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](element_r28.is_enabled = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", element_r28.is_enabled);
  }
}
function HomeSliderComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HomeSliderComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 26)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeSliderComponent_td_29_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33);
      const element_r31 = restoredCtx.$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r32.deleteItem(element_r31));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltip", "Delete File");
  }
}
function HomeSliderComponent_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 40);
  }
}
function HomeSliderComponent_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 41);
  }
}
function HomeSliderComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No record found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HomeSliderComponent_i_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 43);
  }
}
const _c0 = function (a0) {
  return {
    "mr-2": a0
  };
};
class HomeSliderComponent {
  // @ViewChild(MatPaginator) paginator: any;
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }
  constructor(api, toaster, location, modal) {
    this.api = api;
    this.toaster = toaster;
    this.location = location;
    this.modal = modal;
    this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
    this.displayedColumns = ['Link', 'desktop image', 'mobile image', 'priority', 'is_enabled', 'Actions'];
    // pageSize = 50;
    this.isLoading = false;
    this.priorities = [];
  }
  ngOnInit() {
    this.getHomePageSlides();
  }
  getHomePageSlides() {
    this.api.getHomePageSlides().subscribe({
      next: res => {
        console.log(res);
        res.data = res.data.map((obj, i) => {
          // obj.click_link = environment.websiteUrl + obj.click_link;
          this.priorities.push(i + 1);
          return {
            ...obj
          };
        });
        // this.dataSource = new MatTableDataSource<any>(res.data);
        this.dataSource = res.data;
        // setTimeout(() => {
        //   this.paginator.pageIndex = params.page - 1;
        //   this.paginator.length = res.data.length;
        // })
        // this.dataSource.paginator = this.paginator;
        this.isLoading = false;
      },
      error: err => {
        this.isLoading = false;
        console.log(err);
        this.toaster.error(err.error.message);
      }
    });
  }
  deleteItem(el) {
    swal({
      text: 'Are you sure you want to delete?',
      type: 'warning',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then(willDelete => {
      console.log(el);
      this.api.deleteHomePageSlide(el.id).subscribe({
        next: res => {
          console.log(res);
          this.isLoading = false;
          this.toaster.success(res.message);
          this.getHomePageSlides();
        },
        error: err => {
          this.isLoading = false;
          console.log(err);
          this.toaster.error(err.error.message);
        }
      });
    }, error => {});
  }
  openSubscriptionModal() {
    const dailogRef = this.modal.open(_home_slider_modal_home_slider_modal_component__WEBPACK_IMPORTED_MODULE_1__.HomeSliderModalComponent, {
      width: "500px",
      panelClass: "switcher-panel",
      data: {}
    });
    dailogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getHomePageSlides();
      }
    });
  }
  // pageChanged(event: any) {
  //   this.getPressCoverages({ page: event.pageIndex + 1, per_page: event.pageSize })
  // }
  updateHomeSlider() {
    this.isLoading = true;
    console.log(this.dataSource.data);
    const body = this.dataSource.data.map(obj => {
      return {
        id: obj.id,
        click_link: obj.click_link,
        is_enabled: obj.is_enabled ? 1 : 0,
        priority: obj.priority
      };
    });
    console.log(body);
    this.api.updateHomeSlider({
      home_page_slides: body
    }).subscribe({
      next: res => {
        console.log(res);
        this.getHomePageSlides();
        this.toaster.success(res.message);
        this.isLoading = false;
      },
      error: err => {
        this.isLoading = false;
        console.log(err);
        this.toaster.error(err.error.message);
      }
    });
  }
  goBack() {
    this.location.back();
  }
}
HomeSliderComponent.ɵfac = function HomeSliderComponent_Factory(t) {
  return new (t || HomeSliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog));
};
HomeSliderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: HomeSliderComponent,
  selectors: [["app-home-slider"]],
  decls: 43,
  vars: 8,
  consts: [[1, "card"], [1, "card-header", "card-box-shadow", "bt-4", "d-flex", "justify-content-between", "p-3"], [1, "card-title", "m-0", "float-left", "font-weight-bold"], [1, "d-flex", "justify-content-end"], ["matTooltip", "Add a New Home Slide", "matTooltipClass", "custom-tooltip", 1, "pr-3", "card-header-icon", "pointer", 3, "click"], [1, "card-body"], [1, "w-100", "table-responsive"], ["mat-table", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "Link"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "desktop image"], ["matColumnDef", "mobile image"], ["matColumnDef", "priority"], ["matColumnDef", "is_enabled"], ["matColumnDef", "Actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "text-center py-2 no-record", 4, "ngIf"], [1, "col-md-12", "mt-3", "border-top", "p-2", "button-container", "d-flex", "justify-content-between", "align-items-center"], [1, "forgot-link", 2, "color", "black", "cursor", "pointer", 3, "click"], [1, "fas", "fa-arrow-left"], ["mat-raised-button", "", "type", "submit", 1, "btn", "btn-info", 3, "click"], [3, "ngClass"], ["class", "fas fa-circle-notch fa-spin", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", ""], ["appearance", "outline"], [1, "mat-label-field-padding"], ["matInput", "", "type", "text", 3, "ngModel", "ngModelChange"], ["class", "error", 4, "ngIf"], [1, "error"], ["width", "100", "height", "100", 1, "my-3", 3, "src"], ["appearance", "outline", 2, "max-width", "80px"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "d-block", "example-margin", 2, "max-width", "max-content", "margin", "auto", 3, "ngModel", "ngModelChange"], ["matTooltipClass", "custom-tooltip", 1, "pointer", 3, "matTooltip", "click"], [1, "fas", "fa-2x", "fa-trash-alt", 2, "font-size", "1.6em", "color", "#c41414"], ["mat-header-row", ""], ["mat-row", ""], [1, "text-center", "py-2", "no-record"], [1, "fas", "fa-circle-notch", "fa-spin"]],
  template: function HomeSliderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "div", 1)(3, "h4", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Home Page Slides List ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3)(6, "div")(7, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeSliderComponent_Template_mat_icon_click_7_listener() {
        return ctx.openSubscriptionModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "table", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](12, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, HomeSliderComponent_th_13_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, HomeSliderComponent_td_14_Template, 7, 2, "td", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](15, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, HomeSliderComponent_th_16_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, HomeSliderComponent_td_17_Template, 2, 1, "td", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](18, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, HomeSliderComponent_th_19_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, HomeSliderComponent_td_20_Template, 2, 1, "td", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](21, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, HomeSliderComponent_th_22_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, HomeSliderComponent_td_23_Template, 7, 3, "td", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](24, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, HomeSliderComponent_th_25_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, HomeSliderComponent_td_26_Template, 2, 1, "td", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](27, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, HomeSliderComponent_th_28_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, HomeSliderComponent_td_29_Template, 3, 1, "td", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, HomeSliderComponent_tr_30_Template, 1, 0, "tr", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, HomeSliderComponent_tr_31_Template, 1, 0, "tr", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, HomeSliderComponent_div_32_Template, 2, 0, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 19)(34, "div")(35, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeSliderComponent_Template_a_click_35_listener() {
        return ctx.goBack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, " Go back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeSliderComponent_Template_button_click_38_listener() {
        return ctx.updateHomeSlider();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Update");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, HomeSliderComponent_i_42_Template, 1, 0, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.dataSource == null ? null : ctx.dataSource.length));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c0, ctx.isLoading));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatHint, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__.MatSlideToggle, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRow, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltip],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9520:
/*!*******************************************************!*\
  !*** ./src/app/components/layout/layout.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sidebar/sidebar.component */ 9201);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ 3252);





const _c0 = function (a0) {
  return {
    "transform": a0
  };
};
const _c1 = function (a0) {
  return {
    "block": a0
  };
};
const _c2 = function (a0, a1) {
  return {
    "rotate-180": a0,
    "flex": a1
  };
};
const _c3 = function (a0) {
  return {
    "main-100": a0
  };
};
class LayoutComponent {
  constructor() {
    this.isSidebarVisible = true;
    this.sidebarStatus = 'translateX(0)';
    this.innerWidth = window.innerWidth;
  }
  onResize(event) {
    this.innerWidth = event.target.innerWidth;
  }
  ngOnInit() {}
  toggleSidebar() {
    if (this.isSidebarVisible) {
      this.sidebarStatus = 'translateX(-235px)';
    } else {
      this.sidebarStatus = 'translateX(0)';
    }
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
  return new (t || LayoutComponent)();
};
LayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: LayoutComponent,
  selectors: [["app-layout"]],
  hostBindings: function LayoutComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function LayoutComponent_resize_HostBindingHandler($event) {
        return ctx.onResize($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    }
  },
  decls: 11,
  vars: 13,
  consts: [[1, "wrapper"], ["data-color", "white", "data-background-color", "white", 1, "sidebar", 3, "ngStyle"], [1, "sidebar-backdrop", 3, "ngClass"], [1, "left-arrow", 3, "ngClass", "click"], [1, "fa", "fa-angle-double-left"], [1, "main-panel", 3, "ngClass"], [1, "main-content", "my-4"], [1, "container-fluid"]],
  template: function LayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LayoutComponent_Template_div_click_3_listener() {
        return ctx.toggleSidebar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-sidebar");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "app-navbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6)(9, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, ctx.innerWidth >= 991 ? ctx.sidebarStatus : null));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c1, ctx.innerWidth >= 991 && ctx.sidebarStatus == "translateX(-235px)"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](8, _c2, ctx.innerWidth >= 991 && ctx.sidebarStatus == "translateX(-235px)", ctx.innerWidth >= 991));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c3, ctx.innerWidth >= 991 && ctx.sidebarStatus === "translateX(-235px)"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent],
  styles: [".sidebar[_ngcontent-%COMP%]:after, .off-canvas-sidebar[_ngcontent-%COMP%]:after {\n  background: rgba(255, 255, 255, 0.9) !important;\n}\n\n.content-panel[_ngcontent-%COMP%] {\n  background-color: #fff;\n  box-shadow: 0 0 15px #aaa;\n  padding: 15px;\n  margin: 5rem 2rem 2rem;\n  margin-top: 25px;\n  border-radius: 4px;\n  min-height: calc(100vh - 3rem);\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  transition: transform 250ms ease-in-out;\n  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n}\n\n.main-100[_ngcontent-%COMP%] {\n  width: calc(100% - 25px) !important;\n}\n\n.block[_ngcontent-%COMP%] {\n  display: block !important;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n\n.sidebar-backdrop[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  background-color: white;\n}\n\n.left-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -14px;\n  top: 15px;\n  padding: 6px;\n  background: white;\n  cursor: pointer;\n  border-radius: 50%;\n  display: none;\n  justify-content: center;\n  align-items: center;\n  z-index: 99999;\n  border: 1px solid #555;\n  transition: transform 250ms ease-in-out;\n}\n\n.fa.fa-angle-double-left[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.left-arrow.rotate-180[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n[_ngcontent-%COMP%]:root {\n  --primary: #00b3ac;\n  --white: #fff;\n  --black: #000;\n}\n\n.side-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.side-wrapper[_ngcontent-%COMP%]   .logo-icon-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  align-items: center;\n  justify-content: flex-start;\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n}\n.side-wrapper[_ngcontent-%COMP%]   .logo-icon-container[_ngcontent-%COMP%]   .links-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.side-wrapper[_ngcontent-%COMP%]   .logo-icon-container[_ngcontent-%COMP%]   .links-wrapper[_ngcontent-%COMP%]   .links-wrapper-link[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 13px;\n  font-weight: 400;\n}\n.side-wrapper[_ngcontent-%COMP%]   .logo-icon-container[_ngcontent-%COMP%]   .company-logo-name[_ngcontent-%COMP%] {\n  max-height: 100px;\n  height: 80px;\n  display: flex;\n  align-items: center;\n}\n.side-wrapper[_ngcontent-%COMP%]   .logo-icon-container[_ngcontent-%COMP%]   .switch-company-btn-container[_ngcontent-%COMP%] {\n  max-height: 100px;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.side-wrapper[_ngcontent-%COMP%]   .logo-icon-container[_ngcontent-%COMP%]   .switch-company-btn-container[_ngcontent-%COMP%]   .company-name-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n.side-wrapper[_ngcontent-%COMP%]   .logo-icon-container[_ngcontent-%COMP%]   .switch-company-btn-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  position: absolute;\n  right: 10px;\n  top: 0;\n  bottom: 0;\n}\n.side-wrapper[_ngcontent-%COMP%]   .logo-icon-container[_ngcontent-%COMP%]   .switch-company-btn-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: 18px;\n}\n.side-wrapper[_ngcontent-%COMP%]   .logo-icon-container[_ngcontent-%COMP%]   .switch-company-btn-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .switch-company-btn[_ngcontent-%COMP%] {\n  background-color: #17a1bf;\n  border-radius: 3px;\n  padding: 5px;\n  font-size: 14px;\n  color: #3C4858;\n  font-weight: 400;\n  margin-left: 0;\n  height: 30px;\n}\n.side-wrapper[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%] {\n  width: auto;\n  max-height: inherit;\n}\n.side-wrapper[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  max-height: 70px;\n  object-fit: cover;\n}\n.side-wrapper[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .side-wrapper[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .side-wrapper[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-weight: 400;\n  margin-right: 0;\n}\n.side-wrapper[_ngcontent-%COMP%]   li.switch-view.activeChild.nav-item[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  bottom: 70px;\n  padding-bottom: 20px;\n  background: white;\n  z-index: 1;\n}\n.side-wrapper[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 16px;\n  font-weight: 500;\n  color: #666666;\n  max-width: 134px;\n}\n.side-wrapper[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.jump-to-btn[_ngcontent-%COMP%] {\n  color: white !important;\n  background: var(--primary) !important;\n}\n.jump-to-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: white !important;\n}\n.jump-to-btn[_ngcontent-%COMP%]:hover {\n  background: var(--primary) !important;\n}\n\n.sidebar-wrapper[_ngcontent-%COMP%] {\n  flex: 1 1 0;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 0;\n  margin-bottom: 35px;\n}\n\n.thaut-logo[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  width: 100%;\n  justify-content: center;\n  background: white;\n  z-index: 1;\n  bottom: 0px;\n  padding: 15px;\n  gap: 10px;\n  align-items: center;\n  border-bottom: 5px solid var(--primary);\n}\n.thaut-logo[_ngcontent-%COMP%]   .powered[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-bottom: 8px;\n}\n.thaut-logo[_ngcontent-%COMP%]   .plan-type[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  right: 15px;\n  background: var(--primary);\n  color: white;\n  padding: 8px;\n  padding-top: 3px;\n  border-top-left-radius: 6px;\n  padding-bottom: 0;\n  border-top-right-radius: 6px;\n  font-size: 12px;\n  cursor: pointer;\n}\n.thaut-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: auto;\n  max-height: 35px !important;\n  filter: contrast(0);\n}\n.thaut-logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.nav[_ngcontent-%COMP%] {\n  flex: 1 1 0;\n  overflow-y: scroll;\n}\n.nav[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 15px !important;\n}\n\n.logo[_ngcontent-%COMP%] {\n  padding: 0px 0px 10px !important;\n}\n\n@media (max-width: 768px) {\n  .thaut-logo[_ngcontent-%COMP%] {\n    position: fixed;\n  }\n}\n.sidebar-premium-service-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: block;\n  top: 0;\n  left: 0;\n  position: absolute;\n}\n\n.premium-star-icon-child[_ngcontent-%COMP%] {\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  margin: 10px 15px 0;\n  width: calc(100% - 15px);\n  position: relative;\n  cursor: pointer;\n}\n\n.premium-lock-wrapper[_ngcontent-%COMP%] {\n  right: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.premium-lock-wrapper[_ngcontent-%COMP%]   .premium-lock-icon[_ngcontent-%COMP%] {\n  left: 50% !important;\n  transform: translate(-50%, -50%) !important;\n}\n\n.renew-subscription[_ngcontent-%COMP%] {\n  background: url(\"/assets/svgs/renew-subscription.svg\") no-repeat;\n  height: 20px !important;\n  width: 20px !important;\n}\n\n.view-accounts[_ngcontent-%COMP%], .view-users[_ngcontent-%COMP%] {\n  background: url(\"/assets/svgs/view-accounts.svg\") no-repeat;\n  height: 20px !important;\n  width: 20px !important;\n}\n\n.sentiment-analysis[_ngcontent-%COMP%] {\n  background: url(\"/assets/svgs/sentiment-analysis.svg\") no-repeat;\n  height: 20px !important;\n  width: 20px !important;\n}\n\n.qr-generator-icon[_ngcontent-%COMP%] {\n  background: url(\"/assets/svgs/qr.svg\") no-repeat;\n  height: 20px !important;\n  width: 20px !important;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  height: 100vh;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 2;\n  width: 260px;\n  background: var(--white);\n}\n.sidebar[_ngcontent-%COMP%]   .caret[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-top: 4px solid\\9 ;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n}\n.sidebar[data-background-color=black][_ngcontent-%COMP%] {\n  background-color: #191919;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%] {\n  width: 35px;\n  display: block;\n  max-height: 30px;\n  margin-left: 13px;\n  margin-right: 15px;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 35px;\n  top: 16px;\n  position: absolute;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%] {\n  width: 260px;\n  z-index: 4;\n  padding-bottom: 30px;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-backdrop[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .navbar-form[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: none;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .navbar-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  font-size: 1.7em;\n  height: 36px;\n  width: 78%;\n  padding-left: 17px;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]    > .nav[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]    > .nav[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .sidebar-normal[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .sidebar-normal[_ngcontent-%COMP%] {\n  margin: 0;\n  position: relative;\n  transform: translateX(0px);\n  opacity: 1;\n  white-space: nowrap;\n  display: block;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]    > .nav[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .sidebar-mini[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .sidebar-mini[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  width: 30px;\n  margin-right: 15px;\n  text-align: center;\n  letter-spacing: 1px;\n  position: relative;\n  float: left;\n  display: inherit;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]    > .nav[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 17px;\n  line-height: 20px;\n  width: 26px;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-tim[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  border: 1px solid #333;\n  display: block;\n  height: 61px;\n  width: 61px;\n  float: left;\n  overflow: hidden;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-tim[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n}\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: block;\n}\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .caret[_ngcontent-%COMP%] {\n  margin-top: 13px;\n  position: absolute;\n  right: 20px;\n}\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\n  background-color: transparent;\n  outline: none;\n}\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child    > a[_ngcontent-%COMP%] {\n  margin: 0 15px;\n}\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    > [data-toggle=collapse][_ngcontent-%COMP%] {\n  background-color: rgba(200, 200, 200, 0.2);\n  color: var(--black);\n  box-shadow: none;\n}\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]    > [data-toggle=collapse][_ngcontent-%COMP%] {\n  background-color: rgba(200, 200, 200, 0.2);\n  color: white;\n  box-shadow: none;\n}\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]    > [data-toggle=collapse][_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #a9afbb;\n}\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--white);\n}\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i.active[_ngcontent-%COMP%] {\n  color: var(--white);\n}\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li.separator[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li.separator[_ngcontent-%COMP%]:after {\n  width: calc(100% - 30px);\n  content: \"\";\n  position: absolute;\n  height: 1px;\n  left: 15px;\n  background-color: rgba(180, 180, 180, 0.3);\n}\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li.separator[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  margin-top: 31px;\n}\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 30px;\n  font-size: 14px;\n  display: block;\n  height: auto;\n  white-space: nowrap;\n  text-align: start;\n}\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  float: left;\n  margin-right: 15px;\n  width: 30px;\n  text-align: center;\n  color: #a9afbb;\n}\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 10px 15px 0;\n  border-radius: 3px;\n  color: var(--black);\n  padding-left: 10px;\n  padding-right: 10px;\n  text-transform: capitalize;\n  font-size: 13px;\n  padding: 10px 15px;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-background[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  height: 100%;\n  width: 100%;\n  display: block;\n  top: 0;\n  left: 0;\n  background-size: cover;\n  background-position: center center;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-background[_ngcontent-%COMP%]:after {\n  position: absolute;\n  z-index: 3;\n  width: 100%;\n  height: 100%;\n  content: \"\";\n  display: block;\n  background: #FFFFFF;\n  opacity: 0.93;\n}\n.sidebar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  padding: 15px 0px;\n  margin: 0;\n  display: block;\n  position: relative;\n  z-index: 4;\n}\n.sidebar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  right: 15px;\n  height: 1px;\n  width: calc(100% - 30px);\n  background-color: rgba(180, 180, 180, 0.3);\n}\n.sidebar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 20px;\n  margin: 10px 10px;\n  color: var(--white);\n  line-height: 20px;\n}\n.sidebar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .simple-text[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  padding: 10px 0;\n  display: inline-block;\n  font-size: 18px;\n  color: var(--black);\n  white-space: nowrap;\n  font-weight: normal;\n  line-height: 30px;\n  overflow: hidden;\n  text-align: center;\n  display: block;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-tim[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  border: 1px solid #333;\n  display: block;\n  height: 61px;\n  width: 61px;\n  float: left;\n  overflow: hidden;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-tim[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n}\n\n.off-canvas-sidebar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .off-canvas-sidebar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: var(--white);\n  margin: 0 15px;\n}\n.off-canvas-sidebar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus, .off-canvas-sidebar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  background: rgba(200, 200, 200, 0.2);\n}\n\n.main-panel[_ngcontent-%COMP%] {\n  position: relative;\n  float: right;\n  width: calc(100% - 260px);\n}\n.main-panel[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n  min-height: calc(100vh - 123px);\n}\n.main-panel[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #e7e7e7;\n}\n.main-panel[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.main-panel[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.main-panel[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.perfect-scrollbar-on[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%], .perfect-scrollbar-on[_ngcontent-%COMP%]   .main-panel[_ngcontent-%COMP%] {\n  height: 100%;\n  max-height: 100%;\n}\n\n.sidebar[_ngcontent-%COMP%], .main-panel[_ngcontent-%COMP%], .sidebar-wrapper[_ngcontent-%COMP%] {\n  transition-property: top, bottom, width;\n  transition-duration: 0.2s, 0.2s, 0.35s;\n  transition-timing-function: linear, linear, ease;\n  -webkit-overflow-scrolling: touch;\n}\n\n.visible-on-sidebar-regular[_ngcontent-%COMP%] {\n  display: inline-block !important;\n}\n\n.visible-on-sidebar-mini[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n@media (min-width: 991px) {\n  .sidebar-mini[_ngcontent-%COMP%]   .visible-on-sidebar-regular[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .sidebar-mini[_ngcontent-%COMP%]   .visible-on-sidebar-mini[_ngcontent-%COMP%] {\n    display: inline-block !important;\n  }\n  .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%], .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%] {\n    width: 80px;\n  }\n  .sidebar-mini[_ngcontent-%COMP%]   .main-panel[_ngcontent-%COMP%] {\n    width: calc(100% - 80px);\n  }\n  .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n    display: block;\n    font-weight: 200;\n    z-index: 9999;\n  }\n  .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   a.logo-normal[_ngcontent-%COMP%] {\n    opacity: 0;\n  }\n  .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]    > .nav[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .sidebar-normal[_ngcontent-%COMP%], .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .sidebar-normal[_ngcontent-%COMP%], .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]    > .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    opacity: 0;\n  }\n  .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]:hover {\n    width: 260px;\n  }\n  .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]:hover   .logo[_ngcontent-%COMP%]   a.logo-normal[_ngcontent-%COMP%] {\n    opacity: 1;\n  }\n  .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]:hover   .sidebar-wrapper[_ngcontent-%COMP%] {\n    width: 260px;\n  }\n  .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]:hover   .sidebar-wrapper[_ngcontent-%COMP%]    > .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]:hover   .sidebar-wrapper[_ngcontent-%COMP%]    > .nav[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .sidebar-normal[_ngcontent-%COMP%], .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]:hover   .sidebar-wrapper[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .sidebar-normal[_ngcontent-%COMP%], .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]:hover   .sidebar-wrapper[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    opacity: 1;\n  }\n  .sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-item.active-pro[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100%;\n    bottom: 13px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vU2FpJTIwS2lyYW4vRG9jdW1lbnRzL2FkbWluLWhpc2Vuc2UvaGlzZW5zZS1hZG1pbi9zcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9jb3JlL3RoZW1lcy9wcmltYXJ5LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7O0VBRUUsK0NBQUE7QUNERjs7QURJQTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBRUEsOEJBQUE7QUNGRjs7QURLQTtFQUNFLHVDQUFBO0VBQ0EsdUhBQUE7QUNGRjs7QURLQTtFQUNFLG1DQUFBO0FDRkY7O0FES0E7RUFDRSx5QkFBQTtBQ0ZGOztBREtBO0VBQ0Usd0JBQUE7QUNGRjs7QURLQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0ZGOztBRE1BO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUNBQUE7QUNIRjs7QURNQTtFQUNFLGVBQUE7QUNIRjs7QURNQTtFQUNFLHlCQUFBO0FDSEY7O0FDL0RBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBRGtFSjs7QURFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNDRjtBRENFO0VBRUUsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbURBQUE7QUNBSjtBRENJO0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNBTjtBREVNO0VBRUUscUJFaEdRO0VGaUdSLGVBQUE7RUFDQSxnQkFBQTtBQ0RSO0FES0k7RUFFRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNKTjtBRE9JO0VBRUUsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNOTjtBRE9PO0VBRUUsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7QUNOVDtBRFFRO0VBRUcsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtBQ1BYO0FEUU07RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ1BSO0FEU007RUFFRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ1JSO0FEYUU7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUNYSjtBRFlJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNWUjtBRGNFOztFQUVFLGdCQUFBO0VBQ0EsZUFBQTtBQ1pKO0FEY0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUNaSjtBRGNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ1pKO0FEYUk7RUFDRSxrQkFBQTtBQ1hOOztBRGdCQTtFQUVFLHVCQUFBO0VBQ0EscUNBQUE7QUNkRjtBRGVHO0VBRUMsdUJBQUE7QUNkSjtBRGlCRTtFQUNBLHFDQUFBO0FDZkY7O0FEd0JBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNyQkY7O0FEMEJBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFFQSx1Q0FBQTtBQ3hCRjtBRHlCRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ3ZCSjtBRDBCRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFFQSwwQkVsUFk7RUZtUFosWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDekJKO0FENEJFO0VBQ0UsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUMxQko7QUQ2QkU7RUFDRSxnQkFBQTtBQzNCSjs7QUQ4QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUMzQkY7QUQ0QkU7RUFDRSxzQkFBQTtBQzFCSjs7QUQ2QkE7RUFDRSxnQ0FBQTtBQzFCRjs7QUQ2QkE7RUFNRTtJQUVFLGVBQUE7RUNoQ0Y7QUFDRjtBRG1DQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7QUNqQ0Y7O0FEb0NBO0VBQ0UsUUFBQTtFQUNBLDJCQUFBO0FDakNGOztBRG9DQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNqQ0Y7O0FEb0NBO0VBQ0UsVUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ2pDRjtBRGtDRTtFQUNFLG9CQUFBO0VBQ0EsMkNBQUE7QUNoQ0o7O0FEb0NBO0VBQ0UsZ0VBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FDakNGOztBRG9DQTtFQUNFLDJEQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQ2pDRjs7QURvQ0E7RUFDRSxnRUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUNqQ0Y7O0FEb0NBO0VBQ0UsZ0RBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FDakNGOztBRHFDQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7QUNsQ0Y7O0FEcUNBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esd0JFcFdZO0FEa1VkO0FEcUNFO0VBQ0UscUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBQ25DSjtBRHNDRTtFQUNJLHlCQUFBO0FDcENOO0FEc0NFO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNwQ047QURzQ007RUFDSSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDcENWO0FEdUNFO0VBSUksWUFBQTtFQUNBLFVBQUE7RUFFQSxvQkFBQTtBQ3pDTjtBRDJDTTtFQUNJLHdCQUFBO0FDekNWO0FENENNO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDMUNWO0FENENRO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDMUNWO0FEaURjOztFQUNJLHFCQUFBO0FDOUNsQjtBRGtEYzs7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUMvQ2xCO0FEbURjOztFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDaERsQjtBRG1EYzs7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDaERsQjtBRHNERTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNwRE47QURzRE07RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ3BEVjtBRHdERTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQ3RETjtBRHdETTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDdERWO0FEMkRZO0VBRUksNkJBQUE7RUFDQSxhQUFBO0FDMURoQjtBRDhEVTtFQUNJLGNBQUE7QUM1RGQ7QUQrRFU7RUFHSSwwQ0FBQTtFQUNBLG1CRTNlQTtFRjRlQSxnQkFBQTtBQy9EZDtBRGtFVTtFQUNJLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDaEVkO0FEb0VjO0VBQ0ksY0FBQTtBQ2xFbEI7QURzRVk7RUFFRSxtQkU5ZkE7QUR5YmQ7QUR3RVk7RUFDRyxtQkVsZ0JEO0FENGJkO0FENkVVO0VBQ0ksY0FBQTtBQzNFZDtBRDZFYztFQUNJLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSwwQ0FBQTtBQzNFbEI7QUQ4RWM7RUFDSSxnQkFBQTtBQzVFbEI7QURpRk07RUFDSSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBRUEsY0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDaEZWO0FEbUZNO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNqRlY7QURxRkU7O0VBRU0sbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CRW5qQk07RUZvakJOLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ25GUjtBRHVGRTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtBQ3JGTjtBRHVGTTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNyRlY7QUR5RkU7RUFDSSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDdkZOO0FEeUZNO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQ0FBQTtBQ3ZGVjtBRDJGTTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkUxbUJJO0VGMm1CSixpQkFBQTtBQ3pGVjtBRDRGTTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CRWxuQkk7RUZtbkJKLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDMUZWO0FEOEZFO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQzVGTjtBRDhGTTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDNUZWOztBRDRKTTs7RUFFSSxtQkUxc0JJO0VGMnNCSixjQUFBO0FDekpWO0FENEpNOztFQUVJLG9DQUFBO0FDMUpWOztBRGdLQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDN0pGO0FEZ0tHO0VBQ0csaUJBQUE7RUFDQSwrQkFBQTtBQzlKTjtBRGlLRztFQUNHLDZCQUFBO0FDL0pOO0FEa0tHO0VBQ0csZ0JBQUE7QUNoS047QURtS0U7RUFDSSxtQkFBQTtBQ2pLTjtBRG1LTTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUNqS1Y7O0FEdUtFOztFQUVJLFlBQUE7RUFDQSxnQkFBQTtBQ3BLTjs7QUR5S0E7OztFQUlFLHVDQUFBO0VBRUEsc0NBQUE7RUFFQSxnREFBQTtFQUNBLGlDQUFBO0FDdEtGOztBRHlLQTtFQUNFLGdDQUFBO0FDdEtGOztBRHdLQTtFQUNFLHdCQUFBO0FDcktGOztBRHdLQTtFQUVNO0lBQ0ksd0JBQUE7RUN0S1I7RUR3S0k7SUFDSSxnQ0FBQTtFQ3RLUjtFRHlLSTs7SUFFSSxXQUFBO0VDdktSO0VEMEtJO0lBQ0ksd0JBQUE7RUN4S1I7RUQyS0k7SUFDSSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxhQUFBO0VDektSO0VENEtZO0lBQ0ksVUFBQTtFQzFLaEI7RURnTFk7Ozs7SUFLSSxVQUFBO0VDL0toQjtFRG9MSTtJQUNJLFlBQUE7RUNsTFI7RURxTFk7SUFDSSxVQUFBO0VDbkxoQjtFRHdMUTtJQUNJLFlBQUE7RUN0TFo7RUR3TFk7Ozs7SUFLSSxVQUFBO0VDdkxoQjtFRCtMSTtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUM3TE47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvcmUvdGhlbWVzL3ByaW1hcnkuc2Nzcyc7XHJcblxyXG4uc2lkZWJhcjphZnRlcixcclxuLm9mZi1jYW52YXMtc2lkZWJhcjphZnRlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb250ZW50LXBhbmVsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4ICNhYWE7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IDVyZW0gMnJlbSAycmVtO1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIC8vIGhlaWdodDogY2FsYygxMDB2aCAtIDNyZW0pO1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzcmVtKTtcclxufVxyXG5cclxuLnNpZGViYXJ7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0O1xyXG4gIGJveC1zaGFkb3c6IDAgMTZweCAzOHB4IC0xMnB4IHJnYigwIDAgMCAvIDU2JSksIDAgNHB4IDI1cHggMCByZ2IoMCAwIDAgLyAxMiUpLCAwIDhweCAxMHB4IC01cHggcmdiKDAgMCAwIC8gMjAlKTtcclxufVxyXG5cclxuLm1haW4tMTAwIHtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMjVweCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJsb2Nre1xyXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4e1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNpZGViYXItYmFja2Ryb3B7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuLmxlZnQtYXJyb3d7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAtMTRweDtcclxuICB0b3A6IDE1cHg7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHotaW5kZXg6IDk5OTk5O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1NTU7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uZmEuZmEtYW5nbGUtZG91YmxlLWxlZnR7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4ubGVmdC1hcnJvdy5yb3RhdGUtMTgwIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG59XHJcblxyXG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29yZS90aGVtZXMvcHJpbWFyeS5zY3NzXCI7XHJcblxyXG4uc2lkZS13cmFwcGVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAubG9nby1pY29uLWNvbnRhaW5lclxyXG4gIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMS45NXB4IDEuOTVweCAyLjZweDtcclxuICAgIC5saW5rcy13cmFwcGVyXHJcbiAgICB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgLmxpbmtzLXdyYXBwZXItbGlua1xyXG4gICAgICB7XHJcbiAgICAgICAgY29sb3I6JGNvbG9yLXByaW1hcnk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29tcGFueS1sb2dvLW5hbWUgXHJcbiAgICB7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnN3aXRjaC1jb21wYW55LWJ0bi1jb250YWluZXJcclxuICAgIHtcclxuICAgICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAuY29tcGFueS1uYW1lLXdyYXBwZXJcclxuICAgICAgIHtcclxuICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgIH1cclxuICAgICAgICAuaWNvbiBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgIC5lZGl0LWljb25cclxuICAgICAge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMThweDtcclxuICAgICAgfVxyXG4gICAgICAuc3dpdGNoLWNvbXBhbnktYnRuXHJcbiAgICAgIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMWJmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDsgXHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjojM0M0ODU4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAgICAgIH1cclxuICB9XHJcbiAgLmxvZ28taW1nIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubmF2IGxpIGEsLm5hdiBsaSBidXR0b25cclxuICAubmF2IGxpIC5kcm9wZG93bi1tZW51IGEsLm5hdiBsaSAuZHJvcGRvd24tbWVudSBidXR0b24ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcbiAgbGkuc3dpdGNoLXZpZXcuYWN0aXZlQ2hpbGQubmF2LWl0ZW0ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3R0b206IDcwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgLmNvbXBhbnktbmFtZSB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgbWF4LXdpZHRoOiAxMzRweDtcclxuICAgIGkge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG59XHJcbi5qdW1wLXRvLWJ0blxyXG57XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLXByaW1hcnkgIWltcG9ydGFudDs7XHJcbiAgIGkgXHJcbiAge1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVye1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvci1wcmltYXJ5ICFpbXBvcnRhbnQ7XHJcbn1cclxuICBcclxufVxyXG5cclxuXHJcbi8vIC5sb2dvdXQge1xyXG4vLyAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4vLyB9XHJcbi5zaWRlYmFyLXdyYXBwZXIge1xyXG4gIGZsZXg6IDEgMSAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG4gIC8vICY6Oi13ZWJraXQtc2Nyb2xsYmFye1xyXG4gIC8vICAgd2lkdGg6IDE1cHggIWltcG9ydGFudDtcclxuICAvLyB9XHJcbn1cclxuLnRoYXV0LWxvZ28ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBnYXA6IDEwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvLyBib3gtc2hhZG93OiByZ2JhKDAsMCwwLDAuMjUpIDFweCAwIDNweCAwLCByZ2JhKDAsMCwwLDAuMjUpIDAgMCAyLjZweCAwO1xyXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAkY29sb3ItcHJpbWFyeTtcclxuICAucG93ZXJlZCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG5cclxuICAucGxhbi10eXBle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0cHg7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIC8vIGJhY2tncm91bmQ6ICM5OTZmMDU7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItcHJpbWFyeTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICBpbWd7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcclxuICAgIGZpbHRlcjogY29udHJhc3QoMCk7XHJcbiAgfVxyXG5cclxuICBzcGFue1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbn1cclxuLm5hdntcclxuICBmbGV4OiAxIDEgMDtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXJ7XHJcbiAgICB3aWR0aDogMTVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4ubG9nbyB7XHJcbiAgcGFkZGluZzogMHB4IDBweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjc2OHB4KVxyXG57XHJcbiAgLy8gLmxvZ291dHtcclxuICAvLyAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gIC8vIH1cclxuXHJcbiAgLnRoYXV0LWxvZ29cclxuICB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgfVxyXG59XHJcblxyXG4uc2lkZWJhci1wcmVtaXVtLXNlcnZpY2UtY29udGFpbmVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5wcmVtaXVtLXN0YXItaWNvbi1jaGlsZHtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbi5uYXYtbGlua3tcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgbWFyZ2luOiAxMHB4IDE1cHggMDtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMTVweCk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnByZW1pdW0tbG9jay13cmFwcGVye1xyXG4gIHJpZ2h0OiA1cHg7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIC5wcmVtaXVtLWxvY2staWNvbntcclxuICAgIGxlZnQ6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5yZW5ldy1zdWJzY3JpcHRpb24ge1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvc3Zncy9yZW5ldy1zdWJzY3JpcHRpb24uc3ZnXCIpIG5vLXJlcGVhdDtcclxuICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcclxuICB3aWR0aDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udmlldy1hY2NvdW50cywgLnZpZXctdXNlcnMge1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvc3Zncy92aWV3LWFjY291bnRzLnN2Z1wiKSBuby1yZXBlYXQ7XHJcbiAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlbnRpbWVudC1hbmFseXNpcyB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9zdmdzL3NlbnRpbWVudC1hbmFseXNpcy5zdmdcIikgbm8tcmVwZWF0O1xyXG4gIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5xci1nZW5lcmF0b3ItaWNvbiB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9zdmdzL3FyLnN2Z1wiKSBuby1yZXBlYXQ7XHJcbiAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi53cmFwcGVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLnNpZGViYXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMjtcclxuICB3aWR0aDogMjYwcHg7XHJcbiAgYmFja2dyb3VuZDogJHdoaXRlLWNvbG9yO1xyXG4gIC8vIEBpbmNsdWRlIHNoYWRvdy1iaWcoKTtcclxuXHJcbiAgLmNhcmV0e1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGJvcmRlci10b3A6IDRweCBkYXNoZWQ7XHJcbiAgICBib3JkZXItdG9wOiA0cHggc29saWRcXDk7XHJcbiAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAmW2RhdGEtYmFja2dyb3VuZC1jb2xvcj1cImJsYWNrXCJde1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5O1xyXG4gIH1cclxuICAubG9nby1pbWd7XHJcbiAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWF4LWhlaWdodDogMzBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEzcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuXHJcbiAgICAgIGltZ3tcclxuICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgdG9wOiAxNnB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIC5zaWRlYmFyLXdyYXBwZXJ7XHJcbiAgICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgLy8gaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTU2cHgpO1xyXG4gICAgICAvLyBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgIHdpZHRoOiAyNjBweDtcclxuICAgICAgei1pbmRleDogNDtcclxuXHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG5cclxuICAgICAgLmRyb3Bkb3duIC5kcm9wZG93bi1iYWNrZHJvcHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm5hdmJhci1mb3Jte1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbiAgICAgICAgLmlucHV0LWdyb3VwIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS43ZW07XHJcbiAgICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgICB3aWR0aDogNzglO1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxN3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgPiAubmF2LFxyXG4gICAgICAudXNlciAudXNlci1pbmZve1xyXG4gICAgICAgICAgW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0gfiBkaXYgPiB1bCA+IGxpID4gYXtcclxuICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgIC8vIEBleHRlbmQgLmFuaW1hdGlvbi10cmFuc2l0aW9uLWdlbmVyYWw7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAuc2lkZWJhci1ub3JtYWx7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLnNpZGViYXItbWluaXtcclxuICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgaXtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICAubG9nby10aW17XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGhlaWdodDogNjFweDtcclxuICAgICAgd2lkdGg6IDYxcHg7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgaW1ne1xyXG4gICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIC5uYXZ7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICAgLmNhcmV0e1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTNweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsaXtcclxuICAgICAgICAgID4gYXtcclxuICAgICAgICAgICAgJjpob3ZlcixcclxuICAgICAgICAgICAgJjpmb2N1c3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6Zmlyc3QtY2hpbGQgPiBhe1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCAxNXB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6aG92ZXIgPiBhLFxyXG4gICAgICAgICAgJiAuZHJvcGRvd24tbWVudSBhOmhvdmVyLFxyXG4gICAgICAgICAgJiAuZHJvcGRvd24tbWVudSBhOmZvY3VzID4gW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl17XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjIpO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkYmxhY2stY29sb3I7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYWN0aXZlID4gW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl17XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjIpO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICYuYWN0aXZlID4gW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl17XHJcbiAgICAgICAgICAgICAgaXtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICNhOWFmYmI7ICBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLmFjdGl2ZSA+IGEsXHJcbiAgICAgICAgICAmLmFjdGl2ZSA+IGEgaXtcclxuICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlLWNvbG9yIDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuYWN0aXZlID4gYSBpLmFjdGl2ZXtcclxuICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZS1jb2xvciA7XHJcbiAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgICAgJi5zZXBhcmF0b3J7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDA7XHJcblxyXG4gICAgICAgICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICAgICAgICAgICAgbGVmdDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODAsMTgwLDE4MCwgLjMpO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgJiArIGxpIHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzFweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpe1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGNvbG9yOiAjYTlhZmJiO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICAubmF2IGxpIGEsXHJcbiAgLm5hdiBsaSAuZHJvcGRvd24tbWVudSBhe1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAxNXB4IDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIGNvbG9yOiAkYmxhY2stY29sb3I7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICB9XHJcblxyXG5cclxuICAuc2lkZWJhci1iYWNrZ3JvdW5ke1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcblxyXG4gICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgICAgIG9wYWNpdHk6IC45MztcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgLmxvZ297XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMHB4O1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHotaW5kZXg6IDQ7XHJcblxyXG4gICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICByaWdodDogMTVweDtcclxuICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODAsMTgwLDE4MCwgLjMpO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgcHtcclxuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHg7XHJcbiAgICAgICAgICBjb2xvcjogJHdoaXRlLWNvbG9yO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zaW1wbGUtdGV4dHtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICBjb2xvcjogJGJsYWNrLWNvbG9yO1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgLmxvZ28tdGlte1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBoZWlnaHQ6IDYxcHg7XHJcbiAgICAgIHdpZHRoOiA2MXB4O1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgIGltZ3tcclxuICAgICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gJltkYXRhLWJhY2tncm91bmQtY29sb3I9XCJibGFja1wiXXtcclxuICAvLyAgICAgQGluY2x1ZGUgc2lkZWJhci1iYWNrZ3JvdW5kLWNvbG9yKCRncmF5LWJhc2UsICR3aGl0ZS1jb2xvcik7XHJcblxyXG4gIC8vICAgICAubmF2IGxpIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVte1xyXG4gIC8vICAgICAgIGNvbG9yOiAkd2hpdGUtY29sb3I7XHJcbiAgLy8gICAgIH1cclxuICAvLyB9XHJcblxyXG4gIC8vICZbZGF0YS1jb2xvcj1cInB1cnBsZVwiXXtcclxuICAvLyAgICAgQGluY2x1ZGUgc2V0LWJhY2tncm91bmQtY29sb3ItYnV0dG9uKCRicmFuZC1wcmltYXJ5KTtcclxuICAvLyB9XHJcbiAgLy8gJltkYXRhLWNvbG9yPVwiYXp1cmVcIl17XHJcbiAgLy8gICAgIEBpbmNsdWRlIHNldC1iYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbigkYnJhbmQtaW5mbyk7XHJcbiAgLy8gfVxyXG4gIC8vICZbZGF0YS1jb2xvcj1cImdyZWVuXCJde1xyXG4gIC8vICAgICBAaW5jbHVkZSBzZXQtYmFja2dyb3VuZC1jb2xvci1idXR0b24oJGJyYW5kLXN1Y2Nlc3MpO1xyXG4gIC8vIH1cclxuICAvLyAmW2RhdGEtY29sb3I9XCJvcmFuZ2VcIl17XHJcbiAgLy8gICAgIEBpbmNsdWRlIHNldC1iYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbigkYnJhbmQtd2FybmluZyk7XHJcbiAgLy8gfVxyXG4gIC8vICZbZGF0YS1jb2xvcj1cImRhbmdlclwiXXtcclxuICAvLyAgICAgQGluY2x1ZGUgc2V0LWJhY2tncm91bmQtY29sb3ItYnV0dG9uKCRicmFuZC1kYW5nZXIpO1xyXG4gIC8vIH1cclxuICAvLyAmW2RhdGEtY29sb3I9XCJyb3NlXCJde1xyXG4gIC8vICAgICBAaW5jbHVkZSBzZXQtYmFja2dyb3VuZC1jb2xvci1idXR0b24oJGJyYW5kLXJvc2UpO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gJltkYXRhLWNvbG9yPVwid2hpdGVcIl17XHJcbiAgLy8gICAgIEBpbmNsdWRlIHNldC1iYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbigkd2hpdGUtY29sb3IpO1xyXG4gIC8vICAgICBAaW5jbHVkZSBzaWRlYmFyLWFjdGl2ZS1jb2xvcigkYmxhY2stY29sb3IpO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gJltkYXRhLWJhY2tncm91bmQtY29sb3I9XCJyZWRcIl17XHJcbiAgLy8gICAgIEBpbmNsdWRlIHNpZGViYXItYmFja2dyb3VuZC1jb2xvcigkYnJhbmQtZGFuZ2VyLCAkd2hpdGUtY29sb3IpO1xyXG5cclxuICAvLyAgICAgLnVzZXIsXHJcbiAgLy8gICAgIC5sb2dvLFxyXG4gIC8vICAgICAubmF2IGxpLnNlcGFyYXRvcntcclxuICAvLyAgICAgICAgICY6YWZ0ZXJ7XHJcbiAgLy8gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwgLjMpO1xyXG4gIC8vICAgICAgICAgfVxyXG4gIC8vICAgICB9XHJcblxyXG4gIC8vICAgICAubmF2e1xyXG4gIC8vICAgICAgICAgbGk6aG92ZXI6bm90KC5hY3RpdmUpID4gYSxcclxuICAvLyAgICAgICAgIGxpLmFjdGl2ZSA+IFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJde1xyXG4gIC8vICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAvLyAgICAgICAgIH1cclxuICAvLyAgICAgfVxyXG4gIC8vIH1cclxuXHJcbiAgLy8gJltkYXRhLWltYWdlXTphZnRlcixcclxuICAvLyAmLmhhcy1pbWFnZTphZnRlcntcclxuICAvLyAgICAgb3BhY2l0eTogLjc3O1xyXG4gIC8vIH1cclxufVxyXG5cclxuLm9mZi1jYW52YXMtc2lkZWJhciAubmF2YmFyLWNvbGxhcHNle1xyXG4gIC5uYXYge1xyXG4gICAgICA+IGxpID4gYSxcclxuICAgICAgPiBsaSA+IGE6aG92ZXJ7XHJcbiAgICAgICAgICBjb2xvcjogJHdoaXRlLWNvbG9yO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDE1cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgID4gbGkgPiBhOmZvY3VzLFxyXG4gICAgICA+IGxpID4gYTpob3ZlcntcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC4yKTtcclxuICAgICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi5tYWluLXBhbmVse1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI2MHB4KTtcclxuICAvLyBAaW5jbHVkZSB0cmFuc2l0aW9uICgwLjMzcywgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKSk7XHJcblxyXG4gICAubWFpbi1jb250ZW50e1xyXG4gICAgICBwYWRkaW5nOiAwcHggMTVweDtcclxuICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDEyM3B4KTtcclxuICB9XHJcblxyXG4gICAuZm9vdGVye1xyXG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U3ZTdlNztcclxuICB9XHJcblxyXG4gICAubmF2YmFye1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlcntcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbiAgICAgIC50aXRsZXtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucGVyZmVjdC1zY3JvbGxiYXItb257XHJcbiAgLnNpZGViYXIsXHJcbiAgLm1haW4tcGFuZWx7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4uc2lkZWJhcixcclxuLm1haW4tcGFuZWwsXHJcbi5zaWRlYmFyLXdyYXBwZXJ7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiB0b3AsYm90dG9tLHdpZHRoO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRvcCxib3R0b20sIHdpZHRoO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzLC4ycywgLjM1cztcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnMsLjJzLCAuMzVzO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcixsaW5lYXIsZWFzZTtcclxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyLGxpbmVhcixlYXNlO1xyXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxufVxyXG5cclxuLnZpc2libGUtb24tc2lkZWJhci1yZWd1bGFye1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG59XHJcbi52aXNpYmxlLW9uLXNpZGViYXItbWluaXtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTFweCkge1xyXG4gIC5zaWRlYmFyLW1pbml7XHJcbiAgICAgIC52aXNpYmxlLW9uLXNpZGViYXItcmVndWxhcntcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAudmlzaWJsZS1vbi1zaWRlYmFyLW1pbml7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNpZGViYXIsXHJcbiAgICAgIC5zaWRlYmFyIC5zaWRlYmFyLXdyYXBwZXJ7XHJcbiAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1haW4tcGFuZWx7XHJcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zaWRlYmFye1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgICAgICAgei1pbmRleDogOTk5OTtcclxuXHJcbiAgICAgICAgICAubG9nb3tcclxuICAgICAgICAgICAgICBhLmxvZ28tbm9ybWFse1xyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAvLyBAaW5jbHVkZSB0cmFuc2Zvcm0tdHJhbnNsYXRlLXgoLTI1cHgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc2lkZWJhci13cmFwcGVye1xyXG4gICAgICAgICAgICAgID4gLm5hdiBbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXSB+IGRpdiA+IHVsID4gbGkgPiBhIC5zaWRlYmFyLW5vcm1hbCxcclxuICAgICAgICAgICAgICAudXNlciAudXNlci1pbmZvIFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdIH4gZGl2ID4gdWwgPiBsaSA+IGEgLnNpZGViYXItbm9ybWFsLFxyXG4gICAgICAgICAgICAgIC51c2VyIC51c2VyLWluZm8gPiBhID4gc3BhbixcclxuICAgICAgICAgICAgICA+IC5uYXYgbGkgPiBhIHB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIEBpbmNsdWRlIHRyYW5zZm9ybS10cmFuc2xhdGUteCgtMjVweCk7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2lkZWJhcjpob3ZlcntcclxuICAgICAgICAgIHdpZHRoOiAyNjBweDtcclxuXHJcbiAgICAgICAgICAubG9nb3tcclxuICAgICAgICAgICAgICBhLmxvZ28tbm9ybWFse1xyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAvLyBAaW5jbHVkZSB0cmFuc2Zvcm0tdHJhbnNsYXRlLXgoMHB4KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNpZGViYXItd3JhcHBlcntcclxuICAgICAgICAgICAgICB3aWR0aDogMjYwcHg7XHJcblxyXG4gICAgICAgICAgICAgID4gLm5hdiBsaSA+IGEgcCxcclxuICAgICAgICAgICAgICA+IC5uYXYgW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0gfiBkaXYgPiB1bCA+IGxpID4gYSAuc2lkZWJhci1ub3JtYWwsXHJcbiAgICAgICAgICAgICAgLnVzZXIgLnVzZXItaW5mbyBbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXSB+IGRpdiA+IHVsID4gbGkgPiBhIC5zaWRlYmFyLW5vcm1hbCxcclxuICAgICAgICAgICAgICAudXNlciAudXNlci1pbmZvID4gYSA+IHNwYW57XHJcbiAgICAgICAgICAgICAgICAgIC8vIEBpbmNsdWRlIHRyYW5zZm9ybS10cmFuc2xhdGUteCgwcHgpO1xyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgLnNpZGViYXIge1xyXG4gICAgLm5hdiAubmF2LWl0ZW0ge1xyXG4gICAgICAmLmFjdGl2ZS1wcm8ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3R0b206IDEzcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnNpZGViYXI6YWZ0ZXIsXG4ub2ZmLWNhbnZhcy1zaWRlYmFyOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpICFpbXBvcnRhbnQ7XG59XG5cbi5jb250ZW50LXBhbmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggI2FhYTtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiA1cmVtIDJyZW0gMnJlbTtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gM3JlbSk7XG59XG5cbi5zaWRlYmFyIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0O1xuICBib3gtc2hhZG93OiAwIDE2cHggMzhweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuNTYpLCAwIDRweCAyNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLm1haW4tMTAwIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI1cHgpICFpbXBvcnRhbnQ7XG59XG5cbi5ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xufVxuXG4uc2lkZWJhci1iYWNrZHJvcCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmxlZnQtYXJyb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMTRweDtcbiAgdG9wOiAxNXB4O1xuICBwYWRkaW5nOiA2cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogbm9uZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDk5OTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTU1O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5mYS5mYS1hbmdsZS1kb3VibGUtbGVmdCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmxlZnQtYXJyb3cucm90YXRlLTE4MCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbjpyb290IHtcbiAgLS1wcmltYXJ5OiAjMDBiM2FjO1xuICAtLXdoaXRlOiAjZmZmO1xuICAtLWJsYWNrOiAjMDAwO1xufVxuXG4uc2lkZS13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnNpZGUtd3JhcHBlciAubG9nby1pY29uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDEuOTVweCAxLjk1cHggMi42cHg7XG59XG4uc2lkZS13cmFwcGVyIC5sb2dvLWljb24tY29udGFpbmVyIC5saW5rcy13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uc2lkZS13cmFwcGVyIC5sb2dvLWljb24tY29udGFpbmVyIC5saW5rcy13cmFwcGVyIC5saW5rcy13cmFwcGVyLWxpbmsge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5zaWRlLXdyYXBwZXIgLmxvZ28taWNvbi1jb250YWluZXIgLmNvbXBhbnktbG9nby1uYW1lIHtcbiAgbWF4LWhlaWdodDogMTAwcHg7XG4gIGhlaWdodDogODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zaWRlLXdyYXBwZXIgLmxvZ28taWNvbi1jb250YWluZXIgLnN3aXRjaC1jb21wYW55LWJ0bi1jb250YWluZXIge1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zaWRlLXdyYXBwZXIgLmxvZ28taWNvbi1jb250YWluZXIgLnN3aXRjaC1jb21wYW55LWJ0bi1jb250YWluZXIgLmNvbXBhbnktbmFtZS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5zaWRlLXdyYXBwZXIgLmxvZ28taWNvbi1jb250YWluZXIgLnN3aXRjaC1jb21wYW55LWJ0bi1jb250YWluZXIgLmljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbn1cbi5zaWRlLXdyYXBwZXIgLmxvZ28taWNvbi1jb250YWluZXIgLnN3aXRjaC1jb21wYW55LWJ0bi1jb250YWluZXIgLmljb24gLmVkaXQtaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxOHB4O1xufVxuLnNpZGUtd3JhcHBlciAubG9nby1pY29uLWNvbnRhaW5lciAuc3dpdGNoLWNvbXBhbnktYnRuLWNvbnRhaW5lciAuaWNvbiAuc3dpdGNoLWNvbXBhbnktYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3YTFiZjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMzQzQ4NTg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBoZWlnaHQ6IDMwcHg7XG59XG4uc2lkZS13cmFwcGVyIC5sb2dvLWltZyB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xufVxuLnNpZGUtd3JhcHBlciAubG9nby1pbWcgaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXgtaGVpZ2h0OiA3MHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5zaWRlLXdyYXBwZXIgLm5hdiBsaSBhLCAuc2lkZS13cmFwcGVyIC5uYXYgbGkgYnV0dG9uIC5uYXYgbGkgLmRyb3Bkb3duLW1lbnUgYSxcbi5zaWRlLXdyYXBwZXIgLm5hdiBsaSAuZHJvcGRvd24tbWVudSBidXR0b24ge1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4uc2lkZS13cmFwcGVyIGxpLnN3aXRjaC12aWV3LmFjdGl2ZUNoaWxkLm5hdi1pdGVtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiA3MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHotaW5kZXg6IDE7XG59XG4uc2lkZS13cmFwcGVyIC5jb21wYW55LW5hbWUge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNjY2NjY2O1xuICBtYXgtd2lkdGg6IDEzNHB4O1xufVxuLnNpZGUtd3JhcHBlciAuY29tcGFueS1uYW1lIGkge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5qdW1wLXRvLWJ0biB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KSAhaW1wb3J0YW50O1xufVxuLmp1bXAtdG8tYnRuIGkge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbi5qdW1wLXRvLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpICFpbXBvcnRhbnQ7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIge1xuICBmbGV4OiAxIDEgMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG5cbi50aGF1dC1sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB6LWluZGV4OiAxO1xuICBib3R0b206IDBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgZ2FwOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdmFyKC0tcHJpbWFyeSk7XG59XG4udGhhdXQtbG9nbyAucG93ZXJlZCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLnRoYXV0LWxvZ28gLnBsYW4tdHlwZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0cHg7XG4gIHJpZ2h0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA4cHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRoYXV0LWxvZ28gaW1nIHtcbiAgd2lkdGg6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcbiAgZmlsdGVyOiBjb250cmFzdCgwKTtcbn1cbi50aGF1dC1sb2dvIHNwYW4ge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubmF2IHtcbiAgZmxleDogMSAxIDA7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbi5uYXY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLmxvZ28ge1xuICBwYWRkaW5nOiAwcHggMHB4IDEwcHggIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC50aGF1dC1sb2dvIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gIH1cbn1cbi5zaWRlYmFyLXByZW1pdW0tc2VydmljZS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5wcmVtaXVtLXN0YXItaWNvbi1jaGlsZCB7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5uYXYtbGluayB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbjogMTBweCAxNXB4IDA7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxNXB4KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcmVtaXVtLWxvY2std3JhcHBlciB7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG4ucHJlbWl1bS1sb2NrLXdyYXBwZXIgLnByZW1pdW0tbG9jay1pY29uIHtcbiAgbGVmdDogNTAlICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpICFpbXBvcnRhbnQ7XG59XG5cbi5yZW5ldy1zdWJzY3JpcHRpb24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL3N2Z3MvcmVuZXctc3Vic2NyaXB0aW9uLnN2Z1wiKSBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4udmlldy1hY2NvdW50cywgLnZpZXctdXNlcnMge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL3N2Z3Mvdmlldy1hY2NvdW50cy5zdmdcIikgbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLnNlbnRpbWVudC1hbmFseXNpcyB7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvc3Zncy9zZW50aW1lbnQtYW5hbHlzaXMuc3ZnXCIpIG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5xci1nZW5lcmF0b3ItaWNvbiB7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvc3Zncy9xci5zdmdcIikgbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLndyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLnNpZGViYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogMjYwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbn1cbi5zaWRlYmFyIC5jYXJldCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyLXRvcDogNHB4IGRhc2hlZDtcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkXFw5IDtcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4uc2lkZWJhcltkYXRhLWJhY2tncm91bmQtY29sb3I9YmxhY2tdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcbn1cbi5zaWRlYmFyIC5sb2dvLWltZyB7XG4gIHdpZHRoOiAzNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LWhlaWdodDogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDEzcHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5zaWRlYmFyIC5sb2dvLWltZyBpbWcge1xuICB3aWR0aDogMzVweDtcbiAgdG9wOiAxNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uc2lkZWJhciAuc2lkZWJhci13cmFwcGVyIHtcbiAgd2lkdGg6IDI2MHB4O1xuICB6LWluZGV4OiA0O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLXdyYXBwZXIgLmRyb3Bkb3duIC5kcm9wZG93bi1iYWNrZHJvcCB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLXdyYXBwZXIgLm5hdmJhci1mb3JtIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLnNpZGViYXIgLnNpZGViYXItd3JhcHBlciAubmF2YmFyLWZvcm0gLmlucHV0LWdyb3VwIHtcbiAgZm9udC1zaXplOiAxLjdlbTtcbiAgaGVpZ2h0OiAzNnB4O1xuICB3aWR0aDogNzglO1xuICBwYWRkaW5nLWxlZnQ6IDE3cHg7XG59XG4uc2lkZWJhciAuc2lkZWJhci13cmFwcGVyID4gLm5hdiBbZGF0YS10b2dnbGU9Y29sbGFwc2VdIH4gZGl2ID4gdWwgPiBsaSA+IGEgc3Bhbixcbi5zaWRlYmFyIC5zaWRlYmFyLXdyYXBwZXIgLnVzZXIgLnVzZXItaW5mbyBbZGF0YS10b2dnbGU9Y29sbGFwc2VdIH4gZGl2ID4gdWwgPiBsaSA+IGEgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLXdyYXBwZXIgPiAubmF2IFtkYXRhLXRvZ2dsZT1jb2xsYXBzZV0gfiBkaXYgPiB1bCA+IGxpID4gYSAuc2lkZWJhci1ub3JtYWwsXG4uc2lkZWJhciAuc2lkZWJhci13cmFwcGVyIC51c2VyIC51c2VyLWluZm8gW2RhdGEtdG9nZ2xlPWNvbGxhcHNlXSB+IGRpdiA+IHVsID4gbGkgPiBhIC5zaWRlYmFyLW5vcm1hbCB7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgb3BhY2l0eTogMTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uc2lkZWJhciAuc2lkZWJhci13cmFwcGVyID4gLm5hdiBbZGF0YS10b2dnbGU9Y29sbGFwc2VdIH4gZGl2ID4gdWwgPiBsaSA+IGEgLnNpZGViYXItbWluaSxcbi5zaWRlYmFyIC5zaWRlYmFyLXdyYXBwZXIgLnVzZXIgLnVzZXItaW5mbyBbZGF0YS10b2dnbGU9Y29sbGFwc2VdIH4gZGl2ID4gdWwgPiBsaSA+IGEgLnNpZGViYXItbWluaSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdpZHRoOiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbiAgZGlzcGxheTogaW5oZXJpdDtcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLXdyYXBwZXIgPiAubmF2IFtkYXRhLXRvZ2dsZT1jb2xsYXBzZV0gfiBkaXYgPiB1bCA+IGxpID4gYSBpLFxuLnNpZGViYXIgLnNpZGViYXItd3JhcHBlciAudXNlciAudXNlci1pbmZvIFtkYXRhLXRvZ2dsZT1jb2xsYXBzZV0gfiBkaXYgPiB1bCA+IGxpID4gYSBpIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgd2lkdGg6IDI2cHg7XG59XG4uc2lkZWJhciAubG9nby10aW0ge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDYxcHg7XG4gIHdpZHRoOiA2MXB4O1xuICBmbG9hdDogbGVmdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zaWRlYmFyIC5sb2dvLXRpbSBpbWcge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuLnNpZGViYXIgLm5hdiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnNpZGViYXIgLm5hdiAuY2FyZXQge1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xufVxuLnNpZGViYXIgLm5hdiBsaSA+IGE6aG92ZXIsIC5zaWRlYmFyIC5uYXYgbGkgPiBhOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uc2lkZWJhciAubmF2IGxpOmZpcnN0LWNoaWxkID4gYSB7XG4gIG1hcmdpbjogMCAxNXB4O1xufVxuLnNpZGViYXIgLm5hdiBsaTpob3ZlciA+IGEsIC5zaWRlYmFyIC5uYXYgbGkgLmRyb3Bkb3duLW1lbnUgYTpob3ZlciwgLnNpZGViYXIgLm5hdiBsaSAuZHJvcGRvd24tbWVudSBhOmZvY3VzID4gW2RhdGEtdG9nZ2xlPWNvbGxhcHNlXSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC4yKTtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5zaWRlYmFyIC5uYXYgbGkgLmFjdGl2ZSA+IFtkYXRhLXRvZ2dsZT1jb2xsYXBzZV0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5zaWRlYmFyIC5uYXYgbGkuYWN0aXZlID4gW2RhdGEtdG9nZ2xlPWNvbGxhcHNlXSBpIHtcbiAgY29sb3I6ICNhOWFmYmI7XG59XG4uc2lkZWJhciAubmF2IGxpLmFjdGl2ZSA+IGEsIC5zaWRlYmFyIC5uYXYgbGkuYWN0aXZlID4gYSBpIHtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cbi5zaWRlYmFyIC5uYXYgbGkuYWN0aXZlID4gYSBpLmFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG4uc2lkZWJhciAubmF2IGxpLnNlcGFyYXRvciB7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuLnNpZGViYXIgLm5hdiBsaS5zZXBhcmF0b3I6YWZ0ZXIge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGxlZnQ6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgwLCAxODAsIDE4MCwgMC4zKTtcbn1cbi5zaWRlYmFyIC5uYXYgbGkuc2VwYXJhdG9yICsgbGkge1xuICBtYXJnaW4tdG9wOiAzMXB4O1xufVxuLnNpZGViYXIgLm5hdiBwIHtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cbi5zaWRlYmFyIC5uYXYgaSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgd2lkdGg6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNhOWFmYmI7XG59XG4uc2lkZWJhciAubmF2IGxpIGEsXG4uc2lkZWJhciAubmF2IGxpIC5kcm9wZG93bi1tZW51IGEge1xuICBtYXJnaW46IDEwcHggMTVweCAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xufVxuLnNpZGViYXIgLnNpZGViYXItYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLWJhY2tncm91bmQ6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDM7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBvcGFjaXR5OiAwLjkzO1xufVxuLnNpZGViYXIgLmxvZ28ge1xuICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA0O1xufVxuLnNpZGViYXIgLmxvZ286YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgwLCAxODAsIDE4MCwgMC4zKTtcbn1cbi5zaWRlYmFyIC5sb2dvIHAge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW46IDEwcHggMTBweDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG4uc2lkZWJhciAubG9nbyAuc2ltcGxlLXRleHQge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5zaWRlYmFyIC5sb2dvLXRpbSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogNjFweDtcbiAgd2lkdGg6IDYxcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnNpZGViYXIgLmxvZ28tdGltIGltZyB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5vZmYtY2FudmFzLXNpZGViYXIgLm5hdmJhci1jb2xsYXBzZSAubmF2ID4gbGkgPiBhLFxuLm9mZi1jYW52YXMtc2lkZWJhciAubmF2YmFyLWNvbGxhcHNlIC5uYXYgPiBsaSA+IGE6aG92ZXIge1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBtYXJnaW46IDAgMTVweDtcbn1cbi5vZmYtY2FudmFzLXNpZGViYXIgLm5hdmJhci1jb2xsYXBzZSAubmF2ID4gbGkgPiBhOmZvY3VzLFxuLm9mZi1jYW52YXMtc2lkZWJhciAubmF2YmFyLWNvbGxhcHNlIC5uYXYgPiBsaSA+IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMik7XG59XG5cbi5tYWluLXBhbmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNjBweCk7XG59XG4ubWFpbi1wYW5lbCAubWFpbi1jb250ZW50IHtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjNweCk7XG59XG4ubWFpbi1wYW5lbCAuZm9vdGVyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlN2U3ZTc7XG59XG4ubWFpbi1wYW5lbCAubmF2YmFyIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5tYWluLXBhbmVsIC5oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLm1haW4tcGFuZWwgLmhlYWRlciAudGl0bGUge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ucGVyZmVjdC1zY3JvbGxiYXItb24gLnNpZGViYXIsXG4ucGVyZmVjdC1zY3JvbGxiYXItb24gLm1haW4tcGFuZWwge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlYmFyLFxuLm1haW4tcGFuZWwsXG4uc2lkZWJhci13cmFwcGVyIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiB0b3AsIGJvdHRvbSwgd2lkdGg7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRvcCwgYm90dG9tLCB3aWR0aDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzLCAwLjJzLCAwLjM1cztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycywgMC4ycywgMC4zNXM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhciwgbGluZWFyLCBlYXNlO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyLCBsaW5lYXIsIGVhc2U7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbn1cblxuLnZpc2libGUtb24tc2lkZWJhci1yZWd1bGFyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi52aXNpYmxlLW9uLXNpZGViYXItbWluaSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MXB4KSB7XG4gIC5zaWRlYmFyLW1pbmkgLnZpc2libGUtb24tc2lkZWJhci1yZWd1bGFyIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNpZGViYXItbWluaSAudmlzaWJsZS1vbi1zaWRlYmFyLW1pbmkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICB9XG4gIC5zaWRlYmFyLW1pbmkgLnNpZGViYXIsXG4gIC5zaWRlYmFyLW1pbmkgLnNpZGViYXIgLnNpZGViYXItd3JhcHBlciB7XG4gICAgd2lkdGg6IDgwcHg7XG4gIH1cbiAgLnNpZGViYXItbWluaSAubWFpbi1wYW5lbCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpO1xuICB9XG4gIC5zaWRlYmFyLW1pbmkgLnNpZGViYXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgei1pbmRleDogOTk5OTtcbiAgfVxuICAuc2lkZWJhci1taW5pIC5zaWRlYmFyIC5sb2dvIGEubG9nby1ub3JtYWwge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgLnNpZGViYXItbWluaSAuc2lkZWJhciAuc2lkZWJhci13cmFwcGVyID4gLm5hdiBbZGF0YS10b2dnbGU9Y29sbGFwc2VdIH4gZGl2ID4gdWwgPiBsaSA+IGEgLnNpZGViYXItbm9ybWFsLFxuICAuc2lkZWJhci1taW5pIC5zaWRlYmFyIC5zaWRlYmFyLXdyYXBwZXIgLnVzZXIgLnVzZXItaW5mbyBbZGF0YS10b2dnbGU9Y29sbGFwc2VdIH4gZGl2ID4gdWwgPiBsaSA+IGEgLnNpZGViYXItbm9ybWFsLFxuICAuc2lkZWJhci1taW5pIC5zaWRlYmFyIC5zaWRlYmFyLXdyYXBwZXIgLnVzZXIgLnVzZXItaW5mbyA+IGEgPiBzcGFuLFxuICAuc2lkZWJhci1taW5pIC5zaWRlYmFyIC5zaWRlYmFyLXdyYXBwZXIgPiAubmF2IGxpID4gYSBwIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIC5zaWRlYmFyLW1pbmkgLnNpZGViYXI6aG92ZXIge1xuICAgIHdpZHRoOiAyNjBweDtcbiAgfVxuICAuc2lkZWJhci1taW5pIC5zaWRlYmFyOmhvdmVyIC5sb2dvIGEubG9nby1ub3JtYWwge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgLnNpZGViYXItbWluaSAuc2lkZWJhcjpob3ZlciAuc2lkZWJhci13cmFwcGVyIHtcbiAgICB3aWR0aDogMjYwcHg7XG4gIH1cbiAgLnNpZGViYXItbWluaSAuc2lkZWJhcjpob3ZlciAuc2lkZWJhci13cmFwcGVyID4gLm5hdiBsaSA+IGEgcCxcbiAgLnNpZGViYXItbWluaSAuc2lkZWJhcjpob3ZlciAuc2lkZWJhci13cmFwcGVyID4gLm5hdiBbZGF0YS10b2dnbGU9Y29sbGFwc2VdIH4gZGl2ID4gdWwgPiBsaSA+IGEgLnNpZGViYXItbm9ybWFsLFxuICAuc2lkZWJhci1taW5pIC5zaWRlYmFyOmhvdmVyIC5zaWRlYmFyLXdyYXBwZXIgLnVzZXIgLnVzZXItaW5mbyBbZGF0YS10b2dnbGU9Y29sbGFwc2VdIH4gZGl2ID4gdWwgPiBsaSA+IGEgLnNpZGViYXItbm9ybWFsLFxuICAuc2lkZWJhci1taW5pIC5zaWRlYmFyOmhvdmVyIC5zaWRlYmFyLXdyYXBwZXIgLnVzZXIgLnVzZXItaW5mbyA+IGEgPiBzcGFuIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIC5zaWRlYmFyIC5uYXYgLm5hdi1pdGVtLmFjdGl2ZS1wcm8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3R0b206IDEzcHg7XG4gIH1cbn0iLCIkY29sb3ItcHJpbWFyeTogdmFyKC0tcHJpbWFyeSk7XHJcbiR3aGl0ZS1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4kYmxhY2stY29sb3I6IHZhcigtLWJsYWNrKTtcclxuXHJcbjpyb290e1xyXG4gICAgLS1wcmltYXJ5OiAjMDBiM2FjO1xyXG4gICAgLS13aGl0ZTogI2ZmZjtcclxuICAgIC0tYmxhY2s6ICMwMDA7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 7143:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 5074);











function LoginComponent_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email field is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_mat_error_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Enter a valid Email address!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_mat_error_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password field is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password field should contain atleast 8 letters");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_i_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 22);
  }
}
const _c0 = function (a0) {
  return {
    "not-allowed": a0
  };
};
const _c1 = function (a0) {
  return {
    "spiner": a0
  };
};
class LoginComponent {
  constructor(formBuilder, router, api,
  // private authService: AuthService,
  // private utility: UtitlityService,
  toaster) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.api = api;
    this.toaster = toaster;
    this.register = false;
    this.focusTouched1 = false;
    this.focusTouched = false;
    this.isLoader = false;
    this.hide = true;
    this.alive = true;
    this.platformInfo = {};
    // this.getAccessToken();
    this.form = this.formBuilder.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(8)]]
    });
    // this.getPlatformInfo();
  }

  ngOnInit() {
    if (this.api.getLocalStorage('currentUserSession') && this.api.getLocalStorage('currentUserSession').uuid) {
      this.router.navigate(['/dashboard']);
    }
  }
  // getPlatformInfo() {
  //     this.startupService.platformInfo$.pipe(takeWhile(_ => this.alive)).subscribe((data) => {
  //         if (data) {
  //             this.platformInfo.name = data.company.name;
  //             this.platformInfo.imgURL = data.platform.logo;
  //         }
  //     });
  // }
  onLogin() {
    this.isLoader = true;
    this.register = true;
    if (this.form.invalid) {
      return;
    }
    this.api.login(this.form.value).subscribe({
      next: res => {
        if (res.status === 'ok') {
          this.isLoader = false;
          const currentUser = {
            "id": res.data.id,
            "uuid": res.data.uuid,
            "name": res.data.name
          };
          this.api.setLocalStorage('currentUserSession', currentUser);
          this.router.navigate(['/dashboard']);
        }
      },
      error: error => {
        this.isLoader = false;
        this.toaster.error(error.error.message);
      }
    });
  }
  ngOnDestroy() {
    this.alive = false;
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 35,
  vars: 15,
  consts: [[1, "vh-100"], [1, "container", "py-5", "h-100"], [1, "row", "d-flex", "justify-content-center", "align-items-center", "h-100"], [1, "col", "col-xl-10"], [1, "card", "box", 2, "border-radius", "1rem"], [1, "row"], [1, "col-md-6", "col-lg-5", "logo-container", 2, "display", "flex", "align-items", "center", "justify-content", "center", "padding", "50px"], ["src", "assets/img/logo.svg", "alt", "logo", "width", "200", 1, "img-fluid", "logo-img"], [1, "col-md-6", "col-lg-7", "d-flex", "align-items-center"], [1, "card-body", "p-4", "p-lg-5", "text-black"], [3, "formGroup", "ngSubmit"], [1, "fw-bold", "mb-3", "pb-3", "text-secondary", 2, "letter-spacing", "1px", "font-size", "24px", "white-space", "nowrap"], [1, "form-outline", "mb-4"], ["appearance", "outline", 1, "w-100"], ["matSuffix", "", 1, "text-muted"], ["matInput", "", "formControlName", "email", "type", "email"], [4, "ngIf"], ["matInput", "", "formControlName", "password", 3, "type"], ["matSuffix", "", 1, "text-muted", "cursor-pointer", 3, "click"], [1, "pt-1", "mb-4", 2, "display", "inline", 3, "ngClass"], ["mat-raised-button", "", "mat-button", "", "color", "primary", "type", "submit", 1, "w-100", "btn-info", 2, "font-size", "16px", 3, "ngClass", "disabled"], ["class", "fas fa-circle-notch fa-spin ", 4, "ngIf"], [1, "fas", "fa-circle-notch", "fa-spin"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8)(9, "div", 9)(10, "form", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_10_listener() {
        return ctx.onLogin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h5", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Log in to your account ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 12)(14, "mat-form-field", 13)(15, "mat-icon", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "mail");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Email address");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, LoginComponent_mat_error_20_Template, 2, 0, "mat-error", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, LoginComponent_mat_error_21_Template, 2, 0, "mat-error", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 12)(23, "mat-form-field", 13)(24, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-icon", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_mat_icon_click_27_listener() {
        return ctx.hide = !ctx.hide;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, LoginComponent_mat_error_29_Template, 2, 0, "mat-error", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, LoginComponent_mat_error_30_Template, 2, 0, "mat-error", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 19)(32, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Login ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, LoginComponent_i_34_Template, 1, 0, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.controls["email"].errors && ctx.form.controls["email"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.controls["email"].errors && ctx.form.controls["email"].errors["email"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.controls["password"].errors && ctx.form.controls["password"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.controls["password"].errors && ctx.form.controls["password"].errors["minlength"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c0, !ctx.form.valid));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c1, ctx.isLoader))("disabled", !ctx.form.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoader);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix],
  styles: ["section[_ngcontent-%COMP%] {\n  background: #fff;\n}\n\n  .mat-checkbox-ripple .mat-ripple-element, .mat-checkbox-checked.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n  background-color: gray !important;\n}\n\n.box[_ngcontent-%COMP%] {\n  border: solid 1px rgb(180, 180, 180);\n  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;\n  border-radius: 5px;\n  box-sizing: absolute;\n  padding: 20px 30px;\n}\n\nmat-label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n}\n\n@media (max-width: 768px) {\n  .logo-img[_ngcontent-%COMP%] {\n    width: 70%;\n    height: 70%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .logo-container[_ngcontent-%COMP%] {\n    padding: 30px !important;\n  }\n  .container[_ngcontent-%COMP%] {\n    padding: 1rem !important;\n  }\n  h5[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n  a[_ngcontent-%COMP%] {\n    font-size: 17px !important;\n  }\n  button[_ngcontent-%COMP%] {\n    font-size: 14px !important;\n  }\n  section[_ngcontent-%COMP%] {\n    background: #fff;\n  }\n}\n@media (max-width: 576px) {\n  .logo-img[_ngcontent-%COMP%] {\n    width: 80%;\n    height: 80%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uL1NhaSUyMEtpcmFuL0RvY3VtZW50cy9hZG1pbi1oaXNlbnNlL2hpc2Vuc2UtYWRtaW4vc3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTs7RUFFSSxpQ0FBQTtBQ0NKOztBREVBO0VBQ0ksb0NBQUE7RUFDQSwyRkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEWUE7RUFDSTtJQUVJLFVBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7RUNWTjtFRGNFO0lBQ0ksd0JBQUE7RUNaTjtFRGVFO0lBQ0ksd0JBQUE7RUNiTjtFRGdCRTtJQUNJLDBCQUFBO0VDZE47RURpQkU7SUFDSSwwQkFBQTtFQ2ZOO0VEa0JFO0lBQ0ksMEJBQUE7RUNoQk47RURtQkU7SUFDSSxnQkFBQTtFQ2pCTjtBQUNGO0FEc0JBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsV0FBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0VDcEJOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWNoZWNrYm94LXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50LFxyXG4ubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm94IHtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYigxODAsIDE4MCwgMTgwKTtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMTQsIDMwLCAzNywgMC4xMikgMHB4IDJweCA0cHggMHB4LCByZ2JhKDE0LCAzMCwgMzcsIDAuMzIpIDBweCAycHggMTZweCAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2l6aW5nOiBhYnNvbHV0ZTtcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxufVxyXG5cclxubWF0LWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi8vIDo6bmctZGVlcCBidXR0b24ubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnl7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiM2FjICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIDo6bmctZGVlcCBidXR0b24ubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnkubWF0LWJ1dHRvbi1kaXNhYmxlZCxcclxuLy8gOjpuZy1kZWVwIGJ1dHRvbi5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkLm1hdC1idXR0b24tZGlzYWJsZWRcclxuLy8ge1xyXG4vLyAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjcpO1xyXG4vLyB9XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo3NjhweCkge1xyXG4gICAgLmxvZ28taW1nIHtcclxuXHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBoZWlnaHQ6IDcwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5sb2dvLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZzogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICBoNSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICBzZWN0aW9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjU3NnB4KSB7XHJcbiAgICAubG9nby1pbWcge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA4MCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIH1cclxufSIsInNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG46Om5nLWRlZXAgLm1hdC1jaGVja2JveC1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCxcbi5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXkgIWltcG9ydGFudDtcbn1cblxuLmJveCB7XG4gIGJvcmRlcjogc29saWQgMXB4IHJnYigxODAsIDE4MCwgMTgwKTtcbiAgYm94LXNoYWRvdzogcmdiYSgxNCwgMzAsIDM3LCAwLjEyKSAwcHggMnB4IDRweCAwcHgsIHJnYmEoMTQsIDMwLCAzNywgMC4zMikgMHB4IDJweCAxNnB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2l6aW5nOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xufVxuXG5tYXQtbGFiZWwge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubG9nby1pbWcge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiA3MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5sb2dvLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMzBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICBoNSB7XG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgYSB7XG4gICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgfVxuICBzZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmxvZ28taW1nIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogODAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 2429:
/*!***************************************************************!*\
  !*** ./src/app/components/my-profile/my-profile.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyProfileComponent": () => (/* binding */ MyProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ 5892);











function MyProfileComponent_mat_error_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Current password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function MyProfileComponent_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " New password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function MyProfileComponent_mat_error_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " New password should be minimun of 8 characters! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function MyProfileComponent_mat_error_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Confirm passwords should match with password field! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function MyProfileComponent_i_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 26);
  }
}
class MyProfileComponent {
  constructor(fb, api, toaster, location) {
    this.fb = fb;
    this.api = api;
    this.toaster = toaster;
    this.location = location;
    this.isLoading = false;
    this.hide = true;
    this.currentPassword = true;
    this.confirmPasswordHide = true;
    this.form = this.fb.group({
      current_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      new_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(8)]],
      confirm_new_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(8)]]
    }, {
      validators: this.password.bind(this)
    });
    // this.uuid = this.api.getLocalStorage('activeCompanyUser').uuid;
  }

  ngOnInit() {}
  password(formGroup) {
    const password = formGroup.get('new_password')?.value;
    const confirmPassword = formGroup.get('confirm_new_password')?.value;
    return password === confirmPassword ? null : {
      passwordNotMatch: true
    };
  }
  changePassword() {
    this.isLoading = true;
    this.api.changePassword(this.uuid, this.form.value).subscribe({
      next: res => {
        if (res.status == 'ok') {
          this.toaster.success(res.message);
          this.isLoading = false;
          this.form.reset();
        }
      },
      error: error => {
        // this.checkError(error.error);
        this.isLoading = false;
        this.toaster.error(error.error.message);
        this.form.reset();
      }
    });
  }
  // checkError(data) {
  //   const isArray = data.errors instanceof Array;
  //   if (isArray) {
  //     this.toaster.error(data.message);
  //   } else {
  //     const errorArr = [].concat(...Object.values(data.errors));
  //     errorArr.forEach(err => {
  //       this.toaster.error(err);
  //     });
  //   }
  // }
  goBack() {
    this.location.back();
  }
}
MyProfileComponent.ɵfac = function MyProfileComponent_Factory(t) {
  return new (t || MyProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location));
};
MyProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: MyProfileComponent,
  selectors: [["app-my-profile"]],
  decls: 49,
  vars: 13,
  consts: [[1, "userProfile"], [1, "card"], [1, "card-header", "position-relative", "card-box-shadow", "bt-4"], [1, "card-title", "m-0", "font-weight-bold"], [1, "card-body"], [1, "row"], [1, "col-sm-12", "mt-4"], ["animationDuration", "0ms"], ["label", "Change Password"], [1, "changePassword"], [1, "col-md-12"], [3, "formGroup"], [1, "col-12", "col-md-4", "form-group"], ["appearance", "outline", 1, ""], ["matInput", "", "formControlName", "current_password", 3, "type"], ["matSuffix", "", 1, "text-muted", "cursor-pointer", 3, "click"], [4, "ngIf"], ["matInput", "", "formControlName", "new_password", 3, "type"], ["matInput", "", "formControlName", "confirm_new_password", 3, "type"], ["class", "text-danger", 4, "ngIf"], [1, "col-md-12", "mt-4", "border-top", "pt-2", "button-container"], [1, "forgot-link", 2, "color", "black", "cursor", "pointer", 3, "click"], [1, "fas", "fa-arrow-left"], ["mat-raised-button", "", 1, "btn", "btn-info", 3, "disabled", "click"], ["class", "fas fa-circle-notch fa-spin text-white ml-1", 4, "ngIf"], [1, "text-danger"], [1, "fas", "fa-circle-notch", "fa-spin", "text-white", "ml-1"]],
  template: function MyProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "User Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "mat-tab-group", 7)(9, "mat-tab", 8)(10, "section", 9)(11, "div", 5)(12, "div", 10)(13, "form", 11)(14, "div", 5)(15, "div", 12)(16, "mat-form-field", 13)(17, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Current Password *");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-icon", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyProfileComponent_Template_mat_icon_click_20_listener() {
        return ctx.currentPassword = !ctx.currentPassword;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, MyProfileComponent_mat_error_22_Template, 2, 0, "mat-error", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 12)(24, "mat-form-field", 13)(25, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "New Password *");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-icon", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyProfileComponent_Template_mat_icon_click_28_listener() {
        return ctx.hide = !ctx.hide;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, MyProfileComponent_mat_error_30_Template, 2, 0, "mat-error", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, MyProfileComponent_mat_error_31_Template, 2, 0, "mat-error", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 12)(33, "mat-form-field", 13)(34, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Confirm New Password *");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-icon", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyProfileComponent_Template_mat_icon_click_37_listener() {
        return ctx.confirmPasswordHide = !ctx.confirmPasswordHide;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, MyProfileComponent_mat_error_39_Template, 2, 0, "mat-error", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 20)(41, "div")(42, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyProfileComponent_Template_a_click_42_listener() {
        return ctx.goBack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " Go back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div")(46, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyProfileComponent_Template_button_click_46_listener() {
        return ctx.changePassword();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " Change Password ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, MyProfileComponent_i_48_Template, 1, 0, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.currentPassword ? "password" : "text");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currentPassword ? "visibility_off" : "visibility");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.controls["current_password"].errors && ctx.form.controls["current_password"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.controls["new_password"].errors && ctx.form.controls["new_password"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.controls["new_password"].errors && ctx.form.controls["new_password"].errors["minlength"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.confirmPasswordHide ? "password" : "text");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.confirmPasswordHide ? "visibility_off" : "visibility");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.hasError("passwordNotMatch"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.form.valid || ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatSuffix, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTabGroup],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3252:
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);




class NavbarComponent {
  constructor(element, router) {
    this.element = element;
    this.router = router;
    this.mobile_menu_visible = 0;
    this.isCollapsed = true;
    this.sidebarVisible = false;
  }
  ngOnInit() {
    const navbar = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    this.router.events.subscribe(event => {
      this.sidebarClose();
      const $layer = document.getElementsByClassName('close-layer')[0];
      if ($layer) {
        $layer.remove();
        this.mobile_menu_visible = 0;
      }
    });
  }
  // logout() {
  //   swal({
  //     text: "Are you sure want to logout?",
  //     type: 'warning',
  //     showConfirmButton: true,
  //     showCancelButton: true,
  //     confirmButtonText: 'Yes',
  //     cancelButtonText: 'No'
  //   })
  //     .then((willDelete) => {
  //       this.authService.logout();
  //       this.utility.removeLocalStorage('authToken')
  //       this.utility.removeLocalStorage('currentUserSession')
  //       this.router.navigate(['/login'])
  //     }, error => {
  //       console.log(error);
  //     });
  // }
  collapse() {
    this.isCollapsed = !this.isCollapsed;
    const navbar = document.getElementsByTagName('nav')[0];
    if (!this.isCollapsed) {
      navbar.classList.remove('navbar-transparent');
      navbar.classList.add('bg-white');
    } else {
      navbar.classList.add('navbar-transparent');
      navbar.classList.remove('bg-white');
    }
  }
  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const mainPanel = document.getElementsByClassName('main-panel')[0];
    const html = document.getElementsByTagName('html')[0];
    if (window.innerWidth < 991) {
      mainPanel.style.position = 'fixed';
    }
    setTimeout(function () {
      toggleButton.classList.add('toggled');
    }, 500);
    html.classList.add('nav-open');
    this.sidebarVisible = true;
  }
  sidebarClose() {
    const html = document.getElementsByTagName('html')[0];
    this.toggleButton.classList.remove('toggled');
    const mainPanel = document.getElementsByClassName('main-panel')[0];
    if (window.innerWidth < 991) {
      mainPanel.style.position = 'initial';
    }
    this.sidebarVisible = false;
    html.classList.remove('nav-open');
  }
  sidebarToggle() {
    // const toggleButton = this.toggleButton;
    // const html = document.getElementsByTagName('html')[0];
    const $toggle = document.getElementsByClassName('navbar-toggler')[0];
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
    const html = document.getElementsByTagName('html')[0];
    var $layer = document.createElement('div');
    $layer.setAttribute('class', 'close-layer');
    if (this.mobile_menu_visible == 1) {
      // $('html').removeClass('nav-open');
      html.classList.remove('nav-open');
      if ($layer) {
        $layer.remove();
      }
      setTimeout(function () {
        $toggle.classList.remove('toggled');
      }, 400);
      this.mobile_menu_visible = 0;
    } else {
      setTimeout(function () {
        $toggle.classList.add('toggled');
      }, 430);
      if (html.querySelectorAll('.main-panel')) {
        document.getElementsByClassName('main-panel')[0].appendChild($layer);
      } else if (html.classList.contains('off-canvas-sidebar')) {
        document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
      }
      setTimeout(function () {
        $layer.classList.add('visible');
      }, 100);
      $layer.onclick = function () {
        html.classList.remove('nav-open');
        this.mobile_menu_visible = 0;
        $layer.classList.remove('visible');
        this.sidebarClose();
        setTimeout(() => {
          $layer.remove();
          $toggle.classList.remove('toggled');
        }, 400);
      }.bind(this);
      html.classList.add('nav-open');
      this.mobile_menu_visible = 1;
    }
  }
  getTitle() {
    return 'Dashboard';
  }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
  return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
NavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NavbarComponent,
  selectors: [["app-navbar"]],
  decls: 10,
  vars: 0,
  consts: [[1, "nav-wrapper"], [1, "navbar", "navbar-expand-lg", "bg-white", "d-md-none", "navbar-absolute", "bg-primary", "fixed-top"], [1, "container-fluid"], [1, "navbar-toggle", "py-2"], ["mat-raised-button", "", "type", "button", 1, "navbar-toggler", 3, "click"], [1, "sr-only"], [1, "navbar-toggler-icon", "icon-bar"]],
  template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "nav", 1)(2, "div", 2)(3, "div", 3)(4, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_4_listener() {
        return ctx.sidebarToggle();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Toggle navigation");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6)(8, "span", 6)(9, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
  },
  dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton],
  styles: [".nav-wrapper[_ngcontent-%COMP%]   nav.navbar[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #eee;\n  box-shadow: 0 -1px 0 #aaa inset;\n}\n.nav-wrapper[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vU2FpJTIwS2lyYW4vRG9jdW1lbnRzL2FkbWluLWhpc2Vuc2UvaGlzZW5zZS1hZG1pbi9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLDZCQUFBO0VBQ0EsK0JBQUE7QUNBSjtBREdFO0VBQ0UsWUFBQTtBQ0RKIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi13cmFwcGVyIHtcclxuICBuYXYubmF2YmFyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgYm94LXNoYWRvdzogMCAtMXB4IDAgI2FhYSBpbnNldDtcclxuICB9XHJcblxyXG4gIC5uYXZiYXItYnJhbmQge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gIH1cclxufVxyXG4iLCIubmF2LXdyYXBwZXIgbmF2Lm5hdmJhciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICBib3gtc2hhZG93OiAwIC0xcHggMCAjYWFhIGluc2V0O1xufVxuLm5hdi13cmFwcGVyIC5uYXZiYXItYnJhbmQge1xuICB3aWR0aDogMTAwcHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5699:
/*!*************************************************************************************************!*\
  !*** ./src/app/components/offers-and-promotions-modal/offers-and-promotions-modal.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffersAndPromotionsModalComponent": () => (/* binding */ OffersAndPromotionsModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 5074);













function OffersAndPromotionsModalComponent_mat_error_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Start Date is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function OffersAndPromotionsModalComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r2.thumbImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function OffersAndPromotionsModalComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30)(1, "div", 32)(2, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OffersAndPromotionsModalComponent_div_29_Template_i_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      ctx_r5.UpdatedThumbImg = null;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.UpdatedThumbImgFile = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r3.UpdatedThumbImg, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function OffersAndPromotionsModalComponent_mat_hint_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Thumb Image is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class OffersAndPromotionsModalComponent {
  constructor(data, dialogRef, api, toaster, fb) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.api = api;
    this.toaster = toaster;
    this.fb = fb;
    this.isLoading = false;
    this.formSubmitted = false;
    this.form = this.fb.group({
      start_date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      image: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
    });
  }
  ngOnInit() {}
  createPressCoverage() {
    this.formSubmitted = true;
    console.log(this.form.value);
    if (!this.form.valid) {
      return;
    }
    this.isLoading = true;
    let startDate = this.form.value.start_date;
    console.log(typeof startDate);
    const split = startDate?.toString().split(' ');
    this.form.value.start_date = `${split[3]}-${new Date(this.form.value.start_date).getMonth() + 1}-${split[2]}`;
    const formData = new FormData();
    formData.append('start_date', this.form.value.start_date + '');
    formData.append('image', this.UpdatedThumbImgFile);
    this.api.createOfferPromotion(formData).subscribe({
      next: res => {
        console.log(res);
        this.dialogRef.close(true);
        this.isLoading = false;
      },
      error: err => {
        this.isLoading = false;
        console.log(err);
        this.toaster.error(err.error.message);
      }
    });
  }
  preview(event) {
    let files = event.target?.files;
    if (files.length === 0) return;
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = _event => {
      this.UpdatedThumbImg = reader.result;
      this.UpdatedThumbImgFile = files[0];
      this.form.controls.image.setValue(files[0]);
    };
  }
  get formControl() {
    return this.form.controls;
  }
}
OffersAndPromotionsModalComponent.ɵfac = function OffersAndPromotionsModalComponent_Factory(t) {
  return new (t || OffersAndPromotionsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
};
OffersAndPromotionsModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: OffersAndPromotionsModalComponent,
  selectors: [["app-offers-and-promotions-modal"]],
  decls: 41,
  vars: 8,
  consts: [[1, "modal-container"], [1, "header", "border-bottom"], ["mat-dialog-title", ""], [1, "close-icon", 3, "mat-dialog-close"], [1, "body"], [1, "mat-dialog"], [1, "row", "p-3"], [1, "col-md-12"], [3, "formGroup"], [1, "row"], [1, "col-12", "form-group"], ["appearance", "outline", 1, "w-100"], [1, "mat-label-field-padding"], ["matInput", "", "formControlName", "start_date", "type", "text", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], [4, "ngIf"], [1, "col-12"], [1, "col-md-12", "mt-4"], [1, "section-heading", "section-heading-not-first"], [1, "row", "col-md-12"], ["class", "col-md-12 mb-3", 4, "ngIf"], [1, "col-md-4", "mb-3"], ["id", "file-upload", "type", "file", "accept", "image/png, image/jpeg, image/webp", 1, "file-input", 3, "change"], ["mat-raised-button", "", "type", "button", 1, "file-upload-btn"], ["for", "file-upload"], ["class", "error", 4, "ngIf"], [1, "footer"], ["mat-raised-button", "", 1, "ml-3", "mb-3", 2, "color", "black !important", 3, "click"], [1, "btn", "btn-info", "ml-3", "mb-3", 3, "click"], [1, "col-md-12", "mb-3"], ["width", "100", "height", "100", 1, "logo-btn", 3, "src"], [1, "logo-wrap"], ["aria-hidden", "true", 1, "fa", "fa-times", "fa-1x", 3, "click"], [1, "error"]],
  template: function OffersAndPromotionsModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Create an Offers / Promotions");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "mat-dialog-content", 5)(8, "div", 6)(9, "div", 7)(10, "form", 8)(11, "div", 9)(12, "div", 10)(13, "mat-form-field", 11)(14, "mat-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Start Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-hint");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "mm/dd/yyyy");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "mat-datepicker-toggle", 14)(20, "mat-datepicker", null, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, OffersAndPromotionsModalComponent_mat_error_22_Template, 2, 0, "mat-error", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 17)(24, "div", 18)(25, "h3", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Thumb Image ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, OffersAndPromotionsModalComponent_div_28_Template, 2, 1, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, OffersAndPromotionsModalComponent_div_29_Template, 4, 1, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 22)(31, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function OffersAndPromotionsModalComponent_Template_input_change_31_listener($event) {
        return ctx.preview($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 24)(33, "label", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Browse and upload Image ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, OffersAndPromotionsModalComponent_mat_hint_35_Template, 2, 0, "mat-hint", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 27)(37, "button", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OffersAndPromotionsModalComponent_Template_button_click_37_listener() {
        return ctx.dialogRef.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OffersAndPromotionsModalComponent_Template_button_click_39_listener() {
        return ctx.createPressCoverage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " Create ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formSubmitted || ctx.formControl["start_date"].errors && ctx.formControl["start_date"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.thumbImage);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.UpdatedThumbImg);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formSubmitted && ctx.formControl["image"].errors && ctx.formControl["image"].errors["required"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerToggle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatSuffix],
  styles: ["[_ngcontent-%COMP%]:root {\n  --primary: #00b3ac;\n  --white: #fff;\n  --black: #000;\n}\n\n.modal-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 10px;\n}\n\nh4[mat-dialog-title][_ngcontent-%COMP%] {\n  margin: 0 0 7px !important;\n}\n\n.subscription-card[_ngcontent-%COMP%] {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(27, 31, 35, 0.1) 0px 0px 0px 1px;\n  border-radius: 13px;\n}\n\n.plans-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n  gap: 25px;\n  margin: 15px 0;\n}\n\n.card-content[_ngcontent-%COMP%] {\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n  min-height: 270px;\n}\n\n.check-icon[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 36px;\n}\n\n.active-b[_ngcontent-%COMP%] {\n  border: 1px solid var(--primary);\n}\n\n.current-plan[_ngcontent-%COMP%] {\n  width: 100%;\n  color: var(--primary);\n  font-size: 16px;\n  font-weight: 400;\n  border-top-left-radius: 13px;\n  border-top-right-radius: 13px;\n  box-shadow: 0px 1px 3px var(--primary);\n}\n\n.recommended-plan[_ngcontent-%COMP%] {\n  mix-blend-mode: luminosity;\n}\n\n.planName[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 22px;\n  text-align: center;\n}\n\n.plan-price[_ngcontent-%COMP%] {\n  font-size: 38px;\n  text-align: center;\n}\n.plan-price[_ngcontent-%COMP%]   .fs-small[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.planDesc[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.mat-dialog[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n\n.features-heading[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px;\n  width: 100%;\n  border: none;\n  background: transparent;\n}\n.features-heading[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  background: #e7e0e0;\n  border-radius: 50%;\n}\n.features-heading[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]   .fa-caret-down[_ngcontent-%COMP%] {\n  font-size: 24px;\n  transform: rotate(-180deg);\n  transition: transform 250ms ease-in-out;\n}\n\n.collapsed[_ngcontent-%COMP%]   .fa-caret-down[_ngcontent-%COMP%] {\n  transform: rotate(0deg) !important;\n}\n\n@media screen and (max-width: 768px) {\n  .plans-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 1rem;\n  border-top: 1px solid rgba(0, 0, 0, 0.2);\n}\n\n.file-input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.file-upload-btn[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0;\n}\n.file-upload-btn[_ngcontent-%COMP%]   .mat-button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\n.file-upload-btn[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  cursor: pointer;\n  margin: 0;\n  padding: 12px;\n  background-color: var(--primary);\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9jb3JlL3RoZW1lcy9wcmltYXJ5LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi9TYWklMjBLaXJhbi9Eb2N1bWVudHMvYWRtaW4taGlzZW5zZS9oaXNlbnNlLWFkbWluL3NyYy9hcHAvY29tcG9uZW50cy9vZmZlcnMtYW5kLXByb21vdGlvbnMtbW9kYWwvb2ZmZXJzLWFuZC1wcm9tb3Rpb25zLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9jb21wb25lbnRzL29mZmVycy1hbmQtcHJvbW90aW9ucy1tb2RhbC9vZmZlcnMtYW5kLXByb21vdGlvbnMtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FDSEo7O0FDRkU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FES0o7O0FDREE7RUFDRSwwQkFBQTtBRElGOztBQ0RBO0VBQ0kscUZBQUE7RUFDQSxtQkFBQTtBRElKOztBQ0RBO0VBQ0ksYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QURJSjs7QUNEQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QURJSjs7QUNEQTtFQUNJLFlBQUE7QURJSjs7QUNEQTtFQUNFLHFCRnZDYztFRXdDZCxlQUFBO0FESUY7O0FDREE7RUFDRSxnQ0FBQTtBRElGOztBQ0ZBO0VBQ0UsV0FBQTtFQUNBLHFCRmhEYztFRWlEZCxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0NBQUE7QURLRjs7QUNGQTtFQUNFLDBCQUFBO0FES0Y7O0FDRkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBREtGOztBQ0ZBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FES0Y7QUNKRTtFQUNFLGVBQUE7QURNSjs7QUNGQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FES0Y7O0FDRkE7RUFDRSxvQkFBQTtBREtGOztBQ0ZBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBREtGO0FDSkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QURNSjtBQ0xJO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsdUNBQUE7QURPTjs7QUNERTtFQUNFLGtDQUFBO0FESUo7O0FDQUE7RUFDRTtJQUNFLDBCQUFBO0VER0Y7QUFDRjtBQ0FBO0VBQ0ksYUFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0FERUo7O0FDRUE7RUFDSSxhQUFBO0FEQ0o7O0FDRUU7RUFDRSxhQUFBO0VBQ0EsVUFBQTtBRENKO0FDQUk7RUFDRSxhQUFBO0FERU47QUNBSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NGakpVO0VFa0pWLHVCQUFBO0FERU4iLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3ItcHJpbWFyeTogdmFyKC0tcHJpbWFyeSk7XHJcbiR3aGl0ZS1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4kYmxhY2stY29sb3I6IHZhcigtLWJsYWNrKTtcclxuXHJcbjpyb290e1xyXG4gICAgLS1wcmltYXJ5OiAjMDBiM2FjO1xyXG4gICAgLS13aGl0ZTogI2ZmZjtcclxuICAgIC0tYmxhY2s6ICMwMDA7XHJcbn0iLCI6cm9vdCB7XG4gIC0tcHJpbWFyeTogIzAwYjNhYztcbiAgLS13aGl0ZTogI2ZmZjtcbiAgLS1ibGFjazogIzAwMDtcbn1cblxuLm1vZGFsLWNvbnRhaW5lciAuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cblxuaDRbbWF0LWRpYWxvZy10aXRsZV0ge1xuICBtYXJnaW46IDAgMCA3cHggIWltcG9ydGFudDtcbn1cblxuLnN1YnNjcmlwdGlvbi1jYXJkIHtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAxcHggM3B4IDBweCwgcmdiYSgyNywgMzEsIDM1LCAwLjEpIDBweCAwcHggMHB4IDFweDtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbn1cblxuLnBsYW5zLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDFmcikpO1xuICBnYXA6IDI1cHg7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuXG4uY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMnB4O1xuICBtaW4taGVpZ2h0OiAyNzBweDtcbn1cblxuLmNoZWNrLWljb24ge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5hY3RpdmUge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMzZweDtcbn1cblxuLmFjdGl2ZS1iIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeSk7XG59XG5cbi5jdXJyZW50LXBsYW4ge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEzcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxM3B4O1xuICBib3gtc2hhZG93OiAwcHggMXB4IDNweCB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLnJlY29tbWVuZGVkLXBsYW4ge1xuICBtaXgtYmxlbmQtbW9kZTogbHVtaW5vc2l0eTtcbn1cblxuLnBsYW5OYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wbGFuLXByaWNlIHtcbiAgZm9udC1zaXplOiAzOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucGxhbi1wcmljZSAuZnMtc21hbGwge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5wbGFuRGVzYyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubWF0LWRpYWxvZyB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG4uZmVhdHVyZXMtaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5mZWF0dXJlcy1oZWFkaW5nIC5pY29uLXdyYXBwZXIge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kOiAjZTdlMGUwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uZmVhdHVyZXMtaGVhZGluZyAuaWNvbi13cmFwcGVyIC5mYS1jYXJldC1kb3duIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0O1xufVxuXG4uY29sbGFwc2VkIC5mYS1jYXJldC1kb3duIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnBsYW5zLWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cbi5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5maWxlLWlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmZpbGUtdXBsb2FkLWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDA7XG59XG4uZmlsZS11cGxvYWQtYnRuIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmZpbGUtdXBsb2FkLWJ0biBsYWJlbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvcmUvdGhlbWVzL3ByaW1hcnkuc2Nzc1wiO1xyXG4ubW9kYWwtY29udGFpbmVyIHtcclxuICAuaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5oNFttYXQtZGlhbG9nLXRpdGxlXSB7XHJcbiAgbWFyZ2luOiAwIDAgN3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdWJzY3JpcHRpb24tY2FyZHtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggMXB4IDNweCAwcHgsIHJnYmEoMjcsIDMxLDM1LCAwLjEpIDBweCAwcHggMHB4IDFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbn1cclxuXHJcbi5wbGFucy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDFmcikpO1xyXG4gICAgZ2FwOiAyNXB4O1xyXG4gICAgbWFyZ2luOiAxNXB4IDA7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAyMnB4O1xyXG4gICAgbWluLWhlaWdodDogMjcwcHg7XHJcbn1cclxuXHJcbi5jaGVjay1pY29uIHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxufVxyXG5cclxuLmFjdGl2ZS1iIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItcHJpbWFyeTtcclxufVxyXG4uY3VycmVudC1wbGFuIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTNweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTNweDtcclxuICBib3gtc2hhZG93OiAwcHggMXB4IDNweCB2YXIoLS1wcmltYXJ5KTtcclxufVxyXG5cclxuLnJlY29tbWVuZGVkLXBsYW57XHJcbiAgbWl4LWJsZW5kLW1vZGU6IGx1bWlub3NpdHk7XHJcbn1cclxuXHJcbi5wbGFuTmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucGxhbi1wcmljZSB7XHJcbiAgZm9udC1zaXplOiAzOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAuZnMtc21hbGwge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLnBsYW5EZXNjIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nIHtcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZlYXR1cmVzLWhlYWRpbmcge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgLmljb24td3JhcHBlcntcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2U3ZTBlMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC5mYS1jYXJldC1kb3due1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY29sbGFwc2Vke1xyXG4gIC5mYS1jYXJldC1kb3due1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpIHtcclxuICAucGxhbnMtY29udGFpbmVye1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9vdGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcblxyXG4uZmlsZS1pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAuZmlsZS11cGxvYWQtYnRuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgLm1hdC1idXR0b24td3JhcHBlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 2157:
/*!*************************************************************************************!*\
  !*** ./src/app/components/offers-and-promotions/offers-and-promotions.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffersAndPromotionsComponent": () => (/* binding */ OffersAndPromotionsComponent)
/* harmony export */ });
/* harmony import */ var _offers_and_promotions_modal_offers_and_promotions_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../offers-and-promotions-modal/offers-and-promotions-modal.component */ 5699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);















function OffersAndPromotionsComponent_th_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Start Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function OffersAndPromotionsComponent_td_14_mat_hint_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Start Date is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function OffersAndPromotionsComponent_td_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 25)(1, "mat-form-field", 26)(2, "mat-label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OffersAndPromotionsComponent_td_14_Template_input_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const element_r14 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](element_r14.start_date = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "mm/dd/yyyy");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "mat-datepicker-toggle", 29)(8, "mat-datepicker", null, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, OffersAndPromotionsComponent_td_14_mat_hint_10_Template, 2, 0, "mat-hint", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r14 = ctx.$implicit;
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r15)("ngModel", element_r14.start_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !element_r14.start_date);
  }
}
function OffersAndPromotionsComponent_th_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "File Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function OffersAndPromotionsComponent_td_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 25)(1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (element_r19 == null ? null : element_r19.image) || "N/A", " ");
  }
}
function OffersAndPromotionsComponent_th_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function OffersAndPromotionsComponent_td_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", element_r20.image_full_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function OffersAndPromotionsComponent_th_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enable / Disable ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function OffersAndPromotionsComponent_td_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 25)(1, "mat-slide-toggle", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OffersAndPromotionsComponent_td_23_Template_mat_slide_toggle_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);
      const element_r21 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](element_r21.is_enabled = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", element_r21.is_enabled);
  }
}
function OffersAndPromotionsComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function OffersAndPromotionsComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 25)(1, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OffersAndPromotionsComponent_td_26_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26);
      const element_r24 = restoredCtx.$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r25.deleteItem(element_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matTooltip", "Delete File");
  }
}
function OffersAndPromotionsComponent_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 38);
  }
}
function OffersAndPromotionsComponent_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 39);
  }
}
function OffersAndPromotionsComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " No record found");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function OffersAndPromotionsComponent_i_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 41);
  }
}
const _c0 = function (a0) {
  return {
    "mr-2": a0
  };
};
class OffersAndPromotionsComponent {
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }
  constructor(api, toaster, location, modal) {
    this.api = api;
    this.toaster = toaster;
    this.location = location;
    this.modal = modal;
    this.displayedColumns = ['start date', 'file name', 'image', 'is_enabled', 'Actions'];
    this.pageSize = 50;
    this.isLoading = false;
    this.totalPages = 0;
  }
  ngOnInit() {
    this.getOffersPromotions();
  }
  getOffersPromotions(params = {
    page: 1,
    per_page: 50
  }) {
    this.api.getOffersAndPromotions(params).subscribe({
      next: res => {
        console.log(res);
        // this.dataSource = new MatTableDataSource<any>(res.data);
        // setTimeout(() => {
        //   this.paginator.pageIndex = params.page - 1;
        //   this.paginator.length = res.data.length;
        // })
        // this.dataSource.paginator = this.paginator;
        this.dataSource = res.data;
        // this.totalPages = res.data.total;
        this.isLoading = false;
      },
      error: err => {
        this.isLoading = false;
        console.log(err);
        this.toaster.error(err.error.message);
      }
    });
  }
  deleteItem(el) {
    swal({
      text: 'Are you sure you want to delete?',
      type: 'warning',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then(willDelete => {
      console.log(el);
      this.api.deleteOffersAndPromotions(el.id).subscribe({
        next: res => {
          console.log(res);
          this.isLoading = false;
          this.toaster.success(res.message);
          this.getOffersPromotions();
        },
        error: err => {
          this.isLoading = false;
          console.log(err);
          this.toaster.error(err.error.message);
        }
      });
    }, error => {});
  }
  openSubscriptionModal() {
    const dailogRef = this.modal.open(_offers_and_promotions_modal_offers_and_promotions_modal_component__WEBPACK_IMPORTED_MODULE_0__.OffersAndPromotionsModalComponent, {
      width: "500px",
      panelClass: "switcher-panel",
      data: {}
    });
    dailogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getOffersPromotions();
      }
    });
  }
  pageChanged(event) {
    this.getOffersPromotions({
      page: event.pageIndex + 1,
      per_page: event.pageSize
    });
  }
  updateOffersPromotions() {
    this.isLoading = true;
    const body = this.dataSource.data.map(obj => {
      console.log(typeof obj.start_date);
      const split = obj.start_date?.toString().split(' ');
      if (typeof obj.start_date != 'string') {
        obj.start_date = `${split[3]}-${(new Date(obj.start_date).getMonth() + 1).toString().padStart(2, '0')}-${split[2]}`;
      }
      return {
        id: obj.id,
        is_enabled: obj.is_enabled ? 1 : 0,
        start_date: obj.start_date
      };
    });
    console.log(body);
    this.api.updateOffersPromotions({
      offer_promotions: body
    }).subscribe({
      next: res => {
        console.log(res);
        this.getOffersPromotions();
        this.toaster.success(res.message);
        this.isLoading = false;
      },
      error: err => {
        this.isLoading = false;
        console.log(err);
        this.toaster.error(err.error.message);
      }
    });
  }
  goBack() {
    this.location.back();
  }
}
OffersAndPromotionsComponent.ɵfac = function OffersAndPromotionsComponent_Factory(t) {
  return new (t || OffersAndPromotionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog));
};
OffersAndPromotionsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: OffersAndPromotionsComponent,
  selectors: [["app-offers-and-promotions"]],
  decls: 40,
  vars: 8,
  consts: [[1, "card"], [1, "card-header", "card-box-shadow", "bt-4", "d-flex", "justify-content-between", "p-3"], [1, "card-title", "m-0", "float-left", "font-weight-bold"], [1, "d-flex", "justify-content-end"], ["matTooltip", "Add an Offer / Promotion", "matTooltipClass", "custom-tooltip", 1, "pr-3", "card-header-icon", "pointer", 3, "click"], [1, "card-body"], [1, "w-100", "table-responsive"], ["mat-table", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "start date"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "file name"], ["matColumnDef", "image"], ["matColumnDef", "is_enabled"], ["matColumnDef", "Actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "text-center py-2 no-record", 4, "ngIf"], [1, "col-md-12", "mt-3", "border-top", "p-2", "button-container", "d-flex", "justify-content-between", "align-items-center"], [1, "forgot-link", 2, "color", "black", "cursor", "pointer", 3, "click"], [1, "fas", "fa-arrow-left"], ["mat-raised-button", "", "type", "submit", 1, "btn", "btn-info", 3, "click"], [3, "ngClass"], ["class", "fas fa-circle-notch fa-spin", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", ""], ["appearance", "outline", 2, "max-width", "150px", "margin", "auto"], [1, "mat-label-field-padding"], ["matInput", "", "type", "text", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["class", "error", 4, "ngIf"], [1, "error"], [1, "my-3"], ["width", "100", "height", "100", 1, "my-3", 3, "src"], [1, "d-block", "example-margin", 2, "max-width", "max-content", "margin", "auto", 3, "ngModel", "ngModelChange"], ["matTooltipClass", "custom-tooltip", 1, "pointer", 3, "matTooltip", "click"], [1, "fas", "fa-2x", "fa-trash-alt", 2, "font-size", "1.6em", "color", "#c41414"], ["mat-header-row", ""], ["mat-row", ""], [1, "text-center", "py-2", "no-record"], [1, "fas", "fa-circle-notch", "fa-spin"]],
  template: function OffersAndPromotionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "div", 1)(3, "h4", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Offers and Promotions ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3)(6, "div")(7, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OffersAndPromotionsComponent_Template_mat_icon_click_7_listener() {
        return ctx.openSubscriptionModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "table", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](12, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, OffersAndPromotionsComponent_th_13_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, OffersAndPromotionsComponent_td_14_Template, 11, 4, "td", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](15, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, OffersAndPromotionsComponent_th_16_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, OffersAndPromotionsComponent_td_17_Template, 3, 1, "td", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](18, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, OffersAndPromotionsComponent_th_19_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, OffersAndPromotionsComponent_td_20_Template, 2, 1, "td", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](21, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, OffersAndPromotionsComponent_th_22_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, OffersAndPromotionsComponent_td_23_Template, 2, 1, "td", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](24, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, OffersAndPromotionsComponent_th_25_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, OffersAndPromotionsComponent_td_26_Template, 3, 1, "td", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, OffersAndPromotionsComponent_tr_27_Template, 1, 0, "tr", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, OffersAndPromotionsComponent_tr_28_Template, 1, 0, "tr", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, OffersAndPromotionsComponent_div_29_Template, 2, 0, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 18)(31, "div")(32, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OffersAndPromotionsComponent_Template_a_click_32_listener() {
        return ctx.goBack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " Go back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OffersAndPromotionsComponent_Template_button_click_35_listener() {
        return ctx.updateOffersPromotions();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Update");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, OffersAndPromotionsComponent_i_39_Template, 1, 0, "i", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx.dataSource == null ? null : ctx.dataSource.length));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, ctx.isLoading));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerToggle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatSuffix, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__.MatSlideToggle, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRow, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltip],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6108:
/*!***********************************************************************************!*\
  !*** ./src/app/components/press-coverage-modal/press-coverage-modal.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PressCoverageModalComponent": () => (/* binding */ PressCoverageModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
















function PressCoverageModalComponent_h4_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Create a Press Coverage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function PressCoverageModalComponent_h4_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Update a Press Coverage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function PressCoverageModalComponent_mat_hint_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Title is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function PressCoverageModalComponent_mat_hint_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Description is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function PressCoverageModalComponent_mat_hint_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " External URL is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function PressCoverageModalComponent_mat_hint_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " URL is not valid! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function PressCoverageModalComponent_mat_hint_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Country is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function PressCoverageModalComponent_mat_hint_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Is Featured is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function PressCoverageModalComponent_mat_hint_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Published Date is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function PressCoverageModalComponent_mat_hint_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Priority Date is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function PressCoverageModalComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44)(1, "div", 45)(2, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PressCoverageModalComponent_div_78_Template_i_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      ctx_r17.desktopUpdatedThumbImg = null;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.desktopImgFile = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r11.desktopUpdatedThumbImg, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function PressCoverageModalComponent_mat_hint_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Desktop image is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function PressCoverageModalComponent_div_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44)(1, "div", 45)(2, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PressCoverageModalComponent_div_90_Template_i_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      ctx_r19.mobileUpdatedThumbImg = null;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r19.mobileImgFile = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r13.mobileUpdatedThumbImg, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function PressCoverageModalComponent_mat_hint_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Mobile image is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function PressCoverageModalComponent_button_100_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PressCoverageModalComponent_button_100_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r21.createPressCoverage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Create ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function PressCoverageModalComponent_button_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PressCoverageModalComponent_button_101_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r23.updatePressCoverage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class PressCoverageModalComponent {
  constructor(data, dialogRef, api, toaster, fb) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.api = api;
    this.toaster = toaster;
    this.fb = fb;
    this.isLoading = false;
    this.formSubmitted = false;
    this.form = this.fb.group({
      title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      desktop_image: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      mobile_image: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      country: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      vendor: [''],
      is_enabled: [''],
      is_featured: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      published_at: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      priority: ['999999', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      external_url: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/)]]
    });
    console.log(this.data);
    if (this.data.isEdit) {
      this.form.get('desktop_image')?.setValidators([]);
      this.form.get('mobile_image')?.setValidators([]);
      this.form.patchValue({
        description: this.data.dataToEdit.description,
        title: this.data.dataToEdit.title,
        vendor: this.data.dataToEdit.vendor,
        external_url: this.data.dataToEdit.external_url,
        is_enabled: this.data.dataToEdit.is_enabled ? true : false,
        priority: this.data.dataToEdit.priority,
        country: this.data.dataToEdit.country,
        published_at: this.data.dataToEdit.published_at,
        is_featured: this.data.dataToEdit.is_featured
      });
      this.desktopUpdatedThumbImg = this.data.dataToEdit.desktop_image_full_url;
      this.mobileUpdatedThumbImg = this.data.dataToEdit.mobile_image_full_url;
    }
  }
  ngOnInit() {}
  createPressCoverage() {
    this.formSubmitted = true;
    if (!this.form.valid) {
      return;
    }
    this.isLoading = true;
    const formData = new FormData();
    formData.append('title', this.form.value.title + '');
    formData.append('description', this.form.value.description + '');
    formData.append('vendor', this.form.value.vendor + '');
    formData.append('country', this.form.value.country + '');
    formData.append('external_url', this.form.value.external_url + '');
    formData.append('is_enabled', this.form.value.is_enabled ? '1' : '0');
    formData.append('desktop_image', this.desktopImgFile);
    formData.append('mobile_image', this.mobileImgFile);
    if (this.form.value.published_at) {
      const dateObject = new Date(this.form.value.published_at);
      formData.append('published_at', `${dateObject.getFullYear()}-${String(dateObject.getMonth() + 1).padStart(2, '0')}-${String(dateObject.getDate()).padStart(2, '0')}`);
    }
    formData.append('is_featured', this.form.value.is_featured);
    formData.append('priority', this.form.value.priority);
    this.api.createPressCoverage(formData).subscribe({
      next: res => {
        console.log(res);
        this.dialogRef.close(true);
        this.isLoading = false;
      },
      error: err => {
        this.isLoading = false;
        console.log(err);
        this.toaster.error(err.error.message);
      }
    });
  }
  updatePressCoverage() {
    this.formSubmitted = true;
    if (!this.form.valid) {
      return;
    }
    this.isLoading = true;
    const formData = new FormData();
    formData.append('title', this.form.value.title + '');
    formData.append('description', this.form.value.description + '');
    formData.append('vendor', this.form.value.vendor + '');
    formData.append('country', this.form.value.country + '');
    formData.append('external_url', this.form.value.external_url + '');
    formData.append('is_enabled', this.form.value.is_enabled ? '1' : '0');
    formData.append('_method', 'PATCH');
    if (this.form.value.published_at) {
      const dateObject = new Date(this.form.value.published_at);
      formData.append('published_at', `${dateObject.getFullYear()}-${String(dateObject.getMonth() + 1).padStart(2, '0')}-${String(dateObject.getDate()).padStart(2, '0')}`);
    }
    formData.append('is_featured', this.form.value.is_featured);
    formData.append('priority', this.form.value.priority);
    if (this.form.value.desktop_image) {
      formData.append('desktop_image', this.desktopImgFile);
    }
    if (this.form.value.mobile_image) {
      formData.append('mobile_image', this.mobileImgFile);
    }
    this.form.value._method = 'PATCH';
    this.api.updatePressCoverage(formData, this.data.dataToEdit.id).subscribe({
      next: res => {
        this.dialogRef.close(true);
        this.isLoading = false;
        this.toaster.success(res.message);
      },
      error: err => {
        this.isLoading = false;
        console.log(err);
        this.toaster.error(err.error.message);
      }
    });
  }
  preview(event, isDesktop) {
    let files = event.target?.files;
    if (files.length === 0) return;
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = _event => {
      if (isDesktop) {
        this.desktopUpdatedThumbImg = reader.result;
        this.desktopImgFile = files[0];
        this.form.patchValue({
          desktop_image: files[0]
        });
      } else {
        this.mobileUpdatedThumbImg = reader.result;
        this.mobileImgFile = files[0];
        this.form.patchValue({
          mobile_image: files[0]
        });
      }
    };
  }
  get formControl() {
    return this.form.controls;
  }
}
PressCoverageModalComponent.ɵfac = function PressCoverageModalComponent_Factory(t) {
  return new (t || PressCoverageModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
};
PressCoverageModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PressCoverageModalComponent,
  selectors: [["app-press-coverage-modal"]],
  decls: 102,
  vars: 20,
  consts: [[1, "modal-container"], [1, "header", "border-bottom"], ["mat-dialog-title", "", 4, "ngIf"], [1, "close-icon", 3, "mat-dialog-close"], [1, "body"], [1, "mat-dialog"], [1, "row", "p-3"], [1, "col-md-12"], [3, "formGroup"], [1, "row"], [1, "col-12", "col-sm-6", "col-md-6", "col-lg-3", "form-group"], ["appearance", "outline"], [1, "mat-label-field-padding"], ["matInput", "", "formControlName", "title", "type", "text"], ["class", "error", 4, "ngIf"], ["matInput", "", "formControlName", "description", "type", "text"], ["matInput", "", "formControlName", "vendor", "type", "text"], ["matInput", "", "formControlName", "external_url", "type", "text"], ["appearance", "outline", 1, "w-100"], ["formControlName", "country"], ["value", "national"], ["value", "global"], ["matInput", "", "formControlName", "is_featured", "type", "number", "value", "0"], ["matInput", "", "formControlName", "published_at", "type", "text", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "formControlName", "priority", "type", "text"], [1, "col-12", "form-group", "my-3"], ["formControlName", "is_enabled", 1, "d-block", "example-margin"], [1, "col-12", "col-md-4"], [1, "mt-4"], [1, "section-heading", "section-heading-not-first"], ["class", " mb-3", 4, "ngIf"], [1, "col-12", "mb-3"], ["id", "file-upload", "type", "file", "accept", "image/png, image/jpeg, image/webp", 1, "file-input", 3, "change"], ["mat-raised-button", "", "type", "button", 1, "file-upload-btn"], ["for", "file-upload"], ["id", "mobile-file-upload", "type", "file", "accept", "image/png, image/jpeg, image/webp", 1, "file-input", 3, "change"], ["for", "mobile-file-upload"], [1, "footer"], ["mat-raised-button", "", 1, "ml-3", "mb-3", 2, "color", "black !important", 3, "click"], ["class", "btn btn-info ml-3 mb-3", 3, "click", 4, "ngIf"], ["mat-dialog-title", ""], [1, "error"], [1, "mb-3"], [1, "logo-wrap"], ["aria-hidden", "true", 1, "fa", "fa-times", "fa-1x", 3, "click"], ["width", "100", "height", "100", 1, "logo-btn", 3, "src"], [1, "btn", "btn-info", "ml-3", "mb-3", 3, "click"]],
  template: function PressCoverageModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PressCoverageModalComponent_h4_2_Template, 2, 0, "h4", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PressCoverageModalComponent_h4_3_Template, 2, 0, "h4", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "mat-dialog-content", 5)(8, "div", 6)(9, "div", 7)(10, "form", 8)(11, "div", 9)(12, "div", 10)(13, "mat-form-field", 11)(14, "mat-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, PressCoverageModalComponent_mat_hint_17_Template, 2, 0, "mat-hint", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10)(19, "mat-form-field", 11)(20, "mat-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Description");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, PressCoverageModalComponent_mat_hint_23_Template, 2, 0, "mat-hint", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 10)(25, "mat-form-field", 11)(26, "mat-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Vendor");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 10)(30, "mat-form-field", 11)(31, "mat-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "External URL");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, PressCoverageModalComponent_mat_hint_34_Template, 2, 0, "mat-hint", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, PressCoverageModalComponent_mat_hint_35_Template, 2, 0, "mat-hint", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 10)(37, "mat-form-field", 18)(38, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Country");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-select", 19)(41, "mat-option", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "National");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-option", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Global");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, PressCoverageModalComponent_mat_hint_45_Template, 2, 0, "mat-hint", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 10)(47, "mat-form-field", 18)(48, "mat-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Is Featured");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, PressCoverageModalComponent_mat_hint_51_Template, 2, 0, "mat-hint", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 10)(53, "mat-form-field", 18)(54, "mat-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Published Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "mat-hint");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "mm/dd/yyyy");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "mat-datepicker-toggle", 24)(60, "mat-datepicker", null, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, PressCoverageModalComponent_mat_hint_62_Template, 2, 0, "mat-hint", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 10)(64, "mat-form-field", 18)(65, "mat-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Priority");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, PressCoverageModalComponent_mat_hint_68_Template, 2, 0, "mat-hint", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 27)(70, "mat-slide-toggle", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, " Enable/Disable the Press Coverage");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 9)(73, "div", 29)(74, "div", 30)(75, "h3", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, " Desktop Image ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](78, PressCoverageModalComponent_div_78_Template, 4, 1, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 33)(80, "input", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function PressCoverageModalComponent_Template_input_change_80_listener($event) {
        return ctx.preview($event, true);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "button", 35)(82, "label", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, " Browse and upload Desktop Image ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, PressCoverageModalComponent_mat_hint_84_Template, 2, 0, "mat-hint", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 29)(86, "div", 30)(87, "h3", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, " Mobile Image ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](90, PressCoverageModalComponent_div_90_Template, 4, 1, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 33)(92, "input", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function PressCoverageModalComponent_Template_input_change_92_listener($event) {
        return ctx.preview($event, false);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "button", 35)(94, "label", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, " Browse and upload Mobile Image ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](96, PressCoverageModalComponent_mat_hint_96_Template, 2, 0, "mat-hint", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 39)(98, "button", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PressCoverageModalComponent_Template_button_click_98_listener() {
        return ctx.dialogRef.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](100, PressCoverageModalComponent_button_100_Template, 2, 0, "button", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](101, PressCoverageModalComponent_button_101_Template, 2, 0, "button", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](61);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.data.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formSubmitted && ctx.formControl["title"].errors && ctx.formControl["title"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formSubmitted && ctx.formControl["description"].errors && ctx.formControl["description"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formSubmitted && ctx.formControl["external_url"].errors && ctx.formControl["external_url"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formSubmitted && ctx.formControl["external_url"].errors && ctx.formControl["external_url"].errors["pattern"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formSubmitted && ctx.formControl["country"].errors && ctx.formControl["country"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formSubmitted && ctx.formControl["is_featured"].errors && ctx.formControl["is_featured"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formSubmitted && ctx.formControl["published_at"].errors && ctx.formControl["published_at"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formSubmitted && ctx.formControl["priority"].errors && ctx.formControl["priority"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.desktopUpdatedThumbImg);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formSubmitted && ctx.formControl["desktop_image"].errors && ctx.formControl["desktop_image"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mobileUpdatedThumbImg);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formSubmitted && ctx.formControl["mobile_image"].errors && ctx.formControl["mobile_image"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.data.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.isEdit);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerToggle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__.MatSlideToggle],
  styles: ["[_ngcontent-%COMP%]:root {\n  --primary: #00b3ac;\n  --white: #fff;\n  --black: #000;\n}\n\n.modal-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 10px;\n}\n\nh4[mat-dialog-title][_ngcontent-%COMP%] {\n  margin: 0 0 7px !important;\n}\n\n.subscription-card[_ngcontent-%COMP%] {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(27, 31, 35, 0.1) 0px 0px 0px 1px;\n  border-radius: 13px;\n}\n\n.plans-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n  gap: 25px;\n  margin: 15px 0;\n}\n\n.card-content[_ngcontent-%COMP%] {\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n  min-height: 270px;\n}\n\n.check-icon[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 36px;\n}\n\n.active-b[_ngcontent-%COMP%] {\n  border: 1px solid var(--primary);\n}\n\n.current-plan[_ngcontent-%COMP%] {\n  width: 100%;\n  color: var(--primary);\n  font-size: 16px;\n  font-weight: 400;\n  border-top-left-radius: 13px;\n  border-top-right-radius: 13px;\n  box-shadow: 0px 1px 3px var(--primary);\n}\n\n.recommended-plan[_ngcontent-%COMP%] {\n  mix-blend-mode: luminosity;\n}\n\n.planName[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 22px;\n  text-align: center;\n}\n\n.plan-price[_ngcontent-%COMP%] {\n  font-size: 38px;\n  text-align: center;\n}\n.plan-price[_ngcontent-%COMP%]   .fs-small[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.planDesc[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.mat-dialog[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n\n.features-heading[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px;\n  width: 100%;\n  border: none;\n  background: transparent;\n}\n.features-heading[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  background: #e7e0e0;\n  border-radius: 50%;\n}\n.features-heading[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]   .fa-caret-down[_ngcontent-%COMP%] {\n  font-size: 24px;\n  transform: rotate(-180deg);\n  transition: transform 250ms ease-in-out;\n}\n\n.collapsed[_ngcontent-%COMP%]   .fa-caret-down[_ngcontent-%COMP%] {\n  transform: rotate(0deg) !important;\n}\n\n@media screen and (max-width: 768px) {\n  .plans-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 1rem;\n  border-top: 1px solid rgba(0, 0, 0, 0.2);\n}\n\n.file-input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.file-upload-btn[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0;\n}\n.file-upload-btn[_ngcontent-%COMP%]   .mat-button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\n.file-upload-btn[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  cursor: pointer;\n  margin: 0;\n  padding: 12px;\n  background-color: var(--primary);\n  color: white !important;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 95%;\n}\n\n  .mat-form-field-hint-wrapper {\n  display: block !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9jb3JlL3RoZW1lcy9wcmltYXJ5LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi9TYWklMjBLaXJhbi9Eb2N1bWVudHMvYWRtaW4taGlzZW5zZS9oaXNlbnNlLWFkbWluL3NyYy9hcHAvY29tcG9uZW50cy9wcmVzcy1jb3ZlcmFnZS1tb2RhbC9wcmVzcy1jb3ZlcmFnZS1tb2RhbC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcmVzcy1jb3ZlcmFnZS1tb2RhbC9wcmVzcy1jb3ZlcmFnZS1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUNISjs7QUNERTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QURJSjs7QUNBQTtFQUNFLDBCQUFBO0FER0Y7O0FDQUE7RUFDRSxxRkFBQTtFQUNBLG1CQUFBO0FER0Y7O0FDQUE7RUFDRSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBREdGOztBQ0FBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBREdGOztBQ0FBO0VBQ0UsWUFBQTtBREdGOztBQ0FBO0VBQ0UscUJGeENjO0VFeUNkLGVBQUE7QURHRjs7QUNBQTtFQUNFLGdDQUFBO0FER0Y7O0FDQUE7RUFDRSxXQUFBO0VBQ0EscUJGbERjO0VFbURkLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQ0FBQTtBREdGOztBQ0FBO0VBQ0UsMEJBQUE7QURHRjs7QUNBQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FER0Y7O0FDQUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QURHRjtBQ0RFO0VBQ0UsZUFBQTtBREdKOztBQ0NBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURFRjs7QUNDQTtFQUNFLG9CQUFBO0FERUY7O0FDQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FERUY7QUNBRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBREVKO0FDQUk7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSx1Q0FBQTtBREVOOztBQ0lFO0VBQ0Usa0NBQUE7QURESjs7QUNLQTtFQUNFO0lBQ0UsMEJBQUE7RURGRjtBQUNGO0FDS0E7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7QURIRjs7QUNPQTtFQUNFLGFBQUE7QURKRjs7QUNPQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0FESkY7QUNNRTtFQUNFLGFBQUE7QURKSjtBQ09FO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxnQ0Z4Slk7RUV5SlosdUJBQUE7QURMSjs7QUNTQTtFQUNFLFVBQUE7QURORjs7QUNTQTtFQUNFLHlCQUFBO0FETkYiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3ItcHJpbWFyeTogdmFyKC0tcHJpbWFyeSk7XHJcbiR3aGl0ZS1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4kYmxhY2stY29sb3I6IHZhcigtLWJsYWNrKTtcclxuXHJcbjpyb290e1xyXG4gICAgLS1wcmltYXJ5OiAjMDBiM2FjO1xyXG4gICAgLS13aGl0ZTogI2ZmZjtcclxuICAgIC0tYmxhY2s6ICMwMDA7XHJcbn0iLCI6cm9vdCB7XG4gIC0tcHJpbWFyeTogIzAwYjNhYztcbiAgLS13aGl0ZTogI2ZmZjtcbiAgLS1ibGFjazogIzAwMDtcbn1cblxuLm1vZGFsLWNvbnRhaW5lciAuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cblxuaDRbbWF0LWRpYWxvZy10aXRsZV0ge1xuICBtYXJnaW46IDAgMCA3cHggIWltcG9ydGFudDtcbn1cblxuLnN1YnNjcmlwdGlvbi1jYXJkIHtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAxcHggM3B4IDBweCwgcmdiYSgyNywgMzEsIDM1LCAwLjEpIDBweCAwcHggMHB4IDFweDtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbn1cblxuLnBsYW5zLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDFmcikpO1xuICBnYXA6IDI1cHg7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuXG4uY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMnB4O1xuICBtaW4taGVpZ2h0OiAyNzBweDtcbn1cblxuLmNoZWNrLWljb24ge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5hY3RpdmUge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMzZweDtcbn1cblxuLmFjdGl2ZS1iIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeSk7XG59XG5cbi5jdXJyZW50LXBsYW4ge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEzcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxM3B4O1xuICBib3gtc2hhZG93OiAwcHggMXB4IDNweCB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLnJlY29tbWVuZGVkLXBsYW4ge1xuICBtaXgtYmxlbmQtbW9kZTogbHVtaW5vc2l0eTtcbn1cblxuLnBsYW5OYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wbGFuLXByaWNlIHtcbiAgZm9udC1zaXplOiAzOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucGxhbi1wcmljZSAuZnMtc21hbGwge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5wbGFuRGVzYyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubWF0LWRpYWxvZyB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG4uZmVhdHVyZXMtaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5mZWF0dXJlcy1oZWFkaW5nIC5pY29uLXdyYXBwZXIge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kOiAjZTdlMGUwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uZmVhdHVyZXMtaGVhZGluZyAuaWNvbi13cmFwcGVyIC5mYS1jYXJldC1kb3duIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0O1xufVxuXG4uY29sbGFwc2VkIC5mYS1jYXJldC1kb3duIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnBsYW5zLWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cbi5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5maWxlLWlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmZpbGUtdXBsb2FkLWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDA7XG59XG4uZmlsZS11cGxvYWQtYnRuIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmZpbGUtdXBsb2FkLWJ0biBsYWJlbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDk1JTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1oaW50LXdyYXBwZXIge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Nzcy9jb3JlL3RoZW1lcy9wcmltYXJ5LnNjc3NcIjtcclxuXHJcbi5tb2RhbC1jb250YWluZXIge1xyXG4gIC5oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICB9XHJcbn1cclxuXHJcbmg0W21hdC1kaWFsb2ctdGl0bGVdIHtcclxuICBtYXJnaW46IDAgMCA3cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN1YnNjcmlwdGlvbi1jYXJkIHtcclxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDFweCAzcHggMHB4LCByZ2JhKDI3LCAzMSwgMzUsIDAuMSkgMHB4IDBweCAwcHggMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbn1cclxuXHJcbi5wbGFucy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMWZyKSk7XHJcbiAgZ2FwOiAyNXB4O1xyXG4gIG1hcmdpbjogMTVweCAwO1xyXG59XHJcblxyXG4uY2FyZC1jb250ZW50IHtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDIycHg7XHJcbiAgbWluLWhlaWdodDogMjcwcHg7XHJcbn1cclxuXHJcbi5jaGVjay1pY29uIHtcclxuICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbn1cclxuXHJcbi5hY3RpdmUtYiB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLXByaW1hcnk7XHJcbn1cclxuXHJcbi5jdXJyZW50LXBsYW4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxM3B4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxM3B4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IHZhcigtLXByaW1hcnkpO1xyXG59XHJcblxyXG4ucmVjb21tZW5kZWQtcGxhbiB7XHJcbiAgbWl4LWJsZW5kLW1vZGU6IGx1bWlub3NpdHk7XHJcbn1cclxuXHJcbi5wbGFuTmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucGxhbi1wcmljZSB7XHJcbiAgZm9udC1zaXplOiAzOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgLmZzLXNtYWxsIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbi5wbGFuRGVzYyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ubWF0LWRpYWxvZyB7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mZWF0dXJlcy1oZWFkaW5nIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICAuaWNvbi13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2U3ZTBlMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcbiAgICAuZmEtY2FyZXQtZG93biB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XHJcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jb2xsYXBzZWQge1xyXG4gIC5mYS1jYXJldC1kb3duIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KSB7XHJcbiAgLnBsYW5zLWNvbnRhaW5lciB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcblxyXG4uZmlsZS1pbnB1dCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmZpbGUtdXBsb2FkLWJ0biB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAwO1xyXG5cclxuICAubWF0LWJ1dHRvbi13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuICBsYWJlbCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxubWF0LWZvcm0tZmllbGR7XHJcbiAgd2lkdGg6IDk1JTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1oaW50LXdyYXBwZXJ7XHJcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 9831:
/*!*************************************************************************!*\
  !*** ./src/app/components/press-coverages/press-coverages.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PressCoveragesComponent": () => (/* binding */ PressCoveragesComponent)
/* harmony export */ });
/* harmony import */ var _press_coverage_modal_press_coverage_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../press-coverage-modal/press-coverage-modal.component */ 6108);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);










function PressCoveragesComponent_th_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PressCoveragesComponent_td_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22)(1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r17 == null ? null : element_r17.title, " ");
  }
}
function PressCoveragesComponent_th_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PressCoveragesComponent_td_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22)(1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (element_r18 == null ? null : element_r18.description) || "N/A", " ");
  }
}
function PressCoveragesComponent_th_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Desktop Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PressCoveragesComponent_td_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", element_r19.desktop_image_full_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function PressCoveragesComponent_th_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Mobile Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PressCoveragesComponent_td_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", element_r20.mobile_image_full_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function PressCoveragesComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Vendor");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PressCoveragesComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (element_r21 == null ? null : element_r21.vendor) || "N/A", " ");
  }
}
function PressCoveragesComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "External URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PressCoveragesComponent_td_29_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", element_r22 == null ? null : element_r22.external_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](element_r22 == null ? null : element_r22.external_url);
  }
}
function PressCoveragesComponent_td_29_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PressCoveragesComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PressCoveragesComponent_td_29_a_1_Template, 2, 2, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PressCoveragesComponent_td_29_div_2_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", element_r22 == null ? null : element_r22.external_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(element_r22 == null ? null : element_r22.external_url));
  }
}
function PressCoveragesComponent_th_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PressCoveragesComponent_td_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22)(1, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PressCoveragesComponent_td_32_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);
      const element_r26 = restoredCtx.$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r27.openSubscriptionModal(element_r26, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PressCoveragesComponent_td_32_Template_a_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);
      const element_r26 = restoredCtx.$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r29.deleteItem(element_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matTooltip", "Delete File");
  }
}
function PressCoveragesComponent_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 33);
  }
}
function PressCoveragesComponent_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 34);
  }
}
function PressCoveragesComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " No record found");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return [50, 100, 200];
};
class PressCoveragesComponent {
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }
  constructor(api, toaster, location, modal) {
    this.api = api;
    this.toaster = toaster;
    this.location = location;
    this.modal = modal;
    this.displayedColumns = ['title', 'description', 'desktop_image', 'mobile_image', 'vendor', 'external_url', 'Actions']; //'priority',
    this.pageSize = 50;
    this.isLoading = false;
    this.totalPages = 0;
  }
  ngOnInit() {
    this.getPressCoverages();
  }
  getPressCoverages(params = {
    page: 1,
    per_page: 50
  }) {
    this.api.getPressCoverages(params).subscribe({
      next: res => {
        console.log(res);
        // this.dataSource = new MatTableDataSource<any>(res.data.data);
        // setTimeout(() => {
        //   this.paginator.pageIndex = params.page - 1;
        //   this.paginator.length = res.data.total;
        // })
        // this.dataSource.paginator = this.paginator;
        this.dataSource = res.data.data;
        this.totalPages = res.data.total;
        this.isLoading = false;
      },
      error: err => {
        this.isLoading = false;
        console.log(err);
        this.toaster.error(err.error.message);
      }
    });
  }
  deleteItem(el) {
    swal({
      text: 'Are you sure you want to delete?',
      type: 'warning',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then(willDelete => {
      console.log(el);
      this.api.deletePressCoverage(el.id).subscribe({
        next: res => {
          console.log(res);
          this.isLoading = false;
          this.toaster.success(res.message);
          this.getPressCoverages();
        },
        error: err => {
          this.isLoading = false;
          console.log(err);
          this.toaster.error(err.error.message);
        }
      });
    }, error => {});
  }
  openSubscriptionModal(dataToEdit, isEdit = false) {
    const dailogRef = this.modal.open(_press_coverage_modal_press_coverage_modal_component__WEBPACK_IMPORTED_MODULE_0__.PressCoverageModalComponent, {
      width: "80vw",
      panelClass: "switcher-panel",
      data: {
        isEdit,
        dataToEdit
      }
    });
    dailogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getPressCoverages();
      }
    });
  }
  pageChanged(event) {
    this.getPressCoverages({
      page: event.pageIndex + 1,
      per_page: event.pageSize
    });
  }
  goBack() {
    this.location.back();
  }
}
PressCoveragesComponent.ɵfac = function PressCoveragesComponent_Factory(t) {
  return new (t || PressCoveragesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog));
};
PressCoveragesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: PressCoveragesComponent,
  selectors: [["app-press-coverages"]],
  decls: 37,
  vars: 8,
  consts: [[1, "card"], [1, "card-header", "card-box-shadow", "bt-4", "d-flex", "justify-content-between", "p-3"], [1, "card-title", "m-0", "float-left", "font-weight-bold"], [1, "d-flex", "justify-content-end"], ["matTooltip", "Add a Press Coverage", "matTooltipClass", "custom-tooltip", 1, "pr-3", "card-header-icon", "pointer", 3, "click"], [1, "card-body"], [1, "w-100", "table-responsive"], ["mat-table", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "title"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "description"], ["matColumnDef", "desktop_image"], ["matColumnDef", "mobile_image"], ["matColumnDef", "vendor"], ["matColumnDef", "external_url"], ["matColumnDef", "Actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "text-center py-2 no-record", 4, "ngIf"], [3, "length", "pageSizeOptions", "pageSize", "page"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "text__limit__3"], [1, "my-3", "text__limit__3"], ["width", "100", "height", "100", 1, "my-3", 3, "src"], ["class", "text__limit__3", "target", "_blank", 3, "href", 4, "ngIf"], [4, "ngIf"], ["target", "_blank", 1, "text__limit__3", 3, "href"], ["matTooltip", "Edit Press Coverage", "matTooltipClass", "custom-tooltip", 1, "pointer", 3, "click"], [1, "fas", "fa-2x", "fa-pen-square", 2, "font-size", "1.6em", "color", "#00b3ac"], ["matTooltipClass", "custom-tooltip", 1, "pointer", "ml-3", 3, "matTooltip", "click"], [1, "fas", "fa-2x", "fa-trash-alt", 2, "font-size", "1.6em", "color", "#c41414"], ["mat-header-row", ""], ["mat-row", ""], [1, "text-center", "py-2", "no-record"]],
  template: function PressCoveragesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "div", 1)(3, "h4", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Press Coverages ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3)(6, "div")(7, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PressCoveragesComponent_Template_mat_icon_click_7_listener() {
        return ctx.openSubscriptionModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "table", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](12, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, PressCoveragesComponent_th_13_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, PressCoveragesComponent_td_14_Template, 3, 1, "td", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](15, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, PressCoveragesComponent_th_16_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, PressCoveragesComponent_td_17_Template, 3, 1, "td", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](18, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, PressCoveragesComponent_th_19_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, PressCoveragesComponent_td_20_Template, 2, 1, "td", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](21, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, PressCoveragesComponent_th_22_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, PressCoveragesComponent_td_23_Template, 2, 1, "td", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](24, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, PressCoveragesComponent_th_25_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, PressCoveragesComponent_td_26_Template, 2, 1, "td", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](27, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, PressCoveragesComponent_th_28_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, PressCoveragesComponent_td_29_Template, 3, 2, "td", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](30, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, PressCoveragesComponent_th_31_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, PressCoveragesComponent_td_32_Template, 5, 1, "td", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, PressCoveragesComponent_tr_33_Template, 1, 0, "tr", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, PressCoveragesComponent_tr_34_Template, 1, 0, "tr", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, PressCoveragesComponent_div_35_Template, 2, 0, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "mat-paginator", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("page", function PressCoveragesComponent_Template_mat_paginator_page_36_listener($event) {
        return ctx.pageChanged($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.totalPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("length", ctx.totalPages)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c0))("pageSize", ctx.pageSize);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltip],
  styles: [".text__limit__3[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: -moz-box;\n  -webkit-line-clamp: 3;\n  box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-box-orient: vertical;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcmVzcy1jb3ZlcmFnZXMvcHJlc3MtY292ZXJhZ2VzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vU2FpJTIwS2lyYW4vRG9jdW1lbnRzL2FkbWluLWhpc2Vuc2UvaGlzZW5zZS1hZG1pbi9zcmMvYXBwL2NvbXBvbmVudHMvcHJlc3MtY292ZXJhZ2VzL3ByZXNzLWNvdmVyYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUVBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0FDQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dF9fbGltaXRfXzMge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcclxuICAgIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICBib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbn0iLCIudGV4dF9fbGltaXRfXzMge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 7995:
/*!*********************************************************************!*\
  !*** ./src/app/components/product-group/product-group.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductGroupComponent": () => (/* binding */ ProductGroupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);

















const _c0 = ["inputMMultipleFiles"];
const _c1 = ["input"];
function ProductGroupComponent_a_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "(View on Website)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r0.environment.websiteUrl + ctx_r0.relativeUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function ProductGroupComponent_mat_error_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Product Group Code is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductGroupComponent_mat_error_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Product Name is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductGroupComponent_mat_option_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", product_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", product_r14.name, " ");
  }
}
function ProductGroupComponent_mat_error_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Product Group Type is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductGroupComponent_mat_option_40_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const category_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", category_r15.parent_category.name, ") ");
  }
}
function ProductGroupComponent_mat_option_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProductGroupComponent_mat_option_40_ng_container_2_Template, 2, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", category_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", category_r15.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", category_r15.parent_category.name);
  }
}
function ProductGroupComponent_mat_error_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Category is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductGroupComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33)(1, "mat-slide-toggle", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Enable/Disable the product group");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ProductGroupComponent_mat_tab_43_th_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Product ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductGroupComponent_mat_tab_43_td_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r29.name, " ");
  }
}
function ProductGroupComponent_mat_tab_43_th_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Open on Website ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductGroupComponent_mat_tab_43_td_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 47)(1, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r30 = ctx.$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r21.environment.websiteUrl + element_r30.relative_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r21.environment.websiteUrl, "", element_r30.relative_url, "");
  }
}
function ProductGroupComponent_mat_tab_43_th_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Priority ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductGroupComponent_mat_tab_43_td_11_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const priority_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", priority_r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", priority_r35, " ");
  }
}
function ProductGroupComponent_mat_tab_43_td_11_mat_hint_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Proority is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductGroupComponent_mat_tab_43_td_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 47)(1, "mat-form-field", 49)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-select", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProductGroupComponent_mat_tab_43_td_11_Template_mat_select_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37);
      const element_r32 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](element_r32.priority = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ProductGroupComponent_mat_tab_43_td_11_mat_option_5_Template, 2, 2, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ProductGroupComponent_mat_tab_43_td_11_mat_hint_6_Template, 2, 0, "mat-hint", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r32 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", element_r32.priority);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r23.priorities);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !element_r32.priority);
  }
}
function ProductGroupComponent_mat_tab_43_th_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c2 = function (a1) {
  return ["/update/product-varients", a1];
};
function ProductGroupComponent_mat_tab_43_td_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c2, element_r38.id));
  }
}
function ProductGroupComponent_mat_tab_43_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 54);
  }
}
function ProductGroupComponent_mat_tab_43_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 55);
  }
}
function ProductGroupComponent_mat_tab_43_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No Records Found!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductGroupComponent_mat_tab_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-tab", 10)(1, "div", 35)(2, "table", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](3, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ProductGroupComponent_mat_tab_43_th_4_Template, 2, 0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ProductGroupComponent_mat_tab_43_td_5_Template, 2, 1, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](6, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ProductGroupComponent_mat_tab_43_th_7_Template, 2, 0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ProductGroupComponent_mat_tab_43_td_8_Template, 3, 3, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](9, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ProductGroupComponent_mat_tab_43_th_10_Template, 2, 0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ProductGroupComponent_mat_tab_43_td_11_Template, 7, 3, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](12, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ProductGroupComponent_mat_tab_43_th_13_Template, 2, 0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ProductGroupComponent_mat_tab_43_td_14_Template, 2, 3, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ProductGroupComponent_mat_tab_43_tr_15_Template, 1, 0, "tr", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ProductGroupComponent_mat_tab_43_tr_16_Template, 1, 0, "tr", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ProductGroupComponent_mat_tab_43_div_17_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx_r9.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx_r9.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx_r9.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r9.dataSource == null ? null : ctx_r9.dataSource.length));
  }
}
function ProductGroupComponent_mat_tab_44_th_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductGroupComponent_mat_tab_44_td_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", element_r55.full_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function ProductGroupComponent_mat_tab_44_th_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Priority ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductGroupComponent_mat_tab_44_td_14_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const priority_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", priority_r60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", priority_r60, " ");
  }
}
function ProductGroupComponent_mat_tab_44_td_14_mat_hint_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Proority is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductGroupComponent_mat_tab_44_td_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 47)(1, "mat-form-field", 49)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-select", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProductGroupComponent_mat_tab_44_td_14_Template_mat_select_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r62);
      const element_r57 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](element_r57.priority = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ProductGroupComponent_mat_tab_44_td_14_mat_option_5_Template, 2, 2, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ProductGroupComponent_mat_tab_44_td_14_mat_hint_6_Template, 2, 0, "mat-hint", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r57 = ctx.$implicit;
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", element_r57.priority);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r44.descriptionImagespriorities);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !element_r57.priority);
  }
}
function ProductGroupComponent_mat_tab_44_th_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enable / Disable ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductGroupComponent_mat_tab_44_td_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 47)(1, "mat-slide-toggle", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProductGroupComponent_mat_tab_44_td_17_Template_mat_slide_toggle_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r65);
      const element_r63 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](element_r63.is_enabled = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", element_r63.is_enabled);
  }
}
function ProductGroupComponent_mat_tab_44_th_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductGroupComponent_mat_tab_44_td_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 47)(1, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductGroupComponent_mat_tab_44_td_20_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69);
      const element_r66 = restoredCtx.$implicit;
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r68.removeFile(element_r66));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matTooltip", "Delete File");
  }
}
function ProductGroupComponent_mat_tab_44_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 54);
  }
}
function ProductGroupComponent_mat_tab_44_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 55);
  }
}
function ProductGroupComponent_mat_tab_44_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No Records Found! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductGroupComponent_mat_tab_44_img_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 75);
  }
  if (rf & 2) {
    const img_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", img_r71, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function ProductGroupComponent_mat_tab_44_i_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 76);
  }
}
const _c3 = function (a0) {
  return {
    "spiner": a0
  };
};
function ProductGroupComponent_mat_tab_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-tab", 10)(1, "div", 57)(2, "mat-tab-group", 58)(3, "mat-tab", 10)(4, "div", 57)(5, "h4", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Current Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 35)(8, "table", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](9, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ProductGroupComponent_mat_tab_44_th_10_Template, 2, 0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ProductGroupComponent_mat_tab_44_td_11_Template, 2, 1, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](12, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ProductGroupComponent_mat_tab_44_th_13_Template, 2, 0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ProductGroupComponent_mat_tab_44_td_14_Template, 7, 3, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](15, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ProductGroupComponent_mat_tab_44_th_16_Template, 2, 0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ProductGroupComponent_mat_tab_44_td_17_Template, 2, 1, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](18, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ProductGroupComponent_mat_tab_44_th_19_Template, 2, 0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ProductGroupComponent_mat_tab_44_td_20_Template, 3, 1, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ProductGroupComponent_mat_tab_44_tr_21_Template, 1, 0, "tr", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, ProductGroupComponent_mat_tab_44_tr_22_Template, 1, 0, "tr", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, ProductGroupComponent_mat_tab_44_div_23_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 62)(25, "h4", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Upload More Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, ProductGroupComponent_mat_tab_44_img_28_Template, 1, 1, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductGroupComponent_mat_tab_44_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r73);
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r72.browseMultipleFileButtonClicked());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " Browse Multiple Files ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "input", 66, 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ProductGroupComponent_mat_tab_44_Template_input_change_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r73);
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r74.onFileChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 68)(34, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductGroupComponent_mat_tab_44_Template_button_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r73);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r75.uploadMultipleImages());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, ProductGroupComponent_mat_tab_44_i_36_Template, 1, 0, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selectedIndex", ctx_r10.imagesTabSelectedIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "Description Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx_r10.productImagesDataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx_r10.productImagesDisplayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx_r10.productImagesDisplayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r10.productImagesDataSource == null ? null : ctx_r10.productImagesDataSource.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r10.myFilesImages);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c3, ctx_r10.isLoader));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.isLoader);
  }
}
function ProductGroupComponent_ng_container_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function ProductGroupComponent_ng_container_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function ProductGroupComponent_i_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 76);
  }
}
const _c4 = function (a0) {
  return {
    "mr-2": a0
  };
};
class ProductGroupComponent {
  get formControl() {
    return this.productVarientForm.controls;
  }
  constructor(location, api, fb, toaster, activatedroute, router) {
    this.location = location;
    this.api = api;
    this.fb = fb;
    this.toaster = toaster;
    this.activatedroute = activatedroute;
    this.router = router;
    this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
    this.relativeUrl = '';
    this.products = [];
    // purchaseLinksMetaData: any = [];
    this.componentType = 'create';
    this.selectedIndex = 0;
    this.purchaseLinks = {};
    this.displayedColumns = ['Product', 'Open on Website', 'priority', 'Actions']; //'Purchase Link'
    this.productImagesDisplayedColumns = ['Image', 'priority', 'is_enable', 'Actions'];
    this.priorities = [];
    this.descriptionImagespriorities = [];
    this.isLoader = false;
    this.isLoading = false;
    this.productVarientFormSubmitted = false;
    this.productVarientForm = this.fb.group({
      code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      product_type_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      category_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      is_enabled: [0]
    });
    this.imagesCatalogMedia = [];
    this.myFiles = [];
    this.myFilesImages = [];
  }
  ngOnInit() {
    this.activatedroute.data.subscribe(data => {
      console.log(data);
      this.componentType = data.type;
      this.getMetaData(data);
    });
  }
  getMetaData(data) {
    this.api.getProductGroupCreationMetaData().subscribe({
      next: res => {
        console.log(res);
        this.metaData = res?.data;
        this.products = res?.data?.product_types;
        if (data.type == 'update') {
          this.loadProductInfo();
        }
      },
      error: err => {
        console.log(err);
        this.toaster.error(err.error.message);
      }
    });
  }
  loadProductInfo() {
    this.api.getProductGroupInfo(this.activatedroute.snapshot.params['id']).subscribe({
      next: res => {
        console.log(res);
        // this.products = res?.data?.products;
        // this.purchaseLinksMetaData = this.metaData?.product_variant_purchase_link_vendors;
        // this.purchaseLinksMetaData.forEach((obj: any) => {
        //   this.purchaseLinks[obj.code] = res.data.product_variant_purchase_links.find((o: any) => o.vendor == obj.code)?.purchase_link;
        // })
        this.relativeUrl = res.data.relative_url;
        this.productVarientForm.patchValue({
          code: res?.data?.code,
          name: res?.data?.name,
          product_type_id: res?.data?.product_type_id,
          category_id: res?.data?.category_products[0].category_id,
          is_enabled: res?.data?.is_enabled
        });
        res.data.product_variants = res.data?.product_variants.map((obj, i) => {
          this.priorities.push(i + 1);
          return {
            ...obj,
            priority: i + 1
          };
        });
        // this.dataSource = new MatTableDataSource<any>(res.data.product_variants);
        this.dataSource = res.data.product_variants;
        // res.data.thumb_image.type = 'Large Size'
        // res.data.thumb_image_medium.type = 'Medium Size'
        // this.imagesDataSource = new MatTableDataSource<any>([
        //   res.data?.thumb_image,
        //   res.data?.thumb_image_medium,
        // ])
        this.imagesDataSource = [res.data?.thumb_image, res.data?.thumb_image_medium];
        res.data.description_images_admin = res.data?.description_images_admin.map((obj, i) => {
          this.descriptionImagespriorities.push(i + 1);
          return {
            ...obj,
            priority: i + 1
          };
        });
        // this.productImagesDataSource = new MatTableDataSource<any>(res.data.description_images_admin);
        this.productImagesDataSource = res.data.description_images_admin;
      },
      error: err => {
        console.log(err);
        this.toaster.error(err.error.message);
      }
    });
  }
  saveProductDetailsForm() {
    if (this.componentType === 'create') {
      this.productVarientForm.markAllAsTouched();
      this.productVarientFormSubmitted = true;
      if (!this.productVarientForm.valid) {
        return;
      }
      this.isLoading = true;
      const category_products = {
        category_products: [{
          category_id: this.productVarientForm.value.category_id
        }]
      };
      delete this.productVarientForm.value.category_id;
      delete this.productVarientForm.value.is_enabled;
      this.api.createProductGroup({
        ...this.productVarientForm.value,
        ...category_products
      }).subscribe({
        next: res => {
          this.isLoading = false;
          console.log(res);
          this.toaster.success(res.message);
          this.router.navigate(['/update/product-group', res.data.id]);
        },
        error: err => {
          this.isLoading = false;
          console.log(err);
          this.toaster.error(err.error.message);
        }
      });
    } else {
      console.log(this.selectedIndex);
      if (this.selectedIndex == 0) {
        this.productVarientForm.markAllAsTouched();
        this.productVarientFormSubmitted = true;
        if (!this.productVarientForm.valid) {
          return;
        }
        this.isLoading = true;
        const category_products = {
          category_products: [{
            category_id: this.productVarientForm.value.category_id
          }]
        };
        this.productVarientForm.value.is_enabled = this.productVarientForm.value.is_enabled ? 1 : 0;
        this.api.updateProductGroupInfo(this.activatedroute.snapshot.params['id'], {
          ...this.productVarientForm.value,
          ...category_products
        }).subscribe({
          next: res => {
            this.isLoading = false;
            console.log(res);
            this.toaster.success(res.message);
          },
          error: err => {
            this.isLoading = false;
            console.log(err);
            this.toaster.error(err.error.message);
          }
        });
      } else if (this.selectedIndex == 1) {
        this.isLoading = true;
        this.api.updateProductGroupInfo(this.activatedroute.snapshot.params['id'], {
          product_variants: this.dataSource?.data
        }).subscribe({
          next: res => {
            this.isLoading = false;
            this.toaster.success(res.message);
          },
          error: err => {
            this.isLoading = false;
            console.log(err);
            this.toaster.error(err.error.message);
          }
        });
      } else {
        this.isLoading = true;
        const data = this.productImagesDataSource?.data.map(obj => {
          return {
            id: obj.id,
            priority: obj.priority,
            is_enabled: obj.is_enabled ? 1 : 0
          };
        });
        this.api.bulkUpdateFiles({
          catalog_media: data
        }).subscribe({
          next: res => {
            this.isLoading = false;
            this.toaster.success(res.message);
          },
          error: err => {
            this.isLoading = false;
            console.log(err);
            this.toaster.error(err.error.message);
          }
        });
      }
    }
  }
  changeTab(event) {
    console.log(event);
    console.log(event.index);
    this.selectedIndex = event.index;
    this.isLoading = false;
    this.productVarientFormSubmitted = false;
    // this.productVarientForm.reset();
    if (this.selectedIndex == 2) {
      this.imagesTabSelectedIndex = 1;
      setTimeout(() => {
        this.imagesTabSelectedIndex = 0;
      }, 100);
    }
  }
  browseFileButtonClicked(i) {
    // console.log(this.inputForFile[0]);
    // console.log(this.inputForFile[1]);
    this.inputForFile.forEach((a, index) => {
      console.log(a);
      if (i === index) {
        a.nativeElement.click();
      }
    });
  }
  inputChangeEventListener(event, type, i) {
    console.log(i);
    console.log(this.imagesDataSource);
    let mediaType = '';
    if (type == 'Large Size') {
      mediaType = 'thumb_image';
    } else {
      mediaType = 'thumb_image_medium';
    }
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = _event => {
      this.imagesDataSource.data[i].full_url = reader.result;
    };
    this.imagesDataSource.data[i].media_type = mediaType;
    this.imagesDataSource.data[i].file = event.target.files[0];
  }
  uploadImages() {
    this.imagesCatalogMedia = [...this.imagesDataSource.data];
    // console.log(this.imagesCatalogMedia);
    // const catalog = [];
    this.imagesCatalogMedia = this.imagesCatalogMedia.filter(obj => obj.file && obj.media_type);
    console.log(this.imagesCatalogMedia);
    if (this.imagesCatalogMedia == 0) {
      this.toaster.error('Please modify files before uploading!');
      return;
    }
    let formData = new FormData();
    let index = 0;
    for (let obj of this.imagesCatalogMedia) {
      for (var key in obj) {
        console.log(key);
        formData.append(`catalog_media[${index}][${key}]`, obj[key]);
      }
      index++;
    }
    for (var key1 of formData.entries()) {
      console.log(key1[0] + ', ' + key1[1]);
    }
    console.log(formData);
    this.api.uploadFiles(formData).subscribe({
      next: res => {
        console.log(res);
        this.toaster.success(res.message);
      },
      error: err => {
        console.log(err);
        this.toaster.error(err.error.message);
      }
    });
  }
  removeFile(ele) {
    swal({
      text: 'Are you sure you want to delete?',
      type: 'warning',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then(willDelete => {
      console.log(ele);
      this.api.deleteFiles(ele.id).subscribe({
        next: res => {
          console.log(res);
          this.loadProductInfo();
          this.toaster.success(res.message);
        },
        error: err => {
          console.log(err);
          this.toaster.error(err.error.message);
        }
      });
    }, error => {});
  }
  browseMultipleFileButtonClicked() {
    console.log('came here');
    this.inputMultipleFiles.nativeElement.click();
  }
  onFileChange(event) {
    console.log(event);
    for (let i = 0; i < event.target.files.length; i++) {
      this.myFiles.push({
        file: event.target.files[i],
        media_resource_type: 'product',
        media_resource_id: this.activatedroute.snapshot.params['id'],
        media_type: 'description_image'
      });
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[i]);
      reader.onload = _event => {
        this.myFilesImages.push(reader.result);
      };
    }
    console.log(this.myFiles);
  }
  uploadMultipleImages() {
    const formData = new FormData();
    for (var i = 0; i < this.myFiles.length; i++) {
      for (var key in this.myFiles[i]) {
        formData.append(`catalog_media[${i}][${key}]`, this.myFiles[i][key]);
      }
    }
    this.api.uploadFiles(formData).subscribe({
      next: res => {
        console.log(res);
        this.toaster.success(res.message);
        this.loadProductInfo();
      },
      error: err => {
        console.log(err);
        this.toaster.error(err.error.message);
      }
    });
  }
  goBack() {
    this.location.back();
  }
}
ProductGroupComponent.ɵfac = function ProductGroupComponent_Factory(t) {
  return new (t || ProductGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
};
ProductGroupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ProductGroupComponent,
  selectors: [["app-product-group"]],
  viewQuery: function ProductGroupComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.inputMultipleFiles = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.inputForFile = _t);
    }
  },
  decls: 55,
  vars: 19,
  consts: [[1, "pb-1"], [1, "card"], [1, "card-header", "card-box-shadow", "bt-4", "d-flex", "align-items-center"], [1, "card-title", "m-0", "font-weight-bold"], ["style", "margin-left: 8px;", "target", "_blank", 3, "href", 4, "ngIf"], [1, "card-body"], [1, "row"], [1, "col-sm-12", "mt-3"], ["animationDuration", "0ms", 3, "selectedIndex", "selectedTabChange"], ["ctdTabset", ""], [3, "label"], [1, "row", "p-3"], [1, "col-md-12"], [3, "formGroup"], [1, "col-12", "col-sm-6", "col-md-6", "col-lg-3", "form-group"], ["appearance", "outline"], [1, "mat-label-field-padding"], ["matInput", "", "formControlName", "code", "type", "text"], [4, "ngIf"], ["matInput", "", "formControlName", "name", "type", "text"], ["formControlName", "product_type_id"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "category_id"], ["class", "col-12 form-group", 4, "ngIf"], [3, "label", 4, "ngIf"], [1, "col-md-12", "mt-4", "border-top", "p-2", "button-container", "d-flex", "justify-content-between", "align-items-center"], [1, "forgot-link", 2, "color", "black", "cursor", "pointer", 3, "click"], [1, "fas", "fa-arrow-left"], ["mat-raised-button", "", "type", "submit", 1, "btn", "btn-info", 2, "display", "flex", "gap", "12px", 3, "click"], [3, "ngClass"], ["class", "fas fa-circle-notch fa-spin", 4, "ngIf"], ["target", "_blank", 2, "margin-left", "8px", 3, "href"], [3, "value"], [1, "col-12", "form-group"], ["formControlName", "is_enabled", 1, "d-block", "example-margin"], [1, "w-100", "table-responsive"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "Product"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Open on Website"], ["matColumnDef", "priority"], ["matColumnDef", "Actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "text-center my-3", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", ""], ["target", "_blank", 3, "href"], ["appearance", "outline", 2, "max-width", "80px"], [3, "ngModel", "ngModelChange"], ["class", "error", 4, "ngIf"], [1, "error"], [1, "fas", "fa-2x", "fa-pen-square", "pointer", 2, "font-size", "1.6em", "color", "#00b3ac", 3, "routerLink"], ["mat-header-row", ""], ["mat-row", ""], [1, "text-center", "my-3"], [1, "m-3"], ["animationDuration", "0ms", 3, "selectedIndex"], [2, "font-weight", "bold"], ["matColumnDef", "Image"], ["matColumnDef", "is_enable"], [1, "m-3", 2, "margin-top", "80px !important"], [1, "d-flex", "my-3", 2, "gap", "1rem"], ["width", "100", "height", "100", 3, "src", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "btn", "btn-info", 2, "font-size", "12px", 3, "click"], ["multiple", "", "accept", "image/png, image/jpeg, image/webp", "type", "file", "hidden", "", 3, "change"], ["inputMMultipleFiles", ""], [1, "pt-1", "m-3"], ["mat-raised-button", "", "mat-button", "", "color", "primary", "type", "submit", 1, "btn-info", 2, "font-size", "16px", 3, "ngClass", "click"], ["class", "fas fa-circle-notch fa-spin ", 4, "ngIf"], ["width", "100", "height", "100", 1, "my-2", 3, "src"], [1, "d-block", "example-margin", 2, "max-width", "max-content", "margin", "auto", 3, "ngModel", "ngModelChange"], ["matTooltipClass", "custom-tooltip", 1, "pointer", 3, "matTooltip", "click"], [1, "fas", "fa-2x", "fa-trash-alt", 2, "font-size", "1.6em", "color", "#c41414"], ["width", "100", "height", "100", 3, "src"], [1, "fas", "fa-circle-notch", "fa-spin"]],
  template: function ProductGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Product Group");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ProductGroupComponent_a_5_Template, 2, 1, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "mat-tab-group", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectedTabChange", function ProductGroupComponent_Template_mat_tab_group_selectedTabChange_9_listener($event) {
        return ctx.changeTab($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-tab", 10)(12, "div", 11)(13, "div", 12)(14, "form", 13)(15, "div", 6)(16, "div", 14)(17, "mat-form-field", 15)(18, "mat-label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Product Group Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ProductGroupComponent_mat_error_21_Template, 2, 0, "mat-error", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 14)(23, "mat-form-field", 15)(24, "mat-label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Product Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, ProductGroupComponent_mat_error_27_Template, 2, 0, "mat-error", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 14)(29, "mat-form-field", 15)(30, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Product Group Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-select", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, ProductGroupComponent_mat_option_33_Template, 2, 2, "mat-option", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, ProductGroupComponent_mat_error_34_Template, 2, 0, "mat-error", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 14)(36, "mat-form-field", 15)(37, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Category");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "mat-select", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, ProductGroupComponent_mat_option_40_Template, 3, 3, "mat-option", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, ProductGroupComponent_mat_error_41_Template, 2, 0, "mat-error", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, ProductGroupComponent_div_42_Template, 3, 0, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, ProductGroupComponent_mat_tab_43_Template, 18, 5, "mat-tab", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, ProductGroupComponent_mat_tab_44_Template, 37, 12, "mat-tab", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 25)(46, "div")(47, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductGroupComponent_Template_a_click_47_listener() {
        return ctx.goBack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, " Go back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "button", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductGroupComponent_Template_button_click_50_listener() {
        return ctx.saveProductDetailsForm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "span", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, ProductGroupComponent_ng_container_52_Template, 2, 0, "ng-container", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, ProductGroupComponent_ng_container_53_Template, 2, 0, "ng-container", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, ProductGroupComponent_i_54_Template, 1, 0, "i", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.relativeUrl);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selectedIndex", ctx.selectedIndex);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.productVarientForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.productVarientFormSubmitted || ctx.formControl["code"].errors && ctx.formControl["code"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.productVarientFormSubmitted || ctx.formControl["name"].errors && ctx.formControl["name"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.products);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.productVarientFormSubmitted || ctx.formControl["product_type_id"].errors && ctx.formControl["product_type_id"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.metaData == null ? null : ctx.metaData.categories);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.productVarientFormSubmitted || ctx.formControl["category_id"].errors && ctx.formControl["category_id"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.componentType == "update");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.componentType == "update");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.componentType == "update");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](17, _c4, ctx.isLoading));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.componentType == "create");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.componentType == "update");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__.MatSlideToggle, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRow, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__.MatTabGroup, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltip],
  styles: ["input[type=file][_ngcontent-%COMP%] {\n  opacity: 0;\n  z-index: -1;\n  position: absolute;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWdyb3VwL3Byb2R1Y3QtZ3JvdXAuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi9TYWklMjBLaXJhbi9Eb2N1bWVudHMvYWRtaW4taGlzZW5zZS9oaXNlbnNlLWFkbWluL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWdyb3VwL3Byb2R1Y3QtZ3JvdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0FDRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxudGFibGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSIsImlucHV0W3R5cGU9ZmlsZV0ge1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAtMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 3717:
/*!*********************************************************************************!*\
  !*** ./src/app/components/product-groups-list/product-groups-list.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductGroupsListComponent": () => (/* binding */ ProductGroupsListComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);









function ProductGroupsListComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductGroupsListComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r12.name, " ");
  }
}
function ProductGroupsListComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductGroupsListComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r13.code, " ");
  }
}
function ProductGroupsListComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Product Group Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductGroupsListComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r14.product_type.name, " ");
  }
}
function ProductGroupsListComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " View on website ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductGroupsListComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 21)(1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r15 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r7.environment.websiteUrl + element_r15.relative_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r7.environment.websiteUrl, "", element_r15.relative_url, "");
  }
}
function ProductGroupsListComponent_th_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a1) {
  return ["/update/product-group", a1];
};
function ProductGroupsListComponent_td_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 21)(1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c0, element_r16.id));
  }
}
function ProductGroupsListComponent_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 25);
  }
}
function ProductGroupsListComponent_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 26);
  }
}
const _c1 = function () {
  return [50, 100, 200];
};
class ProductGroupsListComponent {
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }
  constructor(api, toaster, location, router) {
    this.api = api;
    this.toaster = toaster;
    this.location = location;
    this.router = router;
    this.displayedColumns = ['name', 'code', 'View on website', 'Actions']; //'Product Group Type'
    this.isLoading = true;
    this.pageSize = 50;
    this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
    this.totalPages = 0;
  }
  ngOnInit() {
    this.getProductVarientList();
  }
  getProductVarientList(params = {
    page: 1,
    per_page: 50
  }) {
    this.api.getProductGroupList(params).subscribe({
      next: res => {
        console.log(res);
        // this.dataSource = new MatTableDataSource<any>(res.data.data);
        // setTimeout(() => {
        //   this.paginator.pageIndex = params.page - 1;
        //   this.paginator.length = res.data.total;
        // })
        // this.dataSource.paginator = this.paginator;
        this.dataSource = res.data.data;
        this.totalPages = res.data.total;
        this.isLoading = false;
      },
      error: err => {
        this.isLoading = false;
        console.log(err);
        this.toaster.error(err.error.message);
      }
    });
  }
  pageChanged(event) {
    console.log(event);
    this.getProductVarientList({
      page: event.pageIndex + 1,
      per_page: event.pageSize
    });
  }
  goBack() {
    this.location.back();
  }
}
ProductGroupsListComponent.ɵfac = function ProductGroupsListComponent_Factory(t) {
  return new (t || ProductGroupsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};
ProductGroupsListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ProductGroupsListComponent,
  selectors: [["app-product-groups-list"]],
  decls: 31,
  vars: 7,
  consts: [[1, "pb-1"], [1, "card"], [1, "card-header", "card-box-shadow", "bt-4"], [1, "card-title", "m-0", "font-weight-bold"], [1, "card-body"], [1, "w-100", "table-responsive"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "code"], ["matColumnDef", "Product Group Type"], ["matColumnDef", "View on website"], ["matColumnDef", "Actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "length", "pageSizeOptions", "pageSize", "page"], [1, "col-md-12", "border-top", "p-2", "button-container", "d-flex", "justify-content-between", "align-items-center"], [1, "forgot-link", 2, "color", "black", "cursor", "pointer", 3, "click"], [1, "fas", "fa-arrow-left"], ["mat-header-cell", ""], ["mat-cell", ""], ["target", "_blank", 3, "href"], ["matTooltip", "Edit Product Group", "matTooltipClass", "custom-tooltip", 3, "routerLink"], [1, "fas", "fa-2x", "fa-pen-square", 2, "font-size", "1.6em", "color", "#00b3ac"], ["mat-header-row", ""], ["mat-row", ""]],
  template: function ProductGroupsListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Product Group List");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "table", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](8, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ProductGroupsListComponent_th_9_Template, 2, 0, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ProductGroupsListComponent_td_10_Template, 2, 1, "td", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](11, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ProductGroupsListComponent_th_12_Template, 2, 0, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ProductGroupsListComponent_td_13_Template, 2, 1, "td", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](14, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ProductGroupsListComponent_th_15_Template, 2, 0, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ProductGroupsListComponent_td_16_Template, 2, 1, "td", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](17, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ProductGroupsListComponent_th_18_Template, 2, 0, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ProductGroupsListComponent_td_19_Template, 3, 3, "td", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](20, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ProductGroupsListComponent_th_21_Template, 2, 0, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, ProductGroupsListComponent_td_22_Template, 3, 3, "td", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, ProductGroupsListComponent_tr_23_Template, 1, 0, "tr", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, ProductGroupsListComponent_tr_24_Template, 1, 0, "tr", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-paginator", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("page", function ProductGroupsListComponent_Template_mat_paginator_page_25_listener($event) {
        return ctx.pageChanged($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 17)(27, "div")(28, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductGroupsListComponent_Template_a_click_28_listener() {
        return ctx.goBack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " Go back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("length", ctx.totalPages)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c1))("pageSize", ctx.pageSize);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltip],
  styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWdyb3Vwcy1saXN0L3Byb2R1Y3QtZ3JvdXBzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi9TYWklMjBLaXJhbi9Eb2N1bWVudHMvYWRtaW4taGlzZW5zZS9oaXNlbnNlLWFkbWluL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWdyb3Vwcy1saXN0L3Byb2R1Y3QtZ3JvdXBzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 685:
/*!*************************************************************************************!*\
  !*** ./src/app/components/product-varients-list/product-varients-list.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductVarientsListComponent": () => (/* binding */ ProductVarientsListComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);









function ProductVarientsListComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Name. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductVarientsListComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r12.name, " ");
  }
}
function ProductVarientsListComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductVarientsListComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r13.code, " ");
  }
}
function ProductVarientsListComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Product Link ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductVarientsListComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 21)(1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r14 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r5.environment.websiteUrl + element_r14.relative_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r5.environment.websiteUrl, "", element_r14.relative_url, "");
  }
}
function ProductVarientsListComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Variant Size ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductVarientsListComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r15.variant_size, " ");
  }
}
function ProductVarientsListComponent_th_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a1) {
  return ["/update/product-varients", a1];
};
function ProductVarientsListComponent_td_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 21)(1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c0, element_r16.id));
  }
}
function ProductVarientsListComponent_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 25);
  }
}
function ProductVarientsListComponent_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 26);
  }
}
const _c1 = function () {
  return [50, 100, 200];
};
class ProductVarientsListComponent {
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }
  constructor(api, toaster, location, router) {
    this.api = api;
    this.toaster = toaster;
    this.location = location;
    this.router = router;
    this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
    this.totalPages = 0;
    this.displayedColumns = ['name', 'code', 'Product Link', 'size', 'Actions'];
    this.isLoading = true;
    this.pageSize = 50;
  }
  ngOnInit() {
    this.getProductVarientList();
  }
  getProductVarientList(params = {
    page: 1,
    per_page: 50
  }) {
    this.api.getProductVarientList(params).subscribe({
      next: res => {
        console.log(res);
        // this.dataSource = new MatTableDataSource<any>(res.data.data);
        // setTimeout(()=>{
        //   this.paginator.pageIndex = params.page - 1;
        //   this.paginator.length = res.data.total;
        // })
        // this.dataSource.paginator = this.paginator;
        this.dataSource = res.data.data;
        this.totalPages = res.data.total;
        this.isLoading = false;
      },
      error: err => {
        this.isLoading = false;
        console.log(err);
        this.toaster.error(err.error.message);
      }
    });
  }
  pageChanged(event) {
    console.log(event);
    this.pageSize = event.pageSize;
    this.getProductVarientList({
      page: event.pageIndex + 1,
      per_page: this.pageSize
    });
  }
  goBack() {
    this.location.back();
  }
}
ProductVarientsListComponent.ɵfac = function ProductVarientsListComponent_Factory(t) {
  return new (t || ProductVarientsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};
ProductVarientsListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ProductVarientsListComponent,
  selectors: [["app-product-varients-list"]],
  decls: 31,
  vars: 7,
  consts: [[1, "pb-1"], [1, "card"], [1, "card-header", "card-box-shadow", "bt-4"], [1, "card-title", "m-0", "font-weight-bold"], [1, "card-body"], [1, "w-100", "table-responsive"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "code"], ["matColumnDef", "Product Link"], ["matColumnDef", "size"], ["matColumnDef", "Actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "length", "pageSizeOptions", "pageSize", "page"], [1, "col-md-12", "border-top", "p-2", "button-container", "d-flex", "justify-content-between", "align-items-center"], [1, "forgot-link", 2, "color", "black", "cursor", "pointer", 3, "click"], [1, "fas", "fa-arrow-left"], ["mat-header-cell", ""], ["mat-cell", ""], ["target", "_blank", 3, "href"], ["matTooltip", "Edit Product", "matTooltipClass", "custom-tooltip", 3, "routerLink"], [1, "fas", "fa-2x", "fa-pen-square", 2, "font-size", "1.6em", "color", "#00b3ac"], ["mat-header-row", ""], ["mat-row", ""]],
  template: function ProductVarientsListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Product Variants List");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "table", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](8, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ProductVarientsListComponent_th_9_Template, 2, 0, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ProductVarientsListComponent_td_10_Template, 2, 1, "td", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](11, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ProductVarientsListComponent_th_12_Template, 2, 0, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ProductVarientsListComponent_td_13_Template, 2, 1, "td", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](14, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ProductVarientsListComponent_th_15_Template, 2, 0, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ProductVarientsListComponent_td_16_Template, 3, 3, "td", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](17, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ProductVarientsListComponent_th_18_Template, 2, 0, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ProductVarientsListComponent_td_19_Template, 2, 1, "td", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](20, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ProductVarientsListComponent_th_21_Template, 2, 0, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, ProductVarientsListComponent_td_22_Template, 3, 3, "td", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, ProductVarientsListComponent_tr_23_Template, 1, 0, "tr", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, ProductVarientsListComponent_tr_24_Template, 1, 0, "tr", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-paginator", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("page", function ProductVarientsListComponent_Template_mat_paginator_page_25_listener($event) {
        return ctx.pageChanged($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 17)(27, "div")(28, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductVarientsListComponent_Template_a_click_28_listener() {
        return ctx.goBack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " Go back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("length", ctx.totalPages)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c1))("pageSize", ctx.pageSize);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltip],
  styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LXZhcmllbnRzLWxpc3QvcHJvZHVjdC12YXJpZW50cy1saXN0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vU2FpJTIwS2lyYW4vRG9jdW1lbnRzL2FkbWluLWhpc2Vuc2UvaGlzZW5zZS1hZG1pbi9zcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC12YXJpZW50cy1saXN0L3Byb2R1Y3QtdmFyaWVudHMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSiIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59IiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 697:
/*!***********************************************************!*\
  !*** ./src/app/components/products/products.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsComponent": () => (/* binding */ ProductsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);

















const _c0 = ["inputMMultipleFiles"];
const _c1 = ["input"];
function ProductsComponent_a_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "(View on Website)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r0.environment.websiteUrl + ctx_r0.relativeUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function ProductsComponent_mat_error_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Product Code is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductsComponent_mat_error_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Product Name is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductsComponent_mat_error_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Product Size is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductsComponent_mat_option_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", product_r17.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", product_r17.name, " ");
  }
}
function ProductsComponent_mat_error_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Product Group is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductsComponent_mat_error_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Product Size (Numeric) should be a number! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductsComponent_mat_error_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Product Group is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductsComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 39)(1, "mat-form-field", 26)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Top Specifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "textarea", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ProductsComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 39)(1, "mat-form-field", 26)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "All Specifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "textarea", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ProductsComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 42)(1, "mat-slide-toggle", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Enable/Disable the product");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ProductsComponent_mat_tab_57_th_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Vendor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductsComponent_mat_tab_57_td_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r27.name, " ");
  }
}
function ProductsComponent_mat_tab_57_th_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Purchase Link ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductsComponent_mat_tab_57_td_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 55)(1, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r28 = ctx.$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r21.purchaseLinks[element_r28.code], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r21.purchaseLinks[element_r28.code]);
  }
}
function ProductsComponent_mat_tab_57_th_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Update Link ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductsComponent_mat_tab_57_td_11_mat_hint_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Invalid Url! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductsComponent_mat_tab_57_td_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 55)(1, "mat-form-field", 57)(2, "mat-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProductsComponent_mat_tab_57_td_11_Template_input_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34);
      const element_r30 = restoredCtx.$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r33.purchaseLinks[element_r30.code] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ProductsComponent_mat_tab_57_td_11_mat_hint_5_Template, 2, 0, "mat-hint", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r30 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Update ", element_r30.name, " Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r23.purchaseLinks[element_r30.code]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r23.isLinkValid(ctx_r23.purchaseLinks[element_r30.code]));
  }
}
function ProductsComponent_mat_tab_57_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 61);
  }
}
function ProductsComponent_mat_tab_57_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 62);
  }
}
function ProductsComponent_mat_tab_57_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No Records Found!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductsComponent_mat_tab_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-tab", 10)(1, "div", 44)(2, "table", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](3, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ProductsComponent_mat_tab_57_th_4_Template, 2, 0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ProductsComponent_mat_tab_57_td_5_Template, 2, 1, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](6, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ProductsComponent_mat_tab_57_th_7_Template, 2, 0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ProductsComponent_mat_tab_57_td_8_Template, 3, 2, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](9, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ProductsComponent_mat_tab_57_th_10_Template, 2, 0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ProductsComponent_mat_tab_57_td_11_Template, 6, 3, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ProductsComponent_mat_tab_57_tr_12_Template, 1, 0, "tr", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ProductsComponent_mat_tab_57_tr_13_Template, 1, 0, "tr", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ProductsComponent_mat_tab_57_div_14_Template, 2, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "Purchase Links");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx_r12.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx_r12.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx_r12.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r12.dataSource == null ? null : ctx_r12.dataSource.length));
  }
}
function ProductsComponent_mat_tab_58_th_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Image Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductsComponent_mat_tab_58_td_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r60.type, " ");
  }
}
function ProductsComponent_mat_tab_58_th_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Current Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductsComponent_mat_tab_58_td_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", element_r61.full_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function ProductsComponent_mat_tab_58_th_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Upload New Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductsComponent_mat_tab_58_td_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 55)(1, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_mat_tab_58_td_14_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r67);
      const i_r64 = restoredCtx.index;
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r66.browseFileButtonClicked(i_r64));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Browse Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 86, 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ProductsComponent_mat_tab_58_td_14_Template_input_change_3_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r67);
      const element_r63 = restoredCtx.$implicit;
      const i_r64 = restoredCtx.index;
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r68.inputChangeEventListener($event, element_r63.type, i_r64));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ProductsComponent_mat_tab_58_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 61);
  }
}
function ProductsComponent_mat_tab_58_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 62);
  }
}
function ProductsComponent_mat_tab_58_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No Records Found!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductsComponent_mat_tab_58_i_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 88);
  }
}
function ProductsComponent_mat_tab_58_th_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductsComponent_mat_tab_58_td_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", element_r70.full_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function ProductsComponent_mat_tab_58_th_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Priority ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductsComponent_mat_tab_58_td_33_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const priority_r75 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", priority_r75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", priority_r75, " ");
  }
}
function ProductsComponent_mat_tab_58_td_33_mat_hint_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Proority is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductsComponent_mat_tab_58_td_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 55)(1, "mat-form-field", 89)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-select", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProductsComponent_mat_tab_58_td_33_Template_mat_select_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r77);
      const element_r72 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](element_r72.priority = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ProductsComponent_mat_tab_58_td_33_mat_option_5_Template, 2, 2, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ProductsComponent_mat_tab_58_td_33_mat_hint_6_Template, 2, 0, "mat-hint", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r72 = ctx.$implicit;
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", element_r72.priority);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r49.sliderImagespriorities);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !element_r72.priority);
  }
}
function ProductsComponent_mat_tab_58_th_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enable / Disable ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductsComponent_mat_tab_58_td_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 55)(1, "mat-slide-toggle", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProductsComponent_mat_tab_58_td_36_Template_mat_slide_toggle_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r80);
      const element_r78 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](element_r78.is_enabled = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r78 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", element_r78.is_enabled);
  }
}
function ProductsComponent_mat_tab_58_th_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductsComponent_mat_tab_58_td_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 55)(1, "a", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_mat_tab_58_td_39_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r84);
      const element_r81 = restoredCtx.$implicit;
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r83.removeFile(element_r81));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matTooltip", "Delete File");
  }
}
function ProductsComponent_mat_tab_58_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 61);
  }
}
function ProductsComponent_mat_tab_58_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 62);
  }
}
function ProductsComponent_mat_tab_58_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No Records Found! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductsComponent_mat_tab_58_img_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 94);
  }
  if (rf & 2) {
    const img_r86 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", img_r86, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function ProductsComponent_mat_tab_58_i_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 88);
  }
}
const _c2 = function (a0) {
  return {
    "spiner": a0
  };
};
function ProductsComponent_mat_tab_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-tab", 10)(1, "div", 64)(2, "mat-tab-group", 65)(3, "mat-tab", 10)(4, "div", 66)(5, "table", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](6, 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ProductsComponent_mat_tab_58_th_7_Template, 2, 0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ProductsComponent_mat_tab_58_td_8_Template, 2, 1, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](9, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ProductsComponent_mat_tab_58_th_10_Template, 2, 0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ProductsComponent_mat_tab_58_td_11_Template, 2, 1, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](12, 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ProductsComponent_mat_tab_58_th_13_Template, 2, 0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ProductsComponent_mat_tab_58_td_14_Template, 5, 0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ProductsComponent_mat_tab_58_tr_15_Template, 1, 0, "tr", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ProductsComponent_mat_tab_58_tr_16_Template, 1, 0, "tr", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ProductsComponent_mat_tab_58_div_17_Template, 2, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 70)(19, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_mat_tab_58_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r88);
      const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r87.uploadImages());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ProductsComponent_mat_tab_58_i_21_Template, 1, 0, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-tab", 10)(23, "div", 64)(24, "h4", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Current Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 44)(27, "table", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](28, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, ProductsComponent_mat_tab_58_th_29_Template, 2, 0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, ProductsComponent_mat_tab_58_td_30_Template, 2, 1, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](31, 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, ProductsComponent_mat_tab_58_th_32_Template, 2, 0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, ProductsComponent_mat_tab_58_td_33_Template, 7, 3, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](34, 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, ProductsComponent_mat_tab_58_th_35_Template, 2, 0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, ProductsComponent_mat_tab_58_td_36_Template, 2, 1, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](37, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, ProductsComponent_mat_tab_58_th_38_Template, 2, 0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, ProductsComponent_mat_tab_58_td_39_Template, 3, 1, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, ProductsComponent_mat_tab_58_tr_40_Template, 1, 0, "tr", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, ProductsComponent_mat_tab_58_tr_41_Template, 1, 0, "tr", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, ProductsComponent_mat_tab_58_div_42_Template, 2, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 78)(44, "h4", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Upload More Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, ProductsComponent_mat_tab_58_img_47_Template, 1, 1, "img", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_mat_tab_58_Template_button_click_48_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r88);
      const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r89.browseMultipleFileButtonClicked());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, " Browse Multiple Files ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "input", 82, 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ProductsComponent_mat_tab_58_Template_input_change_50_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r88);
      const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r90.onFileChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 70)(53, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_mat_tab_58_Template_button_click_53_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r88);
      const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r91.uploadMultipleImages());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, ProductsComponent_mat_tab_58_i_55_Template, 1, 0, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selectedIndex", ctx_r13.imagesTabSelectedIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "Thumb Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx_r13.imagesDataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx_r13.imagesDisplayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx_r13.imagesDisplayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r13.imagesDataSource == null ? null : ctx_r13.imagesDataSource.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](17, _c2, ctx_r13.isLoader));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r13.isLoader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "Product Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx_r13.productImagesDataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx_r13.productImagesDisplayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx_r13.productImagesDisplayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r13.productImagesDataSource == null ? null : ctx_r13.productImagesDataSource.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r13.myFilesImages);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](19, _c2, ctx_r13.isLoader));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r13.isLoader);
  }
}
function ProductsComponent_ng_container_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function ProductsComponent_ng_container_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function ProductsComponent_i_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 88);
  }
}
const _c3 = function (a0) {
  return {
    "col-md-12": a0
  };
};
const _c4 = function (a0) {
  return {
    "mr-2": a0
  };
};
class ProductsComponent {
  get formControl() {
    return this.productVarientForm.controls;
  }
  constructor(location, api, fb, toaster, activatedroute, router) {
    this.location = location;
    this.api = api;
    this.fb = fb;
    this.toaster = toaster;
    this.activatedroute = activatedroute;
    this.router = router;
    this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
    this.relativeUrl = '';
    this.products = [];
    this.purchaseLinksMetaData = [];
    this.componentType = 'create';
    this.selectedIndex = 0;
    this.purchaseLinks = {};
    this.displayedColumns = ['Vendor', 'Update Link']; //'Purchase Link'
    this.imagesDisplayedColumns = ['Image Type', 'Current Image', 'Upload New Image'];
    this.productImagesDisplayedColumns = ['Image', 'priority', 'is_enable', 'Actions'];
    this.sliderImagespriorities = [];
    this.isLoader = false;
    this.isLoading = false;
    this.productVarientFormSubmitted = false;
    this.productVarientForm = this.fb.group({
      code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      variant_size: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      product_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      short_description: [null],
      variant_size_numeric: [''],
      is_enabled: [0]
    });
    this.imagesCatalogMedia = [];
    this.myFiles = [];
    this.myFilesImages = [];
  }
  ngOnInit() {
    this.activatedroute.data.subscribe(data => {
      console.log(data);
      this.componentType = data.type;
      if (data.type == "update") {
        this.productVarientForm.addControl('top_specifications', this.fb.control(null));
        this.productVarientForm.addControl('all_specifications', this.fb.control(null));
      }
      this.getMetaData(data);
    });
  }
  getMetaData(data) {
    this.api.getProductVarientCreationMetaData().subscribe({
      next: res => {
        console.log(res);
        this.metaData = res?.data;
        this.products = res?.data?.products;
        if (data.type == 'update') {
          this.loadProductInfo();
        }
        // this.purchaseLinksMetaData = res?.data?.product_variant_purchase_link_vendors;
      },

      error: err => {
        console.log(err);
        this.toaster.error(err.error.message);
      }
    });
  }
  loadProductInfo() {
    this.api.getProductVarientInfo(this.activatedroute.snapshot.params['id']).subscribe({
      next: res => {
        console.log(res);
        this.relativeUrl = res.data.relative_url;
        this.purchaseLinksMetaData = this.metaData?.product_variant_purchase_link_vendors;
        this.purchaseLinksMetaData.forEach(obj => {
          this.purchaseLinks[obj.code] = res.data.product_variant_purchase_links.find(o => o.vendor == obj.code)?.purchase_link;
        });
        this.productVarientForm.patchValue({
          code: res?.data?.code,
          name: res?.data?.name,
          variant_size: res?.data?.variant_size,
          product_id: res?.data?.product_id,
          short_description: res?.data?.short_description ? res?.data?.short_description : null,
          is_enabled: res?.data?.is_enabled
        });
        if (this.componentType == 'update') {
          this.productVarientForm.patchValue({
            all_specifications: res?.data?.all_specifications ? JSON.stringify(res?.data?.all_specifications) : '',
            top_specifications: res?.data?.top_specifications ? JSON.stringify(res?.data?.top_specifications) : '',
            variant_size_numeric: res?.data?.variant_size_numeric
          });
        }
        // this.dataSource = new MatTableDataSource<any>(this.metaData?.product_variant_purchase_link_vendors);
        this.dataSource = this.metaData?.product_variant_purchase_link_vendors;
        const array = [];
        if (res.data.thumb_image) {
          res.data.thumb_image.type = 'Large Size';
          array.push(res.data?.thumb_image);
        }
        if (res.data.thumb_image_medium) {
          res.data.thumb_image_medium.type = 'Medium Size';
          array.push(res.data?.thumb_image_medium);
        }
        // this.imagesDataSource = new MatTableDataSource<any>(array)
        this.imagesDataSource = array;
        console.log(this.imagesDataSource.data);
        res.data.slider_images_admin = res.data?.slider_images_admin.map((obj, i) => {
          this.sliderImagespriorities.push(i + 1);
          return {
            ...obj,
            priority: i + 1
          };
        });
        // this.productImagesDataSource = new MatTableDataSource<any>(res.data.slider_images_admin);
        this.productImagesDataSource = res.data.slider_images_admin;
      },
      error: err => {
        console.log(err);
        this.toaster.error(err.error.message);
      }
    });
  }
  saveProductDetailsForm() {
    if (this.componentType === 'create') {
      this.productVarientForm.markAllAsTouched();
      this.productVarientFormSubmitted = true;
      if (!this.productVarientForm.valid) {
        return;
      }
      this.isLoading = true;
      this.api.createProductVarient(this.productVarientForm.value).subscribe({
        next: res => {
          this.isLoading = false;
          console.log(res);
          this.toaster.success(res.message);
          this.router.navigate(['/update/product-varients', res.data.id]);
        },
        error: err => {
          this.isLoading = false;
          console.log(err);
          this.toaster.error(err.error.message);
        }
      });
    } else {
      console.log(this.selectedIndex);
      this.productVarientForm.value.top_specifications = this.productVarientForm.value.top_specifications ? JSON.stringify(JSON.parse(this.productVarientForm.value.top_specifications)) : null;
      this.productVarientForm.value.all_specifications = this.productVarientForm.value.all_specifications ? JSON.stringify(JSON.parse(this.productVarientForm.value.all_specifications)) : null;
      this.productVarientForm.value.variant_size_numeric = this.productVarientForm.value.variant_size_numeric;
      if (this.selectedIndex == 0) {
        this.productVarientForm.markAllAsTouched();
        this.productVarientFormSubmitted = true;
        if (!this.productVarientForm.valid) {
          return;
        }
        this.isLoading = true;
        this.productVarientForm.value.is_enabled = this.productVarientForm.value.is_enabled ? 1 : 0;
        this.api.updateProductVarientInfo(this.activatedroute.snapshot.params['id'], this.productVarientForm.value).subscribe({
          next: res => {
            this.isLoading = false;
            console.log(res);
            this.toaster.success(res.message);
          },
          error: err => {
            this.isLoading = false;
            console.log(err);
            this.toaster.error(err.error.message);
          }
        });
      } else if (this.selectedIndex == 1) {
        const object = {
          product_variant_purchase_links: []
        };
        for (let key in this.purchaseLinks) {
          if (this.purchaseLinks[key] && this.isLinkValid(this.purchaseLinks[key])) {
            return;
          } else if (this.purchaseLinks[key]) {
            object.product_variant_purchase_links.push({
              vendor: key,
              purchase_link: this.purchaseLinks[key]
            });
          }
        }
        this.isLoading = true;
        this.api.updateProductVarientInfo(this.activatedroute.snapshot.params['id'], object).subscribe({
          next: res => {
            this.isLoading = false;
            console.log(res);
            this.toaster.success(res.message);
          },
          error: err => {
            this.isLoading = false;
            console.log(err);
            this.toaster.error(err.error.message);
          }
        });
      } else {
        this.isLoading = true;
        const data = this.productImagesDataSource?.data.map(obj => {
          return {
            id: obj.id,
            priority: obj.priority,
            is_enabled: obj.is_enabled ? 1 : 0
          };
        });
        this.api.bulkUpdateFiles({
          catalog_media: data
        }).subscribe({
          next: res => {
            this.isLoading = false;
            this.toaster.success(res.message);
          },
          error: err => {
            this.isLoading = false;
            console.log(err);
            this.toaster.error(err.error.message);
          }
        });
      }
    }
  }
  changeTab(event) {
    console.log(event);
    console.log(event.index);
    this.selectedIndex = event.index;
    this.isLoading = false;
    this.productVarientFormSubmitted = false;
    // this.productVarientForm.reset();
    if (this.selectedIndex == 2) {
      this.imagesTabSelectedIndex = 1;
      setTimeout(() => {
        this.imagesTabSelectedIndex = 0;
      }, 0);
    }
  }
  browseFileButtonClicked(i) {
    // console.log(this.inputForFile[0]);
    // console.log(this.inputForFile[1]);
    this.inputForFile.forEach((a, index) => {
      console.log(a);
      if (i === index) {
        a.nativeElement.click();
      }
    });
  }
  inputChangeEventListener(event, type, i) {
    console.log(i);
    console.log(this.imagesDataSource);
    let mediaType = '';
    if (type == 'Large Size') {
      mediaType = 'thumb_image';
    } else {
      mediaType = 'thumb_image_medium';
    }
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = _event => {
      this.imagesDataSource.data[i].full_url = reader.result;
    };
    this.imagesDataSource.data[i].media_type = mediaType;
    this.imagesDataSource.data[i].file = event.target.files[0];
  }
  uploadImages() {
    this.imagesCatalogMedia = [...this.imagesDataSource.data];
    // console.log(this.imagesCatalogMedia);
    // const catalog = [];
    this.imagesCatalogMedia = this.imagesCatalogMedia.filter(obj => obj.file && obj.media_type);
    console.log(this.imagesCatalogMedia);
    if (this.imagesCatalogMedia == 0) {
      this.toaster.error('Please modify files before uploading!');
      return;
    }
    let formData = new FormData();
    let index = 0;
    for (let obj of this.imagesCatalogMedia) {
      for (var key in obj) {
        console.log(key);
        formData.append(`catalog_media[${index}][${key}]`, obj[key]);
      }
      index++;
    }
    for (var key1 of formData.entries()) {
      console.log(key1[0] + ', ' + key1[1]);
    }
    console.log(formData);
    this.api.uploadFiles(formData).subscribe({
      next: res => {
        console.log(res);
        this.toaster.success(res.message);
      },
      error: err => {
        console.log(err);
        this.toaster.error(err.error.message);
      }
    });
  }
  removeFile(ele) {
    swal({
      text: 'Are you sure you want to delete?',
      type: 'warning',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then(willDelete => {
      console.log(ele);
      this.api.deleteFiles(ele.id).subscribe({
        next: res => {
          console.log(res);
          this.loadProductInfo();
          this.toaster.success(res.message);
        },
        error: err => {
          console.log(err);
          this.toaster.error(err.error.message);
        }
      });
    }, error => {});
  }
  browseMultipleFileButtonClicked() {
    console.log('came here');
    this.inputMultipleFiles.nativeElement.click();
  }
  onFileChange(event) {
    console.log(event);
    for (let i = 0; i < event.target.files.length; i++) {
      this.myFiles.push({
        file: event.target.files[i],
        media_resource_type: 'product_variant',
        media_resource_id: this.activatedroute.snapshot.params['id'],
        media_type: 'slider_image'
      });
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[i]);
      reader.onload = _event => {
        this.myFilesImages.push(reader.result);
      };
    }
    console.log(this.myFiles);
  }
  uploadMultipleImages() {
    const formData = new FormData();
    for (var i = 0; i < this.myFiles.length; i++) {
      for (var key in this.myFiles[i]) {
        formData.append(`catalog_media[${i}][${key}]`, this.myFiles[i][key]);
      }
    }
    this.api.uploadFiles(formData).subscribe({
      next: res => {
        console.log(res);
        this.toaster.success(res.message);
        this.loadProductInfo();
      },
      error: err => {
        console.log(err);
        this.toaster.error(err.error.message);
      }
    });
  }
  isLinkValid(link) {
    return link && !/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/.test(link);
  }
  goBack() {
    this.location.back();
  }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) {
  return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
};
ProductsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ProductsComponent,
  selectors: [["app-products"]],
  viewQuery: function ProductsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.inputMultipleFiles = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.inputForFile = _t);
    }
  },
  decls: 69,
  vars: 25,
  consts: [[1, "pb-1"], [1, "card"], [1, "card-header", "card-box-shadow", "bt-4", "d-flex", "align-items-center"], [1, "card-title", "m-0", "font-weight-bold"], ["style", "margin-left: 8px;", "target", "_blank", 3, "href", 4, "ngIf"], [1, "card-body"], [1, "row"], [1, "col-sm-12", "mt-3"], ["animationDuration", "0ms", 3, "selectedIndex", "selectedTabChange"], ["ctdTabset", ""], [3, "label"], [1, "row", "p-3"], [1, "col-md-12"], [3, "formGroup"], [1, "row", "grid__container"], [1, "grid__item", "form-group"], ["appearance", "outline"], [1, "mat-label-field-padding"], ["matInput", "", "formControlName", "code", "type", "text"], [4, "ngIf"], ["matInput", "", "formControlName", "name", "type", "text"], ["matInput", "", "formControlName", "variant_size", "type", "text"], ["formControlName", "product_id"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "variant_size_numeric", "type", "text"], [1, "col-12", "col-md-4", "form-group", 3, "ngClass"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "trim", "blur", "rows", "5", "formControlName", "short_description", 2, "resize", "none", "overflow-y", "auto", "padding", "8px"], ["class", "col-12 col-md-4 form-group", 4, "ngIf"], ["class", "col-12 form-group", 4, "ngIf"], [3, "label", 4, "ngIf"], [1, "col-md-12", "mt-4", "border-top", "p-2", "button-container", "d-flex", "justify-content-between", "align-items-center"], [1, "forgot-link", 2, "color", "black", "cursor", "pointer", 3, "click"], [1, "fas", "fa-arrow-left"], ["mat-raised-button", "", "type", "submit", 1, "btn", "btn-info", 2, "display", "flex", "gap", "12px", 3, "click"], [3, "ngClass"], ["class", "fas fa-circle-notch fa-spin", 4, "ngIf"], ["target", "_blank", 2, "margin-left", "8px", 3, "href"], [3, "value"], [1, "col-12", "col-md-4", "form-group"], ["matInput", "", "trim", "blur", "rows", "5", "formControlName", "top_specifications", 2, "resize", "none", "overflow-y", "auto", "padding", "8px"], ["matInput", "", "trim", "blur", "rows", "5", "formControlName", "all_specifications", 2, "resize", "none", "overflow-y", "auto", "padding", "8px"], [1, "col-12", "form-group"], ["formControlName", "is_enabled", 1, "d-block", "example-margin"], [1, "w-100", "table-responsive"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "Vendor"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Purchase Link"], ["matColumnDef", "Update Link"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "text-center my-3", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", ""], ["target", "_blank", 3, "href"], ["appearance", "outline", 1, "my-2"], ["matInput", "", "type", "text", 3, "ngModel", "ngModelChange"], ["class", "error", 4, "ngIf"], [1, "error"], ["mat-header-row", ""], ["mat-row", ""], [1, "text-center", "my-3"], [1, "m-3"], ["animationDuration", "0ms", 3, "selectedIndex"], [1, "w-100", "m-3", "table-responsive"], ["matColumnDef", "Image Type"], ["matColumnDef", "Current Image"], ["matColumnDef", "Upload New Image"], [1, "pt-1", "m-3"], ["mat-raised-button", "", "mat-button", "", "color", "primary", "type", "submit", 1, "btn-info", 2, "font-size", "16px", 3, "ngClass", "click"], ["class", "fas fa-circle-notch fa-spin ", 4, "ngIf"], [2, "font-weight", "bold"], ["matColumnDef", "Image"], ["matColumnDef", "priority"], ["matColumnDef", "is_enable"], ["matColumnDef", "Actions"], [1, "m-3", 2, "margin-top", "80px !important"], [1, "d-flex", "my-3", 2, "gap", "1rem"], ["width", "100", "height", "100", 3, "src", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "btn", "btn-info", 2, "font-size", "12px", 3, "click"], ["multiple", "", "type", "file", "hidden", "", "accept", "image/png, image/jpeg, image/webp", 3, "change"], ["inputMMultipleFiles", ""], ["width", "100", "height", "100", 1, "my-2", 3, "src"], ["href", "javascript:void(0);", 3, "click"], ["type", "file", "hidden", "", "accept", "image/png, image/jpeg, image/webp", 3, "change"], ["input", ""], [1, "fas", "fa-circle-notch", "fa-spin"], ["appearance", "outline", 2, "max-width", "80px"], [3, "ngModel", "ngModelChange"], [1, "d-block", "example-margin", 2, "max-width", "max-content", "margin", "auto", 3, "ngModel", "ngModelChange"], ["matTooltipClass", "custom-tooltip", 1, "pointer", 3, "matTooltip", "click"], [1, "fas", "fa-2x", "fa-trash-alt", 2, "font-size", "1.6em", "color", "#c41414"], ["width", "100", "height", "100", 3, "src"]],
  template: function ProductsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Products");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ProductsComponent_a_5_Template, 2, 1, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "mat-tab-group", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectedTabChange", function ProductsComponent_Template_mat_tab_group_selectedTabChange_9_listener($event) {
        return ctx.changeTab($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-tab", 10)(12, "div", 11)(13, "div", 12)(14, "form", 13)(15, "div", 14)(16, "div", 15)(17, "mat-form-field", 16)(18, "mat-label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Product Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ProductsComponent_mat_error_21_Template, 2, 0, "mat-error", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 15)(23, "mat-form-field", 16)(24, "mat-label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Product Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, ProductsComponent_mat_error_27_Template, 2, 0, "mat-error", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 15)(29, "mat-form-field", 16)(30, "mat-label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Product Size");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, ProductsComponent_mat_error_33_Template, 2, 0, "mat-error", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 15)(35, "mat-form-field", 16)(36, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Product Group");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "mat-select", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, ProductsComponent_mat_option_39_Template, 2, 2, "mat-option", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, ProductsComponent_mat_error_40_Template, 2, 0, "mat-error", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 15)(42, "mat-form-field", 16)(43, "mat-label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Product Size");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "input", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, ProductsComponent_mat_error_46_Template, 2, 0, "mat-error", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 6)(48, "div", 25)(49, "mat-form-field", 26)(50, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Short Description");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "textarea", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, ProductsComponent_mat_error_53_Template, 2, 0, "mat-error", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, ProductsComponent_div_54_Template, 5, 0, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, ProductsComponent_div_55_Template, 5, 0, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](56, ProductsComponent_div_56_Template, 3, 0, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, ProductsComponent_mat_tab_57_Template, 15, 5, "mat-tab", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](58, ProductsComponent_mat_tab_58_Template, 56, 21, "mat-tab", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 31)(60, "div")(61, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_Template_a_click_61_listener() {
        return ctx.goBack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "i", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, " Go back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "button", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_Template_button_click_64_listener() {
        return ctx.saveProductDetailsForm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "span", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, ProductsComponent_ng_container_66_Template, 2, 0, "ng-container", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](67, ProductsComponent_ng_container_67_Template, 2, 0, "ng-container", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](68, ProductsComponent_i_68_Template, 1, 0, "i", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.relativeUrl);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selectedIndex", ctx.selectedIndex);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.productVarientForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.productVarientFormSubmitted || ctx.formControl["code"].errors && ctx.formControl["code"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.productVarientFormSubmitted || ctx.formControl["name"].errors && ctx.formControl["name"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.productVarientFormSubmitted || ctx.formControl["variant_size"].errors && ctx.formControl["variant_size"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.products);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.productVarientFormSubmitted || ctx.formControl["product_id"].errors && ctx.formControl["product_id"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.productVarientFormSubmitted || ctx.formControl["variant_size_numeric"].errors && ctx.formControl["variant_size_numeric"].errors["pattern"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](21, _c3, ctx.componentType != "update"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.productVarientFormSubmitted || ctx.formControl["short_description"].errors && ctx.formControl["short_description"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.componentType == "update");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.componentType == "update");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.componentType == "update");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.componentType == "update");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.componentType == "update");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](23, _c4, ctx.isLoading));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.componentType == "create");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.componentType == "update");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__.MatSlideToggle, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRow, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__.MatTabGroup, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltip],
  styles: ["input[type=file][_ngcontent-%COMP%] {\n  opacity: 0;\n  z-index: -1;\n  position: absolute;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.grid__container[_ngcontent-%COMP%] {\n  display: grid !important;\n  grid-template-columns: repeat(5, 1fr);\n  width: 100%;\n}\n\n@media screen and (max-width: 1500px) {\n  .grid__item[_ngcontent-%COMP%] {\n    max-width: 200px;\n  }\n  .grid__item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n@media screen and (max-width: 1350px) {\n  .grid__item[_ngcontent-%COMP%] {\n    max-width: 175px;\n  }\n  .grid__item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n@media screen and (max-width: 1200px) {\n  .grid__item[_ngcontent-%COMP%] {\n    max-width: 150px;\n  }\n  .grid__item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n@media screen and (max-width: 1050px) {\n  .grid__item[_ngcontent-%COMP%] {\n    max-width: 125px;\n  }\n  .grid__item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uL1NhaSUyMEtpcmFuL0RvY3VtZW50cy9hZG1pbi1oaXNlbnNlL2hpc2Vuc2UtYWRtaW4vc3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7RUFDQSxxQ0FBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksZ0JBQUE7RUNDTjtFREFNO0lBQ0ksZUFBQTtFQ0VWO0FBQ0Y7QURFQTtFQUNJO0lBQ0ksZ0JBQUE7RUNBTjtFRENNO0lBQ0ksZUFBQTtFQ0NWO0FBQ0Y7QURHQTtFQUNJO0lBQ0ksZ0JBQUE7RUNETjtFREVNO0lBQ0ksZUFBQTtFQ0FWO0FBQ0Y7QURJQTtFQUNJO0lBQ0ksZ0JBQUE7RUNGTjtFREdNO0lBQ0ksZUFBQTtFQ0RWO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZ3JpZF9fY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwxZnIpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1MDBweCkge1xyXG4gICAgLmdyaWRfX2l0ZW17XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgICBtYXQtZm9ybS1maWVsZHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM1MHB4KSB7XHJcbiAgICAuZ3JpZF9faXRlbXtcclxuICAgICAgICBtYXgtd2lkdGg6IDE3NXB4O1xyXG4gICAgICAgIG1hdC1mb3JtLWZpZWxke1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5ncmlkX19pdGVte1xyXG4gICAgICAgIG1heC13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgbWF0LWZvcm0tZmllbGR7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xyXG4gICAgLmdyaWRfX2l0ZW17XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMjVweDtcclxuICAgICAgICBtYXQtZm9ybS1maWVsZHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImlucHV0W3R5cGU9ZmlsZV0ge1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAtMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZ3JpZF9fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTUwMHB4KSB7XG4gIC5ncmlkX19pdGVtIHtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICB9XG4gIC5ncmlkX19pdGVtIG1hdC1mb3JtLWZpZWxkIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNTBweCkge1xuICAuZ3JpZF9faXRlbSB7XG4gICAgbWF4LXdpZHRoOiAxNzVweDtcbiAgfVxuICAuZ3JpZF9faXRlbSBtYXQtZm9ybS1maWVsZCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmdyaWRfX2l0ZW0ge1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gIH1cbiAgLmdyaWRfX2l0ZW0gbWF0LWZvcm0tZmllbGQge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XG4gIC5ncmlkX19pdGVtIHtcbiAgICBtYXgtd2lkdGg6IDEyNXB4O1xuICB9XG4gIC5ncmlkX19pdGVtIG1hdC1mb3JtLWZpZWxkIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 9201:
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": () => (/* binding */ ROUTES),
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);





function SidebarComponent_ng_container_13_ng_container_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 18)(1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_ng_container_13_ng_container_1_li_1_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.routeRedirection(item_r1 == null ? null : item_r1.path));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.title);
  }
}
function SidebarComponent_ng_container_13_ng_container_1_li_2_ng_container_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 25)(2, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_ng_container_13_ng_container_1_li_2_ng_container_8_ng_container_1_Template_a_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
      const dropdownItem_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
      ctx_r13.routeRedirection(dropdownItem_r11 == null ? null : dropdownItem_r11.path);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const dropdownItem_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dropdownItem_r11 == null ? null : dropdownItem_r11.title);
  }
}
function SidebarComponent_ng_container_13_ng_container_1_li_2_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SidebarComponent_ng_container_13_ng_container_1_li_2_ng_container_8_ng_container_1_Template, 5, 1, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const dropdownItem_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", dropdownItem_r11.visible);
  }
}
function SidebarComponent_ng_container_13_ng_container_1_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_ng_container_13_ng_container_1_li_2_Template_li_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);
      const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](item_r1.isCollapsed = !item_r1.isCollapsed);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a")(2, "button", 21)(3, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 24)(7, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SidebarComponent_ng_container_13_ng_container_1_li_2_ng_container_8_Template, 2, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const item_r1 = ctx_r20.$implicit;
    const i_r2 = ctx_r20.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", (item_r1 == null ? null : item_r1.className) == ctx_r5.isCollapsed[i_r2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-target", "#" + item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbCollapse", item_r1.isCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r1 == null ? null : item_r1.dropDownMenu);
  }
}
function SidebarComponent_ng_container_13_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SidebarComponent_ng_container_13_ng_container_1_li_1_Template, 4, 1, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SidebarComponent_ng_container_13_ng_container_1_li_2_Template, 9, 6, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(item_r1 == null ? null : item_r1.dropdown));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1 == null ? null : item_r1.dropdown);
  }
}
function SidebarComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SidebarComponent_ng_container_13_ng_container_1_Template, 3, 2, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1.visible);
  }
}
const _c0 = function (a0) {
  return {
    "mb-0": a0
  };
};
const ROUTES = [
// {
//   user: 'admin', dropdown: true, userName: false, className: true, title: 'Customers', icon: 'fa fa-user-friends', visible: false, dropDownMenu: [
//     { user: 'admin', dropdown: false, path: '', icon: 'fa fa-user-friends', title: 'View all customers', visible: false }
//   ]
// },
// {
//   user: 'admin', dropdown: true, userName: false, className: true, title: 'Campaigns', icon: 'fas fa-funnel-dollar', visible: false, dropDownMenu: [
//     { user: 'admin', dropdown: false, path: '', icon: 'fas fa-funnel-dollar', title: 'View all customers', visible: false }
//   ]
// },
// {
//   user: 'admin', dropdown: true, userName: false, className: true, title: 'Users', icon: 'fas fa-user-cog', visible: false, dropDownMenu: [
//     { user: 'admin', dropdown: false, path: '/users/new', icon: 'fa fa-user-plus', title: 'Create a new user', visible: false },
//     { user: 'admin', dropdown: false, path: '/users/view', icon: 'view-users', title: 'All Users', visible: false }
//   ]
// },
// {
//   user: 'admin', dropdown: true, userName: false, className: true, title: 'Billing', icon: 'fas fa-file-invoice-dollar', visible: false, dropDownMenu: [
//     { user: 'admin', dropdown: false, path: '/billing/cards', icon: 'fa fa-credit-card', title: 'Cards', visible: false },
//     { user: 'admin', dropdown: false, path: '/billing/subscription-plan', icon: 'renew-subscription', title: 'Subscription Plan', visible: true },
//     { user: 'admin', dropdown: false, path: '/billing/invoices', icon: 'fas fa-file-invoice', title: 'Invoices', visible: true },
//   ]
// },
// {
//   user: 'admin', dropdown: false, userName: false, className: true, title: 'Customers', icon: 'fa fa-user-tie', visible: true, path: '/customers'
// },
// {
//   user: 'admin', dropdown: false, userName: false, className: true, title: 'Campaigns', icon: 'fas fa-bullhorn', visible: true, path: '/campaigns'
// },
// {
//   user: 'admin', dropdown: false, userName: false, className: true, title: 'Reports', icon: 'far fa-chart-bar', visible: true, path: '/reports'
// },
// {
//   user: 'admin', dropdown: false, userName: false, className: true, title: 'Thaut Drive', icon: 'fab fa-google-drive', visible: true, path: '/thaut-drive'
// },
// {
//   user: 'admin', dropdown: false, userName: false, className: true, title: 'Sentiment Analysis', icon: 'sentiment-analysis', visible: true, path: '/sentiment-analysis'
// },
// {
//   user: 'admin', dropdown: false, userName: false, className: true, title: 'QR Code Generator', icon: 'qr-generator-icon', visible: true, path: '/qr-code-generator'
// },
{
  user: 'admin',
  dropdown: true,
  userName: false,
  className: true,
  title: 'Product',
  icon: 'product-icon',
  visible: true,
  isCollapsed: true,
  dropDownMenu: [{
    user: 'admin',
    dropdown: false,
    path: '/create/product-varients',
    icon: 'fa fa-plus',
    title: 'Create a new product',
    visible: true
  },
  // { user: 'admin', dropdown: false, path: '/view/product-varients', icon: 'fa fa-eye', title: 'View Product product Varient Details', visible: true }
  {
    user: 'admin',
    dropdown: false,
    path: '/list/product-varients',
    icon: 'fa fa-list',
    title: 'View Products',
    visible: true
  }]
}, {
  user: 'admin',
  dropdown: true,
  userName: false,
  className: true,
  title: 'Product Group',
  icon: 'product-icon',
  visible: true,
  isCollapsed: true,
  dropDownMenu: [{
    user: 'admin',
    dropdown: false,
    path: '/create/product-group',
    icon: 'fa fa-plus',
    title: 'Create a new product group',
    visible: true
  },
  // { user: 'admin', dropdown: false, path: '/view/product-varients', icon: 'fa fa-eye', title: 'View Product product Varient Details', visible: true }
  {
    user: 'admin',
    dropdown: false,
    path: '/list/product-group',
    icon: 'fa fa-list',
    title: 'View product groups',
    visible: true
  }]
}, {
  user: 'admin',
  dropdown: true,
  userName: false,
  className: true,
  title: 'Category',
  icon: 'product-icon',
  visible: true,
  isCollapsed: true,
  dropDownMenu: [{
    user: 'admin',
    dropdown: false,
    path: 'create/category',
    icon: 'fa fa-plus',
    title: 'Create a new Category',
    visible: true
  },
  // { user: 'admin', dropdown: false, path: '/view/product-varients', icon: 'fa fa-eye', title: 'View Product product Varient Details', visible: true }
  {
    user: 'admin',
    dropdown: false,
    path: 'list/category',
    icon: 'fa fa-list',
    title: 'View Categories',
    visible: true
  }]
}, {
  user: 'admin',
  dropdown: false,
  userName: false,
  className: true,
  title: 'Contact requests',
  icon: 'product-icon',
  visible: true,
  path: '/contact-requests'
}, {
  user: 'admin',
  dropdown: false,
  userName: false,
  className: true,
  title: 'Press coverages',
  icon: 'product-icon',
  visible: true,
  path: '/press-coverages'
}, {
  user: 'admin',
  dropdown: false,
  userName: false,
  className: true,
  title: 'Tech testimonials',
  icon: 'product-icon',
  visible: true,
  path: '/tech-testimonials'
}, {
  user: 'admin',
  dropdown: false,
  userName: false,
  className: true,
  title: 'Offers and Promotions',
  icon: 'product-icon',
  visible: true,
  path: '/offers-and-promotions'
}, {
  user: 'admin',
  dropdown: false,
  userName: false,
  className: true,
  title: 'Home Page Slides',
  icon: 'product-icon',
  visible: true,
  path: '/home-slider'
}, {
  user: 'admin',
  dropdown: false,
  userName: false,
  className: true,
  title: 'Terms And Conditions',
  icon: 'product-icon',
  visible: true,
  path: '/terms-and-conditions'
}
// {
//   user: 'admin', dropdown: false, userName: false, className: true, title: 'My Profile', icon: 'fas fa-id-card', visible: true, path: '/user-profile'
// }
];

class SidebarComponent {
  // @ViewChild('jumpTo', { static: true }) jumpToBtn: any;
  constructor(
  // private utility: UtitlityService,
  cdr, api, router,
  // private dialog: MatDialog,
  activeRoute) {
    this.cdr = cdr;
    this.api = api;
    this.router = router;
    this.activeRoute = activeRoute;
    this.menuItems = ROUTES;
    this.isCollapsed = [];
    this.platformInfo = {};
    this.canSwitchCompany = false;
    // isProfileNavigation = false;
    this.alive = true;
    this.isJumpToModalOpen = false;
    console.log(this.menuItems);
  }
  ngOnInit() {
    // window.addEventListener('keydown',(e)=>{
    //   if(e.ctrlKey && e.code === 'KeyK'){
    //     e.preventDefault();
    //   }
    // })
    // document.onkeydown = (e) => {
    //   if(e.ctrlKey && e.code === 'KeyK'){
    //     if(this.isJumpToModalOpen){
    //       this.jumpTodialogRef.close();
    //       this.isJumpToModalOpen = !this.isJumpToModalOpen;
    //     } else {
    //       const el: HTMLElement = this.jumpToBtn.nativeElement;
    //       el.click();
    //     }
    //   }
    // }
  }
  // getPlatformInfo() {
  //   const obj = this.startupService.platformInfo$.pipe(takeWhile(_ => this.alive)).subscribe((data) => {
  //     if (data) {
  //       this.platformInfo.name = data.company.name;
  //       this.platformInfo.imgURL = data.platform.logo;
  //       this.platformInfo.companySubscriptionPlan = data.companySubscriptionPlan;
  //     }
  //   })
  // }
  ngAfterContentChecked() {
    this.currentUser = JSON.parse(this.api.readLocalStorage('currentUserSession'));
    this.cdr.detectChanges();
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
  routeRedirection(path) {
    this.router.navigate([path], {
      relativeTo: this.activeRoute
    });
  }
  logout() {
    swal({
      text: 'Are you sure you want to logout?',
      type: 'warning',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then(willDelete => {
      this.api.logout();
    }, error => {});
  }
  // isDialogOpen() {
  //   if (this.dialog && this.dialog.openDialogs && this.dialog.openDialogs.length) {
  //     return;
  //   } else {
  //     this.openSwitchToDialog();
  //   }
  // }
  // switchAccount() {
  //   const dialogRef = this.dialog.open(AccountSwitchComponent, {
  //     width: '500px',
  //     height: '90vh',
  //     panelClass: 'switcher-panel'
  //   });
  //   dialogRef.afterClosed().subscribe(data => {
  //     if (data) {
  //       let user = this.utility.getLocalStorage('activeCompanyUser');
  //       if (user && user.company) {
  //         this.companyName = user.company.company_name;
  //       }
  //       else {
  //         this.companyName = null;
  //       }
  //       if (user && user.company.logo_media && user.company.logo_media.media_url_final_full_url) {
  //         this.companyLogo = user.company.logo_media.media_url_final_full_url;
  //       }
  //       else {
  //         this.companyLogo = null;
  //       }
  //     }
  //   })
  // }
  // openSwitchToDialog() {
  //   this.isJumpToModalOpen = !this.isJumpToModalOpen;
  //   this.jumpTodialogRef = this.dialog.open(SwitcherComponent, {
  //     width: '800px',
  //     panelClass: 'switcher-panel'
  //   });
  //   this.jumpTodialogRef.afterClosed().subscribe(
  //     (result: LocationCustomerQueryParams) => {
  //       if (result) {
  //         if (result.company_account_uuid || result.account_uuid) {
  //           const accId = result.account_uuid || result.company_account_uuid;
  //           if (result.account_location_uuid) {
  //             this.router.navigate(['/accounts/' + accId + '/locations/' + result.account_location_uuid + '/view']);
  //           } else {
  //             this.router.navigate(['/accounts/' + accId ]);
  //           }
  //         } else {
  //           this.router.navigate(['/accounts/view']);
  //         }
  //       }
  //     }
  //   );
  // }
  // openSubscriptionModal(event,isPremiumService?){
  //   if(isPremiumService && isPremiumService !== 'y'){
  //     event.stopPropagation();
  //   }
  //   this.dialog.open(SubscriptionPlanModalComponent, {
  //     width: "80vw",
  //     panelClass: "switcher-panel",
  //     data: { recommendedPlan: isPremiumService },
  //   });
  // }
  ngOnDestroy() {
    this.alive = false;
  }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
  return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
};
SidebarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SidebarComponent,
  selectors: [["app-sidebar"]],
  decls: 17,
  vars: 4,
  consts: [[1, "side-wrapper"], [1, "logo"], [1, "logo-icon-container"], ["routerLink", "/dashboard", 1, "simple-text"], [1, "logo-img", "position-static"], ["src", "assets/img/logo.svg", 1, "position-static"], [1, "nav"], [1, "nav-item"], ["routerLink", "/dashboard", 1, "nav-link", "cursor-pointer"], [1, "fas", "fa-home"], [1, "sidebar-wrapper", 3, "ngClass"], [1, "nav", 2, "margin", "0px"], [4, "ngFor", "ngForOf"], [1, "nav-item", "logout"], [1, "nav-link", "cursor-pointer", 3, "click"], [4, "ngIf"], ["class", "nav-item", "routerLinkActive", "active", 4, "ngIf"], ["routerLinkActive", "active", "class", "nav-item", 3, "active", "click", 4, "ngIf"], ["routerLinkActive", "active", 1, "nav-item"], [1, "nav-link", "d-flex", "align-items-center", "position-relative", 3, "click"], ["routerLinkActive", "active", 1, "nav-item", 3, "click"], ["data-toggle", "collapse", "aria-expanded", "false", 1, "nav-link", "w-100", "p-0", "d-flex", "justify-content-center", "align-items-center", "collapsed", 2, "gap", "12px", "color", "#000"], [1, "mb-0", "d-flex", "justify-content-between", "align-items-center", "w-100"], [1, "fas", "fa-caret-down"], [1, "collapse", "navbar-collapse", 3, "ngbCollapse"], ["routerLinkActive", "active", 1, "nav-item", 2, "margin-left", "18px"], [1, "mr-3"]],
  template: function SidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 6)(7, "li", 7)(8, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Home ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10)(12, "ul", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SidebarComponent_ng_container_13_Template, 2, 1, "ng-container", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 13)(15, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_15_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Logout ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, !(ctx.platformInfo.companySubscriptionPlan == null ? null : ctx.platformInfo.companySubscriptionPlan.code)));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbCollapse],
  styles: ["[_ngcontent-%COMP%]:root {\n  --primary: #00b3ac;\n  --white: #fff;\n  --black: #000;\n}\n\n.side-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n}\n.side-wrapper[_ngcontent-%COMP%]   .logo-icon-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  align-items: center;\n  justify-content: flex-start;\n  margin-bottom: 2rem;\n}\n.side-wrapper[_ngcontent-%COMP%]   .logo-icon-container[_ngcontent-%COMP%]   .links-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.side-wrapper[_ngcontent-%COMP%]   .logo-icon-container[_ngcontent-%COMP%]   .links-wrapper[_ngcontent-%COMP%]   .links-wrapper-link[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 13px;\n  font-weight: 400;\n}\n.side-wrapper[_ngcontent-%COMP%]   .logo-icon-container[_ngcontent-%COMP%]   .company-logo-name[_ngcontent-%COMP%] {\n  max-height: 100px;\n  height: 80px;\n  display: flex;\n  align-items: center;\n}\n.side-wrapper[_ngcontent-%COMP%]   .logo-icon-container[_ngcontent-%COMP%]   .switch-company-btn-container[_ngcontent-%COMP%] {\n  max-height: 100px;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.side-wrapper[_ngcontent-%COMP%]   .logo-icon-container[_ngcontent-%COMP%]   .switch-company-btn-container[_ngcontent-%COMP%]   .company-name-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n.side-wrapper[_ngcontent-%COMP%]   .logo-icon-container[_ngcontent-%COMP%]   .switch-company-btn-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  position: absolute;\n  right: 10px;\n  top: 0;\n  bottom: 0;\n}\n.side-wrapper[_ngcontent-%COMP%]   .logo-icon-container[_ngcontent-%COMP%]   .switch-company-btn-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: 18px;\n}\n.side-wrapper[_ngcontent-%COMP%]   .logo-icon-container[_ngcontent-%COMP%]   .switch-company-btn-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .switch-company-btn[_ngcontent-%COMP%] {\n  background-color: #17a1bf;\n  border-radius: 3px;\n  padding: 5px;\n  font-size: 14px;\n  color: #3C4858;\n  font-weight: 400;\n  margin-left: 0;\n  height: 30px;\n}\n.side-wrapper[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .side-wrapper[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .side-wrapper[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-weight: 400;\n  margin-right: 0;\n}\n.side-wrapper[_ngcontent-%COMP%]   li.switch-view.activeChild.nav-item[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  bottom: 70px;\n  padding-bottom: 20px;\n  background: white;\n  z-index: 1;\n}\n.side-wrapper[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 16px;\n  font-weight: 500;\n  color: #666666;\n  max-width: 134px;\n}\n.side-wrapper[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.jump-to-btn[_ngcontent-%COMP%] {\n  color: white !important;\n  background: var(--primary) !important;\n}\n.jump-to-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: white !important;\n}\n.jump-to-btn[_ngcontent-%COMP%]:hover {\n  background: var(--primary) !important;\n}\n\n.sidebar-wrapper[_ngcontent-%COMP%] {\n  flex: 1 1 0;\n  flex-direction: column;\n  padding-bottom: 0;\n  margin-bottom: 35px;\n  max-height: calc(100% - 134px);\n  overflow-y: auto;\n}\n\n.thaut-logo[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  width: 100%;\n  justify-content: center;\n  background: white;\n  z-index: 1;\n  bottom: 0px;\n  padding: 15px;\n  gap: 10px;\n  align-items: center;\n  border-bottom: 5px solid var(--primary);\n}\n.thaut-logo[_ngcontent-%COMP%]   .powered[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-bottom: 8px;\n}\n.thaut-logo[_ngcontent-%COMP%]   .plan-type[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  right: 15px;\n  background: var(--primary);\n  color: white;\n  padding: 8px;\n  padding-top: 3px;\n  border-top-left-radius: 6px;\n  padding-bottom: 0;\n  border-top-right-radius: 6px;\n  font-size: 12px;\n  cursor: pointer;\n}\n.thaut-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: auto;\n  max-height: 35px !important;\n  filter: contrast(0);\n}\n.thaut-logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.nav[_ngcontent-%COMP%] {\n  flex: 1 1 0;\n  overflow-y: auto;\n}\n.nav[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 15px !important;\n}\n\n.logo[_ngcontent-%COMP%] {\n  padding: 0px 0px 10px !important;\n}\n\n@media (max-width: 768px) {\n  .thaut-logo[_ngcontent-%COMP%] {\n    position: fixed;\n  }\n}\n.sidebar-premium-service-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: block;\n  top: 0;\n  left: 0;\n  position: absolute;\n}\n\n.premium-star-icon-child[_ngcontent-%COMP%] {\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  position: relative;\n  cursor: pointer;\n}\n\n.premium-lock-wrapper[_ngcontent-%COMP%] {\n  right: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.premium-lock-wrapper[_ngcontent-%COMP%]   .premium-lock-icon[_ngcontent-%COMP%] {\n  left: 50% !important;\n  transform: translate(-50%, -50%) !important;\n}\n\n.renew-subscription[_ngcontent-%COMP%] {\n  background: url(\"/assets/svgs/renew-subscription.svg\") no-repeat;\n  height: 20px !important;\n  width: 20px !important;\n}\n\n.view-accounts[_ngcontent-%COMP%], .view-users[_ngcontent-%COMP%] {\n  background: url(\"/assets/svgs/view-accounts.svg\") no-repeat;\n  height: 20px !important;\n  width: 20px !important;\n}\n\n.sentiment-analysis[_ngcontent-%COMP%] {\n  background: url(\"/assets/svgs/sentiment-analysis.svg\") no-repeat;\n  height: 20px !important;\n  width: 20px !important;\n}\n\n.qr-generator-icon[_ngcontent-%COMP%] {\n  background: url(\"/assets/svgs/qr.svg\") no-repeat;\n  height: 20px !important;\n  width: 20px !important;\n}\n\n.product-icon[_ngcontent-%COMP%] {\n  background: url(\"/assets/img/product.svg\") no-repeat;\n  height: 20px !important;\n  width: 25px !important;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  height: 100vh;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 2;\n  width: 260px;\n  background: var(--white);\n}\n.sidebar[_ngcontent-%COMP%]   .caret[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-top: 4px solid\\9 ;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n}\n.sidebar[data-background-color=black][_ngcontent-%COMP%] {\n  background-color: #191919;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%] {\n  width: 35px;\n  display: block;\n  max-height: 30px;\n  margin-left: 13px;\n  margin-right: 15px;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 35px;\n  top: 16px;\n  position: absolute;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%] {\n  width: 260px;\n  z-index: 4;\n  padding-bottom: 30px;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-backdrop[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .navbar-form[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: none;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .navbar-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  font-size: 1.7em;\n  height: 36px;\n  width: 78%;\n  padding-left: 17px;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]    > .nav[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]    > .nav[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .sidebar-normal[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .sidebar-normal[_ngcontent-%COMP%] {\n  margin: 0;\n  position: relative;\n  transform: translateX(0px);\n  opacity: 1;\n  white-space: nowrap;\n  display: block;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]    > .nav[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .sidebar-mini[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .sidebar-mini[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  width: 30px;\n  margin-right: 15px;\n  text-align: center;\n  letter-spacing: 1px;\n  position: relative;\n  float: left;\n  display: inherit;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]    > .nav[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 17px;\n  line-height: 20px;\n  width: 26px;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-tim[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  border: 1px solid #333;\n  display: block;\n  height: 61px;\n  width: 61px;\n  float: left;\n  overflow: hidden;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-tim[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n}\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: block;\n}\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .caret[_ngcontent-%COMP%] {\n  margin-top: 13px;\n  position: absolute;\n  right: 20px;\n}\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\n  background-color: transparent;\n  outline: none;\n}\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child    > a[_ngcontent-%COMP%] {\n  margin: 0 15px;\n}\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    > [data-toggle=collapse][_ngcontent-%COMP%] {\n  background-color: rgba(200, 200, 200, 0.2);\n  color: var(--black);\n  box-shadow: none;\n}\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]    > [data-toggle=collapse][_ngcontent-%COMP%] {\n  background-color: rgba(200, 200, 200, 0.2);\n  color: white;\n  box-shadow: none;\n}\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]    > [data-toggle=collapse][_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #a9afbb;\n}\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--white);\n}\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i.active[_ngcontent-%COMP%] {\n  color: var(--white);\n}\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li.separator[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li.separator[_ngcontent-%COMP%]:after {\n  width: calc(100% - 30px);\n  content: \"\";\n  position: absolute;\n  height: 1px;\n  left: 15px;\n  background-color: rgba(180, 180, 180, 0.3);\n}\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li.separator[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  margin-top: 31px;\n}\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 30px;\n  font-size: 14px;\n  display: block;\n  height: auto;\n  white-space: nowrap;\n  text-align: start;\n}\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  float: left;\n  margin-right: 15px;\n  width: 30px;\n  text-align: center;\n  color: #a9afbb;\n}\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 10px 15px 0;\n  border-radius: 3px;\n  color: var(--black);\n  padding-left: 10px;\n  padding-right: 10px;\n  text-transform: capitalize;\n  font-size: 13px;\n  padding: 10px 15px;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-background[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  height: 100%;\n  width: 100%;\n  display: block;\n  top: 0;\n  left: 0;\n  background-size: cover;\n  background-position: center center;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-background[_ngcontent-%COMP%]:after {\n  position: absolute;\n  z-index: 3;\n  width: 100%;\n  height: 100%;\n  content: \"\";\n  display: block;\n  background: #FFFFFF;\n  opacity: 0.93;\n}\n.sidebar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  padding: 15px 0px;\n  margin: 0;\n  display: block;\n  position: relative;\n  z-index: 4;\n}\n.sidebar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  right: 15px;\n  height: 1px;\n  width: calc(100% - 30px);\n  background-color: rgba(180, 180, 180, 0.3);\n}\n.sidebar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 20px;\n  margin: 10px 10px;\n  color: var(--white);\n  line-height: 20px;\n}\n.sidebar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .simple-text[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  padding: 10px 0;\n  display: inline-block;\n  font-size: 18px;\n  color: var(--black);\n  white-space: nowrap;\n  font-weight: normal;\n  line-height: 30px;\n  overflow: hidden;\n  text-align: center;\n  display: block;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-tim[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  border: 1px solid #333;\n  display: block;\n  height: 61px;\n  width: 61px;\n  float: left;\n  overflow: hidden;\n}\n.sidebar[_ngcontent-%COMP%]   .logo-tim[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n}\n\n.off-canvas-sidebar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .off-canvas-sidebar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: var(--white);\n  margin: 0 15px;\n}\n.off-canvas-sidebar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus, .off-canvas-sidebar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  background: rgba(200, 200, 200, 0.2);\n}\n\n.main-panel[_ngcontent-%COMP%] {\n  position: relative;\n  float: right;\n  width: calc(100% - 260px);\n}\n.main-panel[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  margin-top: 70px;\n  padding: 0px 15px;\n  min-height: calc(100vh - 123px);\n}\n.main-panel[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #e7e7e7;\n}\n.main-panel[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.main-panel[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.main-panel[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.perfect-scrollbar-on[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%], .perfect-scrollbar-on[_ngcontent-%COMP%]   .main-panel[_ngcontent-%COMP%] {\n  height: 100%;\n  max-height: 100%;\n}\n\n.sidebar[_ngcontent-%COMP%], .main-panel[_ngcontent-%COMP%], .sidebar-wrapper[_ngcontent-%COMP%] {\n  transition-property: top, bottom, width;\n  transition-duration: 0.2s, 0.2s, 0.35s;\n  transition-timing-function: linear, linear, ease;\n  -webkit-overflow-scrolling: touch;\n}\n\n.visible-on-sidebar-regular[_ngcontent-%COMP%] {\n  display: inline-block !important;\n}\n\n.visible-on-sidebar-mini[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n@media (min-width: 991px) {\n  .sidebar-mini[_ngcontent-%COMP%]   .visible-on-sidebar-regular[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .sidebar-mini[_ngcontent-%COMP%]   .visible-on-sidebar-mini[_ngcontent-%COMP%] {\n    display: inline-block !important;\n  }\n  .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%], .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%] {\n    width: 80px;\n  }\n  .sidebar-mini[_ngcontent-%COMP%]   .main-panel[_ngcontent-%COMP%] {\n    width: calc(100% - 80px);\n  }\n  .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n    display: block;\n    font-weight: 200;\n    z-index: 9999;\n  }\n  .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   a.logo-normal[_ngcontent-%COMP%] {\n    opacity: 0;\n  }\n  .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]    > .nav[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .sidebar-normal[_ngcontent-%COMP%], .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .sidebar-normal[_ngcontent-%COMP%], .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]    > .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    opacity: 0;\n  }\n  .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]:hover {\n    width: 260px;\n  }\n  .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]:hover   .logo[_ngcontent-%COMP%]   a.logo-normal[_ngcontent-%COMP%] {\n    opacity: 1;\n  }\n  .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]:hover   .sidebar-wrapper[_ngcontent-%COMP%] {\n    width: 260px;\n  }\n  .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]:hover   .sidebar-wrapper[_ngcontent-%COMP%]    > .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]:hover   .sidebar-wrapper[_ngcontent-%COMP%]    > .nav[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .sidebar-normal[_ngcontent-%COMP%], .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]:hover   .sidebar-wrapper[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .sidebar-normal[_ngcontent-%COMP%], .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]:hover   .sidebar-wrapper[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    opacity: 1;\n  }\n}\n.nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #3c4858 !important;\n}\n\n.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000 !important;\n  border-radius: 3px;\n  text-transform: capitalize;\n  font-size: 14px;\n  padding: 10px 15px;\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  justify-content: flex-start;\n}\n.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.3);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9jb3JlL3RoZW1lcy9wcmltYXJ5LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi9TYWklMjBLaXJhbi9Eb2N1bWVudHMvYWRtaW4taGlzZW5zZS9oaXNlbnNlLWFkbWluL3NyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQ0hKOztBQ0ZBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QURLRjtBQ0hFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QURLSjtBQ0ZJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QURJTjtBQ0ZNO0VBQ0UscUJGdkJRO0VFd0JSLGVBQUE7RUFDQSxnQkFBQTtBRElSO0FDQUk7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QURFTjtBQ0NJO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QURDTjtBQ0NNO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7QURDUjtBQ0VNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtBREFSO0FDRVE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBREFWO0FDR1E7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBRERWO0FDaUJFOzs7RUFHRSxnQkFBQTtFQUNBLGVBQUE7QURmSjtBQ2tCRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBRGhCSjtBQ21CRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QURqQko7QUNtQkk7RUFDRSxrQkFBQTtBRGpCTjs7QUN1QkE7RUFDRSx1QkFBQTtFQUNBLHFDQUFBO0FEcEJGO0FDdUJFO0VBQ0UsdUJBQUE7QURyQko7QUN3QkU7RUFDRSxxQ0FBQTtBRHRCSjs7QUMrQkE7RUFDRSxXQUFBO0VBRUEsc0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBRDdCRjs7QUNtQ0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUVBLHVDQUFBO0FEakNGO0FDbUNFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FEakNKO0FDb0NFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUVBLDBCRmpMWTtFRWtMWixZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QURuQ0o7QUNzQ0U7RUFDRSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBRHBDSjtBQ3VDRTtFQUNFLGdCQUFBO0FEckNKOztBQ3lDQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBRHRDRjtBQ3dDRTtFQUNFLHNCQUFBO0FEdENKOztBQzBDQTtFQUNFLGdDQUFBO0FEdkNGOztBQzBDQTtFQUtFO0lBQ0UsZUFBQTtFRDNDRjtBQUNGO0FDOENBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtBRDVDRjs7QUMrQ0E7RUFDRSxRQUFBO0VBQ0EsMkJBQUE7QUQ1Q0Y7O0FDK0NBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBRUEsa0JBQUE7RUFDQSxlQUFBO0FEN0NGOztBQ2dEQTtFQUNFLFVBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUQ3Q0Y7QUMrQ0U7RUFDRSxvQkFBQTtFQUNBLDJDQUFBO0FEN0NKOztBQ2lEQTtFQUNFLGdFQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBRDlDRjs7QUNpREE7O0VBRUUsMkRBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FEOUNGOztBQ2lEQTtFQUNFLGdFQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBRDlDRjs7QUNpREE7RUFDRSxnREFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUQ5Q0Y7O0FDaURBO0VBQ0Usb0RBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FEOUNGOztBQ2tEQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7QUQvQ0Y7O0FDa0RBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esd0JGM1NZO0FDNFBkO0FDa0RFO0VBQ0UscUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBRGhESjtBQ21ERTtFQUNFLHlCQUFBO0FEakRKO0FDb0RFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QURsREo7QUNvREk7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FEbEROO0FDc0RFO0VBSUUsWUFBQTtFQUNBLFVBQUE7RUFFQSxvQkFBQTtBRHhESjtBQzBESTtFQUNFLHdCQUFBO0FEeEROO0FDMkRJO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FEekROO0FDMkRNO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FEekRSO0FDZ0VROztFQUNFLHFCQUFBO0FEN0RWO0FDaUVROztFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBRDlEVjtBQ2tFUTs7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBRC9EVjtBQ2tFUTs7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FEL0RWO0FDcUVFO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBRG5FSjtBQ3FFSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FEbkVOO0FDdUVFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FEckVKO0FDdUVJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QURyRU47QUMyRVE7RUFFRSw2QkFBQTtFQUNBLGFBQUE7QUQxRVY7QUM4RU07RUFDRSxjQUFBO0FENUVSO0FDK0VNO0VBR0UsMENBQUE7RUFDQSxtQkZyYk07RUVzYk4sZ0JBQUE7QUQvRVI7QUNrRk07RUFDRSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRGhGUjtBQ29GUTtFQUNFLGNBQUE7QURsRlY7QUNzRk07RUFFRSxtQkZ4Y007QUNtWGQ7QUN3Rk07RUFDRSxtQkY1Y007QUNzWGQ7QUM2Rk07RUFDRSxjQUFBO0FEM0ZSO0FDNkZRO0VBQ0Usd0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLDBDQUFBO0FEM0ZWO0FDOEZRO0VBQ0UsZ0JBQUE7QUQ1RlY7QUNpR0k7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBRUEsY0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FEaEdOO0FDbUdJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QURqR047QUNxR0U7O0VBRUUsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CRjdmVTtFRThmVixrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QURuR0o7QUN1R0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7QURyR0o7QUN1R0k7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FEckdOO0FDeUdFO0VBQ0UsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBRHZHSjtBQ3lHSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsMENBQUE7QUR2R047QUMyR0k7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJGcGpCUTtFRXFqQlIsaUJBQUE7QUR6R047QUM0R0k7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkY1akJRO0VFNmpCUixtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBRDFHTjtBQzhHRTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUQ1R0o7QUM4R0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBRDVHTjs7QUM2S0k7O0VBRUUsbUJGcnBCUTtFRXNwQlIsY0FBQTtBRDFLTjtBQzZLSTs7RUFFRSxvQ0FBQTtBRDNLTjs7QUNpTEE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBRDlLRjtBQ2lMRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBRC9LSjtBQ2tMRTtFQUNFLDZCQUFBO0FEaExKO0FDbUxFO0VBQ0UsZ0JBQUE7QURqTEo7QUNvTEU7RUFDRSxtQkFBQTtBRGxMSjtBQ29MSTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QURsTE47O0FDeUxFOztFQUVFLFlBQUE7RUFDQSxnQkFBQTtBRHRMSjs7QUMyTEE7OztFQUlFLHVDQUFBO0VBRUEsc0NBQUE7RUFFQSxnREFBQTtFQUNBLGlDQUFBO0FEeExGOztBQzJMQTtFQUNFLGdDQUFBO0FEeExGOztBQzJMQTtFQUNFLHdCQUFBO0FEeExGOztBQzJMQTtFQUVJO0lBQ0Usd0JBQUE7RUR6TEo7RUM0TEU7SUFDRSxnQ0FBQTtFRDFMSjtFQzZMRTs7SUFFRSxXQUFBO0VEM0xKO0VDOExFO0lBQ0Usd0JBQUE7RUQ1TEo7RUMrTEU7SUFDRSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxhQUFBO0VEN0xKO0VDZ01NO0lBQ0UsVUFBQTtFRDlMUjtFQ3FNTTs7OztJQUtFLFVBQUE7RURwTVI7RUN5TUU7SUFDRSxZQUFBO0VEdk1KO0VDME1NO0lBQ0UsVUFBQTtFRHhNUjtFQzZNSTtJQUNFLFlBQUE7RUQzTU47RUM2TU07Ozs7SUFLRSxVQUFBO0VENU1SO0FBQ0Y7QUNrTkE7RUFDRSxzQkFBQTtBRGhORjs7QUNtTkE7RUFDRSx5QkFBQTtBRGhORjs7QUNtTkE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QURoTkY7QUNrTkU7RUFDRSxvQ0FBQTtBRGhOSiIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvci1wcmltYXJ5OiB2YXIoLS1wcmltYXJ5KTtcclxuJHdoaXRlLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiRibGFjay1jb2xvcjogdmFyKC0tYmxhY2spO1xyXG5cclxuOnJvb3R7XHJcbiAgICAtLXByaW1hcnk6ICMwMGIzYWM7XHJcbiAgICAtLXdoaXRlOiAjZmZmO1xyXG4gICAgLS1ibGFjazogIzAwMDtcclxufSIsIjpyb290IHtcbiAgLS1wcmltYXJ5OiAjMDBiM2FjO1xuICAtLXdoaXRlOiAjZmZmO1xuICAtLWJsYWNrOiAjMDAwO1xufVxuXG4uc2lkZS13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuLnNpZGUtd3JhcHBlciAubG9nby1pY29uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLnNpZGUtd3JhcHBlciAubG9nby1pY29uLWNvbnRhaW5lciAubGlua3Mtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnNpZGUtd3JhcHBlciAubG9nby1pY29uLWNvbnRhaW5lciAubGlua3Mtd3JhcHBlciAubGlua3Mtd3JhcHBlci1saW5rIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uc2lkZS13cmFwcGVyIC5sb2dvLWljb24tY29udGFpbmVyIC5jb21wYW55LWxvZ28tbmFtZSB7XG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2lkZS13cmFwcGVyIC5sb2dvLWljb24tY29udGFpbmVyIC5zd2l0Y2gtY29tcGFueS1idG4tY29udGFpbmVyIHtcbiAgbWF4LWhlaWdodDogMTAwcHg7XG4gIGhlaWdodDogODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uc2lkZS13cmFwcGVyIC5sb2dvLWljb24tY29udGFpbmVyIC5zd2l0Y2gtY29tcGFueS1idG4tY29udGFpbmVyIC5jb21wYW55LW5hbWUtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4uc2lkZS13cmFwcGVyIC5sb2dvLWljb24tY29udGFpbmVyIC5zd2l0Y2gtY29tcGFueS1idG4tY29udGFpbmVyIC5pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG59XG4uc2lkZS13cmFwcGVyIC5sb2dvLWljb24tY29udGFpbmVyIC5zd2l0Y2gtY29tcGFueS1idG4tY29udGFpbmVyIC5pY29uIC5lZGl0LWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMThweDtcbn1cbi5zaWRlLXdyYXBwZXIgLmxvZ28taWNvbi1jb250YWluZXIgLnN3aXRjaC1jb21wYW55LWJ0bi1jb250YWluZXIgLmljb24gLnN3aXRjaC1jb21wYW55LWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxN2ExYmY7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjM0M0ODU4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuLnNpZGUtd3JhcHBlciAubmF2IGxpIGEsXG4uc2lkZS13cmFwcGVyIC5uYXYgbGkgYnV0dG9uIC5uYXYgbGkgLmRyb3Bkb3duLW1lbnUgYSxcbi5zaWRlLXdyYXBwZXIgLm5hdiBsaSAuZHJvcGRvd24tbWVudSBidXR0b24ge1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4uc2lkZS13cmFwcGVyIGxpLnN3aXRjaC12aWV3LmFjdGl2ZUNoaWxkLm5hdi1pdGVtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiA3MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHotaW5kZXg6IDE7XG59XG4uc2lkZS13cmFwcGVyIC5jb21wYW55LW5hbWUge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNjY2NjY2O1xuICBtYXgtd2lkdGg6IDEzNHB4O1xufVxuLnNpZGUtd3JhcHBlciAuY29tcGFueS1uYW1lIGkge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5qdW1wLXRvLWJ0biB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KSAhaW1wb3J0YW50O1xufVxuLmp1bXAtdG8tYnRuIGkge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbi5qdW1wLXRvLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpICFpbXBvcnRhbnQ7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIge1xuICBmbGV4OiAxIDEgMDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDEzNHB4KTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnRoYXV0LWxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHotaW5kZXg6IDE7XG4gIGJvdHRvbTogMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBnYXA6IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcbn1cbi50aGF1dC1sb2dvIC5wb3dlcmVkIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4udGhhdXQtbG9nbyAucGxhbi10eXBlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDRweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDhweDtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udGhhdXQtbG9nbyBpbWcge1xuICB3aWR0aDogYXV0bztcbiAgbWF4LWhlaWdodDogMzVweCAhaW1wb3J0YW50O1xuICBmaWx0ZXI6IGNvbnRyYXN0KDApO1xufVxuLnRoYXV0LWxvZ28gc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5uYXYge1xuICBmbGV4OiAxIDEgMDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5uYXY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLmxvZ28ge1xuICBwYWRkaW5nOiAwcHggMHB4IDEwcHggIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC50aGF1dC1sb2dvIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gIH1cbn1cbi5zaWRlYmFyLXByZW1pdW0tc2VydmljZS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5wcmVtaXVtLXN0YXItaWNvbi1jaGlsZCB7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5uYXYtbGluayB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJlbWl1bS1sb2NrLXdyYXBwZXIge1xuICByaWdodDogNXB4O1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuLnByZW1pdW0tbG9jay13cmFwcGVyIC5wcmVtaXVtLWxvY2staWNvbiB7XG4gIGxlZnQ6IDUwJSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSAhaW1wb3J0YW50O1xufVxuXG4ucmVuZXctc3Vic2NyaXB0aW9uIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9zdmdzL3JlbmV3LXN1YnNjcmlwdGlvbi5zdmdcIikgbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLnZpZXctYWNjb3VudHMsXG4udmlldy11c2VycyB7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvc3Zncy92aWV3LWFjY291bnRzLnN2Z1wiKSBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4uc2VudGltZW50LWFuYWx5c2lzIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9zdmdzL3NlbnRpbWVudC1hbmFseXNpcy5zdmdcIikgbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLnFyLWdlbmVyYXRvci1pY29uIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9zdmdzL3FyLnN2Z1wiKSBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4ucHJvZHVjdC1pY29uIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWcvcHJvZHVjdC5zdmdcIikgbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDI1cHggIWltcG9ydGFudDtcbn1cblxuLndyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLnNpZGViYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogMjYwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbn1cbi5zaWRlYmFyIC5jYXJldCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyLXRvcDogNHB4IGRhc2hlZDtcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkXFw5IDtcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4uc2lkZWJhcltkYXRhLWJhY2tncm91bmQtY29sb3I9YmxhY2tdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcbn1cbi5zaWRlYmFyIC5sb2dvLWltZyB7XG4gIHdpZHRoOiAzNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LWhlaWdodDogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDEzcHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5zaWRlYmFyIC5sb2dvLWltZyBpbWcge1xuICB3aWR0aDogMzVweDtcbiAgdG9wOiAxNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uc2lkZWJhciAuc2lkZWJhci13cmFwcGVyIHtcbiAgd2lkdGg6IDI2MHB4O1xuICB6LWluZGV4OiA0O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLXdyYXBwZXIgLmRyb3Bkb3duIC5kcm9wZG93bi1iYWNrZHJvcCB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLXdyYXBwZXIgLm5hdmJhci1mb3JtIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLnNpZGViYXIgLnNpZGViYXItd3JhcHBlciAubmF2YmFyLWZvcm0gLmlucHV0LWdyb3VwIHtcbiAgZm9udC1zaXplOiAxLjdlbTtcbiAgaGVpZ2h0OiAzNnB4O1xuICB3aWR0aDogNzglO1xuICBwYWRkaW5nLWxlZnQ6IDE3cHg7XG59XG4uc2lkZWJhciAuc2lkZWJhci13cmFwcGVyID4gLm5hdiBbZGF0YS10b2dnbGU9Y29sbGFwc2VdIH4gZGl2ID4gdWwgPiBsaSA+IGEgc3Bhbixcbi5zaWRlYmFyIC5zaWRlYmFyLXdyYXBwZXIgLnVzZXIgLnVzZXItaW5mbyBbZGF0YS10b2dnbGU9Y29sbGFwc2VdIH4gZGl2ID4gdWwgPiBsaSA+IGEgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLXdyYXBwZXIgPiAubmF2IFtkYXRhLXRvZ2dsZT1jb2xsYXBzZV0gfiBkaXYgPiB1bCA+IGxpID4gYSAuc2lkZWJhci1ub3JtYWwsXG4uc2lkZWJhciAuc2lkZWJhci13cmFwcGVyIC51c2VyIC51c2VyLWluZm8gW2RhdGEtdG9nZ2xlPWNvbGxhcHNlXSB+IGRpdiA+IHVsID4gbGkgPiBhIC5zaWRlYmFyLW5vcm1hbCB7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgb3BhY2l0eTogMTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uc2lkZWJhciAuc2lkZWJhci13cmFwcGVyID4gLm5hdiBbZGF0YS10b2dnbGU9Y29sbGFwc2VdIH4gZGl2ID4gdWwgPiBsaSA+IGEgLnNpZGViYXItbWluaSxcbi5zaWRlYmFyIC5zaWRlYmFyLXdyYXBwZXIgLnVzZXIgLnVzZXItaW5mbyBbZGF0YS10b2dnbGU9Y29sbGFwc2VdIH4gZGl2ID4gdWwgPiBsaSA+IGEgLnNpZGViYXItbWluaSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdpZHRoOiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbiAgZGlzcGxheTogaW5oZXJpdDtcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLXdyYXBwZXIgPiAubmF2IFtkYXRhLXRvZ2dsZT1jb2xsYXBzZV0gfiBkaXYgPiB1bCA+IGxpID4gYSBpLFxuLnNpZGViYXIgLnNpZGViYXItd3JhcHBlciAudXNlciAudXNlci1pbmZvIFtkYXRhLXRvZ2dsZT1jb2xsYXBzZV0gfiBkaXYgPiB1bCA+IGxpID4gYSBpIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgd2lkdGg6IDI2cHg7XG59XG4uc2lkZWJhciAubG9nby10aW0ge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDYxcHg7XG4gIHdpZHRoOiA2MXB4O1xuICBmbG9hdDogbGVmdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zaWRlYmFyIC5sb2dvLXRpbSBpbWcge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuLnNpZGViYXIgLm5hdiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnNpZGViYXIgLm5hdiAuY2FyZXQge1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xufVxuLnNpZGViYXIgLm5hdiBsaSA+IGE6aG92ZXIsIC5zaWRlYmFyIC5uYXYgbGkgPiBhOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uc2lkZWJhciAubmF2IGxpOmZpcnN0LWNoaWxkID4gYSB7XG4gIG1hcmdpbjogMCAxNXB4O1xufVxuLnNpZGViYXIgLm5hdiBsaTpob3ZlciA+IGEsIC5zaWRlYmFyIC5uYXYgbGkgLmRyb3Bkb3duLW1lbnUgYTpob3ZlciwgLnNpZGViYXIgLm5hdiBsaSAuZHJvcGRvd24tbWVudSBhOmZvY3VzID4gW2RhdGEtdG9nZ2xlPWNvbGxhcHNlXSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC4yKTtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5zaWRlYmFyIC5uYXYgbGkgLmFjdGl2ZSA+IFtkYXRhLXRvZ2dsZT1jb2xsYXBzZV0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5zaWRlYmFyIC5uYXYgbGkuYWN0aXZlID4gW2RhdGEtdG9nZ2xlPWNvbGxhcHNlXSBpIHtcbiAgY29sb3I6ICNhOWFmYmI7XG59XG4uc2lkZWJhciAubmF2IGxpLmFjdGl2ZSA+IGEsIC5zaWRlYmFyIC5uYXYgbGkuYWN0aXZlID4gYSBpIHtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cbi5zaWRlYmFyIC5uYXYgbGkuYWN0aXZlID4gYSBpLmFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG4uc2lkZWJhciAubmF2IGxpLnNlcGFyYXRvciB7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuLnNpZGViYXIgLm5hdiBsaS5zZXBhcmF0b3I6YWZ0ZXIge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGxlZnQ6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgwLCAxODAsIDE4MCwgMC4zKTtcbn1cbi5zaWRlYmFyIC5uYXYgbGkuc2VwYXJhdG9yICsgbGkge1xuICBtYXJnaW4tdG9wOiAzMXB4O1xufVxuLnNpZGViYXIgLm5hdiBwIHtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cbi5zaWRlYmFyIC5uYXYgaSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgd2lkdGg6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNhOWFmYmI7XG59XG4uc2lkZWJhciAubmF2IGxpIGEsXG4uc2lkZWJhciAubmF2IGxpIC5kcm9wZG93bi1tZW51IGEge1xuICBtYXJnaW46IDEwcHggMTVweCAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xufVxuLnNpZGViYXIgLnNpZGViYXItYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLWJhY2tncm91bmQ6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDM7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBvcGFjaXR5OiAwLjkzO1xufVxuLnNpZGViYXIgLmxvZ28ge1xuICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA0O1xufVxuLnNpZGViYXIgLmxvZ286YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgwLCAxODAsIDE4MCwgMC4zKTtcbn1cbi5zaWRlYmFyIC5sb2dvIHAge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW46IDEwcHggMTBweDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG4uc2lkZWJhciAubG9nbyAuc2ltcGxlLXRleHQge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5zaWRlYmFyIC5sb2dvLXRpbSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogNjFweDtcbiAgd2lkdGg6IDYxcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnNpZGViYXIgLmxvZ28tdGltIGltZyB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5vZmYtY2FudmFzLXNpZGViYXIgLm5hdmJhci1jb2xsYXBzZSAubmF2ID4gbGkgPiBhLFxuLm9mZi1jYW52YXMtc2lkZWJhciAubmF2YmFyLWNvbGxhcHNlIC5uYXYgPiBsaSA+IGE6aG92ZXIge1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBtYXJnaW46IDAgMTVweDtcbn1cbi5vZmYtY2FudmFzLXNpZGViYXIgLm5hdmJhci1jb2xsYXBzZSAubmF2ID4gbGkgPiBhOmZvY3VzLFxuLm9mZi1jYW52YXMtc2lkZWJhciAubmF2YmFyLWNvbGxhcHNlIC5uYXYgPiBsaSA+IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMik7XG59XG5cbi5tYWluLXBhbmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNjBweCk7XG59XG4ubWFpbi1wYW5lbCAubWFpbi1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogNzBweDtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjNweCk7XG59XG4ubWFpbi1wYW5lbCAuZm9vdGVyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlN2U3ZTc7XG59XG4ubWFpbi1wYW5lbCAubmF2YmFyIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5tYWluLXBhbmVsIC5oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLm1haW4tcGFuZWwgLmhlYWRlciAudGl0bGUge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ucGVyZmVjdC1zY3JvbGxiYXItb24gLnNpZGViYXIsXG4ucGVyZmVjdC1zY3JvbGxiYXItb24gLm1haW4tcGFuZWwge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlYmFyLFxuLm1haW4tcGFuZWwsXG4uc2lkZWJhci13cmFwcGVyIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiB0b3AsIGJvdHRvbSwgd2lkdGg7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRvcCwgYm90dG9tLCB3aWR0aDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzLCAwLjJzLCAwLjM1cztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycywgMC4ycywgMC4zNXM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhciwgbGluZWFyLCBlYXNlO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyLCBsaW5lYXIsIGVhc2U7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbn1cblxuLnZpc2libGUtb24tc2lkZWJhci1yZWd1bGFyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi52aXNpYmxlLW9uLXNpZGViYXItbWluaSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MXB4KSB7XG4gIC5zaWRlYmFyLW1pbmkgLnZpc2libGUtb24tc2lkZWJhci1yZWd1bGFyIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNpZGViYXItbWluaSAudmlzaWJsZS1vbi1zaWRlYmFyLW1pbmkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICB9XG4gIC5zaWRlYmFyLW1pbmkgLnNpZGViYXIsXG4gIC5zaWRlYmFyLW1pbmkgLnNpZGViYXIgLnNpZGViYXItd3JhcHBlciB7XG4gICAgd2lkdGg6IDgwcHg7XG4gIH1cbiAgLnNpZGViYXItbWluaSAubWFpbi1wYW5lbCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpO1xuICB9XG4gIC5zaWRlYmFyLW1pbmkgLnNpZGViYXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgei1pbmRleDogOTk5OTtcbiAgfVxuICAuc2lkZWJhci1taW5pIC5zaWRlYmFyIC5sb2dvIGEubG9nby1ub3JtYWwge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgLnNpZGViYXItbWluaSAuc2lkZWJhciAuc2lkZWJhci13cmFwcGVyID4gLm5hdiBbZGF0YS10b2dnbGU9Y29sbGFwc2VdIH4gZGl2ID4gdWwgPiBsaSA+IGEgLnNpZGViYXItbm9ybWFsLFxuICAuc2lkZWJhci1taW5pIC5zaWRlYmFyIC5zaWRlYmFyLXdyYXBwZXIgLnVzZXIgLnVzZXItaW5mbyBbZGF0YS10b2dnbGU9Y29sbGFwc2VdIH4gZGl2ID4gdWwgPiBsaSA+IGEgLnNpZGViYXItbm9ybWFsLFxuICAuc2lkZWJhci1taW5pIC5zaWRlYmFyIC5zaWRlYmFyLXdyYXBwZXIgLnVzZXIgLnVzZXItaW5mbyA+IGEgPiBzcGFuLFxuICAuc2lkZWJhci1taW5pIC5zaWRlYmFyIC5zaWRlYmFyLXdyYXBwZXIgPiAubmF2IGxpID4gYSBwIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIC5zaWRlYmFyLW1pbmkgLnNpZGViYXI6aG92ZXIge1xuICAgIHdpZHRoOiAyNjBweDtcbiAgfVxuICAuc2lkZWJhci1taW5pIC5zaWRlYmFyOmhvdmVyIC5sb2dvIGEubG9nby1ub3JtYWwge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgLnNpZGViYXItbWluaSAuc2lkZWJhcjpob3ZlciAuc2lkZWJhci13cmFwcGVyIHtcbiAgICB3aWR0aDogMjYwcHg7XG4gIH1cbiAgLnNpZGViYXItbWluaSAuc2lkZWJhcjpob3ZlciAuc2lkZWJhci13cmFwcGVyID4gLm5hdiBsaSA+IGEgcCxcbiAgLnNpZGViYXItbWluaSAuc2lkZWJhcjpob3ZlciAuc2lkZWJhci13cmFwcGVyID4gLm5hdiBbZGF0YS10b2dnbGU9Y29sbGFwc2VdIH4gZGl2ID4gdWwgPiBsaSA+IGEgLnNpZGViYXItbm9ybWFsLFxuICAuc2lkZWJhci1taW5pIC5zaWRlYmFyOmhvdmVyIC5zaWRlYmFyLXdyYXBwZXIgLnVzZXIgLnVzZXItaW5mbyBbZGF0YS10b2dnbGU9Y29sbGFwc2VdIH4gZGl2ID4gdWwgPiBsaSA+IGEgLnNpZGViYXItbm9ybWFsLFxuICAuc2lkZWJhci1taW5pIC5zaWRlYmFyOmhvdmVyIC5zaWRlYmFyLXdyYXBwZXIgLnVzZXIgLnVzZXItaW5mbyA+IGEgPiBzcGFuIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4ubmF2IC5uYXYtaXRlbSB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5uYXYgbGkge1xuICBjb2xvcjogIzNjNDg1OCAhaW1wb3J0YW50O1xufVxuXG4ubmF2IGxpIGEge1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4ubmF2IGxpIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvcmUvdGhlbWVzL3ByaW1hcnkuc2Nzc1wiO1xyXG5cclxuLnNpZGUtd3JhcHBlciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG5cclxuICAubG9nby1pY29uLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG5cclxuICAgIC8vIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMS45NXB4IDEuOTVweCAyLjZweDtcclxuICAgIC5saW5rcy13cmFwcGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAubGlua3Mtd3JhcHBlci1saW5rIHtcclxuICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29tcGFueS1sb2dvLW5hbWUge1xyXG4gICAgICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5zd2l0Y2gtY29tcGFueS1idG4tY29udGFpbmVyIHtcclxuICAgICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAuY29tcGFueS1uYW1lLXdyYXBwZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaWNvbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcblxyXG4gICAgICAgIC5lZGl0LWljb24ge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMThweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zd2l0Y2gtY29tcGFueS1idG4ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE3YTFiZjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGNvbG9yOiAjM0M0ODU4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLmxvZ28taW1nIHtcclxuICAvLyAgIHdpZHRoOiBhdXRvO1xyXG4gIC8vICAgbWF4LWhlaWdodDogaW5oZXJpdDtcclxuICAvLyAgIGltZyB7XHJcbiAgLy8gICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gIC8vICAgICAgIG1heC1oZWlnaHQ6IDcwcHg7XHJcbiAgLy8gICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG5cclxuICAubmF2IGxpIGEsXHJcbiAgLm5hdiBsaSBidXR0b24gLm5hdiBsaSAuZHJvcGRvd24tbWVudSBhLFxyXG4gIC5uYXYgbGkgLmRyb3Bkb3duLW1lbnUgYnV0dG9uIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICBsaS5zd2l0Y2gtdmlldy5hY3RpdmVDaGlsZC5uYXYtaXRlbSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvdHRvbTogNzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuXHJcbiAgLmNvbXBhbnktbmFtZSB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgbWF4LXdpZHRoOiAxMzRweDtcclxuXHJcbiAgICBpIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5qdW1wLXRvLWJ0biB7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLXByaW1hcnkgICFpbXBvcnRhbnQ7XHJcbiAgO1xyXG5cclxuICBpIHtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItcHJpbWFyeSAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuLy8gLmxvZ291dCB7XHJcbi8vICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbi8vIH1cclxuLnNpZGViYXItd3JhcHBlciB7XHJcbiAgZmxleDogMSAxIDA7XHJcbiAgLy8gZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbiAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMTM0cHgpO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgLy8gJjo6LXdlYmtpdC1zY3JvbGxiYXJ7XHJcbiAgLy8gICB3aWR0aDogMTVweCAhaW1wb3J0YW50O1xyXG4gIC8vIH1cclxufVxyXG5cclxuLnRoYXV0LWxvZ28ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBnYXA6IDEwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvLyBib3gtc2hhZG93OiByZ2JhKDAsMCwwLDAuMjUpIDFweCAwIDNweCAwLCByZ2JhKDAsMCwwLDAuMjUpIDAgMCAyLjZweCAwO1xyXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAkY29sb3ItcHJpbWFyeTtcclxuXHJcbiAgLnBvd2VyZWQge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuXHJcbiAgLnBsYW4tdHlwZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDRweDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgLy8gYmFja2dyb3VuZDogIzk5NmYwNTtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1wcmltYXJ5O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcclxuICAgIGZpbHRlcjogY29udHJhc3QoMCk7XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2IHtcclxuICBmbGV4OiAxIDEgMDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMTVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIHBhZGRpbmc6IDBweCAwcHggMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo3NjhweCkge1xyXG4gIC8vIC5sb2dvdXR7XHJcbiAgLy8gICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICAvLyB9XHJcblxyXG4gIC50aGF1dC1sb2dvIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICB9XHJcbn1cclxuXHJcbi5zaWRlYmFyLXByZW1pdW0tc2VydmljZS1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5wcmVtaXVtLXN0YXItaWNvbi1jaGlsZCB7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG4ubmF2LWxpbmsge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAvLyB3aWR0aDogY2FsYygxMDAlIC0gMTVweCk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnByZW1pdW0tbG9jay13cmFwcGVyIHtcclxuICByaWdodDogNXB4O1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuXHJcbiAgLnByZW1pdW0tbG9jay1pY29uIHtcclxuICAgIGxlZnQ6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5yZW5ldy1zdWJzY3JpcHRpb24ge1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvc3Zncy9yZW5ldy1zdWJzY3JpcHRpb24uc3ZnXCIpIG5vLXJlcGVhdDtcclxuICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcclxuICB3aWR0aDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udmlldy1hY2NvdW50cyxcclxuLnZpZXctdXNlcnMge1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvc3Zncy92aWV3LWFjY291bnRzLnN2Z1wiKSBuby1yZXBlYXQ7XHJcbiAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlbnRpbWVudC1hbmFseXNpcyB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9zdmdzL3NlbnRpbWVudC1hbmFseXNpcy5zdmdcIikgbm8tcmVwZWF0O1xyXG4gIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5xci1nZW5lcmF0b3ItaWNvbiB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9zdmdzL3FyLnN2Z1wiKSBuby1yZXBlYXQ7XHJcbiAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnByb2R1Y3QtaWNvbiB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWcvcHJvZHVjdC5zdmdcIikgbm8tcmVwZWF0O1xyXG4gIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4ud3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uc2lkZWJhciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAyO1xyXG4gIHdpZHRoOiAyNjBweDtcclxuICBiYWNrZ3JvdW5kOiAkd2hpdGUtY29sb3I7XHJcbiAgLy8gQGluY2x1ZGUgc2hhZG93LWJpZygpO1xyXG5cclxuICAuY2FyZXQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGJvcmRlci10b3A6IDRweCBkYXNoZWQ7XHJcbiAgICBib3JkZXItdG9wOiA0cHggc29saWRcXDk7XHJcbiAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAmW2RhdGEtYmFja2dyb3VuZC1jb2xvcj1cImJsYWNrXCJdIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XHJcbiAgfVxyXG5cclxuICAubG9nby1pbWcge1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTNweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMzVweDtcclxuICAgICAgdG9wOiAxNnB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2lkZWJhci13cmFwcGVyIHtcclxuICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8vIGhlaWdodDogY2FsYygxMDB2aCAtIDE1NnB4KTtcclxuICAgIC8vIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIHdpZHRoOiAyNjBweDtcclxuICAgIHotaW5kZXg6IDQ7XHJcblxyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcblxyXG4gICAgLmRyb3Bkb3duIC5kcm9wZG93bi1iYWNrZHJvcCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubmF2YmFyLWZvcm0ge1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG4gICAgICAuaW5wdXQtZ3JvdXAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS43ZW07XHJcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgIHdpZHRoOiA3OCU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxN3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgPi5uYXYsXHJcbiAgICAudXNlciAudXNlci1pbmZvIHtcclxuICAgICAgW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl1+ZGl2PnVsPmxpPmEge1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgLy8gQGV4dGVuZCAuYW5pbWF0aW9uLXRyYW5zaXRpb24tZ2VuZXJhbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zaWRlYmFyLW5vcm1hbCB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNpZGViYXItbWluaSB7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmxvZ28tdGltIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogNjFweDtcclxuICAgIHdpZHRoOiA2MXB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubmF2IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICAuY2FyZXQge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxM3B4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGxpIHtcclxuICAgICAgPmEge1xyXG5cclxuICAgICAgICAmOmhvdmVyLFxyXG4gICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJjpmaXJzdC1jaGlsZD5hIHtcclxuICAgICAgICBtYXJnaW46IDAgMTVweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3Zlcj5hLFxyXG4gICAgICAmIC5kcm9wZG93bi1tZW51IGE6aG92ZXIsXHJcbiAgICAgICYgLmRyb3Bkb3duLW1lbnUgYTpmb2N1cz5bZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjIpO1xyXG4gICAgICAgIGNvbG9yOiAkYmxhY2stY29sb3I7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFjdGl2ZT5bZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjIpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmFjdGl2ZT5bZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXSB7XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBjb2xvcjogI2E5YWZiYjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYWN0aXZlPmEsXHJcbiAgICAgICYuYWN0aXZlPmEgaSB7XHJcbiAgICAgICAgY29sb3I6ICR3aGl0ZS1jb2xvciA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYWN0aXZlPmEgaS5hY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiAkd2hpdGUtY29sb3IgO1xyXG4gICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgJi5zZXBhcmF0b3Ige1xyXG4gICAgICAgIG1hcmdpbjogMTVweCAwO1xyXG5cclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICAgIGxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4MCwgMTgwLCAxODAsIC4zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYrbGkge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMzFweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgfVxyXG5cclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAjYTlhZmJiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm5hdiBsaSBhLFxyXG4gIC5uYXYgbGkgLmRyb3Bkb3duLW1lbnUgYSB7XHJcbiAgICBtYXJnaW46IDEwcHggMTVweCAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgY29sb3I6ICRibGFjay1jb2xvcjtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICB9XHJcblxyXG5cclxuICAuc2lkZWJhci1iYWNrZ3JvdW5kIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICBvcGFjaXR5OiAuOTM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubG9nbyB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogNDtcclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICByaWdodDogMTVweDtcclxuICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODAsIDE4MCwgMTgwLCAuMyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBtYXJnaW46IDEwcHggMTBweDtcclxuICAgICAgY29sb3I6ICR3aGl0ZS1jb2xvcjtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpbXBsZS10ZXh0IHtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgY29sb3I6ICRibGFjay1jb2xvcjtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubG9nby10aW0ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiA2MXB4O1xyXG4gICAgd2lkdGg6IDYxcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgIGhlaWdodDogNjBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvLyAmW2RhdGEtYmFja2dyb3VuZC1jb2xvcj1cImJsYWNrXCJde1xyXG4gIC8vICAgICBAaW5jbHVkZSBzaWRlYmFyLWJhY2tncm91bmQtY29sb3IoJGdyYXktYmFzZSwgJHdoaXRlLWNvbG9yKTtcclxuXHJcbiAgLy8gICAgIC5uYXYgbGkgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW17XHJcbiAgLy8gICAgICAgY29sb3I6ICR3aGl0ZS1jb2xvcjtcclxuICAvLyAgICAgfVxyXG4gIC8vIH1cclxuXHJcbiAgLy8gJltkYXRhLWNvbG9yPVwicHVycGxlXCJde1xyXG4gIC8vICAgICBAaW5jbHVkZSBzZXQtYmFja2dyb3VuZC1jb2xvci1idXR0b24oJGJyYW5kLXByaW1hcnkpO1xyXG4gIC8vIH1cclxuICAvLyAmW2RhdGEtY29sb3I9XCJhenVyZVwiXXtcclxuICAvLyAgICAgQGluY2x1ZGUgc2V0LWJhY2tncm91bmQtY29sb3ItYnV0dG9uKCRicmFuZC1pbmZvKTtcclxuICAvLyB9XHJcbiAgLy8gJltkYXRhLWNvbG9yPVwiZ3JlZW5cIl17XHJcbiAgLy8gICAgIEBpbmNsdWRlIHNldC1iYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbigkYnJhbmQtc3VjY2Vzcyk7XHJcbiAgLy8gfVxyXG4gIC8vICZbZGF0YS1jb2xvcj1cIm9yYW5nZVwiXXtcclxuICAvLyAgICAgQGluY2x1ZGUgc2V0LWJhY2tncm91bmQtY29sb3ItYnV0dG9uKCRicmFuZC13YXJuaW5nKTtcclxuICAvLyB9XHJcbiAgLy8gJltkYXRhLWNvbG9yPVwiZGFuZ2VyXCJde1xyXG4gIC8vICAgICBAaW5jbHVkZSBzZXQtYmFja2dyb3VuZC1jb2xvci1idXR0b24oJGJyYW5kLWRhbmdlcik7XHJcbiAgLy8gfVxyXG4gIC8vICZbZGF0YS1jb2xvcj1cInJvc2VcIl17XHJcbiAgLy8gICAgIEBpbmNsdWRlIHNldC1iYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbigkYnJhbmQtcm9zZSk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyAmW2RhdGEtY29sb3I9XCJ3aGl0ZVwiXXtcclxuICAvLyAgICAgQGluY2x1ZGUgc2V0LWJhY2tncm91bmQtY29sb3ItYnV0dG9uKCR3aGl0ZS1jb2xvcik7XHJcbiAgLy8gICAgIEBpbmNsdWRlIHNpZGViYXItYWN0aXZlLWNvbG9yKCRibGFjay1jb2xvcik7XHJcbiAgLy8gfVxyXG5cclxuICAvLyAmW2RhdGEtYmFja2dyb3VuZC1jb2xvcj1cInJlZFwiXXtcclxuICAvLyAgICAgQGluY2x1ZGUgc2lkZWJhci1iYWNrZ3JvdW5kLWNvbG9yKCRicmFuZC1kYW5nZXIsICR3aGl0ZS1jb2xvcik7XHJcblxyXG4gIC8vICAgICAudXNlcixcclxuICAvLyAgICAgLmxvZ28sXHJcbiAgLy8gICAgIC5uYXYgbGkuc2VwYXJhdG9ye1xyXG4gIC8vICAgICAgICAgJjphZnRlcntcclxuICAvLyAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LCAuMyk7XHJcbiAgLy8gICAgICAgICB9XHJcbiAgLy8gICAgIH1cclxuXHJcbiAgLy8gICAgIC5uYXZ7XHJcbiAgLy8gICAgICAgICBsaTpob3Zlcjpub3QoLmFjdGl2ZSkgPiBhLFxyXG4gIC8vICAgICAgICAgbGkuYWN0aXZlID4gW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl17XHJcbiAgLy8gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gIC8vICAgICAgICAgfVxyXG4gIC8vICAgICB9XHJcbiAgLy8gfVxyXG5cclxuICAvLyAmW2RhdGEtaW1hZ2VdOmFmdGVyLFxyXG4gIC8vICYuaGFzLWltYWdlOmFmdGVye1xyXG4gIC8vICAgICBvcGFjaXR5OiAuNzc7XHJcbiAgLy8gfVxyXG59XHJcblxyXG4ub2ZmLWNhbnZhcy1zaWRlYmFyIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gIC5uYXYge1xyXG5cclxuICAgID5saT5hLFxyXG4gICAgPmxpPmE6aG92ZXIge1xyXG4gICAgICBjb2xvcjogJHdoaXRlLWNvbG9yO1xyXG4gICAgICBtYXJnaW46IDAgMTVweDtcclxuICAgIH1cclxuXHJcbiAgICA+bGk+YTpmb2N1cyxcclxuICAgID5saT5hOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi5tYWluLXBhbmVsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNjBweCk7XHJcbiAgLy8gQGluY2x1ZGUgdHJhbnNpdGlvbiAoMC4zM3MsIGN1YmljLWJlemllcigwLjY4NSwgMC4wNDczLCAwLjM0NiwgMSkpO1xyXG5cclxuICAubWFpbi1jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjNweCk7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTdlN2U3O1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucGVyZmVjdC1zY3JvbGxiYXItb24ge1xyXG5cclxuICAuc2lkZWJhcixcclxuICAubWFpbi1wYW5lbCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5zaWRlYmFyLFxyXG4ubWFpbi1wYW5lbCxcclxuLnNpZGViYXItd3JhcHBlciB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiB0b3AsIGJvdHRvbSwgd2lkdGg7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdG9wLCBib3R0b20sIHdpZHRoO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzLCAuMnMsIC4zNXM7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzLCAuMnMsIC4zNXM7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyLCBsaW5lYXIsIGVhc2U7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhciwgbGluZWFyLCBlYXNlO1xyXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxufVxyXG5cclxuLnZpc2libGUtb24tc2lkZWJhci1yZWd1bGFyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnZpc2libGUtb24tc2lkZWJhci1taW5pIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTFweCkge1xyXG4gIC5zaWRlYmFyLW1pbmkge1xyXG4gICAgLnZpc2libGUtb24tc2lkZWJhci1yZWd1bGFyIHtcclxuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC52aXNpYmxlLW9uLXNpZGViYXItbWluaSB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5zaWRlYmFyLFxyXG4gICAgLnNpZGViYXIgLnNpZGViYXItd3JhcHBlciB7XHJcbiAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tYWluLXBhbmVsIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaWRlYmFyIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAgIHotaW5kZXg6IDk5OTk7XHJcblxyXG4gICAgICAubG9nbyB7XHJcbiAgICAgICAgYS5sb2dvLW5vcm1hbCB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgLy8gQGluY2x1ZGUgdHJhbnNmb3JtLXRyYW5zbGF0ZS14KC0yNXB4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zaWRlYmFyLXdyYXBwZXIge1xyXG5cclxuICAgICAgICA+Lm5hdiBbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXX5kaXY+dWw+bGk+YSAuc2lkZWJhci1ub3JtYWwsXHJcbiAgICAgICAgLnVzZXIgLnVzZXItaW5mbyBbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXX5kaXY+dWw+bGk+YSAuc2lkZWJhci1ub3JtYWwsXHJcbiAgICAgICAgLnVzZXIgLnVzZXItaW5mbz5hPnNwYW4sXHJcbiAgICAgICAgPi5uYXYgbGk+YSBwIHtcclxuICAgICAgICAgIC8vIEBpbmNsdWRlIHRyYW5zZm9ybS10cmFuc2xhdGUteCgtMjVweCk7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zaWRlYmFyOmhvdmVyIHtcclxuICAgICAgd2lkdGg6IDI2MHB4O1xyXG5cclxuICAgICAgLmxvZ28ge1xyXG4gICAgICAgIGEubG9nby1ub3JtYWwge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIC8vIEBpbmNsdWRlIHRyYW5zZm9ybS10cmFuc2xhdGUteCgwcHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnNpZGViYXItd3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IDI2MHB4O1xyXG5cclxuICAgICAgICA+Lm5hdiBsaT5hIHAsXHJcbiAgICAgICAgPi5uYXYgW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl1+ZGl2PnVsPmxpPmEgLnNpZGViYXItbm9ybWFsLFxyXG4gICAgICAgIC51c2VyIC51c2VyLWluZm8gW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl1+ZGl2PnVsPmxpPmEgLnNpZGViYXItbm9ybWFsLFxyXG4gICAgICAgIC51c2VyIC51c2VyLWluZm8+YT5zcGFuIHtcclxuICAgICAgICAgIC8vIEBpbmNsdWRlIHRyYW5zZm9ybS10cmFuc2xhdGUteCgwcHgpO1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbi5uYXYgLm5hdi1pdGVtIHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2IGxpIHtcclxuICBjb2xvcjogIzNjNDg1OCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2IGxpIGEge1xyXG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDEycHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 7298:
/*!***************************************************************!*\
  !*** ./src/app/components/stats-card/stats-card.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatsCardComponent": () => (/* binding */ StatsCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



function StatsCardComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c0 = function (a0) {
  return [a0];
};
function StatsCardComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3)(1, "div", 4)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("card card-stats ", ctx_r2.headerType, " my-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx_r2.link));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("card-header card-header-", ctx_r2.headerType, " card-header-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.cardIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.heading, " ");
  }
}
function StatsCardComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 7)(1, "div", 8)(2, "div", 4)(3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("card-header ", ctx_r4.headerType, " card-header-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r4.cardIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.heading, " ");
  }
}
class StatsCardComponent {
  // get noAccess(){
  //     return this.privileges && this.privileges.allowed !== 'y'
  // }
  constructor() {}
}
StatsCardComponent.ɵfac = function StatsCardComponent_Factory(t) {
  return new (t || StatsCardComponent)();
};
StatsCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: StatsCardComponent,
  selectors: [["app-stats-card"]],
  inputs: {
    heading: "heading",
    headerType: "headerType",
    cardIcon: "cardIcon",
    value: "value",
    link: "link",
    privileges: "privileges"
  },
  decls: 5,
  vars: 3,
  consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["cardWithLink", ""], ["showDefaultCard", ""], ["routerLinkActive", "active", 2, "height", "100px", 3, "routerLink"], [2, "border-bottom", "none !important"], [1, "card-icon"], [1, "card-category", 2, "text-align", "right"], [1, "stats-card"], [1, "card", "card-stats", "my-3", 2, "height", "100px"]],
  template: function StatsCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StatsCardComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StatsCardComponent_ng_template_1_Template, 6, 13, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StatsCardComponent_ng_template_3_Template, 7, 7, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.link)("ngIfThen", _r1)("ngIfElse", _r3);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive],
  styles: ["[_ngcontent-%COMP%]:root {\n  --primary: #00b3ac;\n  --white: #fff;\n  --black: #000;\n}\n\n.card-icon[_ngcontent-%COMP%] {\n  padding: 5px !important;\n  position: absolute;\n  background: #eaaa10 !important;\n  color: white;\n  top: -24px;\n}\n.card-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 26px;\n  padding: 7px;\n}\n\n.card-header-success[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background-color: #32a00d !important;\n}\n\n.card-header-rose[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background-color: #c055b5 !important;\n}\n\n.card-header-contact-req[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background-color: #fcd8a2 !important;\n}\n\n.card-header-press[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background-color: #7d4fb0 !important;\n}\n\n.card-header-drive[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background-color: #9c986d !important;\n}\n\n.card-header-offers[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background-color: #e8f57a !important;\n}\n\n.card-header-invoice[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background-color: #81b9a9 !important;\n}\n\na[_ngcontent-%COMP%]:not(.active) {\n  border: 2px solid transparent;\n}\na.success[_ngcontent-%COMP%] {\n  border: 2px solid #32a00d;\n}\na.warning.active[_ngcontent-%COMP%] {\n  border: 2px solid #eaaa10;\n}\na.danger.active[_ngcontent-%COMP%] {\n  border: 2px solid #c41414;\n}\na.info.active[_ngcontent-%COMP%] {\n  border: 2px solid var(--primary);\n}\n\n@media print {\n  .card-stats[_ngcontent-%COMP%] {\n    -webkit-filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.466));\n    -webkit-print-color-adjust: exact;\n  }\n}\n.card-category[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9jb3JlL3RoZW1lcy9wcmltYXJ5LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi9TYWklMjBLaXJhbi9Eb2N1bWVudHMvYWRtaW4taGlzZW5zZS9oaXNlbnNlLWFkbWluL3NyYy9hcHAvY29tcG9uZW50cy9zdGF0cy1jYXJkL3N0YXRzLWNhcmQuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2NvbXBvbmVudHMvc3RhdHMtY2FyZC9zdGF0cy1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQ0hKOztBQ0RBO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QURJRjtBQ0ZFO0VBQ0UsZUFBQTtFQUlBLFlBQUE7QURDSjs7QUNVQTtFQUNFLG9DQUFBO0FEUEY7O0FDVUE7RUFDRSxvQ0FBQTtBRFBGOztBQ1VBO0VBQ0Usb0NBQUE7QURQRjs7QUNVQTtFQUNFLG9DQUFBO0FEUEY7O0FDVUE7RUFDRSxvQ0FBQTtBRFBGOztBQ1VBO0VBQ0Usb0NBQUE7QURQRjs7QUNVQTtFQUNFLG9DQUFBO0FEUEY7O0FDWUU7RUFDRSw2QkFBQTtBRFRKO0FDWUU7RUFDRSx5QkFBQTtBRFZKO0FDYUU7RUFDRSx5QkFBQTtBRFhKO0FDY0U7RUFDRSx5QkFBQTtBRFpKO0FDZUU7RUFDRSxnQ0FBQTtBRGJKOztBQ2lCQTtFQUNFO0lBQ0UsNkRBQUE7SUFDQSxpQ0FBQTtFRGRGO0FBQ0Y7QUNpQkE7RUFDRSxlQUFBO0FEZkYiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3ItcHJpbWFyeTogdmFyKC0tcHJpbWFyeSk7XHJcbiR3aGl0ZS1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4kYmxhY2stY29sb3I6IHZhcigtLWJsYWNrKTtcclxuXHJcbjpyb290e1xyXG4gICAgLS1wcmltYXJ5OiAjMDBiM2FjO1xyXG4gICAgLS13aGl0ZTogI2ZmZjtcclxuICAgIC0tYmxhY2s6ICMwMDA7XHJcbn0iLCI6cm9vdCB7XG4gIC0tcHJpbWFyeTogIzAwYjNhYztcbiAgLS13aGl0ZTogI2ZmZjtcbiAgLS1ibGFjazogIzAwMDtcbn1cblxuLmNhcmQtaWNvbiB7XG4gIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICNlYWFhMTAgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xuICB0b3A6IC0yNHB4O1xufVxuLmNhcmQtaWNvbiBpIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBwYWRkaW5nOiA3cHg7XG59XG5cbi5jYXJkLWhlYWRlci1zdWNjZXNzIC5jYXJkLWljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzJhMDBkICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLWhlYWRlci1yb3NlIC5jYXJkLWljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzA1NWI1ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLWhlYWRlci1jb250YWN0LXJlcSAuY2FyZC1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZDhhMiAhaW1wb3J0YW50O1xufVxuXG4uY2FyZC1oZWFkZXItcHJlc3MgLmNhcmQtaWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZDRmYjAgIWltcG9ydGFudDtcbn1cblxuLmNhcmQtaGVhZGVyLWRyaXZlIC5jYXJkLWljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWM5ODZkICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLWhlYWRlci1vZmZlcnMgLmNhcmQtaWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGY1N2EgIWltcG9ydGFudDtcbn1cblxuLmNhcmQtaGVhZGVyLWludm9pY2UgLmNhcmQtaWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MWI5YTkgIWltcG9ydGFudDtcbn1cblxuYTpub3QoLmFjdGl2ZSkge1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbmEuc3VjY2VzcyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMzMmEwMGQ7XG59XG5hLndhcm5pbmcuYWN0aXZlIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2VhYWExMDtcbn1cbmEuZGFuZ2VyLmFjdGl2ZSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjNDE0MTQ7XG59XG5hLmluZm8uYWN0aXZlIHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeSk7XG59XG5cbkBtZWRpYSBwcmludCB7XG4gIC5jYXJkLXN0YXRzIHtcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjQ2NikpO1xuICAgIC13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0OiBleGFjdDtcbiAgfVxufVxuLmNhcmQtY2F0ZWdvcnkge1xuICBmb250LXNpemU6IDE2cHg7XG59IiwiLy8gQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvcmUvdGhlbWVzL3ByaW1hcnkuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29yZS90aGVtZXMvcHJpbWFyeS5zY3NzXCI7XHJcblxyXG4uY2FyZC1pY29uIHtcclxuICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZDogI2VhYWExMCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0b3A6IC0yNHB4O1xyXG5cclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIC8vIGxpbmUtaGVpZ2h0OiA0NHB4O1xyXG4gICAgLy8gd2lkdGg6IDQ0cHg7XHJcbiAgICAvLyBoZWlnaHQ6IDQ0cHg7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgfVxyXG5cclxuICAvLyAuZW5kcG9pbnQtZm9ybS1pY29ue1xyXG4gIC8vICAgYmFja2dyb3VuZDogdXJsKFwiYXNzZXRzL3N2Z3MvZW5kcG9pbnQtZm9ybS5zdmdcIikgbm8tcmVwZWF0O1xyXG4gIC8vICAgaGVpZ2h0OiAzNnB4ICFpbXBvcnRhbnQ7XHJcbiAgLy8gICB3aWR0aDogMzZweCAhaW1wb3J0YW50O1xyXG4gIC8vICAgZGlzcGxheTogYmxvY2s7XHJcbiAgLy8gfVxyXG59XHJcblxyXG4uY2FyZC1oZWFkZXItc3VjY2VzcyAuY2FyZC1pY29ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMmEwMGQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyLXJvc2UgLmNhcmQtaWNvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzA1NWI1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlci1jb250YWN0LXJlcSAuY2FyZC1pY29ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2Q4YTIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyLXByZXNzIC5jYXJkLWljb257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdkNGZiMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXItZHJpdmUgLmNhcmQtaWNvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWM5ODZkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlci1vZmZlcnMgLmNhcmQtaWNvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmNTdhICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlci1pbnZvaWNlIC5jYXJkLWljb257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgxYjlhOSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuYSB7XHJcbiAgJjpub3QoLmFjdGl2ZSkge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAmLnN1Y2Nlc3Mge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzMyYTAwZDtcclxuICB9XHJcblxyXG4gICYud2FybmluZy5hY3RpdmUge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2VhYWExMDtcclxuICB9XHJcblxyXG4gICYuZGFuZ2VyLmFjdGl2ZSB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYzQxNDE0O1xyXG4gIH1cclxuXHJcbiAgJi5pbmZvLmFjdGl2ZSB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkY29sb3ItcHJpbWFyeTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBwcmludCB7XHJcbiAgLmNhcmQtc3RhdHMge1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC40NjYpKTtcclxuICAgIC13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0OiBleGFjdDtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkLWNhdGVnb3J5e1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 8144:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/tech-testimonials-modal/tech-testimonials-modal.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TechTestimonialsModalComponent": () => (/* binding */ TechTestimonialsModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
















function TechTestimonialsModalComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TechTestimonialsModalComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TechTestimonialsModalComponent_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Description is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TechTestimonialsModalComponent_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Youtube URL is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TechTestimonialsModalComponent_mat_error_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " URL is not valid! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TechTestimonialsModalComponent_mat_error_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Country is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TechTestimonialsModalComponent_mat_option_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", category_r16.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](category_r16.name);
  }
}
function TechTestimonialsModalComponent_mat_error_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Category is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TechTestimonialsModalComponent_mat_option_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", product_r17.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r17.name);
  }
}
function TechTestimonialsModalComponent_mat_error_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Product is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TechTestimonialsModalComponent_div_51_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const variant_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", variant_r19.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", variant_r19.name, " - ", variant_r19.code, "");
  }
}
function TechTestimonialsModalComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11)(1, "mat-form-field", 12)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Product Variant");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TechTestimonialsModalComponent_div_51_mat_option_5_Template, 2, 3, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r10.selectedProduct == null ? null : ctx_r10.selectedProduct.product_variants);
  }
}
function TechTestimonialsModalComponent_mat_error_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Published Date is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TechTestimonialsModalComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11)(1, "mat-form-field", 12)(2, "mat-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function TechTestimonialsModalComponent_button_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TechTestimonialsModalComponent_button_70_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r20.createTechTestimonial());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Create ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TechTestimonialsModalComponent_button_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TechTestimonialsModalComponent_button_71_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r22.updateTechTestimonials());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class TechTestimonialsModalComponent {
  constructor(data, dialogRef, api, toaster, fb) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.api = api;
    this.toaster = toaster;
    this.fb = fb;
    this.isLoading = false;
    this.formSubmitted = false;
    this.form = this.fb.group({
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      youtube_url: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/)]],
      is_enabled: [''],
      country: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      category_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      product_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      product_variant_id: [''],
      published_at: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
    });
    console.log(data);
    this.metaData = data.metaData;
    if (this.data.isEdit) {
      this.form.addControl('priority', this.fb.control(''));
      this.form.patchValue({
        description: this.data.dataToEdit.description,
        youtube_url: this.data.dataToEdit.youtube_url,
        is_enabled: this.data.dataToEdit.is_enabled ? true : false,
        priority: this.data.dataToEdit.priority,
        country: this.data.dataToEdit.country,
        category_id: this.data.dataToEdit.category_id,
        product_id: this.data.dataToEdit.product_id,
        product_variant_id: this.data.dataToEdit.product_variant_id,
        published_at: this.data.dataToEdit.published_at
      });
      if (this.form.value.product_id) {
        this.selectedProduct = this.metaData.products.find(product => product.id == this.form.value.product_id);
        // if(this.selectedProduct){
        //   // this.selectedProduct.
        //   this.form.controls['product_variant_id'].setValue(this.selectedProduct.id);
        // }
      }
    }
  }

  ngOnInit() {}
  createTechTestimonial() {
    this.formSubmitted = true;
    if (!this.form.valid) {
      return;
    }
    this.isLoading = true;
    // const formData = new FormData();
    // formData.append('title',this.form.value.title + '');
    // formData.append('description',this.form.value.description + '');
    // formData.append('vendor',this.form.value.vendor + '');
    // formData.append('external_url',this.form.value.external_url + '');
    // formData.append('image',this.UpdatedThumbImgFile);
    if (this.form.value.published_at) {
      const dateObject = new Date(this.form.value.published_at);
      this.form.value.published_at = `${dateObject.getFullYear()}-${String(dateObject.getMonth() + 1).padStart(2, '0')}-${String(dateObject.getDate()).padStart(2, '0')}`;
    }
    const is_enabled = this.form.value.is_enabled ? 1 : 0;
    this.api.createTechTestimonial({
      ...this.form.value,
      is_enabled
    }).subscribe({
      next: res => {
        console.log(res);
        this.dialogRef.close(true);
        this.isLoading = false;
      },
      error: err => {
        this.isLoading = false;
        console.log(err);
        this.toaster.error(err.error.message);
      }
    });
  }
  updateTechTestimonials() {
    this.formSubmitted = true;
    if (!this.form.valid) {
      return;
    }
    this.isLoading = true;
    if (this.form.value.published_at) {
      const dateObject = new Date(this.form.value.published_at);
      this.form.value.published_at = `${dateObject.getFullYear()}-${String(dateObject.getMonth() + 1).padStart(2, '0')}-${String(dateObject.getDate()).padStart(2, '0')}`;
    }
    this.form.value.is_enabled = this.form.value.is_enabled ? 1 : 0;
    this.api.updateTechTestimonials(this.form.value, this.data.dataToEdit.id).subscribe({
      next: res => {
        this.dialogRef.close(true);
        this.isLoading = false;
        this.toaster.success(res.message);
      },
      error: err => {
        this.isLoading = false;
        console.log(err);
        this.toaster.error(err.error.message);
      }
    });
  }
  // preview(event: any) {
  //   let files = event.target?.files
  //   if (files.length === 0)
  //     return;
  //   var mimeType = files[0].type;
  //   if (mimeType.match(/image\/*/) == null) {
  //     return;
  //   }
  //   var reader = new FileReader();
  //   reader.readAsDataURL(files[0]);
  //   reader.onload = (_event) => {
  //     this.UpdatedThumbImg = reader.result;
  //     this.UpdatedThumbImgFile = files[0];
  //     this.form.controls.image.setValue(files[0]);
  //   }
  // }
  get formControl() {
    return this.form.controls;
  }
  onProductSelected(value) {
    this.form.controls['product_variant_id'].setValue('');
    this.selectedProduct = this.metaData.products.find(product => product.id == value);
  }
}
TechTestimonialsModalComponent.ɵfac = function TechTestimonialsModalComponent_Factory(t) {
  return new (t || TechTestimonialsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
};
TechTestimonialsModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: TechTestimonialsModalComponent,
  selectors: [["app-tech-testimonials-modal"]],
  decls: 72,
  vars: 19,
  consts: [[1, "modal-container"], [1, "header", "border-bottom"], ["mat-dialog-title", ""], [4, "ngIf"], [1, "close-icon", 3, "mat-dialog-close"], [1, "body"], [1, "mat-dialog"], [1, "row", "p-3"], [1, "col-md-12"], [3, "formGroup"], [1, "row"], [1, "col-12", "col-md-4", "form-group"], ["appearance", "outline", 1, "w-100"], [1, "mat-label-field-padding"], ["matInput", "", "formControlName", "description", "type", "text"], ["matInput", "", "formControlName", "youtube_url", "type", "text"], ["formControlName", "country"], ["value", "national"], ["value", "global"], ["formControlName", "category_id"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "product_id", 3, "selectionChange"], ["class", "col-12 col-md-4 form-group", 4, "ngIf"], [1, "col-12", "col-sm-6", "col-md-6", "col-lg-3", "form-group"], ["matInput", "", "formControlName", "published_at", "type", "text", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["class", "error", 4, "ngIf"], [1, "col-12", "form-group", "my-3"], ["formControlName", "is_enabled", 1, "d-block", "example-margin"], [1, "footer"], ["mat-raised-button", "", 1, "ml-3", "mb-3", 2, "color", "black !important", 3, "click"], ["class", "btn btn-info ml-3 mb-3", 3, "click", 4, "ngIf"], [3, "value"], ["formControlName", "product_variant_id"], [1, "error"], ["matInput", "", "formControlName", "priority", "type", "text"], [1, "btn", "btn-info", "ml-3", "mb-3", 3, "click"]],
  template: function TechTestimonialsModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TechTestimonialsModalComponent_span_3_Template, 2, 0, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TechTestimonialsModalComponent_span_4_Template, 2, 0, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " a Tech Testimonial ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5)(9, "mat-dialog-content", 6)(10, "div", 7)(11, "div", 8)(12, "form", 9)(13, "div", 10)(14, "div", 11)(15, "mat-form-field", 12)(16, "mat-label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Description");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, TechTestimonialsModalComponent_mat_error_19_Template, 2, 0, "mat-error", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 11)(21, "mat-form-field", 12)(22, "mat-label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Youtube URL");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, TechTestimonialsModalComponent_mat_error_25_Template, 2, 0, "mat-error", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, TechTestimonialsModalComponent_mat_error_26_Template, 2, 0, "mat-error", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 11)(28, "mat-form-field", 12)(29, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Country");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-select", 16)(32, "mat-option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "National");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Global");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, TechTestimonialsModalComponent_mat_error_36_Template, 2, 0, "mat-error", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 11)(38, "mat-form-field", 12)(39, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Category");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-select", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, TechTestimonialsModalComponent_mat_option_42_Template, 2, 2, "mat-option", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, TechTestimonialsModalComponent_mat_error_43_Template, 2, 0, "mat-error", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 11)(45, "mat-form-field", 12)(46, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Product");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-select", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function TechTestimonialsModalComponent_Template_mat_select_selectionChange_48_listener($event) {
        return ctx.onProductSelected($event.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, TechTestimonialsModalComponent_mat_option_49_Template, 2, 2, "mat-option", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, TechTestimonialsModalComponent_mat_error_50_Template, 2, 0, "mat-error", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, TechTestimonialsModalComponent_div_51_Template, 6, 1, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 23)(53, "mat-form-field", 12)(54, "mat-label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Published Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "input", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "mat-hint");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "mm/dd/yyyy");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "mat-datepicker-toggle", 25)(60, "mat-datepicker", null, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, TechTestimonialsModalComponent_mat_error_62_Template, 2, 0, "mat-error", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, TechTestimonialsModalComponent_div_63_Template, 5, 0, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 28)(65, "mat-slide-toggle", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " Enable/Disable the Tech Testimonial");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 30)(68, "button", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TechTestimonialsModalComponent_Template_button_click_68_listener() {
        return ctx.dialogRef.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, TechTestimonialsModalComponent_button_70_Template, 2, 0, "button", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, TechTestimonialsModalComponent_button_71_Template, 2, 0, "button", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](61);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.data.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formSubmitted || ctx.formControl["description"].errors && ctx.formControl["description"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formSubmitted || ctx.formControl["youtube_url"].errors && ctx.formControl["youtube_url"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formSubmitted || ctx.formControl["youtube_url"].errors && ctx.formControl["youtube_url"].errors["pattern"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formSubmitted || ctx.formControl["country"].errors && ctx.formControl["country"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.metaData.categories);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formSubmitted || ctx.formControl["category_id"].errors && ctx.formControl["category_id"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.metaData.products);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formSubmitted || ctx.formControl["product_id"].errors && ctx.formControl["product_id"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.controls["product_id"].value);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formSubmitted && ctx.formControl["published_at"].errors && ctx.formControl["published_at"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.data.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.isEdit);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerToggle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__.MatSlideToggle],
  styles: ["[_ngcontent-%COMP%]:root {\n  --primary: #00b3ac;\n  --white: #fff;\n  --black: #000;\n}\n\n.modal-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 10px;\n}\n\nh4[mat-dialog-title][_ngcontent-%COMP%] {\n  margin: 0 0 7px !important;\n}\n\n.subscription-card[_ngcontent-%COMP%] {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(27, 31, 35, 0.1) 0px 0px 0px 1px;\n  border-radius: 13px;\n}\n\n.plans-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n  gap: 25px;\n  margin: 15px 0;\n}\n\n.card-content[_ngcontent-%COMP%] {\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n  min-height: 270px;\n}\n\n.check-icon[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 36px;\n}\n\n.active-b[_ngcontent-%COMP%] {\n  border: 1px solid var(--primary);\n}\n\n.current-plan[_ngcontent-%COMP%] {\n  width: 100%;\n  color: var(--primary);\n  font-size: 16px;\n  font-weight: 400;\n  border-top-left-radius: 13px;\n  border-top-right-radius: 13px;\n  box-shadow: 0px 1px 3px var(--primary);\n}\n\n.recommended-plan[_ngcontent-%COMP%] {\n  mix-blend-mode: luminosity;\n}\n\n.planName[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 22px;\n  text-align: center;\n}\n\n.plan-price[_ngcontent-%COMP%] {\n  font-size: 38px;\n  text-align: center;\n}\n.plan-price[_ngcontent-%COMP%]   .fs-small[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.planDesc[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.mat-dialog[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n\n.features-heading[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px;\n  width: 100%;\n  border: none;\n  background: transparent;\n}\n.features-heading[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  background: #e7e0e0;\n  border-radius: 50%;\n}\n.features-heading[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]   .fa-caret-down[_ngcontent-%COMP%] {\n  font-size: 24px;\n  transform: rotate(-180deg);\n  transition: transform 250ms ease-in-out;\n}\n\n.collapsed[_ngcontent-%COMP%]   .fa-caret-down[_ngcontent-%COMP%] {\n  transform: rotate(0deg) !important;\n}\n\n@media screen and (max-width: 768px) {\n  .plans-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 1rem;\n  border-top: 1px solid rgba(0, 0, 0, 0.2);\n}\n\n.file-input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.file-upload-btn[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0;\n}\n.file-upload-btn[_ngcontent-%COMP%]   .mat-button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\n.file-upload-btn[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  cursor: pointer;\n  margin: 0;\n  padding: 12px;\n  background-color: var(--primary);\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9jb3JlL3RoZW1lcy9wcmltYXJ5LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi9TYWklMjBLaXJhbi9Eb2N1bWVudHMvYWRtaW4taGlzZW5zZS9oaXNlbnNlLWFkbWluL3NyYy9hcHAvY29tcG9uZW50cy90ZWNoLXRlc3RpbW9uaWFscy1tb2RhbC90ZWNoLXRlc3RpbW9uaWFscy1tb2RhbC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90ZWNoLXRlc3RpbW9uaWFscy1tb2RhbC90ZWNoLXRlc3RpbW9uaWFscy1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUNISjs7QUNESTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QURJUjs7QUNBQTtFQUNJLDBCQUFBO0FER0o7O0FDQUE7RUFDSSxxRkFBQTtFQUNBLG1CQUFBO0FER0o7O0FDQUE7RUFDSSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBREdKOztBQ0FBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBREdKOztBQ0FBO0VBQ0ksWUFBQTtBREdKOztBQ0FBO0VBQ0kscUJGeENZO0VFeUNaLGVBQUE7QURHSjs7QUNBQTtFQUNJLGdDQUFBO0FER0o7O0FDQUE7RUFDSSxXQUFBO0VBQ0EscUJGbERZO0VFbURaLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQ0FBQTtBREdKOztBQ0FBO0VBQ0ksMEJBQUE7QURHSjs7QUNBQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FER0o7O0FDQUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QURHSjtBQ0RJO0VBQ0ksZUFBQTtBREdSOztBQ0NBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURFSjs7QUNDQTtFQUNJLG9CQUFBO0FERUo7O0FDQ0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FERUo7QUNBSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBREVSO0FDQVE7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSx1Q0FBQTtBREVaOztBQ0lJO0VBQ0ksa0NBQUE7QUREUjs7QUNLQTtFQUNJO0lBQ0ksMEJBQUE7RURGTjtBQUNGO0FDS0E7RUFDSSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7QURISjs7QUNPQTtFQUNJLGFBQUE7QURKSjs7QUNPQTtFQUNJLGFBQUE7RUFDQSxVQUFBO0FESko7QUNNSTtFQUNJLGFBQUE7QURKUjtBQ09JO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxnQ0Z4SlE7RUV5SlIsdUJBQUE7QURMUiIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvci1wcmltYXJ5OiB2YXIoLS1wcmltYXJ5KTtcclxuJHdoaXRlLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiRibGFjay1jb2xvcjogdmFyKC0tYmxhY2spO1xyXG5cclxuOnJvb3R7XHJcbiAgICAtLXByaW1hcnk6ICMwMGIzYWM7XHJcbiAgICAtLXdoaXRlOiAjZmZmO1xyXG4gICAgLS1ibGFjazogIzAwMDtcclxufSIsIjpyb290IHtcbiAgLS1wcmltYXJ5OiAjMDBiM2FjO1xuICAtLXdoaXRlOiAjZmZmO1xuICAtLWJsYWNrOiAjMDAwO1xufVxuXG4ubW9kYWwtY29udGFpbmVyIC5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuXG5oNFttYXQtZGlhbG9nLXRpdGxlXSB7XG4gIG1hcmdpbjogMCAwIDdweCAhaW1wb3J0YW50O1xufVxuXG4uc3Vic2NyaXB0aW9uLWNhcmQge1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDFweCAzcHggMHB4LCByZ2JhKDI3LCAzMSwgMzUsIDAuMSkgMHB4IDBweCAwcHggMXB4O1xuICBib3JkZXItcmFkaXVzOiAxM3B4O1xufVxuXG4ucGxhbnMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMWZyKSk7XG4gIGdhcDogMjVweDtcbiAgbWFyZ2luOiAxNXB4IDA7XG59XG5cbi5jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIycHg7XG4gIG1pbi1oZWlnaHQ6IDI3MHB4O1xufVxuXG4uY2hlY2staWNvbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAzNnB4O1xufVxuXG4uYWN0aXZlLWIge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLmN1cnJlbnQtcGxhbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTNweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEzcHg7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IHZhcigtLXByaW1hcnkpO1xufVxuXG4ucmVjb21tZW5kZWQtcGxhbiB7XG4gIG1peC1ibGVuZC1tb2RlOiBsdW1pbm9zaXR5O1xufVxuXG4ucGxhbk5hbWUge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDIycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBsYW4tcHJpY2Uge1xuICBmb250LXNpemU6IDM4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wbGFuLXByaWNlIC5mcy1zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnBsYW5EZXNjIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5tYXQtZGlhbG9nIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5mZWF0dXJlcy1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmZlYXR1cmVzLWhlYWRpbmcgLmljb24td3JhcHBlciB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQ6ICNlN2UwZTA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5mZWF0dXJlcy1oZWFkaW5nIC5pY29uLXdyYXBwZXIgLmZhLWNhcmV0LWRvd24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5jb2xsYXBzZWQgLmZhLWNhcmV0LWRvd24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucGxhbnMtY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuLmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmZpbGUtaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZmlsZS11cGxvYWQtYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMDtcbn1cbi5maWxlLXVwbG9hZC1idG4gLm1hdC1idXR0b24td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZmlsZS11cGxvYWQtYnRuIGxhYmVsIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29yZS90aGVtZXMvcHJpbWFyeS5zY3NzXCI7XHJcblxyXG4ubW9kYWwtY29udGFpbmVyIHtcclxuICAgIC5oZWFkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbmg0W21hdC1kaWFsb2ctdGl0bGVdIHtcclxuICAgIG1hcmdpbjogMCAwIDdweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3Vic2NyaXB0aW9uLWNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAxcHggM3B4IDBweCwgcmdiYSgyNywgMzEsIDM1LCAwLjEpIDBweCAwcHggMHB4IDFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbn1cclxuXHJcbi5wbGFucy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDFmcikpO1xyXG4gICAgZ2FwOiAyNXB4O1xyXG4gICAgbWFyZ2luOiAxNXB4IDA7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAyMnB4O1xyXG4gICAgbWluLWhlaWdodDogMjcwcHg7XHJcbn1cclxuXHJcbi5jaGVjay1pY29uIHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbn1cclxuXHJcbi5hY3RpdmUtYiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItcHJpbWFyeTtcclxufVxyXG5cclxuLmN1cnJlbnQtcGxhbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxM3B4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEzcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDNweCB2YXIoLS1wcmltYXJ5KTtcclxufVxyXG5cclxuLnJlY29tbWVuZGVkLXBsYW4ge1xyXG4gICAgbWl4LWJsZW5kLW1vZGU6IGx1bWlub3NpdHk7XHJcbn1cclxuXHJcbi5wbGFuTmFtZSB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucGxhbi1wcmljZSB7XHJcbiAgICBmb250LXNpemU6IDM4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgLmZzLXNtYWxsIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wbGFuRGVzYyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ubWF0LWRpYWxvZyB7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZlYXR1cmVzLWhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgLmljb24td3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlN2UwZTA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cclxuICAgICAgICAuZmEtY2FyZXQtZG93biB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBlYXNlLWluLW91dDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb2xsYXBzZWQge1xyXG4gICAgLmZhLWNhcmV0LWRvd24ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpIHtcclxuICAgIC5wbGFucy1jb250YWluZXIge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG5cclxuLmZpbGUtaW5wdXQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmZpbGUtdXBsb2FkLWJ0biB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAubWF0LWJ1dHRvbi13cmFwcGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG5cclxuICAgIGxhYmVsIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5541:
/*!*****************************************************************************!*\
  !*** ./src/app/components/tech-testimonials/tech-testimonials.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TechTestimonialsComponent": () => (/* binding */ TechTestimonialsComponent)
/* harmony export */ });
/* harmony import */ var _tech_testimonials_modal_tech_testimonials_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tech-testimonials-modal/tech-testimonials-modal.component */ 8144);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);











function TechTestimonialsComponent_th_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TechTestimonialsComponent_td_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 21)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (element_r18 == null ? null : element_r18.description) || "N/A", " ");
  }
}
function TechTestimonialsComponent_th_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Youtube URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TechTestimonialsComponent_td_17_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", element_r19 == null ? null : element_r19.youtube_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](element_r19 == null ? null : element_r19.youtube_url);
  }
}
function TechTestimonialsComponent_td_17_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TechTestimonialsComponent_td_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TechTestimonialsComponent_td_17_a_1_Template, 2, 2, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TechTestimonialsComponent_td_17_div_2_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", element_r19 == null ? null : element_r19.youtube_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(element_r19 == null ? null : element_r19.youtube_url));
  }
}
function TechTestimonialsComponent_th_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TechTestimonialsComponent_td_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (element_r23 == null ? null : element_r23.category.name) || "N/A", " ");
  }
}
function TechTestimonialsComponent_th_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TechTestimonialsComponent_td_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (element_r24 == null ? null : element_r24.product.name) || "N/A", " ");
  }
}
function TechTestimonialsComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Product Variant");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TechTestimonialsComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (element_r25 == null ? null : element_r25.product_variant) || "N/A", " ");
  }
}
function TechTestimonialsComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TechTestimonialsComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (element_r26 == null ? null : element_r26.priority) || "N/A", " ");
  }
}
function TechTestimonialsComponent_th_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enable / Disable ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TechTestimonialsComponent_td_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 21)(1, "mat-slide-toggle", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TechTestimonialsComponent_td_32_Template_mat_slide_toggle_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29);
      const element_r27 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](element_r27.is_enabled = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", element_r27.is_enabled);
  }
}
function TechTestimonialsComponent_th_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TechTestimonialsComponent_td_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 21)(1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TechTestimonialsComponent_td_35_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32);
      const element_r30 = restoredCtx.$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r31.openSubscriptionModal(element_r30, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TechTestimonialsComponent_td_35_Template_a_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32);
      const element_r30 = restoredCtx.$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r33.deleteItem(element_r30));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matTooltip", "Delete File");
  }
}
function TechTestimonialsComponent_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 31);
  }
}
function TechTestimonialsComponent_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 32);
  }
}
class TechTestimonialsComponent {
  // @ViewChild(MatPaginator) paginator: any;
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }
  constructor(api, toaster, location, modal) {
    this.api = api;
    this.toaster = toaster;
    this.location = location;
    this.modal = modal;
    this.displayedColumns = ['description', 'youtube_url', 'Category', 'Product', 'Product Variant', 'Actions']; //'priority'
    this.pageSize = 50;
    this.isLoading = false;
  }
  ngOnInit() {
    this.geMetaData();
    this.getTechTestimonials();
  }
  geMetaData() {
    this.api.getTechTestimonialsMetaData().subscribe({
      next: res => {
        console.log(res);
        this.metaData = res.data;
      },
      error: err => {
        console.log(err);
        this.toaster.error(err.error.message);
      }
    });
  }
  getTechTestimonials(params = {
    page: 1,
    per_page: 20
  }) {
    this.api.getTechTestimonials(params).subscribe({
      next: res => {
        console.log(res);
        // this.dataSource = new MatTableDataSource<any>(res.data);
        // setTimeout(() => {
        //   this.paginator.pageIndex = params.page - 1;
        //   this.paginator.length = res.data.total;
        // })
        // this.dataSource.paginator = this.paginator;
        this.dataSource = res.data;
        // this.totalPages = res.data.total;
        this.isLoading = false;
      },
      error: err => {
        this.isLoading = false;
        console.log(err);
        this.toaster.error(err.error.message);
      }
    });
  }
  deleteItem(el) {
    swal({
      text: 'Are you sure you want to delete?',
      type: 'warning',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then(willDelete => {
      console.log(el);
      this.api.deleteTechTestimonial(el.id).subscribe({
        next: res => {
          console.log(res);
          this.isLoading = false;
          this.toaster.success(res.message);
          this.getTechTestimonials();
        },
        error: err => {
          this.isLoading = false;
          console.log(err);
          this.toaster.error(err.error.message);
        }
      });
    }, error => {});
  }
  openSubscriptionModal(dataToEdit, isEdit = false) {
    const dailogRef = this.modal.open(_tech_testimonials_modal_tech_testimonials_modal_component__WEBPACK_IMPORTED_MODULE_0__.TechTestimonialsModalComponent, {
      width: "80vw",
      panelClass: "switcher-panel",
      data: {
        isEdit,
        dataToEdit,
        metaData: this.metaData
      }
    });
    dailogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getTechTestimonials();
      }
    });
  }
  // pageChanged(event: any) {
  //   this.getPressCoverages({ page: event.pageIndex + 1, per_page: event.pageSize })
  // }
  goBack() {
    this.location.back();
  }
}
TechTestimonialsComponent.ɵfac = function TechTestimonialsComponent_Factory(t) {
  return new (t || TechTestimonialsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog));
};
TechTestimonialsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: TechTestimonialsComponent,
  selectors: [["app-tech-testimonials"]],
  decls: 38,
  vars: 3,
  consts: [[1, "card"], [1, "card-header", "card-box-shadow", "bt-4", "d-flex", "justify-content-between", "p-3"], [1, "card-title", "m-0", "float-left", "font-weight-bold"], [1, "d-flex", "justify-content-end"], ["matTooltip", "Add a Testimonial", "matTooltipClass", "custom-tooltip", 1, "pr-3", "card-header-icon", "pointer", 3, "click"], [1, "card-body"], [1, "w-100", "table-responsive"], ["mat-table", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "description"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "youtube_url"], ["matColumnDef", "Category"], ["matColumnDef", "Product"], ["matColumnDef", "Product Variant"], ["matColumnDef", "priority"], ["matColumnDef", "is_enabled"], ["matColumnDef", "Actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "my-3"], ["target", "_blank", 3, "href", 4, "ngIf"], [4, "ngIf"], ["target", "_blank", 3, "href"], [1, "d-block", "example-margin", 2, "max-width", "max-content", "margin", "auto", 3, "ngModel", "ngModelChange"], ["matTooltip", "Edit Tech Testimonial", "matTooltipClass", "custom-tooltip", 1, "pointer", 3, "click"], [1, "fas", "fa-2x", "fa-pen-square", 2, "font-size", "1.6em", "color", "#00b3ac"], ["matTooltipClass", "custom-tooltip", 1, "pointer", "ml-3", 3, "matTooltip", "click"], [1, "fas", "fa-2x", "fa-trash-alt", 2, "font-size", "1.6em", "color", "#c41414"], ["mat-header-row", ""], ["mat-row", ""]],
  template: function TechTestimonialsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "div", 1)(3, "h4", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Tech Testimonials ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3)(6, "div")(7, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TechTestimonialsComponent_Template_mat_icon_click_7_listener() {
        return ctx.openSubscriptionModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "table", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](12, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, TechTestimonialsComponent_th_13_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, TechTestimonialsComponent_td_14_Template, 3, 1, "td", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](15, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, TechTestimonialsComponent_th_16_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, TechTestimonialsComponent_td_17_Template, 3, 2, "td", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](18, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, TechTestimonialsComponent_th_19_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, TechTestimonialsComponent_td_20_Template, 2, 1, "td", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](21, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, TechTestimonialsComponent_th_22_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, TechTestimonialsComponent_td_23_Template, 2, 1, "td", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](24, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, TechTestimonialsComponent_th_25_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, TechTestimonialsComponent_td_26_Template, 2, 1, "td", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](27, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, TechTestimonialsComponent_th_28_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, TechTestimonialsComponent_td_29_Template, 2, 1, "td", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](30, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, TechTestimonialsComponent_th_31_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, TechTestimonialsComponent_td_32_Template, 2, 1, "td", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](33, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, TechTestimonialsComponent_th_34_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, TechTestimonialsComponent_td_35_Template, 5, 1, "td", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, TechTestimonialsComponent_tr_36_Template, 1, 0, "tr", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, TechTestimonialsComponent_tr_37_Template, 1, 0, "tr", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__.MatSlideToggle, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltip],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8603:
/*!***********************************************************************************************!*\
  !*** ./src/app/components/terms-and-conditions-modal/terms-and-conditions-modal.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsAndConditionsModalComponent": () => (/* binding */ TermsAndConditionsModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
















function TermsAndConditionsModalComponent_h4_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Create a Terms And Conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TermsAndConditionsModalComponent_h4_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Update a Terms And Conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TermsAndConditionsModalComponent_mat_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r15.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](option_r15.name);
  }
}
function TermsAndConditionsModalComponent_mat_hint_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Group Name is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TermsAndConditionsModalComponent_mat_hint_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Tab Name is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TermsAndConditionsModalComponent_mat_hint_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Heading is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TermsAndConditionsModalComponent_mat_hint_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Sub Heading is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TermsAndConditionsModalComponent_mat_hint_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select a content Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TermsAndConditionsModalComponent_mat_hint_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Date Range is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TermsAndConditionsModalComponent_mat_hint_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Priority is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TermsAndConditionsModalComponent_div_66_mat_hint_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Content Text is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TermsAndConditionsModalComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39)(1, "mat-form-field", 19)(2, "mat-label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Content Text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "textarea", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TermsAndConditionsModalComponent_div_66_mat_hint_5_Template, 2, 0, "mat-hint", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.formSubmitted && ctx_r11.formControl["content_text"].errors && ctx_r11.formControl["content_text"].errors["required"]);
  }
}
function TermsAndConditionsModalComponent_div_67_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49)(1, "div", 50)(2, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermsAndConditionsModalComponent_div_67_div_7_Template_i_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r19.clearContentImage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r17.contentImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function TermsAndConditionsModalComponent_div_67_mat_hint_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Content image is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TermsAndConditionsModalComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39)(1, "div", 9)(2, "div", 41)(3, "div", 42)(4, "h3", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Content Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, TermsAndConditionsModalComponent_div_67_div_7_Template, 4, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 45)(9, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function TermsAndConditionsModalComponent_div_67_Template_input_change_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r21.preview($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 47)(11, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Browse and upload Content Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, TermsAndConditionsModalComponent_div_67_mat_hint_13_Template, 2, 0, "mat-hint", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.contentImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.formSubmitted && ctx_r12.formControl["content_image"].errors && ctx_r12.formControl["content_image"].errors["required"]);
  }
}
function TermsAndConditionsModalComponent_button_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermsAndConditionsModalComponent_button_74_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r23.createTermsAndCondition());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Create ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TermsAndConditionsModalComponent_button_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermsAndConditionsModalComponent_button_75_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r25.updateTermsAndCondition());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class TermsAndConditionsModalComponent {
  constructor(data, dialogRef, api, toaster, fb) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.api = api;
    this.toaster = toaster;
    this.fb = fb;
    this.formSubmitted = false;
    this.isLoading = false;
    this.form = this.fb.group({
      group_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      tab_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      heading: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      sub_heading: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      date_range: this.fb.group({
        start_date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        end_date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
      }),
      content_type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      content_text: [''],
      content_image: [''],
      is_enabled: [''],
      priority: ['999999', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
    });
    this.form.controls['content_type'].valueChanges.subscribe(value => {
      if (value == 1) {
        this.form.controls['content_text'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
        this.form.controls['content_image'].removeValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
      } else {
        this.form.controls['content_image'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
        this.form.controls['content_text'].removeValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
      }
      this.form.controls['content_text'].updateValueAndValidity();
      this.form.controls['content_image'].updateValueAndValidity();
    });
    console.log(this.data);
    if (this.data.isEdit) {
      // this.form.get('desktop_image')?.setValidators([]);
      // this.form.get('mobile_image')?.setValidators([]);
      this.form.patchValue({
        group_name: this.data.dataToEdit.group_name,
        tab_name: this.data.dataToEdit.tab_name,
        heading: this.data.dataToEdit.heading,
        sub_heading: this.data.dataToEdit.sub_heading,
        is_enabled: this.data.dataToEdit.is_enabled ? true : false,
        priority: this.data.dataToEdit.priority,
        date_range: {
          start_date: new Date(this.data.dataToEdit.date_range.split(' - ')[0]),
          end_date: new Date(this.data.dataToEdit.date_range.split(' - ')[1])
        }
      });
      if (this.data.dataToEdit.content_text) {
        this.form.patchValue({
          content_type: '1',
          content_text: this.data.dataToEdit.content_text
        });
      } else if (this.data.dataToEdit.content_image && this.data.dataToEdit.content_image_full_url) {
        this.form.patchValue({
          content_type: '2'
          // content_text: this.data.dataToEdit.content_text
        });

        this.contentImage = this.data.dataToEdit.content_image_full_url;
      }
    }
  }
  ngOnInit() {}
  createTermsAndCondition() {
    this.formSubmitted = true;
    console.log(this.form);
    if (!this.form.valid) {
      return;
    }
    this.isLoading = true;
    const startDateSplit = this.form.value.date_range.start_date?.toString().split(' ');
    const endDateSplit = this.form.value.date_range.end_date?.toString().split(' ');
    const formattedStartDate = `${startDateSplit[3]}-${(new Date(this.form.value.date_range.start_date).getMonth() + 1).toString().padStart(2, '0')}-${startDateSplit[2]}`;
    const formattedEndDate = `${endDateSplit[3]}-${(new Date(this.form.value.date_range.end_date).getMonth() + 1).toString().padStart(2, '0')}-${endDateSplit[2]}`;
    console.log(`${formattedStartDate} - ${formattedEndDate}`);
    const formData = new FormData();
    formData.append('group_name', this.form.value.group_name + '');
    formData.append('tab_name', this.form.value.tab_name + '');
    formData.append('heading', this.form.value.heading + '');
    formData.append('sub_heading', this.form.value.sub_heading + '');
    formData.append('date_range', `${formattedStartDate} - ${formattedEndDate}`);
    formData.append('is_enabled', this.form.value.is_enabled ? '1' : '0');
    formData.append('priority', this.form.value.priority + '');
    if (this.form.value['content_type'] == 1) {
      formData.append('content_text', this.form.value.content_text + '');
      formData.delete('content_image');
    } else {
      formData.delete('content_text');
      formData.append('content_image', this.contentImageFile);
    }
    this.api.createtermsAndConditions(formData).subscribe({
      next: res => {
        console.log(res);
        this.dialogRef.close(true);
        this.isLoading = false;
      },
      error: err => {
        this.isLoading = false;
        console.log(err);
        this.toaster.error(err.error.message);
      }
    });
  }
  updateTermsAndCondition() {
    this.formSubmitted = true;
    if (!this.form.valid) {
      return;
    }
    this.isLoading = true;
    const startDateSplit = this.form.value.date_range.start_date?.toString().split(' ');
    const endDateSplit = this.form.value.date_range.end_date?.toString().split(' ');
    const formattedStartDate = `${startDateSplit[3]}-${(new Date(this.form.value.date_range.start_date).getMonth() + 1).toString().padStart(2, '0')}-${startDateSplit[2]}`;
    const formattedEndDate = `${endDateSplit[3]}-${(new Date(this.form.value.date_range.end_date).getMonth() + 1).toString().padStart(2, '0')}-${endDateSplit[2]}`;
    const formData = new FormData();
    formData.append('group_name', this.form.value.group_name + '');
    formData.append('tab_name', this.form.value.tab_name + '');
    formData.append('heading', this.form.value.heading + '');
    formData.append('sub_heading', this.form.value.sub_heading + '');
    formData.append('date_range', `${formattedStartDate} - ${formattedEndDate}`);
    formData.append('is_enabled', this.form.value.is_enabled ? '1' : '0');
    formData.append('priority', this.form.value.priority + '');
    formData.append('_method', 'PATCH');
    if (this.form.value['content_type'] == 1) {
      formData.append('content_text', this.form.value.content_text + '');
      formData.delete('content_image');
    } else {
      formData.delete('content_text');
      formData.append('content_image', this.contentImageFile);
    }
    this.api.updateTermsAndConditions(formData, this.data.dataToEdit.id).subscribe({
      next: res => {
        this.dialogRef.close(true);
        this.isLoading = false;
        this.toaster.success(res.message);
      },
      error: err => {
        this.isLoading = false;
        console.log(err);
        this.toaster.error(err.error.message);
      }
    });
  }
  preview(event) {
    let files = event.target?.files;
    if (files.length === 0) return;
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = _event => {
      this.contentImage = reader.result;
      this.contentImageFile = files[0];
      this.form.patchValue({
        content_image: files[0]
      });
    };
  }
  clearContentImage() {
    this.contentImage = null;
    this.contentImageFile = null;
    this.form.patchValue({
      content_image: null
    });
  }
  get formControl() {
    return this.form.controls;
  }
}
TermsAndConditionsModalComponent.ɵfac = function TermsAndConditionsModalComponent_Factory(t) {
  return new (t || TermsAndConditionsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
};
TermsAndConditionsModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: TermsAndConditionsModalComponent,
  selectors: [["app-terms-and-conditions-modal"]],
  decls: 76,
  vars: 18,
  consts: [[1, "modal-container"], [1, "header", "border-bottom"], ["mat-dialog-title", "", 4, "ngIf"], [1, "close-icon", 3, "mat-dialog-close"], [1, "body"], [1, "mat-dialog"], [1, "row", "p-3"], [1, "col-md-12"], [3, "formGroup"], [1, "row"], [1, "col-12", "col-sm-6", "col-md-6", "col-lg-3", "form-group"], ["appearance", "outline"], [1, "mat-label-field-padding"], ["formControlName", "group_name"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "error", 4, "ngIf"], ["matInput", "", "formControlName", "tab_name", "type", "text"], ["matInput", "", "formControlName", "heading", "type", "text"], ["matInput", "", "formControlName", "sub_heading", "type", "text"], ["appearance", "outline", 1, "w-100"], ["formControlName", "content_type"], ["value", "1"], ["value", "2"], ["formGroupName", "date_range", 1, "col-12", "col-sm-6", "col-md-6", "col-lg-3", "form-group"], [3, "rangePicker"], ["matStartDate", "", "placeholder", "Start date", "formControlName", "start_date"], ["matEndDate", "", "placeholder", "End date", "formControlName", "end_date"], ["matIconSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "formControlName", "priority", "type", "text"], ["class", "col-12 form-group", 4, "ngIf"], [1, "col-12", "form-group", "my-3"], ["formControlName", "is_enabled", 1, "d-block", "example-margin"], [1, "footer"], ["mat-raised-button", "", 1, "ml-3", "mb-3", 2, "color", "black !important", 3, "click"], ["class", "btn btn-info ml-3 mb-3", 3, "click", 4, "ngIf"], ["mat-dialog-title", ""], [3, "value"], [1, "error"], [1, "col-12", "form-group"], ["matInput", "", "trim", "blur", "rows", "5", "formControlName", "content_text", 2, "resize", "none", "overflow-y", "auto", "padding", "8px"], [1, "col-12", "col-md-4"], [1, "mt-4"], [1, "section-heading", "section-heading-not-first"], ["class", " mb-3", 4, "ngIf"], [1, "col-12", "mb-3"], ["id", "file-upload", "type", "file", "accept", "image/png, image/jpeg, image/webp", 1, "file-input", 3, "change"], ["mat-raised-button", "", "type", "button", 1, "file-upload-btn"], ["for", "file-upload"], [1, "mb-3"], [1, "logo-wrap"], ["aria-hidden", "true", 1, "fa", "fa-times", "fa-1x", 3, "click"], ["width", "100", "height", "100", 1, "logo-btn", 3, "src"], [1, "btn", "btn-info", "ml-3", "mb-3", 3, "click"]],
  template: function TermsAndConditionsModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TermsAndConditionsModalComponent_h4_2_Template, 2, 0, "h4", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TermsAndConditionsModalComponent_h4_3_Template, 2, 0, "h4", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "mat-dialog-content", 5)(8, "div", 6)(9, "div", 7)(10, "form", 8)(11, "div", 9)(12, "div", 10)(13, "mat-form-field", 11)(14, "mat-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Group Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, TermsAndConditionsModalComponent_mat_option_17_Template, 2, 2, "mat-option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, TermsAndConditionsModalComponent_mat_hint_18_Template, 2, 0, "mat-hint", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10)(20, "mat-form-field", 11)(21, "mat-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Tab Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, TermsAndConditionsModalComponent_mat_hint_24_Template, 2, 0, "mat-hint", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 10)(26, "mat-form-field", 11)(27, "mat-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Heading");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, TermsAndConditionsModalComponent_mat_hint_30_Template, 2, 0, "mat-hint", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 10)(32, "mat-form-field", 11)(33, "mat-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Sub Heading");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, TermsAndConditionsModalComponent_mat_hint_36_Template, 2, 0, "mat-hint", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 10)(38, "mat-form-field", 19)(39, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Content Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-select", 20)(42, "mat-option", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Text");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-option", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Image");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, TermsAndConditionsModalComponent_mat_hint_46_Template, 2, 0, "mat-hint", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 23)(48, "mat-form-field", 11)(49, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Enter a date range");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "mat-hint");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "MM/DD/YYYY - MM/DD/YYYY");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "mat-date-range-input", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 25)(55, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "mat-datepicker-toggle", 27)(57, "mat-date-range-picker", null, 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, TermsAndConditionsModalComponent_mat_hint_59_Template, 2, 0, "mat-hint", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 10)(61, "mat-form-field", 19)(62, "mat-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Priority");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, TermsAndConditionsModalComponent_mat_hint_65_Template, 2, 0, "mat-hint", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, TermsAndConditionsModalComponent_div_66_Template, 6, 1, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, TermsAndConditionsModalComponent_div_67_Template, 14, 2, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 31)(69, "mat-slide-toggle", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, " Enable/Disable");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 33)(72, "button", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermsAndConditionsModalComponent_Template_button_click_72_listener() {
        return ctx.dialogRef.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, TermsAndConditionsModalComponent_button_74_Template, 2, 0, "button", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, TermsAndConditionsModalComponent_button_75_Template, 2, 0, "button", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](58);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.data.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data.metaData.groups);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formSubmitted && ctx.formControl["group_name"].errors && ctx.formControl["group_name"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formSubmitted && ctx.formControl["tab_name"].errors && ctx.formControl["tab_name"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formSubmitted && ctx.formControl["heading"].errors && ctx.formControl["heading"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formSubmitted && ctx.formControl["sub_heading"].errors && ctx.formControl["sub_heading"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formSubmitted && ctx.formControl["content_type"].errors && ctx.formControl["content_type"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rangePicker", _r8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formSubmitted && ctx.formControl["date_range"].invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formSubmitted && ctx.formControl["priority"].errors && ctx.formControl["priority"].errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formControl["content_type"].value == 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formControl["content_type"].value == 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.data.isEdit);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.isEdit);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupName, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDateRangePicker, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__.MatSlideToggle],
  styles: ["[_ngcontent-%COMP%]:root {\n  --primary: #00b3ac;\n  --white: #fff;\n  --black: #000;\n}\n\n.modal-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 10px;\n}\n\nh4[mat-dialog-title][_ngcontent-%COMP%] {\n  margin: 0 0 7px !important;\n}\n\n.subscription-card[_ngcontent-%COMP%] {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(27, 31, 35, 0.1) 0px 0px 0px 1px;\n  border-radius: 13px;\n}\n\n.plans-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n  gap: 25px;\n  margin: 15px 0;\n}\n\n.card-content[_ngcontent-%COMP%] {\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n  min-height: 270px;\n}\n\n.check-icon[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 36px;\n}\n\n.active-b[_ngcontent-%COMP%] {\n  border: 1px solid var(--primary);\n}\n\n.current-plan[_ngcontent-%COMP%] {\n  width: 100%;\n  color: var(--primary);\n  font-size: 16px;\n  font-weight: 400;\n  border-top-left-radius: 13px;\n  border-top-right-radius: 13px;\n  box-shadow: 0px 1px 3px var(--primary);\n}\n\n.recommended-plan[_ngcontent-%COMP%] {\n  mix-blend-mode: luminosity;\n}\n\n.planName[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 22px;\n  text-align: center;\n}\n\n.plan-price[_ngcontent-%COMP%] {\n  font-size: 38px;\n  text-align: center;\n}\n.plan-price[_ngcontent-%COMP%]   .fs-small[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.planDesc[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.mat-dialog[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n\n.features-heading[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px;\n  width: 100%;\n  border: none;\n  background: transparent;\n}\n.features-heading[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  background: #e7e0e0;\n  border-radius: 50%;\n}\n.features-heading[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]   .fa-caret-down[_ngcontent-%COMP%] {\n  font-size: 24px;\n  transform: rotate(-180deg);\n  transition: transform 250ms ease-in-out;\n}\n\n.collapsed[_ngcontent-%COMP%]   .fa-caret-down[_ngcontent-%COMP%] {\n  transform: rotate(0deg) !important;\n}\n\n@media screen and (max-width: 768px) {\n  .plans-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 1rem;\n  border-top: 1px solid rgba(0, 0, 0, 0.2);\n}\n\n.file-input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.file-upload-btn[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0;\n}\n.file-upload-btn[_ngcontent-%COMP%]   .mat-button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\n.file-upload-btn[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  cursor: pointer;\n  margin: 0;\n  padding: 12px;\n  background-color: var(--primary);\n  color: white !important;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 95%;\n}\n\n  .mat-form-field-hint-wrapper {\n  display: block !important;\n}\n\n  .mat-mdc-form-field-hint-wrapper {\n  display: block;\n}\n\nmat-hint[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9jb3JlL3RoZW1lcy9wcmltYXJ5LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi9TYWklMjBLaXJhbi9Eb2N1bWVudHMvYWRtaW4taGlzZW5zZS9oaXNlbnNlLWFkbWluL3NyYy9hcHAvY29tcG9uZW50cy90ZXJtcy1hbmQtY29uZGl0aW9ucy1tb2RhbC90ZXJtcy1hbmQtY29uZGl0aW9ucy1tb2RhbC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90ZXJtcy1hbmQtY29uZGl0aW9ucy1tb2RhbC90ZXJtcy1hbmQtY29uZGl0aW9ucy1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUNISjs7QUNERTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QURJSjs7QUNBQTtFQUNFLDBCQUFBO0FER0Y7O0FDQUE7RUFDRSxxRkFBQTtFQUNBLG1CQUFBO0FER0Y7O0FDQUE7RUFDRSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBREdGOztBQ0FBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBREdGOztBQ0FBO0VBQ0UsWUFBQTtBREdGOztBQ0FBO0VBQ0UscUJGeENjO0VFeUNkLGVBQUE7QURHRjs7QUNBQTtFQUNFLGdDQUFBO0FER0Y7O0FDQUE7RUFDRSxXQUFBO0VBQ0EscUJGbERjO0VFbURkLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQ0FBQTtBREdGOztBQ0FBO0VBQ0UsMEJBQUE7QURHRjs7QUNBQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FER0Y7O0FDQUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QURHRjtBQ0RFO0VBQ0UsZUFBQTtBREdKOztBQ0NBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURFRjs7QUNDQTtFQUNFLG9CQUFBO0FERUY7O0FDQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FERUY7QUNBRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBREVKO0FDQUk7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSx1Q0FBQTtBREVOOztBQ0lFO0VBQ0Usa0NBQUE7QURESjs7QUNLQTtFQUNFO0lBQ0UsMEJBQUE7RURGRjtBQUNGO0FDS0E7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7QURIRjs7QUNPQTtFQUNFLGFBQUE7QURKRjs7QUNPQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0FESkY7QUNNRTtFQUNFLGFBQUE7QURKSjtBQ09FO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxnQ0Z4Slk7RUV5SlosdUJBQUE7QURMSjs7QUNTQTtFQUNFLFVBQUE7QURORjs7QUNTQTtFQUNFLHlCQUFBO0FETkY7O0FDU0E7RUFDRSxjQUFBO0FETkY7O0FDU0E7RUFDRSxtQkFBQTtBRE5GIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLXByaW1hcnk6IHZhcigtLXByaW1hcnkpO1xyXG4kd2hpdGUtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuJGJsYWNrLWNvbG9yOiB2YXIoLS1ibGFjayk7XHJcblxyXG46cm9vdHtcclxuICAgIC0tcHJpbWFyeTogIzAwYjNhYztcclxuICAgIC0td2hpdGU6ICNmZmY7XHJcbiAgICAtLWJsYWNrOiAjMDAwO1xyXG59IiwiOnJvb3Qge1xuICAtLXByaW1hcnk6ICMwMGIzYWM7XG4gIC0td2hpdGU6ICNmZmY7XG4gIC0tYmxhY2s6ICMwMDA7XG59XG5cbi5tb2RhbC1jb250YWluZXIgLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG5cbmg0W21hdC1kaWFsb2ctdGl0bGVdIHtcbiAgbWFyZ2luOiAwIDAgN3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5zdWJzY3JpcHRpb24tY2FyZCB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggMXB4IDNweCAwcHgsIHJnYmEoMjcsIDMxLCAzNSwgMC4xKSAwcHggMHB4IDBweCAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG59XG5cbi5wbGFucy1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAxZnIpKTtcbiAgZ2FwOiAyNXB4O1xuICBtYXJnaW46IDE1cHggMDtcbn1cblxuLmNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjJweDtcbiAgbWluLWhlaWdodDogMjcwcHg7XG59XG5cbi5jaGVjay1pY29uIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uYWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXNpemU6IDM2cHg7XG59XG5cbi5hY3RpdmUtYiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xufVxuXG4uY3VycmVudC1wbGFuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxM3B4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTNweDtcbiAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggdmFyKC0tcHJpbWFyeSk7XG59XG5cbi5yZWNvbW1lbmRlZC1wbGFuIHtcbiAgbWl4LWJsZW5kLW1vZGU6IGx1bWlub3NpdHk7XG59XG5cbi5wbGFuTmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucGxhbi1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMzhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnBsYW4tcHJpY2UgLmZzLXNtYWxsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ucGxhbkRlc2Mge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm1hdC1kaWFsb2cge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuLmZlYXR1cmVzLWhlYWRpbmcge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uZmVhdHVyZXMtaGVhZGluZyAuaWNvbi13cmFwcGVyIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgYmFja2dyb3VuZDogI2U3ZTBlMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmZlYXR1cmVzLWhlYWRpbmcgLmljb24td3JhcHBlciAuZmEtY2FyZXQtZG93biB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBlYXNlLWluLW91dDtcbn1cblxuLmNvbGxhcHNlZCAuZmEtY2FyZXQtZG93biB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wbGFucy1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG4uZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uZmlsZS1pbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5maWxlLXVwbG9hZC1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwO1xufVxuLmZpbGUtdXBsb2FkLWJ0biAubWF0LWJ1dHRvbi13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5maWxlLXVwbG9hZC1idG4gbGFiZWwge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiA5NSU7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaGludC13cmFwcGVyIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtbWRjLWZvcm0tZmllbGQtaGludC13cmFwcGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbm1hdC1oaW50IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29yZS90aGVtZXMvcHJpbWFyeS5zY3NzXCI7XHJcblxyXG4ubW9kYWwtY29udGFpbmVyIHtcclxuICAuaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5oNFttYXQtZGlhbG9nLXRpdGxlXSB7XHJcbiAgbWFyZ2luOiAwIDAgN3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdWJzY3JpcHRpb24tY2FyZCB7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAxcHggM3B4IDBweCwgcmdiYSgyNywgMzEsIDM1LCAwLjEpIDBweCAwcHggMHB4IDFweDtcclxuICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG59XHJcblxyXG4ucGxhbnMtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDFmcikpO1xyXG4gIGdhcDogMjVweDtcclxuICBtYXJnaW46IDE1cHggMDtcclxufVxyXG5cclxuLmNhcmQtY29udGVudCB7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAyMnB4O1xyXG4gIG1pbi1oZWlnaHQ6IDI3MHB4O1xyXG59XHJcblxyXG4uY2hlY2staWNvbiB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG59XHJcblxyXG4uYWN0aXZlLWIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1wcmltYXJ5O1xyXG59XHJcblxyXG4uY3VycmVudC1wbGFuIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTNweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTNweDtcclxuICBib3gtc2hhZG93OiAwcHggMXB4IDNweCB2YXIoLS1wcmltYXJ5KTtcclxufVxyXG5cclxuLnJlY29tbWVuZGVkLXBsYW4ge1xyXG4gIG1peC1ibGVuZC1tb2RlOiBsdW1pbm9zaXR5O1xyXG59XHJcblxyXG4ucGxhbk5hbWUge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBsYW4tcHJpY2Uge1xyXG4gIGZvbnQtc2l6ZTogMzhweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIC5mcy1zbWFsbCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucGxhbkRlc2Mge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLm1hdC1kaWFsb2cge1xyXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmVhdHVyZXMtaGVhZGluZyB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgLmljb24td3JhcHBlciB7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGJhY2tncm91bmQ6ICNlN2UwZTA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG4gICAgLmZhLWNhcmV0LWRvd24ge1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY29sbGFwc2VkIHtcclxuICAuZmEtY2FyZXQtZG93biB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCkge1xyXG4gIC5wbGFucy1jb250YWluZXIge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMXJlbTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG5cclxuLmZpbGUtaW5wdXQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5maWxlLXVwbG9hZC1idG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMDtcclxuXHJcbiAgLm1hdC1idXR0b24td3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuXHJcbiAgbGFiZWwge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxke1xyXG4gIHdpZHRoOiA5NSU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaGludC13cmFwcGVye1xyXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LW1kYy1mb3JtLWZpZWxkLWhpbnQtd3JhcHBlcntcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxubWF0LWhpbnR7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 8048:
/*!***********************************************************************************!*\
  !*** ./src/app/components/terms-and-conditions/terms-and-conditions.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsAndConditionsComponent": () => (/* binding */ TermsAndConditionsComponent)
/* harmony export */ });
/* harmony import */ var _terms_and_conditions_modal_terms_and_conditions_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../terms-and-conditions-modal/terms-and-conditions-modal.component */ 8603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);










function TermsAndConditionsComponent_th_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Group Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TermsAndConditionsComponent_td_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 20)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r13 == null ? null : element_r13.group_name, " ");
  }
}
function TermsAndConditionsComponent_th_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Tab Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TermsAndConditionsComponent_td_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 20)(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (element_r14 == null ? null : element_r14.tab_name) || "N/A", " ");
  }
}
function TermsAndConditionsComponent_th_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Heading ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TermsAndConditionsComponent_td_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 20)(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (element_r15 == null ? null : element_r15.heading) || "N/A", " ");
  }
}
function TermsAndConditionsComponent_th_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Sub Heading ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TermsAndConditionsComponent_td_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 20)(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (element_r16 == null ? null : element_r16.sub_heading) || "N/A", " ");
  }
}
function TermsAndConditionsComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TermsAndConditionsComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 20)(1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TermsAndConditionsComponent_td_26_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);
      const element_r17 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r18.openSubscriptionModal(element_r17, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TermsAndConditionsComponent_td_26_Template_a_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);
      const element_r17 = restoredCtx.$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.deleteItem(element_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matTooltip", "Delete File");
  }
}
function TermsAndConditionsComponent_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 26);
  }
}
function TermsAndConditionsComponent_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 27);
  }
}
function TermsAndConditionsComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " No record found");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return [50, 100, 200];
};
class TermsAndConditionsComponent {
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }
  constructor(api, toaster, location, modal) {
    this.api = api;
    this.toaster = toaster;
    this.location = location;
    this.modal = modal;
    // date_range
    this.displayedColumns = ['group_name', 'tab_name', 'heading', 'sub_heading', 'Actions']; //'priority',
    this.pageSize = 50;
    this.isLoading = false;
    this.totalPages = 0;
  }
  ngOnInit() {
    this.getTermsAndConditions();
    this.getTermsAndConditionsMetaData();
  }
  getTermsAndConditions(params = {
    page: 1,
    per_page: 50
  }) {
    this.api.getTermsAndConditions(params).subscribe({
      next: res => {
        console.log(res);
        // this.dataSource = new MatTableDataSource<any>(res.data.data);
        // setTimeout(() => {
        //   this.paginator.pageIndex = params.page - 1;
        //   this.paginator.length = res.data.total;
        // })
        // this.dataSource.paginator = this.paginator;
        this.dataSource = res.data.data;
        this.totalPages = res.data.total;
        this.isLoading = false;
      },
      error: err => {
        this.isLoading = false;
        console.log(err);
        this.toaster.error(err.error.message);
      }
    });
  }
  getTermsAndConditionsMetaData() {
    this.api.getTermsAndConditionsMetaData().subscribe({
      next: res => {
        console.log(res);
        this.metaData = res.data;
        this.isLoading = false;
      },
      error: err => {
        this.isLoading = false;
        console.log(err);
        this.toaster.error(err.error.message);
      }
    });
  }
  deleteItem(el) {
    swal({
      text: 'Are you sure you want to delete?',
      type: 'warning',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then(willDelete => {
      console.log(el);
      this.api.deleteTermsAndConditions(el.id).subscribe({
        next: res => {
          console.log(res);
          this.isLoading = false;
          this.toaster.success(res.message);
          this.getTermsAndConditions();
        },
        error: err => {
          this.isLoading = false;
          console.log(err);
          this.toaster.error(err.error.message);
        }
      });
    }, error => {});
  }
  openSubscriptionModal(dataToEdit, isEdit = false) {
    const dailogRef = this.modal.open(_terms_and_conditions_modal_terms_and_conditions_modal_component__WEBPACK_IMPORTED_MODULE_0__.TermsAndConditionsModalComponent, {
      width: "80vw",
      panelClass: "switcher-panel",
      data: {
        isEdit,
        dataToEdit,
        metaData: this.metaData
      }
    });
    dailogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getTermsAndConditions();
      }
    });
  }
  pageChanged(event) {
    this.getTermsAndConditions({
      page: event.pageIndex + 1,
      per_page: event.pageSize
    });
  }
  goBack() {
    this.location.back();
  }
}
TermsAndConditionsComponent.ɵfac = function TermsAndConditionsComponent_Factory(t) {
  return new (t || TermsAndConditionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog));
};
TermsAndConditionsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: TermsAndConditionsComponent,
  selectors: [["app-terms-and-conditions"]],
  decls: 31,
  vars: 8,
  consts: [[1, "card"], [1, "card-header", "card-box-shadow", "bt-4", "d-flex", "justify-content-between", "p-3"], [1, "card-title", "m-0", "float-left", "font-weight-bold"], [1, "d-flex", "justify-content-end"], ["matTooltip", "Add a Press Coverage", "matTooltipClass", "custom-tooltip", 1, "pr-3", "card-header-icon", "pointer", 3, "click"], [1, "card-body"], [1, "w-100", "table-responsive"], ["mat-table", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "group_name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "tab_name"], ["matColumnDef", "heading"], ["matColumnDef", "sub_heading"], ["matColumnDef", "Actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "text-center py-2 no-record", 4, "ngIf"], [3, "length", "pageSizeOptions", "pageSize", "page"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "my-3"], ["matTooltip", "Edit Press Coverage", "matTooltipClass", "custom-tooltip", 1, "pointer", 3, "click"], [1, "fas", "fa-2x", "fa-pen-square", 2, "font-size", "1.6em", "color", "#00b3ac"], ["matTooltipClass", "custom-tooltip", 1, "pointer", "ml-3", 3, "matTooltip", "click"], [1, "fas", "fa-2x", "fa-trash-alt", 2, "font-size", "1.6em", "color", "#c41414"], ["mat-header-row", ""], ["mat-row", ""], [1, "text-center", "py-2", "no-record"]],
  template: function TermsAndConditionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "div", 1)(3, "h4", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Terms And Conditions ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3)(6, "div")(7, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TermsAndConditionsComponent_Template_mat_icon_click_7_listener() {
        return ctx.openSubscriptionModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "table", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](12, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, TermsAndConditionsComponent_th_13_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, TermsAndConditionsComponent_td_14_Template, 3, 1, "td", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](15, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, TermsAndConditionsComponent_th_16_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, TermsAndConditionsComponent_td_17_Template, 3, 1, "td", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](18, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, TermsAndConditionsComponent_th_19_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, TermsAndConditionsComponent_td_20_Template, 3, 1, "td", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](21, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, TermsAndConditionsComponent_th_22_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, TermsAndConditionsComponent_td_23_Template, 3, 1, "td", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](24, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, TermsAndConditionsComponent_th_25_Template, 2, 0, "th", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, TermsAndConditionsComponent_td_26_Template, 5, 1, "td", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, TermsAndConditionsComponent_tr_27_Template, 1, 0, "tr", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, TermsAndConditionsComponent_tr_28_Template, 1, 0, "tr", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, TermsAndConditionsComponent_div_29_Template, 2, 0, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "mat-paginator", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("page", function TermsAndConditionsComponent_Template_mat_paginator_page_30_listener($event) {
        return ctx.pageChanged($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx.dataSource == null ? null : ctx.dataSource.length));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("length", ctx.totalPages)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c0))("pageSize", ctx.pageSize);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltip],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3806:
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialExampleModule": () => (/* binding */ MaterialExampleModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ 4218);
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/accordion */ 2088);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/clipboard */ 6079);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _angular_cdk_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/listbox */ 6840);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/cdk/portal */ 7520);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/cdk/scrolling */ 6328);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ 1861);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ 9673);
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ 5183);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/badge */ 3335);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 4865);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button-toggle */ 9837);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/stepper */ 4193);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/tree */ 3453);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/cdk/overlay */ 5895);
/* harmony import */ var _angular_cdk_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/menu */ 5397);
/* harmony import */ var _angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/cdk/dialog */ 2529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
















































class MaterialExampleModule {}
MaterialExampleModule.ɵfac = function MaterialExampleModule_Factory(t) {
  return new (t || MaterialExampleModule)();
};
MaterialExampleModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MaterialExampleModule
});
MaterialExampleModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__.A11yModule, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordionModule, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__.ClipboardModule, _angular_cdk_listbox__WEBPACK_IMPORTED_MODULE_4__.CdkListboxModule, _angular_cdk_menu__WEBPACK_IMPORTED_MODULE_5__.CdkMenuModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__.CdkStepperModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__.CdkTableModule, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__.CdkTreeModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.DragDropModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__.MatAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__.MatChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__.MatStepperModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_25__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_26__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_33__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_39__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__.MatTreeModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_44__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_45__.PortalModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_46__.ScrollingModule, _angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_47__.DialogModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialExampleModule, {
    exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__.A11yModule, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordionModule, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__.ClipboardModule, _angular_cdk_listbox__WEBPACK_IMPORTED_MODULE_4__.CdkListboxModule, _angular_cdk_menu__WEBPACK_IMPORTED_MODULE_5__.CdkMenuModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__.CdkStepperModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__.CdkTableModule, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__.CdkTreeModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.DragDropModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__.MatAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__.MatChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__.MatStepperModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_25__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_26__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_33__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_39__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__.MatTreeModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_44__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_45__.PortalModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_46__.ScrollingModule, _angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_47__.DialogModule]
  });
})();

/***/ }),

/***/ 5830:
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);






class ApiService {
  show() {
    this.isLoading.next(true);
  }
  hide() {
    this.isLoading.next(false);
  }
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
    this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
  }
  setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  readLocalStorage(key) {
    return localStorage.getItem(key);
  }
  getLocalStorage(key) {
    const data = localStorage.getItem(key);
    if (data) {
      let item = JSON.parse(data);
      return item;
    }
  }
  removeLocalStorage(key) {
    localStorage.removeItem(key);
  }
  login(formData) {
    return this.http.post(this.baseUrl + '/v1/admin/login', formData);
  }
  logout() {
    this.removeLocalStorage('currentUserSession');
    this.router.navigate(['/login']);
  }
  getProductVarientCreationMetaData() {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    // const headers = new HttpHeaders();
    // headers.set('admin-user-uuid', uuid)
    return this.http.get(this.baseUrl + '/v1/admin/product-variants/creation-metadata', {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      })
    });
  }
  getProductGroupCreationMetaData() {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.get(this.baseUrl + '/v1/admin/products/creation-metadata', {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      })
    });
  }
  getCategoryCreationMetaData() {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.get(this.baseUrl + '/v1/admin/categories/creation-metadata', {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      })
    });
  }
  getProductVarientList(params) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.get(this.baseUrl + '/v1/admin/product-variants', {
      params,
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      })
    });
  }
  getProductGroupList(params) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.get(this.baseUrl + '/v1/admin/products', {
      params,
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      })
    });
  }
  getProductCategoryList(params) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.get(this.baseUrl + '/v1/admin/categories', {
      params,
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      })
    });
  }
  getProductVarientInfo(productId) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.get(this.baseUrl + `/v1/admin/product-variants/${productId}`, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      })
    });
  }
  getProductGroupInfo(productId) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.get(this.baseUrl + `/v1/admin/products/${productId}`, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      })
    });
  }
  getCategoryInfo(productId) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.get(this.baseUrl + `/v1/admin/categories/${productId}`, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      })
    });
  }
  updateProductVarientInfo(productId, body) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.post(this.baseUrl + `/v1/admin/product-variants/${productId}`, body, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      })
    });
  }
  updateProductGroupInfo(productId, body) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.post(this.baseUrl + `/v1/admin/products/${productId}`, body, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      })
    });
  }
  updateCategoryInfo(productId, body) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.post(this.baseUrl + `/v1/admin/categories/${productId}`, body, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      })
    });
  }
  createProductVarient(body) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.post(this.baseUrl + '/v1/admin/product-variants', body, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      })
    });
  }
  createProductGroup(body) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.post(this.baseUrl + '/v1/admin/products', body, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      })
    });
  }
  createCategory(body) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.post(this.baseUrl + '/v1/admin/categories', body, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      })
    });
  }
  createHomePageSlide(fd) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.post(this.baseUrl + '/v1/admin/home-page-slides', fd, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      })
    });
  }
  uploadFiles(fd) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.post(this.baseUrl + '/v1/admin/catalog-media', fd, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      })
    });
  }
  deleteFiles(id) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.delete(this.baseUrl + `/v1/admin/catalog-media/${id}`, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      })
    });
  }
  getContactRequests(params) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.get(this.baseUrl + `/v1/admin/contact-requests`, {
      params,
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      })
    });
  }
  getPressCoverages(params) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.get(this.baseUrl + `/v1/admin/press-coverages`, {
      params,
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      })
    });
  }
  getTermsAndConditions(params) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.get(this.baseUrl + `/v1/admin/terms-and-conditions`, {
      params,
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      })
    });
  }
  getTermsAndConditionsMetaData() {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.get(this.baseUrl + `/v1/admin/terms-and-conditions/metadata`, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      })
    });
  }
  getOffersAndPromotions(params) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.get(this.baseUrl + `/v1/admin/offer-promotions`, {
      params,
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      })
    });
  }
  getTechTestimonials(params) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.get(this.baseUrl + `/v1/admin/tech-testimonials`, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      }),
      params
    });
  }
  getHomePageSlides() {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.get(this.baseUrl + `/v1/admin/home-page-slides`, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      })
    });
  }
  createPressCoverage(body) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.post(this.baseUrl + '/v1/admin/press-coverages', body, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      })
    });
  }
  createtermsAndConditions(body) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.post(this.baseUrl + '/v1/admin/terms-and-conditions', body, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      })
    });
  }
  createOfferPromotion(body) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.post(this.baseUrl + '/v1/admin/offer-promotions', body, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      })
    });
  }
  createTechTestimonial(body) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.post(this.baseUrl + '/v1/admin/tech-testimonials', body, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      })
    });
  }
  deletePressCoverage(id) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.delete(this.baseUrl + `/v1/admin/press-coverages/${id}`, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      })
    });
  }
  deleteTermsAndConditions(id) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.delete(this.baseUrl + `/v1/admin/terms-and-conditions/${id}`, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      })
    });
  }
  deleteOffersAndPromotions(id) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.delete(this.baseUrl + `/v1/admin/offer-promotions/${id}`, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      })
    });
  }
  deleteHomePageSlide(id) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.delete(this.baseUrl + `/v1/admin/home-page-slides/${id}`, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      })
    });
  }
  deleteTechTestimonial(id) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.delete(this.baseUrl + `/v1/admin/tech-testimonials/${id}`, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      })
    });
  }
  updateHomeSlider(body) {
    body._method = 'PATCH';
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.patch(this.baseUrl + `/v1/admin/home-page-slides`, body, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      })
    });
  }
  updateOffersPromotions(body) {
    body._method = 'PATCH';
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.patch(this.baseUrl + `/v1/admin/offer-promotions`, body, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      })
    });
  }
  updateTechTestimonials(body, id) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.patch(this.baseUrl + `/v1/admin/tech-testimonials/${id}`, body, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      })
    });
  }
  updatePressCoverage(body, id) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.post(this.baseUrl + `/v1/admin/press-coverages/${id}`, body, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      })
    });
  }
  updateTermsAndConditions(body, id) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.post(this.baseUrl + `/v1/admin/terms-and-conditions/${id}`, body, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      })
    });
  }
  bulkUpdateFiles(body) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.patch(this.baseUrl + `/v1/admin/catalog-media/bulk-update`, body, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      })
    });
  }
  getTechTestimonialsMetaData() {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.get(this.baseUrl + `/v1/admin/tech-testimonials/creation-metadata`, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'admin-user-uuid': uuid
      })
    });
  }
  changePassword(a, b) {}
}
ApiService.ɵfac = function ApiService_Factory(t) {
  return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
ApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ApiService,
  factory: ApiService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2904:
/*!************************************************!*\
  !*** ./src/app/session-interceptor.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderInterceptor": () => (/* binding */ LoaderInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 2313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/api.service */ 5830);



class LoaderInterceptor {
  constructor(loaderService) {
    this.loaderService = loaderService;
  }
  intercept(request, next) {
    this.loaderService.show();
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.finalize)(() => this.loaderService.hide()));
  }
}
LoaderInterceptor.ɵfac = function LoaderInterceptor_Factory(t) {
  return new (t || LoaderInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
};
LoaderInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: LoaderInterceptor,
  factory: LoaderInterceptor.ɵfac
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  baseUrl: 'https://dev-api.hisense-india.com',
  websiteUrl: 'https://dev.hisense-india.com'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map