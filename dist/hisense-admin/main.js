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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/category-list/category-list.component */ 3438);
/* harmony import */ var _components_category_category_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/category/category.component */ 9053);
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ 619);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/layout/layout.component */ 9520);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/my-profile/my-profile.component */ 2429);
/* harmony import */ var _components_product_group_product_group_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/product-group/product-group.component */ 7995);
/* harmony import */ var _components_product_groups_list_product_groups_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/product-groups-list/product-groups-list.component */ 3717);
/* harmony import */ var _components_product_varients_list_product_varients_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/product-varients-list/product-varients-list.component */ 685);
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/products/products.component */ 697);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);













const routes = [
    {
        path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent
    },
    {
        path: '',
        component: _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__.LayoutComponent,
        children: [
            {
                path: 'dashboard',
                component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent
            },
            {
                path: 'create/product-varients',
                component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_9__.ProductsComponent,
                data: { type: 'create' }
            },
            {
                path: 'update/product-varients/:id',
                component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_9__.ProductsComponent,
                data: { type: 'update' }
            },
            {
                path: 'list/product-varients',
                component: _components_product_varients_list_product_varients_list_component__WEBPACK_IMPORTED_MODULE_8__.ProductVarientsListComponent
            },
            {
                path: 'create/category',
                component: _components_category_category_component__WEBPACK_IMPORTED_MODULE_1__.CategoryComponent,
                data: { type: 'create' }
            },
            {
                path: 'update/category/:id',
                component: _components_category_category_component__WEBPACK_IMPORTED_MODULE_1__.CategoryComponent,
                data: { type: 'update' }
            },
            {
                path: 'list/category',
                component: _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_0__.CategoryListComponent
            },
            {
                path: 'create/product-group',
                component: _components_product_group_product_group_component__WEBPACK_IMPORTED_MODULE_6__.ProductGroupComponent,
                data: { type: 'create' }
            },
            {
                path: 'update/product-group/:id',
                component: _components_product_group_product_group_component__WEBPACK_IMPORTED_MODULE_6__.ProductGroupComponent,
                data: { type: 'update' }
            },
            {
                path: 'list/product-group',
                component: _components_product_groups_list_product_groups_list_component__WEBPACK_IMPORTED_MODULE_7__.ProductGroupsListComponent
            },
            {
                path: 'user-profile',
                component: _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_5__.MyProfileComponent
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
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] }); })();


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
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);






function AppComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-progress-bar", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "primary")("mode", "indeterminate");
  }
}

class AppComponent {
  constructor(api) {
    this.api = api;
    this.title = 'hisense-admin';
    this.isMenuCollapsed = true;
    this.apiService = this.api;
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
  consts: [["class", "progress-bar-container", 4, "ngIf"], [1, "progress-bar-container"], [1, "progress-bar", 3, "color", "mode"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AppComponent_div_0_Template, 2, 2, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.apiService.isLoading));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__.MatProgressBar, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
  styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: auto;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n\n.progress-bar-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  width: 100%;\n  left: -10px;\n  z-index: 1030;\n}\n\n  .mat-progress-bar {\n  height: 3px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFNhaSUyMEtpcmFuXFxEb2N1bWVudHNcXGFkbWluLWhpc2Vuc2VcXGhpc2Vuc2UtYWRtaW5cXHNyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBRElBO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNESjs7QURJQTtFQUNJLHNCQUFBO0FDREoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnByb2dyZXNzLWJhciB7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICAgIC8vICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgLy8gICB0b3A6IDA7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1iYXItY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZWZ0OiAtMTBweDtcclxuICAgIHotaW5kZXg6IDEwMzA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXByb2dyZXNzLWJhciB7XHJcbiAgICBoZWlnaHQ6IDNweCAhaW1wb3J0YW50O1xyXG59IiwiLndyYXBwZXIge1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5wcm9ncmVzcy1iYXIge1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxuLnByb2dyZXNzLWJhci1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogLTEwcHg7XG4gIHotaW5kZXg6IDEwMzA7XG59XG5cbjo6bmctZGVlcCAubWF0LXByb2dyZXNzLWJhciB7XG4gIGhlaWdodDogM3B4ICFpbXBvcnRhbnQ7XG59Il19 */"]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-toastr */ 4817);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2560);
























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule,
        ngx_toastr__WEBPACK_IMPORTED_MODULE_21__.ToastrModule.forRoot({
            timeOut: 6000,
            positionClass: 'toast-top-right',
            preventDuplicates: true,
        }),
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__.BrowserAnimationsModule,
        _material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialExampleModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent,
        _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__.LayoutComponent,
        _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__.SidebarComponent,
        _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__.DashboardComponent,
        _components_products_products_component__WEBPACK_IMPORTED_MODULE_7__.ProductsComponent,
        _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_8__.MyProfileComponent,
        _components_product_varients_list_product_varients_list_component__WEBPACK_IMPORTED_MODULE_9__.ProductVarientsListComponent,
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__.NavbarComponent,
        _components_product_groups_list_product_groups_list_component__WEBPACK_IMPORTED_MODULE_11__.ProductGroupsListComponent,
        _components_product_group_product_group_component__WEBPACK_IMPORTED_MODULE_12__.ProductGroupComponent,
        _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_13__.CategoryListComponent,
        _components_category_category_component__WEBPACK_IMPORTED_MODULE_14__.CategoryComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_21__.ToastrModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__.BrowserAnimationsModule,
        _material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialExampleModule] }); })();


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
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);










function CategoryListComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CategoryListComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r12.name, " ");
} }
function CategoryListComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CategoryListComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r13.code, " ");
} }
function CategoryListComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Product Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CategoryListComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r14.product.code, " ");
} }
function CategoryListComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Variant Size ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CategoryListComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r15.variant_size, " ");
} }
function CategoryListComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/update/category", a1]; };
function CategoryListComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 21)(1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, element_r16.id));
} }
function CategoryListComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 24);
} }
function CategoryListComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 25);
} }
const _c1 = function () { return [5, 10, 20]; };
class CategoryListComponent {
    constructor(api, toaster, location, router) {
        this.api = api;
        this.toaster = toaster;
        this.location = location;
        this.router = router;
        this.displayedColumns = ['name', 'code', 'Actions']; //'Product Code', 'size'
        this.isLoading = true;
        this.pageSize = 10;
    }
    ngAfterViewInit() {
        // this.dataSource.paginator = this.paginator;
    }
    ngOnInit() {
        this.getProductVarientList();
    }
    getProductVarientList(params = { page: 1, per_page: 10 }) {
        this.api.getProductCategoryList(params).subscribe({
            next: (res) => {
                console.log(res);
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource(res.data.data);
                setTimeout(() => {
                    this.paginator.pageIndex = params.page - 1;
                    this.paginator.length = res.data.total;
                });
                this.dataSource.paginator = this.paginator;
                this.isLoading = false;
            },
            error: (err) => {
                this.isLoading = false;
                console.log(err);
                this.toaster.error(err.error.message);
            }
        });
    }
    pageChanged(event) {
        console.log(event);
        this.pageSize = event.pageSize;
        this.getProductVarientList({ page: event.pageIndex + 1, per_page: this.pageSize });
    }
    goBack() {
        this.location.back();
    }
}
CategoryListComponent.ɵfac = function CategoryListComponent_Factory(t) { return new (t || CategoryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
CategoryListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CategoryListComponent, selectors: [["app-category-list"]], viewQuery: function CategoryListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 31, vars: 6, consts: [[1, "pb-1"], [1, "card"], [1, "card-header", "card-box-shadow", "bt-4"], [1, "card-title", "m-0", "font-weight-bold"], [1, "card-body"], [1, "w-100", "table-responsive"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "code"], ["matColumnDef", "Product Code"], ["matColumnDef", "size"], ["matColumnDef", "Actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions", "pageSize", "page"], [1, "col-md-12", "border-top", "p-2", "button-container", "d-flex", "justify-content-between", "align-items-center"], [1, "forgot-link", 2, "color", "black", "cursor", "pointer", 3, "click"], [1, "fas", "fa-arrow-left"], ["mat-header-cell", ""], ["mat-cell", ""], ["matTooltip", "Edit Account", "matTooltipClass", "custom-tooltip", 3, "routerLink"], [1, "fas", "fa-2x", "text-dark", "fa-pen-square"], ["mat-header-row", ""], ["mat-row", ""]], template: function CategoryListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Category List");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CategoryListComponent_th_9_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CategoryListComponent_td_10_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](11, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CategoryListComponent_th_12_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, CategoryListComponent_td_13_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](14, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CategoryListComponent_th_15_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CategoryListComponent_td_16_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](17, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CategoryListComponent_th_18_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, CategoryListComponent_td_19_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](20, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, CategoryListComponent_th_21_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, CategoryListComponent_td_22_Template, 3, 3, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, CategoryListComponent_tr_23_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, CategoryListComponent_tr_24_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-paginator", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("page", function CategoryListComponent_Template_mat_paginator_page_25_listener($event) { return ctx.pageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 17)(27, "div")(28, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoryListComponent_Template_a_click_28_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Go back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c1))("pageSize", ctx.pageSize);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRow, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatTooltip], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LWxpc3QuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFNhaSUyMEtpcmFuXFxEb2N1bWVudHNcXGFkbWluLWhpc2Vuc2VcXGhpc2Vuc2UtYWRtaW5cXHNyY1xcYXBwXFxjb21wb25lbnRzXFxjYXRlZ29yeS1saXN0XFxjYXRlZ29yeS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKIiwiZmlsZSI6ImNhdGVnb3J5LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"] });


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
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
















const _c0 = ["inputMMultipleFiles"];
const _c1 = ["input"];
function CategoryComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Category Code is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CategoryComponent_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Category Name is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CategoryComponent_mat_option_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", product_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", product_r8.name, " ");
} }
function CategoryComponent_mat_error_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Product Category is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CategoryComponent_mat_tab_34_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Product Group ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CategoryComponent_mat_tab_34_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r18.product.name, " ");
} }
function CategoryComponent_mat_tab_34_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Open on Website ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CategoryComponent_mat_tab_34_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 38)(1, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r12.environment.websiteUrl + element_r19.relative_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r12.environment.websiteUrl, "", element_r19.product.relative_url, "");
} }
function CategoryComponent_mat_tab_34_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c2 = function (a1) { return ["/update/product-group", a1]; };
function CategoryComponent_mat_tab_34_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c2, element_r21.product.id));
} }
function CategoryComponent_mat_tab_34_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 41);
} }
function CategoryComponent_mat_tab_34_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 42);
} }
function CategoryComponent_mat_tab_34_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No Records Found!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CategoryComponent_mat_tab_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-tab", 9)(1, "div", 27)(2, "table", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](3, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CategoryComponent_mat_tab_34_th_4_Template, 2, 0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CategoryComponent_mat_tab_34_td_5_Template, 2, 1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](6, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CategoryComponent_mat_tab_34_th_7_Template, 2, 0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CategoryComponent_mat_tab_34_td_8_Template, 3, 3, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](9, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CategoryComponent_mat_tab_34_th_10_Template, 2, 0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, CategoryComponent_mat_tab_34_td_11_Template, 2, 3, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, CategoryComponent_mat_tab_34_tr_12_Template, 1, 0, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CategoryComponent_mat_tab_34_tr_13_Template, 1, 0, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, CategoryComponent_mat_tab_34_div_14_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "Product Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx_r5.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx_r5.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx_r5.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r5.dataSource == null ? null : ctx_r5.dataSource.data == null ? null : ctx_r5.dataSource.data.length));
} }
function CategoryComponent_mat_tab_35_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Image Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CategoryComponent_mat_tab_35_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r34.type, " ");
} }
function CategoryComponent_mat_tab_35_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Current Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CategoryComponent_mat_tab_35_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", element_r35.full_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function CategoryComponent_mat_tab_35_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Upload New Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CategoryComponent_mat_tab_35_td_14_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 38)(1, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CategoryComponent_mat_tab_35_td_14_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r41); const i_r38 = restoredCtx.index; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r40.browseFileButtonClicked(i_r38)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Browse Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 55, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CategoryComponent_mat_tab_35_td_14_Template_input_change_3_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r41); const element_r37 = restoredCtx.$implicit; const i_r38 = restoredCtx.index; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r42.inputChangeEventListener($event, element_r37.type, i_r38)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function CategoryComponent_mat_tab_35_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 41);
} }
function CategoryComponent_mat_tab_35_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 42);
} }
function CategoryComponent_mat_tab_35_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No Records Found!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CategoryComponent_mat_tab_35_i_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 57);
} }
const _c3 = function (a0) { return { "spiner": a0 }; };
function CategoryComponent_mat_tab_35_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-tab", 9)(1, "div", 44)(2, "mat-tab-group", 45)(3, "mat-tab", 9)(4, "div", 46)(5, "table", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](6, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CategoryComponent_mat_tab_35_th_7_Template, 2, 0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CategoryComponent_mat_tab_35_td_8_Template, 2, 1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](9, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CategoryComponent_mat_tab_35_th_10_Template, 2, 0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, CategoryComponent_mat_tab_35_td_11_Template, 2, 1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](12, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CategoryComponent_mat_tab_35_th_13_Template, 2, 0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, CategoryComponent_mat_tab_35_td_14_Template, 5, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, CategoryComponent_mat_tab_35_tr_15_Template, 1, 0, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, CategoryComponent_mat_tab_35_tr_16_Template, 1, 0, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, CategoryComponent_mat_tab_35_div_17_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 50)(19, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CategoryComponent_mat_tab_35_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r44.uploadImages()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, CategoryComponent_mat_tab_35_i_21_Template, 1, 0, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selectedIndex", ctx_r6.imagesTabSelectedIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "Thumb Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx_r6.imagesDataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx_r6.imagesDisplayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx_r6.imagesDisplayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r6.imagesDataSource == null ? null : ctx_r6.imagesDataSource.data == null ? null : ctx_r6.imagesDataSource.data.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c3, ctx_r6.isLoader));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.isLoader);
} }
function CategoryComponent_button_41_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function CategoryComponent_button_41_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function CategoryComponent_button_41_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 57);
} }
const _c4 = function (a0) { return { "mr-2": a0 }; };
function CategoryComponent_button_41_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CategoryComponent_button_41_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r49.saveProductDetailsForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CategoryComponent_button_41_ng_container_2_Template, 2, 0, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CategoryComponent_button_41_ng_container_3_Template, 2, 0, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CategoryComponent_button_41_i_4_Template, 1, 0, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c4, ctx_r7.isLoading));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.componentType == "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.componentType == "update");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.isLoading);
} }
class CategoryComponent {
    constructor(location, api, fb, toaster, activatedroute, router) {
        this.location = location;
        this.api = api;
        this.fb = fb;
        this.toaster = toaster;
        this.activatedroute = activatedroute;
        this.router = router;
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
        this.products = [];
        this.purchaseLinksMetaData = [];
        this.componentType = 'create';
        this.selectedIndex = 0;
        this.purchaseLinks = {};
        this.displayedColumns = ['Product Group', 'Open on Website', 'Actions']; //'Purchase Link'
        this.imagesDisplayedColumns = ['Image Type', 'Current Image', 'Upload New Image'];
        this.productImagesDisplayedColumns = ['Image', 'Actions'];
        this.isLoader = false;
        this.isLoading = false;
        this.productVarientFormSubmitted = false;
        this.productVarientForm = this.fb.group({
            code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            // variant_size: ['', [Validators.required]],
            parent_category_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            // short_description: ['', [Validators.required]],
            // is_enabled: [0]
        });
        this.imagesCatalogMedia = [];
        this.myFiles = [];
        this.myFilesImages = [];
    }
    get formControl() {
        return this.productVarientForm.controls;
    }
    ngOnInit() {
        this.activatedroute.data.subscribe((data) => {
            console.log(data);
            this.componentType = data.type;
            this.getMetaData(data);
        });
    }
    getMetaData(data) {
        this.api.getCategoryCreationMetaData().subscribe({
            next: (res) => {
                console.log(res);
                this.metaData = res?.data;
                this.products = [{ id: 'null', name: 'No Category' }, ...res?.data?.categories];
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
            next: (res) => {
                console.log(res);
                // this.products = res?.data?.products;
                // this.purchaseLinksMetaData = this.metaData?.product_variant_purchase_link_vendors;
                // this.purchaseLinksMetaData.forEach((obj: any) => {
                //   this.purchaseLinks[obj.code] = res.data.product_variant_purchase_links.find((o: any) => o.vendor == obj.code)?.purchase_link;
                // })
                this.productVarientForm.patchValue({
                    code: res?.data?.code,
                    name: res?.data?.name,
                    // variant_size: res?.data?.variant_size,
                    parent_category_id: res?.data?.parent_category_id ? res?.data?.parent_category_id : 'null',
                    // short_description: res?.data?.short_description,
                    // is_enabled: res?.data?.is_enabled,
                });
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource(res?.data?.category_products);
                const array = [];
                if (res.data.thumb_image) {
                    res.data.thumb_image.type = 'Thumb Image';
                    array.push(res.data.thumb_image);
                }
                // if(res.data.thumb_image_medium){
                //   res.data.thumb_image_medium.type = 'Thumb Image Medium'
                //   array.push(res.data.thumb_image_medium)
                // }
                if (res.data.thumb_image_small) {
                    res.data.thumb_image_small.type = 'Thumb Image Small';
                    array.push(res.data.thumb_image_small);
                }
                this.imagesDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource(array);
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
            // delete this.productVarientForm.value.is_enabled;
            if (this.productVarientForm.value.parent_category_id == 'null') {
                this.productVarientForm.value.parent_category_id = null;
            }
            this.api.createCategory(this.productVarientForm.value).subscribe({
                next: (res) => {
                    this.isLoading = false;
                    console.log(res);
                    this.toaster.success(res.message);
                    this.router.navigate(['/update/category', res.data.id]);
                },
                error: (err) => {
                    this.isLoading = false;
                    console.log(err);
                    this.toaster.error(err.error.message);
                }
            });
        }
        else {
            console.log(this.selectedIndex);
            if (this.selectedIndex == 0) {
                this.productVarientForm.markAllAsTouched();
                this.productVarientFormSubmitted = true;
                if (!this.productVarientForm.valid) {
                    return;
                }
                this.isLoading = true;
                // this.productVarientForm.value.is_enabled = this.productVarientForm.value.is_enabled ? 1 : 0;
                this.api.updateProductVarientInfo(this.activatedroute.snapshot.params['id'], this.productVarientForm.value).subscribe({
                    next: (res) => {
                        this.isLoading = false;
                        console.log(res);
                        this.toaster.success(res.message);
                    },
                    error: (err) => {
                        this.isLoading = false;
                        console.log(err);
                        this.toaster.error(err.error.message);
                    }
                });
            }
            else if (this.selectedIndex == 1) {
                this.isLoading = true;
                console.log(this.purchaseLinks);
                this.api.updateProductVarientInfo(this.activatedroute.snapshot.params['id'], this.purchaseLinks).subscribe({
                    next: (res) => {
                        this.isLoading = false;
                        console.log(res);
                        this.toaster.success(res.message);
                    },
                    error: (err) => {
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
        if (type == 'Thumb Image') {
            mediaType = 'thumb_image';
        }
        else {
            mediaType = 'thumb_image_small';
        }
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (_event) => {
            this.imagesDataSource.data[i].full_url = reader.result;
        };
        this.imagesDataSource.data[i].media_type = mediaType;
        this.imagesDataSource.data[i].file = event.target.files[0];
    }
    uploadImages() {
        this.imagesCatalogMedia = [...this.imagesDataSource.data];
        // console.log(this.imagesCatalogMedia);
        // const catalog = [];
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
            next: (res) => {
                console.log(res);
                this.toaster.success(res.message);
            },
            error: (err) => {
                console.log(err);
                this.toaster.error(err.error.message);
            }
        });
    }
    removeFile(ele) {
        console.log(ele);
        this.api.deleteFiles(ele.id).subscribe({
            next: (res) => {
                console.log(res);
                this.loadProductInfo();
                this.toaster.success(res.message);
            },
            error: err => {
                console.log(err);
                this.toaster.error(err.error.message);
            }
        });
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
            reader.onload = (_event) => {
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
            next: (res) => {
                console.log(res);
                this.toaster.success(res.message);
                this.loadProductInfo();
            },
            error: (err) => {
                console.log(err);
                this.toaster.error(err.error.message);
            }
        });
    }
    goBack() {
        this.location.back();
    }
}
CategoryComponent.ɵfac = function CategoryComponent_Factory(t) { return new (t || CategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
CategoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CategoryComponent, selectors: [["app-category"]], viewQuery: function CategoryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.inputMultipleFiles = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.inputForFile = _t);
    } }, decls: 42, vars: 10, consts: [[1, "pb-1"], [1, "card"], [1, "card-header", "card-box-shadow", "bt-4"], [1, "card-title", "m-0", "font-weight-bold"], [1, "card-body"], [1, "row"], [1, "col-sm-12", "mt-3"], ["animationDuration", "0ms", 3, "selectedIndex", "selectedTabChange"], ["ctdTabset", ""], [3, "label"], [1, "row", "p-3"], [1, "col-md-12"], [3, "formGroup"], [1, "col-12", "col-sm-6", "col-md-6", "col-lg-3", "form-group"], ["appearance", "outline"], [1, "mat-label-field-padding"], ["matInput", "", "formControlName", "code", "type", "text"], [4, "ngIf"], ["matInput", "", "formControlName", "name", "type", "text"], ["formControlName", "parent_category_id"], [3, "value", 4, "ngFor", "ngForOf"], [3, "label", 4, "ngIf"], [1, "col-md-12", "mt-4", "border-top", "p-2", "button-container", "d-flex", "justify-content-between", "align-items-center"], [1, "forgot-link", 2, "color", "black", "cursor", "pointer", 3, "click"], [1, "fas", "fa-arrow-left"], ["mat-raised-button", "", "type", "submit", "class", "btn btn-info", "style", "display: flex; gap: 12px;", 3, "click", 4, "ngIf"], [3, "value"], [1, "w-100", "table-responsive"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "Product Group"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Open on Website"], ["matColumnDef", "Actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "text-center my-3", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", ""], ["target", "_blank", 3, "href"], [1, "fas", "fa-2x", "fa-pen-square", "pointer", 2, "font-size", "1.6em", "color", "#5196f0", 3, "routerLink"], ["mat-header-row", ""], ["mat-row", ""], [1, "text-center", "my-3"], [1, "m-3"], ["animationDuration", "0ms", 3, "selectedIndex"], [1, "w-100", "m-3", "table-responsive"], ["matColumnDef", "Image Type"], ["matColumnDef", "Current Image"], ["matColumnDef", "Upload New Image"], [1, "pt-1", "m-3"], ["mat-raised-button", "", "mat-button", "", "color", "primary", "type", "submit", 1, "btn-info", 2, "font-size", "16px", 3, "ngClass", "click"], ["class", "fas fa-circle-notch fa-spin ", 4, "ngIf"], ["width", "100", "height", "100", 1, "my-2", 3, "src"], ["href", "javascript:void(0);", 3, "click"], ["type", "file", "hidden", "", 3, "change"], ["input", ""], [1, "fas", "fa-circle-notch", "fa-spin"], ["mat-raised-button", "", "type", "submit", 1, "btn", "btn-info", 2, "display", "flex", "gap", "12px", 3, "click"], [3, "ngClass"], ["class", "fas fa-circle-notch fa-spin", 4, "ngIf"]], template: function CategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "mat-tab-group", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectedTabChange", function CategoryComponent_Template_mat_tab_group_selectedTabChange_8_listener($event) { return ctx.changeTab($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-tab", 9)(11, "div", 10)(12, "div", 11)(13, "form", 12)(14, "div", 5)(15, "div", 13)(16, "mat-form-field", 14)(17, "mat-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Category Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, CategoryComponent_mat_error_20_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 13)(22, "mat-form-field", 14)(23, "mat-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Category Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, CategoryComponent_mat_error_26_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 13)(28, "mat-form-field", 14)(29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Parent Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, CategoryComponent_mat_option_32_Template, 2, 2, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, CategoryComponent_mat_error_33_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, CategoryComponent_mat_tab_34_Template, 15, 5, "mat-tab", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, CategoryComponent_mat_tab_35_Template, 22, 11, "mat-tab", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 22)(37, "div")(38, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CategoryComponent_Template_a_click_38_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " Go back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, CategoryComponent_button_41_Template, 5, 6, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedIndex != 2);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__.MatTab], styles: ["input[type=file][_ngcontent-%COMP%] {\n  opacity: 0;\n  z-index: -1;\n  position: absolute;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxTYWklMjBLaXJhblxcRG9jdW1lbnRzXFxhZG1pbi1oaXNlbnNlXFxoaXNlbnNlLWFkbWluXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcY2F0ZWdvcnlcXGNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKIiwiZmlsZSI6ImNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG50YWJsZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59IiwiaW5wdXRbdHlwZT1maWxlXSB7XG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IC0xO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 2, vars: 0, template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dashboard works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


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





const _c0 = function (a0) { return { "transform": a0 }; };
const _c1 = function (a0) { return { "block": a0 }; };
const _c2 = function (a0, a1) { return { "rotate-180": a0, "flex": a1 }; };
const _c3 = function (a0) { return { "main-100": a0 }; };
class LayoutComponent {
    constructor() {
        this.isSidebarVisible = true;
        this.sidebarStatus = 'translateX(0)';
        this.innerWidth = window.innerWidth;
    }
    onResize(event) {
        this.innerWidth = event.target.innerWidth;
    }
    ngOnInit() { }
    toggleSidebar() {
        if (this.isSidebarVisible) {
            this.sidebarStatus = 'translateX(-235px)';
        }
        else {
            this.sidebarStatus = 'translateX(0)';
        }
        this.isSidebarVisible = !this.isSidebarVisible;
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], hostBindings: function LayoutComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function LayoutComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, decls: 11, vars: 13, consts: [[1, "wrapper"], ["data-color", "white", "data-background-color", "white", 1, "sidebar", 3, "ngStyle"], [1, "sidebar-backdrop", 3, "ngClass"], [1, "left-arrow", 3, "ngClass", "click"], [1, "fa", "fa-angle-double-left"], [1, "main-panel", 3, "ngClass"], [1, "main-content", "my-4"], [1, "container-fluid"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LayoutComponent_Template_div_click_3_listener() { return ctx.toggleSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6)(9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, ctx.innerWidth >= 991 ? ctx.sidebarStatus : null));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c1, ctx.innerWidth >= 991 && ctx.sidebarStatus == "translateX(-235px)"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](8, _c2, ctx.innerWidth >= 991 && ctx.sidebarStatus == "translateX(-235px)", ctx.innerWidth >= 991));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c3, ctx.innerWidth >= 991 && ctx.sidebarStatus === "translateX(-235px)"));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent], styles: [".sidebar[_ngcontent-%COMP%]:after, .off-canvas-sidebar[_ngcontent-%COMP%]:after {\n  background: rgba(255, 255, 255, 0.9) !important;\n}\n\n.content-panel[_ngcontent-%COMP%] {\n  background-color: #fff;\n  box-shadow: 0 0 15px #aaa;\n  padding: 15px;\n  margin: 5rem 2rem 2rem;\n  margin-top: 25px;\n  border-radius: 4px;\n  min-height: calc(100vh - 3rem);\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  transition: transform 250ms ease-in-out;\n  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n}\n\n.main-100[_ngcontent-%COMP%] {\n  width: calc(100% - 25px) !important;\n}\n\n.block[_ngcontent-%COMP%] {\n  display: block !important;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n\n.sidebar-backdrop[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  background-color: white;\n}\n\n.left-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -14px;\n  top: 15px;\n  padding: 6px;\n  background: white;\n  cursor: pointer;\n  border-radius: 50%;\n  display: none;\n  justify-content: center;\n  align-items: center;\n  z-index: 99999;\n  border: 1px solid #555;\n  transition: transform 250ms ease-in-out;\n}\n\n.fa.fa-angle-double-left[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.left-arrow.rotate-180[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n[_ngcontent-%COMP%]:root {\n  --primary: #00b3ac;\n  --white: #fff;\n  --black: #000;\n}\n\n.side-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.side-wrapper[_ngcontent-%COMP%]   .logo-icon-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  align-items: center;\n  justify-content: flex-start;\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n}\n\n.side-wrapper[_ngcontent-%COMP%]   .logo-icon-container[_ngcontent-%COMP%]   .links-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.side-wrapper[_ngcontent-%COMP%]   .logo-icon-container[_ngcontent-%COMP%]   .links-wrapper[_ngcontent-%COMP%]   .links-wrapper-link[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 13px;\n  font-weight: 400;\n}\n\n.side-wrapper[_ngcontent-%COMP%]   .logo-icon-container[_ngcontent-%COMP%]   .company-logo-name[_ngcontent-%COMP%] {\n  max-height: 100px;\n  height: 80px;\n  display: flex;\n  align-items: center;\n}\n\n.side-wrapper[_ngcontent-%COMP%]   .logo-icon-container[_ngcontent-%COMP%]   .switch-company-btn-container[_ngcontent-%COMP%] {\n  max-height: 100px;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.side-wrapper[_ngcontent-%COMP%]   .logo-icon-container[_ngcontent-%COMP%]   .switch-company-btn-container[_ngcontent-%COMP%]   .company-name-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n\n.side-wrapper[_ngcontent-%COMP%]   .logo-icon-container[_ngcontent-%COMP%]   .switch-company-btn-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  position: absolute;\n  right: 10px;\n  top: 0;\n  bottom: 0;\n}\n\n.side-wrapper[_ngcontent-%COMP%]   .logo-icon-container[_ngcontent-%COMP%]   .switch-company-btn-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: 18px;\n}\n\n.side-wrapper[_ngcontent-%COMP%]   .logo-icon-container[_ngcontent-%COMP%]   .switch-company-btn-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .switch-company-btn[_ngcontent-%COMP%] {\n  background-color: #17a1bf;\n  border-radius: 3px;\n  padding: 5px;\n  font-size: 14px;\n  color: #3C4858;\n  font-weight: 400;\n  margin-left: 0;\n  height: 30px;\n}\n\n.side-wrapper[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%] {\n  width: auto;\n  max-height: inherit;\n}\n\n.side-wrapper[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  max-height: 70px;\n  object-fit: cover;\n}\n\n.side-wrapper[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .side-wrapper[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .side-wrapper[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-weight: 400;\n  margin-right: 0;\n}\n\n.side-wrapper[_ngcontent-%COMP%]   li.switch-view.activeChild.nav-item[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  bottom: 70px;\n  padding-bottom: 20px;\n  background: white;\n  z-index: 1;\n}\n\n.side-wrapper[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 16px;\n  font-weight: 500;\n  color: #666666;\n  max-width: 134px;\n}\n\n.side-wrapper[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.jump-to-btn[_ngcontent-%COMP%] {\n  color: white !important;\n  background: var(--primary) !important;\n}\n\n.jump-to-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\n.jump-to-btn[_ngcontent-%COMP%]:hover {\n  background: var(--primary) !important;\n}\n\n.sidebar-wrapper[_ngcontent-%COMP%] {\n  flex: 1 1 0;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 0;\n  margin-bottom: 35px;\n}\n\n.thaut-logo[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  width: 100%;\n  justify-content: center;\n  background: white;\n  z-index: 1;\n  bottom: 0px;\n  padding: 15px;\n  gap: 10px;\n  align-items: center;\n  border-bottom: 5px solid var(--primary);\n}\n\n.thaut-logo[_ngcontent-%COMP%]   .powered[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-bottom: 8px;\n}\n\n.thaut-logo[_ngcontent-%COMP%]   .plan-type[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  right: 15px;\n  background: var(--primary);\n  color: white;\n  padding: 8px;\n  padding-top: 3px;\n  border-top-left-radius: 6px;\n  padding-bottom: 0;\n  border-top-right-radius: 6px;\n  font-size: 12px;\n  cursor: pointer;\n}\n\n.thaut-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: auto;\n  max-height: 35px !important;\n  filter: contrast(0);\n}\n\n.thaut-logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.nav[_ngcontent-%COMP%] {\n  flex: 1 1 0;\n  overflow-y: scroll;\n}\n\n.nav[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 15px !important;\n}\n\n.logo[_ngcontent-%COMP%] {\n  padding: 0px 0px 10px !important;\n}\n\n@media (max-width: 768px) {\n  .thaut-logo[_ngcontent-%COMP%] {\n    position: fixed;\n  }\n}\n\n.sidebar-premium-service-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: block;\n  top: 0;\n  left: 0;\n  position: absolute;\n}\n\n.premium-star-icon-child[_ngcontent-%COMP%] {\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  margin: 10px 15px 0;\n  width: calc(100% - 15px);\n  position: relative;\n  cursor: pointer;\n}\n\n.premium-lock-wrapper[_ngcontent-%COMP%] {\n  right: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.premium-lock-wrapper[_ngcontent-%COMP%]   .premium-lock-icon[_ngcontent-%COMP%] {\n  left: 50% !important;\n  transform: translate(-50%, -50%) !important;\n}\n\n.renew-subscription[_ngcontent-%COMP%] {\n  background: url(\"/assets/svgs/renew-subscription.svg\") no-repeat;\n  height: 20px !important;\n  width: 20px !important;\n}\n\n.view-accounts[_ngcontent-%COMP%], .view-users[_ngcontent-%COMP%] {\n  background: url(\"/assets/svgs/view-accounts.svg\") no-repeat;\n  height: 20px !important;\n  width: 20px !important;\n}\n\n.sentiment-analysis[_ngcontent-%COMP%] {\n  background: url(\"/assets/svgs/sentiment-analysis.svg\") no-repeat;\n  height: 20px !important;\n  width: 20px !important;\n}\n\n.qr-generator-icon[_ngcontent-%COMP%] {\n  background: url(\"/assets/svgs/qr.svg\") no-repeat;\n  height: 20px !important;\n  width: 20px !important;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  height: 100vh;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 2;\n  width: 260px;\n  background: var(--white);\n}\n\n.sidebar[_ngcontent-%COMP%]   .caret[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-top: 4px solid\\9 ;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n}\n\n.sidebar[data-background-color=black][_ngcontent-%COMP%] {\n  background-color: #191919;\n}\n\n.sidebar[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%] {\n  width: 35px;\n  display: block;\n  max-height: 30px;\n  margin-left: 13px;\n  margin-right: 15px;\n}\n\n.sidebar[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 35px;\n  top: 16px;\n  position: absolute;\n}\n\n.sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%] {\n  width: 260px;\n  z-index: 4;\n  padding-bottom: 30px;\n}\n\n.sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-backdrop[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .navbar-form[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: none;\n}\n\n.sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .navbar-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  font-size: 1.7em;\n  height: 36px;\n  width: 78%;\n  padding-left: 17px;\n}\n\n.sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]    > .nav[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]    > .nav[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .sidebar-normal[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .sidebar-normal[_ngcontent-%COMP%] {\n  margin: 0;\n  position: relative;\n  transform: translateX(0px);\n  opacity: 1;\n  white-space: nowrap;\n  display: block;\n}\n\n.sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]    > .nav[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .sidebar-mini[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .sidebar-mini[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  width: 30px;\n  margin-right: 15px;\n  text-align: center;\n  letter-spacing: 1px;\n  position: relative;\n  float: left;\n  display: inherit;\n}\n\n.sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]    > .nav[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 17px;\n  line-height: 20px;\n  width: 26px;\n}\n\n.sidebar[_ngcontent-%COMP%]   .logo-tim[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  border: 1px solid #333;\n  display: block;\n  height: 61px;\n  width: 61px;\n  float: left;\n  overflow: hidden;\n}\n\n.sidebar[_ngcontent-%COMP%]   .logo-tim[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: block;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .caret[_ngcontent-%COMP%] {\n  margin-top: 13px;\n  position: absolute;\n  right: 20px;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\n  background-color: transparent;\n  outline: none;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child    > a[_ngcontent-%COMP%] {\n  margin: 0 15px;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    > [data-toggle=collapse][_ngcontent-%COMP%] {\n  background-color: rgba(200, 200, 200, 0.2);\n  color: var(--black);\n  box-shadow: none;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]    > [data-toggle=collapse][_ngcontent-%COMP%] {\n  background-color: rgba(200, 200, 200, 0.2);\n  color: white;\n  box-shadow: none;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]    > [data-toggle=collapse][_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #a9afbb;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--white);\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i.active[_ngcontent-%COMP%] {\n  color: var(--white);\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li.separator[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li.separator[_ngcontent-%COMP%]:after {\n  width: calc(100% - 30px);\n  content: \"\";\n  position: absolute;\n  height: 1px;\n  left: 15px;\n  background-color: rgba(180, 180, 180, 0.3);\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li.separator[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  margin-top: 31px;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 30px;\n  font-size: 14px;\n  display: block;\n  height: auto;\n  white-space: nowrap;\n  text-align: start;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  float: left;\n  margin-right: 15px;\n  width: 30px;\n  text-align: center;\n  color: #a9afbb;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 10px 15px 0;\n  border-radius: 3px;\n  color: var(--black);\n  padding-left: 10px;\n  padding-right: 10px;\n  text-transform: capitalize;\n  font-size: 13px;\n  padding: 10px 15px;\n}\n\n.sidebar[_ngcontent-%COMP%]   .sidebar-background[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  height: 100%;\n  width: 100%;\n  display: block;\n  top: 0;\n  left: 0;\n  background-size: cover;\n  background-position: center center;\n}\n\n.sidebar[_ngcontent-%COMP%]   .sidebar-background[_ngcontent-%COMP%]:after {\n  position: absolute;\n  z-index: 3;\n  width: 100%;\n  height: 100%;\n  content: \"\";\n  display: block;\n  background: #FFFFFF;\n  opacity: 0.93;\n}\n\n.sidebar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  padding: 15px 0px;\n  margin: 0;\n  display: block;\n  position: relative;\n  z-index: 4;\n}\n\n.sidebar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  right: 15px;\n  height: 1px;\n  width: calc(100% - 30px);\n  background-color: rgba(180, 180, 180, 0.3);\n}\n\n.sidebar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 20px;\n  margin: 10px 10px;\n  color: var(--white);\n  line-height: 20px;\n}\n\n.sidebar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .simple-text[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  padding: 10px 0;\n  display: inline-block;\n  font-size: 18px;\n  color: var(--black);\n  white-space: nowrap;\n  font-weight: normal;\n  line-height: 30px;\n  overflow: hidden;\n  text-align: center;\n  display: block;\n}\n\n.sidebar[_ngcontent-%COMP%]   .logo-tim[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  border: 1px solid #333;\n  display: block;\n  height: 61px;\n  width: 61px;\n  float: left;\n  overflow: hidden;\n}\n\n.sidebar[_ngcontent-%COMP%]   .logo-tim[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n}\n\n.off-canvas-sidebar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .off-canvas-sidebar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: var(--white);\n  margin: 0 15px;\n}\n\n.off-canvas-sidebar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus, .off-canvas-sidebar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  background: rgba(200, 200, 200, 0.2);\n}\n\n.main-panel[_ngcontent-%COMP%] {\n  position: relative;\n  float: right;\n  width: calc(100% - 260px);\n}\n\n.main-panel[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n  min-height: calc(100vh - 123px);\n}\n\n.main-panel[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #e7e7e7;\n}\n\n.main-panel[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.main-panel[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.main-panel[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.perfect-scrollbar-on[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%], .perfect-scrollbar-on[_ngcontent-%COMP%]   .main-panel[_ngcontent-%COMP%] {\n  height: 100%;\n  max-height: 100%;\n}\n\n.sidebar[_ngcontent-%COMP%], .main-panel[_ngcontent-%COMP%], .sidebar-wrapper[_ngcontent-%COMP%] {\n  transition-property: top, bottom, width;\n  transition-duration: 0.2s, 0.2s, 0.35s;\n  transition-timing-function: linear, linear, ease;\n  -webkit-overflow-scrolling: touch;\n}\n\n.visible-on-sidebar-regular[_ngcontent-%COMP%] {\n  display: inline-block !important;\n}\n\n.visible-on-sidebar-mini[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n@media (min-width: 991px) {\n  .sidebar-mini[_ngcontent-%COMP%]   .visible-on-sidebar-regular[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .sidebar-mini[_ngcontent-%COMP%]   .visible-on-sidebar-mini[_ngcontent-%COMP%] {\n    display: inline-block !important;\n  }\n  .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%], .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%] {\n    width: 80px;\n  }\n  .sidebar-mini[_ngcontent-%COMP%]   .main-panel[_ngcontent-%COMP%] {\n    width: calc(100% - 80px);\n  }\n  .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n    display: block;\n    font-weight: 200;\n    z-index: 9999;\n  }\n  .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   a.logo-normal[_ngcontent-%COMP%] {\n    opacity: 0;\n  }\n  .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]    > .nav[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .sidebar-normal[_ngcontent-%COMP%], .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .sidebar-normal[_ngcontent-%COMP%], .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]    > .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    opacity: 0;\n  }\n  .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]:hover {\n    width: 260px;\n  }\n  .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]:hover   .logo[_ngcontent-%COMP%]   a.logo-normal[_ngcontent-%COMP%] {\n    opacity: 1;\n  }\n  .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]:hover   .sidebar-wrapper[_ngcontent-%COMP%] {\n    width: 260px;\n  }\n  .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]:hover   .sidebar-wrapper[_ngcontent-%COMP%]    > .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]:hover   .sidebar-wrapper[_ngcontent-%COMP%]    > .nav[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .sidebar-normal[_ngcontent-%COMP%], .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]:hover   .sidebar-wrapper[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .sidebar-normal[_ngcontent-%COMP%], .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]:hover   .sidebar-wrapper[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    opacity: 1;\n  }\n  .sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-item.active-pro[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100%;\n    bottom: 13px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcU2FpJTIwS2lyYW5cXERvY3VtZW50c1xcYWRtaW4taGlzZW5zZVxcaGlzZW5zZS1hZG1pblxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXGxheW91dFxcbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcYXNzZXRzXFxzY3NzXFxjb3JlXFx0aGVtZXNcXHByaW1hcnkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTs7RUFFRSwrQ0FBQTtBQ0RGOztBRElBO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFFQSw4QkFBQTtBQ0ZGOztBREtBO0VBQ0UsdUNBQUE7RUFDQSx1SEFBQTtBQ0ZGOztBREtBO0VBQ0UsbUNBQUE7QUNGRjs7QURLQTtFQUNFLHlCQUFBO0FDRkY7O0FES0E7RUFDRSx3QkFBQTtBQ0ZGOztBREtBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDRkY7O0FETUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSx1Q0FBQTtBQ0hGOztBRE1BO0VBQ0UsZUFBQTtBQ0hGOztBRE1BO0VBQ0UseUJBQUE7QUNIRjs7QUMvREE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FEa0VKOztBREVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0NGOztBRENFO0VBRUUsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbURBQUE7QUNBSjs7QURDSTtFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQU47O0FERU07RUFFRSxxQkVoR1E7RUZpR1IsZUFBQTtFQUNBLGdCQUFBO0FDRFI7O0FES0k7RUFFRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNKTjs7QURPSTtFQUVFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDTk47O0FET087RUFFRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtBQ05UOztBRFFRO0VBRUcsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtBQ1BYOztBRFFNO0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNQUjs7QURTTTtFQUVFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDUlI7O0FEYUU7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUNYSjs7QURZSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDVlI7O0FEY0U7O0VBRUUsZ0JBQUE7RUFDQSxlQUFBO0FDWko7O0FEY0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUNaSjs7QURjRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNaSjs7QURhSTtFQUNFLGtCQUFBO0FDWE47O0FEZ0JBO0VBRUUsdUJBQUE7RUFDQSxxQ0FBQTtBQ2RGOztBRGVHO0VBRUMsdUJBQUE7QUNkSjs7QURpQkU7RUFDQSxxQ0FBQTtBQ2ZGOztBRHdCQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDckJGOztBRDBCQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBRUEsdUNBQUE7QUN4QkY7O0FEeUJFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDdkJKOztBRDBCRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFFQSwwQkVsUFk7RUZtUFosWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDekJKOztBRDRCRTtFQUNFLFdBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDMUJKOztBRDZCRTtFQUNFLGdCQUFBO0FDM0JKOztBRDhCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQzNCRjs7QUQ0QkU7RUFDRSxzQkFBQTtBQzFCSjs7QUQ2QkE7RUFDRSxnQ0FBQTtBQzFCRjs7QUQ2QkE7RUFNRTtJQUVFLGVBQUE7RUNoQ0Y7QUFDRjs7QURtQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0FDakNGOztBRG9DQTtFQUNFLFFBQUE7RUFDQSwyQkFBQTtBQ2pDRjs7QURvQ0E7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDakNGOztBRG9DQTtFQUNFLFVBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUNqQ0Y7O0FEa0NFO0VBQ0Usb0JBQUE7RUFDQSwyQ0FBQTtBQ2hDSjs7QURvQ0E7RUFDRSxnRUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUNqQ0Y7O0FEb0NBO0VBQ0UsMkRBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FDakNGOztBRG9DQTtFQUNFLGdFQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQ2pDRjs7QURvQ0E7RUFDRSxnREFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUNqQ0Y7O0FEcUNBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtBQ2xDRjs7QURxQ0E7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx3QkVwV1k7QURrVWQ7O0FEcUNFO0VBQ0UscUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBQ25DSjs7QURzQ0U7RUFDSSx5QkFBQTtBQ3BDTjs7QURzQ0U7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ3BDTjs7QURzQ007RUFDSSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDcENWOztBRHVDRTtFQUlJLFlBQUE7RUFDQSxVQUFBO0VBRUEsb0JBQUE7QUN6Q047O0FEMkNNO0VBQ0ksd0JBQUE7QUN6Q1Y7O0FENENNO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDMUNWOztBRDRDUTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQzFDVjs7QURpRGM7O0VBQ0kscUJBQUE7QUM5Q2xCOztBRGtEYzs7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUMvQ2xCOztBRG1EYzs7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ2hEbEI7O0FEbURjOztFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNoRGxCOztBRHNERTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNwRE47O0FEc0RNO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNwRFY7O0FEd0RFO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDdEROOztBRHdETTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDdERWOztBRDJEWTtFQUVJLDZCQUFBO0VBQ0EsYUFBQTtBQzFEaEI7O0FEOERVO0VBQ0ksY0FBQTtBQzVEZDs7QUQrRFU7RUFHSSwwQ0FBQTtFQUNBLG1CRTNlQTtFRjRlQSxnQkFBQTtBQy9EZDs7QURrRVU7RUFDSSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ2hFZDs7QURvRWM7RUFDSSxjQUFBO0FDbEVsQjs7QURzRVk7RUFFRSxtQkU5ZkE7QUR5YmQ7O0FEd0VZO0VBQ0csbUJFbGdCRDtBRDRiZDs7QUQ2RVU7RUFDSSxjQUFBO0FDM0VkOztBRDZFYztFQUNJLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSwwQ0FBQTtBQzNFbEI7O0FEOEVjO0VBQ0ksZ0JBQUE7QUM1RWxCOztBRGlGTTtFQUNJLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFFQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNoRlY7O0FEbUZNO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNqRlY7O0FEcUZFOztFQUVNLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkVuakJNO0VGb2pCTixrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNuRlI7O0FEdUZFO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0FDckZOOztBRHVGTTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNyRlY7O0FEeUZFO0VBQ0ksaUJBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ3ZGTjs7QUR5Rk07RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLDBDQUFBO0FDdkZWOztBRDJGTTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkUxbUJJO0VGMm1CSixpQkFBQTtBQ3pGVjs7QUQ0Rk07RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkVsbkJJO0VGbW5CSixtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQzFGVjs7QUQ4RkU7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDNUZOOztBRDhGTTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDNUZWOztBRDRKTTs7RUFFSSxtQkUxc0JJO0VGMnNCSixjQUFBO0FDekpWOztBRDRKTTs7RUFFSSxvQ0FBQTtBQzFKVjs7QURnS0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQzdKRjs7QURnS0c7RUFDRyxpQkFBQTtFQUNBLCtCQUFBO0FDOUpOOztBRGlLRztFQUNHLDZCQUFBO0FDL0pOOztBRGtLRztFQUNHLGdCQUFBO0FDaEtOOztBRG1LRTtFQUNJLG1CQUFBO0FDaktOOztBRG1LTTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUNqS1Y7O0FEdUtFOztFQUVJLFlBQUE7RUFDQSxnQkFBQTtBQ3BLTjs7QUR5S0E7OztFQUlFLHVDQUFBO0VBRUEsc0NBQUE7RUFFQSxnREFBQTtFQUNBLGlDQUFBO0FDdEtGOztBRHlLQTtFQUNFLGdDQUFBO0FDdEtGOztBRHdLQTtFQUNFLHdCQUFBO0FDcktGOztBRHdLQTtFQUVNO0lBQ0ksd0JBQUE7RUN0S1I7RUR3S0k7SUFDSSxnQ0FBQTtFQ3RLUjtFRHlLSTs7SUFFSSxXQUFBO0VDdktSO0VEMEtJO0lBQ0ksd0JBQUE7RUN4S1I7RUQyS0k7SUFDSSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxhQUFBO0VDektSO0VENEtZO0lBQ0ksVUFBQTtFQzFLaEI7RURnTFk7Ozs7SUFLSSxVQUFBO0VDL0toQjtFRG9MSTtJQUNJLFlBQUE7RUNsTFI7RURxTFk7SUFDSSxVQUFBO0VDbkxoQjtFRHdMUTtJQUNJLFlBQUE7RUN0TFo7RUR3TFk7Ozs7SUFLSSxVQUFBO0VDdkxoQjtFRCtMSTtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUM3TE47QUFDRiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Nzcy9jb3JlL3RoZW1lcy9wcmltYXJ5LnNjc3MnO1xyXG5cclxuLnNpZGViYXI6YWZ0ZXIsXHJcbi5vZmYtY2FudmFzLXNpZGViYXI6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29udGVudC1wYW5lbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3gtc2hhZG93OiAwIDAgMTVweCAjYWFhO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luOiA1cmVtIDJyZW0gMnJlbTtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAvLyBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzcmVtKTtcclxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gM3JlbSk7XHJcbn1cclxuXHJcbi5zaWRlYmFye1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBlYXNlLWluLW91dDtcclxuICBib3gtc2hhZG93OiAwIDE2cHggMzhweCAtMTJweCByZ2IoMCAwIDAgLyA1NiUpLCAwIDRweCAyNXB4IDAgcmdiKDAgMCAwIC8gMTIlKSwgMCA4cHggMTBweCAtNXB4IHJnYigwIDAgMCAvIDIwJSk7XHJcbn1cclxuXHJcbi5tYWluLTEwMCB7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI1cHgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ibG9ja3tcclxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleHtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWJhY2tkcm9we1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi5sZWZ0LWFycm93e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogLTE0cHg7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDZweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB6LWluZGV4OiA5OTk5OTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNTU1O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmZhLmZhLWFuZ2xlLWRvdWJsZS1sZWZ0e1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmxlZnQtYXJyb3cucm90YXRlLTE4MCB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG5cclxuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvcmUvdGhlbWVzL3ByaW1hcnkuc2Nzc1wiO1xyXG5cclxuLnNpZGUtd3JhcHBlciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgLmxvZ28taWNvbi1jb250YWluZXJcclxuICB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDEuOTVweCAxLjk1cHggMi42cHg7XHJcbiAgICAubGlua3Mtd3JhcHBlclxyXG4gICAge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgIC5saW5rcy13cmFwcGVyLWxpbmtcclxuICAgICAge1xyXG4gICAgICAgIGNvbG9yOiRjb2xvci1wcmltYXJ5O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbXBhbnktbG9nby1uYW1lIFxyXG4gICAge1xyXG4gICAgICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5zd2l0Y2gtY29tcGFueS1idG4tY29udGFpbmVyXHJcbiAgICB7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgLmNvbXBhbnktbmFtZS13cmFwcGVyXHJcbiAgICAgICB7XHJcbiAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICB9XHJcbiAgICAgICAgLmljb24gXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAuZWRpdC1pY29uXHJcbiAgICAgIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE4cHg7XHJcbiAgICAgIH1cclxuICAgICAgLnN3aXRjaC1jb21wYW55LWJ0blxyXG4gICAgICB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE3YTFiZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7IFxyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6IzNDNDg1ODtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgICAgICB9XHJcbiAgfVxyXG4gIC5sb2dvLWltZyB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm5hdiBsaSBhLC5uYXYgbGkgYnV0dG9uXHJcbiAgLm5hdiBsaSAuZHJvcGRvd24tbWVudSBhLC5uYXYgbGkgLmRyb3Bkb3duLW1lbnUgYnV0dG9uIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIGxpLnN3aXRjaC12aWV3LmFjdGl2ZUNoaWxkLm5hdi1pdGVtIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm90dG9tOiA3MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIC5jb21wYW55LW5hbWUge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzY2NjY2NjtcclxuICAgIG1heC13aWR0aDogMTM0cHg7XHJcbiAgICBpIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxufVxyXG4uanVtcC10by1idG5cclxue1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvci1wcmltYXJ5ICFpbXBvcnRhbnQ7O1xyXG4gICBpIFxyXG4gIHtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlcntcclxuICBiYWNrZ3JvdW5kOiAkY29sb3ItcHJpbWFyeSAhaW1wb3J0YW50O1xyXG59XHJcbiAgXHJcbn1cclxuXHJcblxyXG4vLyAubG9nb3V0IHtcclxuLy8gICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuLy8gfVxyXG4uc2lkZWJhci13cmFwcGVyIHtcclxuICBmbGV4OiAxIDEgMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcclxuICAvLyAmOjotd2Via2l0LXNjcm9sbGJhcntcclxuICAvLyAgIHdpZHRoOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgLy8gfVxyXG59XHJcbi50aGF1dC1sb2dvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLy8gYm94LXNoYWRvdzogcmdiYSgwLDAsMCwwLjI1KSAxcHggMCAzcHggMCwgcmdiYSgwLDAsMCwwLjI1KSAwIDAgMi42cHggMDtcclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgJGNvbG9yLXByaW1hcnk7XHJcbiAgLnBvd2VyZWQge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuXHJcbiAgLnBsYW4tdHlwZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNHB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjOTk2ZjA1O1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLXByaW1hcnk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgaW1ne1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmaWx0ZXI6IGNvbnRyYXN0KDApO1xyXG4gIH1cclxuXHJcbiAgc3BhbntcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG59XHJcbi5uYXZ7XHJcbiAgZmxleDogMSAxIDA7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFye1xyXG4gICAgd2lkdGg6IDE1cHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLmxvZ28ge1xyXG4gIHBhZGRpbmc6IDBweCAwcHggMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo3NjhweClcclxue1xyXG4gIC8vIC5sb2dvdXR7XHJcbiAgLy8gICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICAvLyB9XHJcblxyXG4gIC50aGF1dC1sb2dvXHJcbiAge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gIH1cclxufVxyXG5cclxuLnNpZGViYXItcHJlbWl1bS1zZXJ2aWNlLWNvbnRhaW5lcntcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4ucHJlbWl1bS1zdGFyLWljb24tY2hpbGR7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG4ubmF2LWxpbmt7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIG1hcmdpbjogMTBweCAxNXB4IDA7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE1cHgpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wcmVtaXVtLWxvY2std3JhcHBlcntcclxuICByaWdodDogNXB4O1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAucHJlbWl1bS1sb2NrLWljb257XHJcbiAgICBsZWZ0OiA1MCUgIWltcG9ydGFudDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4ucmVuZXctc3Vic2NyaXB0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL3N2Z3MvcmVuZXctc3Vic2NyaXB0aW9uLnN2Z1wiKSBuby1yZXBlYXQ7XHJcbiAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnZpZXctYWNjb3VudHMsIC52aWV3LXVzZXJzIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL3N2Z3Mvdmlldy1hY2NvdW50cy5zdmdcIikgbm8tcmVwZWF0O1xyXG4gIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZW50aW1lbnQtYW5hbHlzaXMge1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvc3Zncy9zZW50aW1lbnQtYW5hbHlzaXMuc3ZnXCIpIG5vLXJlcGVhdDtcclxuICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcclxuICB3aWR0aDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucXItZ2VuZXJhdG9yLWljb24ge1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvc3Zncy9xci5zdmdcIikgbm8tcmVwZWF0O1xyXG4gIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4ud3JhcHBlcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5zaWRlYmFyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgd2lkdGg6IDI2MHB4O1xyXG4gIGJhY2tncm91bmQ6ICR3aGl0ZS1jb2xvcjtcclxuICAvLyBAaW5jbHVkZSBzaGFkb3ctYmlnKCk7XHJcblxyXG4gIC5jYXJldHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBib3JkZXItdG9wOiA0cHggZGFzaGVkO1xyXG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkXFw5O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgJltkYXRhLWJhY2tncm91bmQtY29sb3I9XCJibGFja1wiXXtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcclxuICB9XHJcbiAgLmxvZ28taW1ne1xyXG4gICAgICB3aWR0aDogMzVweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcblxyXG4gICAgICBpbWd7XHJcbiAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgIHRvcDogMTZweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgfVxyXG4gIH1cclxuICAuc2lkZWJhci13cmFwcGVye1xyXG4gICAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIC8vIGhlaWdodDogY2FsYygxMDB2aCAtIDE1NnB4KTtcclxuICAgICAgLy8gb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICB3aWR0aDogMjYwcHg7XHJcbiAgICAgIHotaW5kZXg6IDQ7XHJcblxyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuXHJcbiAgICAgIC5kcm9wZG93biAuZHJvcGRvd24tYmFja2Ryb3B7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5uYXZiYXItZm9ybXtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG4gICAgICAgIC5pbnB1dC1ncm91cCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuN2VtO1xyXG4gICAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgICAgd2lkdGg6IDc4JTtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTdweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgID4gLm5hdixcclxuICAgICAgLnVzZXIgLnVzZXItaW5mb3tcclxuICAgICAgICAgIFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdIH4gZGl2ID4gdWwgPiBsaSA+IGF7XHJcbiAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAvLyBAZXh0ZW5kIC5hbmltYXRpb24tdHJhbnNpdGlvbi1nZW5lcmFsO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLnNpZGViYXItbm9ybWFse1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5zaWRlYmFyLW1pbml7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5oZXJpdDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGl7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgLmxvZ28tdGlte1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBoZWlnaHQ6IDYxcHg7XHJcbiAgICAgIHdpZHRoOiA2MXB4O1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgIGltZ3tcclxuICAgICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICAubmF2e1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICAgIC5jYXJldHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEzcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICByaWdodDogMjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGl7XHJcbiAgICAgICAgICA+IGF7XHJcbiAgICAgICAgICAgICY6aG92ZXIsXHJcbiAgICAgICAgICAgICY6Zm9jdXN7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOmZpcnN0LWNoaWxkID4gYXtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgMTVweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOmhvdmVyID4gYSxcclxuICAgICAgICAgICYgLmRyb3Bkb3duLW1lbnUgYTpob3ZlcixcclxuICAgICAgICAgICYgLmRyb3Bkb3duLW1lbnUgYTpmb2N1cyA+IFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJde1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC4yKTtcclxuICAgICAgICAgICAgICBjb2xvcjogJGJsYWNrLWNvbG9yO1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmFjdGl2ZSA+IFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJde1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC4yKTtcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmLmFjdGl2ZSA+IFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJde1xyXG4gICAgICAgICAgICAgIGl7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYTlhZmJiOyAgXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5hY3RpdmUgPiBhLFxyXG4gICAgICAgICAgJi5hY3RpdmUgPiBhIGl7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZS1jb2xvciA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLmFjdGl2ZSA+IGEgaS5hY3RpdmV7XHJcbiAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGUtY29sb3IgO1xyXG4gICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICYuc2VwYXJhdG9ye1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMTVweCAwO1xyXG5cclxuICAgICAgICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgwLDE4MCwxODAsIC4zKTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICYgKyBsaSB7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMxcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBwe1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaXtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBjb2xvcjogI2E5YWZiYjtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgLm5hdiBsaSBhLFxyXG4gIC5uYXYgbGkgLmRyb3Bkb3duLW1lbnUgYXtcclxuICAgICAgICBtYXJnaW46IDEwcHggMTVweCAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBjb2xvcjogJGJsYWNrLWNvbG9yO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgLnNpZGViYXItYmFja2dyb3VuZHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG5cclxuICAgICAgJjphZnRlcntcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgICBvcGFjaXR5OiAuOTM7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIC5sb2dve1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDBweDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB6LWluZGV4OiA0O1xyXG5cclxuICAgICAgJjphZnRlcntcclxuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgwLDE4MCwxODAsIC4zKTtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHB7XHJcbiAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIG1hcmdpbjogMTBweCAxMHB4O1xyXG4gICAgICAgICAgY29sb3I6ICR3aGl0ZS1jb2xvcjtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2ltcGxlLXRleHR7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgY29sb3I6ICRibGFjay1jb2xvcjtcclxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIC5sb2dvLXRpbXtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgaGVpZ2h0OiA2MXB4O1xyXG4gICAgICB3aWR0aDogNjFweDtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICBpbWd7XHJcbiAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC8vICZbZGF0YS1iYWNrZ3JvdW5kLWNvbG9yPVwiYmxhY2tcIl17XHJcbiAgLy8gICAgIEBpbmNsdWRlIHNpZGViYXItYmFja2dyb3VuZC1jb2xvcigkZ3JheS1iYXNlLCAkd2hpdGUtY29sb3IpO1xyXG5cclxuICAvLyAgICAgLm5hdiBsaSAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbXtcclxuICAvLyAgICAgICBjb2xvcjogJHdoaXRlLWNvbG9yO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gfVxyXG5cclxuICAvLyAmW2RhdGEtY29sb3I9XCJwdXJwbGVcIl17XHJcbiAgLy8gICAgIEBpbmNsdWRlIHNldC1iYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbigkYnJhbmQtcHJpbWFyeSk7XHJcbiAgLy8gfVxyXG4gIC8vICZbZGF0YS1jb2xvcj1cImF6dXJlXCJde1xyXG4gIC8vICAgICBAaW5jbHVkZSBzZXQtYmFja2dyb3VuZC1jb2xvci1idXR0b24oJGJyYW5kLWluZm8pO1xyXG4gIC8vIH1cclxuICAvLyAmW2RhdGEtY29sb3I9XCJncmVlblwiXXtcclxuICAvLyAgICAgQGluY2x1ZGUgc2V0LWJhY2tncm91bmQtY29sb3ItYnV0dG9uKCRicmFuZC1zdWNjZXNzKTtcclxuICAvLyB9XHJcbiAgLy8gJltkYXRhLWNvbG9yPVwib3JhbmdlXCJde1xyXG4gIC8vICAgICBAaW5jbHVkZSBzZXQtYmFja2dyb3VuZC1jb2xvci1idXR0b24oJGJyYW5kLXdhcm5pbmcpO1xyXG4gIC8vIH1cclxuICAvLyAmW2RhdGEtY29sb3I9XCJkYW5nZXJcIl17XHJcbiAgLy8gICAgIEBpbmNsdWRlIHNldC1iYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbigkYnJhbmQtZGFuZ2VyKTtcclxuICAvLyB9XHJcbiAgLy8gJltkYXRhLWNvbG9yPVwicm9zZVwiXXtcclxuICAvLyAgICAgQGluY2x1ZGUgc2V0LWJhY2tncm91bmQtY29sb3ItYnV0dG9uKCRicmFuZC1yb3NlKTtcclxuICAvLyB9XHJcblxyXG4gIC8vICZbZGF0YS1jb2xvcj1cIndoaXRlXCJde1xyXG4gIC8vICAgICBAaW5jbHVkZSBzZXQtYmFja2dyb3VuZC1jb2xvci1idXR0b24oJHdoaXRlLWNvbG9yKTtcclxuICAvLyAgICAgQGluY2x1ZGUgc2lkZWJhci1hY3RpdmUtY29sb3IoJGJsYWNrLWNvbG9yKTtcclxuICAvLyB9XHJcblxyXG4gIC8vICZbZGF0YS1iYWNrZ3JvdW5kLWNvbG9yPVwicmVkXCJde1xyXG4gIC8vICAgICBAaW5jbHVkZSBzaWRlYmFyLWJhY2tncm91bmQtY29sb3IoJGJyYW5kLWRhbmdlciwgJHdoaXRlLWNvbG9yKTtcclxuXHJcbiAgLy8gICAgIC51c2VyLFxyXG4gIC8vICAgICAubG9nbyxcclxuICAvLyAgICAgLm5hdiBsaS5zZXBhcmF0b3J7XHJcbiAgLy8gICAgICAgICAmOmFmdGVye1xyXG4gIC8vICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsIC4zKTtcclxuICAvLyAgICAgICAgIH1cclxuICAvLyAgICAgfVxyXG5cclxuICAvLyAgICAgLm5hdntcclxuICAvLyAgICAgICAgIGxpOmhvdmVyOm5vdCguYWN0aXZlKSA+IGEsXHJcbiAgLy8gICAgICAgICBsaS5hY3RpdmUgPiBbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXXtcclxuICAvLyAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgLy8gICAgICAgICB9XHJcbiAgLy8gICAgIH1cclxuICAvLyB9XHJcblxyXG4gIC8vICZbZGF0YS1pbWFnZV06YWZ0ZXIsXHJcbiAgLy8gJi5oYXMtaW1hZ2U6YWZ0ZXJ7XHJcbiAgLy8gICAgIG9wYWNpdHk6IC43NztcclxuICAvLyB9XHJcbn1cclxuXHJcbi5vZmYtY2FudmFzLXNpZGViYXIgLm5hdmJhci1jb2xsYXBzZXtcclxuICAubmF2IHtcclxuICAgICAgPiBsaSA+IGEsXHJcbiAgICAgID4gbGkgPiBhOmhvdmVye1xyXG4gICAgICAgICAgY29sb3I6ICR3aGl0ZS1jb2xvcjtcclxuICAgICAgICAgIG1hcmdpbjogMCAxNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICA+IGxpID4gYTpmb2N1cyxcclxuICAgICAgPiBsaSA+IGE6aG92ZXJ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMik7XHJcbiAgICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4ubWFpbi1wYW5lbHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNjBweCk7XHJcbiAgLy8gQGluY2x1ZGUgdHJhbnNpdGlvbiAoMC4zM3MsIGN1YmljLWJlemllcigwLjY4NSwgMC4wNDczLCAwLjM0NiwgMSkpO1xyXG5cclxuICAgLm1haW4tY29udGVudHtcclxuICAgICAgcGFkZGluZzogMHB4IDE1cHg7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjNweCk7XHJcbiAgfVxyXG5cclxuICAgLmZvb3RlcntcclxuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlN2U3ZTc7XHJcbiAgfVxyXG5cclxuICAgLm5hdmJhcntcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcblxyXG4gIC5oZWFkZXJ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4gICAgICAudGl0bGV7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnBlcmZlY3Qtc2Nyb2xsYmFyLW9ue1xyXG4gIC5zaWRlYmFyLFxyXG4gIC5tYWluLXBhbmVse1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnNpZGViYXIsXHJcbi5tYWluLXBhbmVsLFxyXG4uc2lkZWJhci13cmFwcGVye1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogdG9wLGJvdHRvbSx3aWR0aDtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0b3AsYm90dG9tLCB3aWR0aDtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IC4ycywuMnMsIC4zNXM7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzLC4ycywgLjM1cztcclxuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXIsbGluZWFyLGVhc2U7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcixsaW5lYXIsZWFzZTtcclxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbn1cclxuXHJcbi52aXNpYmxlLW9uLXNpZGViYXItcmVndWxhcntcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcclxufVxyXG4udmlzaWJsZS1vbi1zaWRlYmFyLW1pbml7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkxcHgpIHtcclxuICAuc2lkZWJhci1taW5pe1xyXG4gICAgICAudmlzaWJsZS1vbi1zaWRlYmFyLXJlZ3VsYXJ7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgLnZpc2libGUtb24tc2lkZWJhci1taW5pe1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zaWRlYmFyLFxyXG4gICAgICAuc2lkZWJhciAuc2lkZWJhci13cmFwcGVye1xyXG4gICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tYWluLXBhbmVse1xyXG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2lkZWJhcntcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgICAgICAgIHotaW5kZXg6IDk5OTk7XHJcblxyXG4gICAgICAgICAgLmxvZ297XHJcbiAgICAgICAgICAgICAgYS5sb2dvLW5vcm1hbHtcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgLy8gQGluY2x1ZGUgdHJhbnNmb3JtLXRyYW5zbGF0ZS14KC0yNXB4KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNpZGViYXItd3JhcHBlcntcclxuICAgICAgICAgICAgICA+IC5uYXYgW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0gfiBkaXYgPiB1bCA+IGxpID4gYSAuc2lkZWJhci1ub3JtYWwsXHJcbiAgICAgICAgICAgICAgLnVzZXIgLnVzZXItaW5mbyBbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXSB+IGRpdiA+IHVsID4gbGkgPiBhIC5zaWRlYmFyLW5vcm1hbCxcclxuICAgICAgICAgICAgICAudXNlciAudXNlci1pbmZvID4gYSA+IHNwYW4sXHJcbiAgICAgICAgICAgICAgPiAubmF2IGxpID4gYSBwe1xyXG4gICAgICAgICAgICAgICAgICAvLyBAaW5jbHVkZSB0cmFuc2Zvcm0tdHJhbnNsYXRlLXgoLTI1cHgpO1xyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnNpZGViYXI6aG92ZXJ7XHJcbiAgICAgICAgICB3aWR0aDogMjYwcHg7XHJcblxyXG4gICAgICAgICAgLmxvZ297XHJcbiAgICAgICAgICAgICAgYS5sb2dvLW5vcm1hbHtcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgLy8gQGluY2x1ZGUgdHJhbnNmb3JtLXRyYW5zbGF0ZS14KDBweCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zaWRlYmFyLXdyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDI2MHB4O1xyXG5cclxuICAgICAgICAgICAgICA+IC5uYXYgbGkgPiBhIHAsXHJcbiAgICAgICAgICAgICAgPiAubmF2IFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdIH4gZGl2ID4gdWwgPiBsaSA+IGEgLnNpZGViYXItbm9ybWFsLFxyXG4gICAgICAgICAgICAgIC51c2VyIC51c2VyLWluZm8gW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0gfiBkaXYgPiB1bCA+IGxpID4gYSAuc2lkZWJhci1ub3JtYWwsXHJcbiAgICAgICAgICAgICAgLnVzZXIgLnVzZXItaW5mbyA+IGEgPiBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAvLyBAaW5jbHVkZSB0cmFuc2Zvcm0tdHJhbnNsYXRlLXgoMHB4KTtcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIC5zaWRlYmFyIHtcclxuICAgIC5uYXYgLm5hdi1pdGVtIHtcclxuICAgICAgJi5hY3RpdmUtcHJvIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm90dG9tOiAxM3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5zaWRlYmFyOmFmdGVyLFxuLm9mZi1jYW52YXMtc2lkZWJhcjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSAhaW1wb3J0YW50O1xufVxuXG4uY29udGVudC1wYW5lbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4ICNhYWE7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogNXJlbSAycmVtIDJyZW07XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDNyZW0pO1xufVxuXG4uc2lkZWJhciB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBlYXNlLWluLW91dDtcbiAgYm94LXNoYWRvdzogMCAxNnB4IDM4cHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjU2KSwgMCA0cHggMjVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5tYWluLTEwMCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNXB4KSAhaW1wb3J0YW50O1xufVxuXG4uYmxvY2sge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbn1cblxuLnNpZGViYXItYmFja2Ryb3Age1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5sZWZ0LWFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTE0cHg7XG4gIHRvcDogMTVweDtcbiAgcGFkZGluZzogNnB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiA5OTk5OTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzU1NTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0O1xufVxuXG4uZmEuZmEtYW5nbGUtZG91YmxlLWxlZnQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5sZWZ0LWFycm93LnJvdGF0ZS0xODAge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG46cm9vdCB7XG4gIC0tcHJpbWFyeTogIzAwYjNhYztcbiAgLS13aGl0ZTogI2ZmZjtcbiAgLS1ibGFjazogIzAwMDtcbn1cblxuLnNpZGUtd3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5zaWRlLXdyYXBwZXIgLmxvZ28taWNvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAxLjk1cHggMS45NXB4IDIuNnB4O1xufVxuLnNpZGUtd3JhcHBlciAubG9nby1pY29uLWNvbnRhaW5lciAubGlua3Mtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnNpZGUtd3JhcHBlciAubG9nby1pY29uLWNvbnRhaW5lciAubGlua3Mtd3JhcHBlciAubGlua3Mtd3JhcHBlci1saW5rIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uc2lkZS13cmFwcGVyIC5sb2dvLWljb24tY29udGFpbmVyIC5jb21wYW55LWxvZ28tbmFtZSB7XG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2lkZS13cmFwcGVyIC5sb2dvLWljb24tY29udGFpbmVyIC5zd2l0Y2gtY29tcGFueS1idG4tY29udGFpbmVyIHtcbiAgbWF4LWhlaWdodDogMTAwcHg7XG4gIGhlaWdodDogODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uc2lkZS13cmFwcGVyIC5sb2dvLWljb24tY29udGFpbmVyIC5zd2l0Y2gtY29tcGFueS1idG4tY29udGFpbmVyIC5jb21wYW55LW5hbWUtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4uc2lkZS13cmFwcGVyIC5sb2dvLWljb24tY29udGFpbmVyIC5zd2l0Y2gtY29tcGFueS1idG4tY29udGFpbmVyIC5pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG59XG4uc2lkZS13cmFwcGVyIC5sb2dvLWljb24tY29udGFpbmVyIC5zd2l0Y2gtY29tcGFueS1idG4tY29udGFpbmVyIC5pY29uIC5lZGl0LWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMThweDtcbn1cbi5zaWRlLXdyYXBwZXIgLmxvZ28taWNvbi1jb250YWluZXIgLnN3aXRjaC1jb21wYW55LWJ0bi1jb250YWluZXIgLmljb24gLnN3aXRjaC1jb21wYW55LWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxN2ExYmY7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjM0M0ODU4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuLnNpZGUtd3JhcHBlciAubG9nby1pbWcge1xuICB3aWR0aDogYXV0bztcbiAgbWF4LWhlaWdodDogaW5oZXJpdDtcbn1cbi5zaWRlLXdyYXBwZXIgLmxvZ28taW1nIGltZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWF4LWhlaWdodDogNzBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uc2lkZS13cmFwcGVyIC5uYXYgbGkgYSwgLnNpZGUtd3JhcHBlciAubmF2IGxpIGJ1dHRvbiAubmF2IGxpIC5kcm9wZG93bi1tZW51IGEsXG4uc2lkZS13cmFwcGVyIC5uYXYgbGkgLmRyb3Bkb3duLW1lbnUgYnV0dG9uIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLnNpZGUtd3JhcHBlciBsaS5zd2l0Y2gtdmlldy5hY3RpdmVDaGlsZC5uYXYtaXRlbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogNzBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB6LWluZGV4OiAxO1xufVxuLnNpZGUtd3JhcHBlciAuY29tcGFueS1uYW1lIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzY2NjY2NjtcbiAgbWF4LXdpZHRoOiAxMzRweDtcbn1cbi5zaWRlLXdyYXBwZXIgLmNvbXBhbnktbmFtZSBpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uanVtcC10by1idG4ge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSkgIWltcG9ydGFudDtcbn1cbi5qdW1wLXRvLWJ0biBpIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4uanVtcC10by1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KSAhaW1wb3J0YW50O1xufVxuXG4uc2lkZWJhci13cmFwcGVyIHtcbiAgZmxleDogMSAxIDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuXG4udGhhdXQtbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgei1pbmRleDogMTtcbiAgYm90dG9tOiAwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGdhcDogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xufVxuLnRoYXV0LWxvZ28gLnBvd2VyZWQge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi50aGF1dC1sb2dvIC5wbGFuLXR5cGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNHB4O1xuICByaWdodDogMTVweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogOHB4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50aGF1dC1sb2dvIGltZyB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XG4gIGZpbHRlcjogY29udHJhc3QoMCk7XG59XG4udGhhdXQtbG9nbyBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm5hdiB7XG4gIGZsZXg6IDEgMSAwO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4ubmF2Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dvIHtcbiAgcGFkZGluZzogMHB4IDBweCAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAudGhhdXQtbG9nbyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICB9XG59XG4uc2lkZWJhci1wcmVtaXVtLXNlcnZpY2UtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucHJlbWl1bS1zdGFyLWljb24tY2hpbGQge1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4ubmF2LWxpbmsge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBtYXJnaW46IDEwcHggMTVweCAwO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTVweCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJlbWl1bS1sb2NrLXdyYXBwZXIge1xuICByaWdodDogNXB4O1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuLnByZW1pdW0tbG9jay13cmFwcGVyIC5wcmVtaXVtLWxvY2staWNvbiB7XG4gIGxlZnQ6IDUwJSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSAhaW1wb3J0YW50O1xufVxuXG4ucmVuZXctc3Vic2NyaXB0aW9uIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9zdmdzL3JlbmV3LXN1YnNjcmlwdGlvbi5zdmdcIikgbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLnZpZXctYWNjb3VudHMsIC52aWV3LXVzZXJzIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9zdmdzL3ZpZXctYWNjb3VudHMuc3ZnXCIpIG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zZW50aW1lbnQtYW5hbHlzaXMge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL3N2Z3Mvc2VudGltZW50LWFuYWx5c2lzLnN2Z1wiKSBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4ucXItZ2VuZXJhdG9yLWljb24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL3N2Z3MvcXIuc3ZnXCIpIG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi53cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5zaWRlYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMjtcbiAgd2lkdGg6IDI2MHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG59XG4uc2lkZWJhciAuY2FyZXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlci10b3A6IDRweCBkYXNoZWQ7XG4gIGJvcmRlci10b3A6IDRweCBzb2xpZFxcOSA7XG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLnNpZGViYXJbZGF0YS1iYWNrZ3JvdW5kLWNvbG9yPWJsYWNrXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XG59XG4uc2lkZWJhciAubG9nby1pbWcge1xuICB3aWR0aDogMzVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC1oZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4uc2lkZWJhciAubG9nby1pbWcgaW1nIHtcbiAgd2lkdGg6IDM1cHg7XG4gIHRvcDogMTZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLnNpZGViYXIgLnNpZGViYXItd3JhcHBlciB7XG4gIHdpZHRoOiAyNjBweDtcbiAgei1pbmRleDogNDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG4uc2lkZWJhciAuc2lkZWJhci13cmFwcGVyIC5kcm9wZG93biAuZHJvcGRvd24tYmFja2Ryb3Age1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG4uc2lkZWJhciAuc2lkZWJhci13cmFwcGVyIC5uYXZiYXItZm9ybSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLXdyYXBwZXIgLm5hdmJhci1mb3JtIC5pbnB1dC1ncm91cCB7XG4gIGZvbnQtc2l6ZTogMS43ZW07XG4gIGhlaWdodDogMzZweDtcbiAgd2lkdGg6IDc4JTtcbiAgcGFkZGluZy1sZWZ0OiAxN3B4O1xufVxuLnNpZGViYXIgLnNpZGViYXItd3JhcHBlciA+IC5uYXYgW2RhdGEtdG9nZ2xlPWNvbGxhcHNlXSB+IGRpdiA+IHVsID4gbGkgPiBhIHNwYW4sXG4uc2lkZWJhciAuc2lkZWJhci13cmFwcGVyIC51c2VyIC51c2VyLWluZm8gW2RhdGEtdG9nZ2xlPWNvbGxhcHNlXSB+IGRpdiA+IHVsID4gbGkgPiBhIHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uc2lkZWJhciAuc2lkZWJhci13cmFwcGVyID4gLm5hdiBbZGF0YS10b2dnbGU9Y29sbGFwc2VdIH4gZGl2ID4gdWwgPiBsaSA+IGEgLnNpZGViYXItbm9ybWFsLFxuLnNpZGViYXIgLnNpZGViYXItd3JhcHBlciAudXNlciAudXNlci1pbmZvIFtkYXRhLXRvZ2dsZT1jb2xsYXBzZV0gfiBkaXYgPiB1bCA+IGxpID4gYSAuc2lkZWJhci1ub3JtYWwge1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gIG9wYWNpdHk6IDE7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnNpZGViYXIgLnNpZGViYXItd3JhcHBlciA+IC5uYXYgW2RhdGEtdG9nZ2xlPWNvbGxhcHNlXSB+IGRpdiA+IHVsID4gbGkgPiBhIC5zaWRlYmFyLW1pbmksXG4uc2lkZWJhciAuc2lkZWJhci13cmFwcGVyIC51c2VyIC51c2VyLWluZm8gW2RhdGEtdG9nZ2xlPWNvbGxhcHNlXSB+IGRpdiA+IHVsID4gbGkgPiBhIC5zaWRlYmFyLW1pbmkge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB3aWR0aDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGluaGVyaXQ7XG59XG4uc2lkZWJhciAuc2lkZWJhci13cmFwcGVyID4gLm5hdiBbZGF0YS10b2dnbGU9Y29sbGFwc2VdIH4gZGl2ID4gdWwgPiBsaSA+IGEgaSxcbi5zaWRlYmFyIC5zaWRlYmFyLXdyYXBwZXIgLnVzZXIgLnVzZXItaW5mbyBbZGF0YS10b2dnbGU9Y29sbGFwc2VdIH4gZGl2ID4gdWwgPiBsaSA+IGEgaSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyNnB4O1xufVxuLnNpZGViYXIgLmxvZ28tdGltIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA2MXB4O1xuICB3aWR0aDogNjFweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uc2lkZWJhciAubG9nby10aW0gaW1nIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbn1cbi5zaWRlYmFyIC5uYXYge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5zaWRlYmFyIC5uYXYgLmNhcmV0IHtcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbn1cbi5zaWRlYmFyIC5uYXYgbGkgPiBhOmhvdmVyLCAuc2lkZWJhciAubmF2IGxpID4gYTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBvdXRsaW5lOiBub25lO1xufVxuLnNpZGViYXIgLm5hdiBsaTpmaXJzdC1jaGlsZCA+IGEge1xuICBtYXJnaW46IDAgMTVweDtcbn1cbi5zaWRlYmFyIC5uYXYgbGk6aG92ZXIgPiBhLCAuc2lkZWJhciAubmF2IGxpIC5kcm9wZG93bi1tZW51IGE6aG92ZXIsIC5zaWRlYmFyIC5uYXYgbGkgLmRyb3Bkb3duLW1lbnUgYTpmb2N1cyA+IFtkYXRhLXRvZ2dsZT1jb2xsYXBzZV0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMik7XG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uc2lkZWJhciAubmF2IGxpIC5hY3RpdmUgPiBbZGF0YS10b2dnbGU9Y29sbGFwc2VdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjIpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uc2lkZWJhciAubmF2IGxpLmFjdGl2ZSA+IFtkYXRhLXRvZ2dsZT1jb2xsYXBzZV0gaSB7XG4gIGNvbG9yOiAjYTlhZmJiO1xufVxuLnNpZGViYXIgLm5hdiBsaS5hY3RpdmUgPiBhLCAuc2lkZWJhciAubmF2IGxpLmFjdGl2ZSA+IGEgaSB7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG4uc2lkZWJhciAubmF2IGxpLmFjdGl2ZSA+IGEgaS5hY3RpdmUge1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuLnNpZGViYXIgLm5hdiBsaS5zZXBhcmF0b3Ige1xuICBtYXJnaW46IDE1cHggMDtcbn1cbi5zaWRlYmFyIC5uYXYgbGkuc2VwYXJhdG9yOmFmdGVyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMXB4O1xuICBsZWZ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4MCwgMTgwLCAxODAsIDAuMyk7XG59XG4uc2lkZWJhciAubmF2IGxpLnNlcGFyYXRvciArIGxpIHtcbiAgbWFyZ2luLXRvcDogMzFweDtcbn1cbi5zaWRlYmFyIC5uYXYgcCB7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG4uc2lkZWJhciAubmF2IGkge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjYTlhZmJiO1xufVxuLnNpZGViYXIgLm5hdiBsaSBhLFxuLnNpZGViYXIgLm5hdiBsaSAuZHJvcGRvd24tbWVudSBhIHtcbiAgbWFyZ2luOiAxMHB4IDE1cHggMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLWJhY2tncm91bmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG4uc2lkZWJhciAuc2lkZWJhci1iYWNrZ3JvdW5kOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAzO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgb3BhY2l0eTogMC45Mztcbn1cbi5zaWRlYmFyIC5sb2dvIHtcbiAgcGFkZGluZzogMTVweCAwcHg7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogNDtcbn1cbi5zaWRlYmFyIC5sb2dvOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAxNXB4O1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4MCwgMTgwLCAxODAsIDAuMyk7XG59XG4uc2lkZWJhciAubG9nbyBwIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiAxMHB4IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLnNpZGViYXIgLmxvZ28gLnNpbXBsZS10ZXh0IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogMTBweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uc2lkZWJhciAubG9nby10aW0ge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDYxcHg7XG4gIHdpZHRoOiA2MXB4O1xuICBmbG9hdDogbGVmdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zaWRlYmFyIC5sb2dvLXRpbSBpbWcge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4ub2ZmLWNhbnZhcy1zaWRlYmFyIC5uYXZiYXItY29sbGFwc2UgLm5hdiA+IGxpID4gYSxcbi5vZmYtY2FudmFzLXNpZGViYXIgLm5hdmJhci1jb2xsYXBzZSAubmF2ID4gbGkgPiBhOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgbWFyZ2luOiAwIDE1cHg7XG59XG4ub2ZmLWNhbnZhcy1zaWRlYmFyIC5uYXZiYXItY29sbGFwc2UgLm5hdiA+IGxpID4gYTpmb2N1cyxcbi5vZmYtY2FudmFzLXNpZGViYXIgLm5hdmJhci1jb2xsYXBzZSAubmF2ID4gbGkgPiBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjIpO1xufVxuXG4ubWFpbi1wYW5lbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjYwcHgpO1xufVxuLm1haW4tcGFuZWwgLm1haW4tY29udGVudCB7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTIzcHgpO1xufVxuLm1haW4tcGFuZWwgLmZvb3RlciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTdlN2U3O1xufVxuLm1haW4tcGFuZWwgLm5hdmJhciB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ubWFpbi1wYW5lbCAuaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5tYWluLXBhbmVsIC5oZWFkZXIgLnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnBlcmZlY3Qtc2Nyb2xsYmFyLW9uIC5zaWRlYmFyLFxuLnBlcmZlY3Qtc2Nyb2xsYmFyLW9uIC5tYWluLXBhbmVsIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZWJhcixcbi5tYWluLXBhbmVsLFxuLnNpZGViYXItd3JhcHBlciB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogdG9wLCBib3R0b20sIHdpZHRoO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0b3AsIGJvdHRvbSwgd2lkdGg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycywgMC4ycywgMC4zNXM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnMsIDAuMnMsIDAuMzVzO1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXIsIGxpbmVhciwgZWFzZTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhciwgbGluZWFyLCBlYXNlO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG59XG5cbi52aXNpYmxlLW9uLXNpZGViYXItcmVndWxhciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG4udmlzaWJsZS1vbi1zaWRlYmFyLW1pbmkge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTFweCkge1xuICAuc2lkZWJhci1taW5pIC52aXNpYmxlLW9uLXNpZGViYXItcmVndWxhciB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIC5zaWRlYmFyLW1pbmkgLnZpc2libGUtb24tc2lkZWJhci1taW5pIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuICAuc2lkZWJhci1taW5pIC5zaWRlYmFyLFxuLnNpZGViYXItbWluaSAuc2lkZWJhciAuc2lkZWJhci13cmFwcGVyIHtcbiAgICB3aWR0aDogODBweDtcbiAgfVxuICAuc2lkZWJhci1taW5pIC5tYWluLXBhbmVsIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XG4gIH1cbiAgLnNpZGViYXItbWluaSAuc2lkZWJhciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICB6LWluZGV4OiA5OTk5O1xuICB9XG4gIC5zaWRlYmFyLW1pbmkgLnNpZGViYXIgLmxvZ28gYS5sb2dvLW5vcm1hbCB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAuc2lkZWJhci1taW5pIC5zaWRlYmFyIC5zaWRlYmFyLXdyYXBwZXIgPiAubmF2IFtkYXRhLXRvZ2dsZT1jb2xsYXBzZV0gfiBkaXYgPiB1bCA+IGxpID4gYSAuc2lkZWJhci1ub3JtYWwsXG4uc2lkZWJhci1taW5pIC5zaWRlYmFyIC5zaWRlYmFyLXdyYXBwZXIgLnVzZXIgLnVzZXItaW5mbyBbZGF0YS10b2dnbGU9Y29sbGFwc2VdIH4gZGl2ID4gdWwgPiBsaSA+IGEgLnNpZGViYXItbm9ybWFsLFxuLnNpZGViYXItbWluaSAuc2lkZWJhciAuc2lkZWJhci13cmFwcGVyIC51c2VyIC51c2VyLWluZm8gPiBhID4gc3Bhbixcbi5zaWRlYmFyLW1pbmkgLnNpZGViYXIgLnNpZGViYXItd3JhcHBlciA+IC5uYXYgbGkgPiBhIHAge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgLnNpZGViYXItbWluaSAuc2lkZWJhcjpob3ZlciB7XG4gICAgd2lkdGg6IDI2MHB4O1xuICB9XG4gIC5zaWRlYmFyLW1pbmkgLnNpZGViYXI6aG92ZXIgLmxvZ28gYS5sb2dvLW5vcm1hbCB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAuc2lkZWJhci1taW5pIC5zaWRlYmFyOmhvdmVyIC5zaWRlYmFyLXdyYXBwZXIge1xuICAgIHdpZHRoOiAyNjBweDtcbiAgfVxuICAuc2lkZWJhci1taW5pIC5zaWRlYmFyOmhvdmVyIC5zaWRlYmFyLXdyYXBwZXIgPiAubmF2IGxpID4gYSBwLFxuLnNpZGViYXItbWluaSAuc2lkZWJhcjpob3ZlciAuc2lkZWJhci13cmFwcGVyID4gLm5hdiBbZGF0YS10b2dnbGU9Y29sbGFwc2VdIH4gZGl2ID4gdWwgPiBsaSA+IGEgLnNpZGViYXItbm9ybWFsLFxuLnNpZGViYXItbWluaSAuc2lkZWJhcjpob3ZlciAuc2lkZWJhci13cmFwcGVyIC51c2VyIC51c2VyLWluZm8gW2RhdGEtdG9nZ2xlPWNvbGxhcHNlXSB+IGRpdiA+IHVsID4gbGkgPiBhIC5zaWRlYmFyLW5vcm1hbCxcbi5zaWRlYmFyLW1pbmkgLnNpZGViYXI6aG92ZXIgLnNpZGViYXItd3JhcHBlciAudXNlciAudXNlci1pbmZvID4gYSA+IHNwYW4ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgLnNpZGViYXIgLm5hdiAubmF2LWl0ZW0uYWN0aXZlLXBybyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvdHRvbTogMTNweDtcbiAgfVxufSIsIiRjb2xvci1wcmltYXJ5OiB2YXIoLS1wcmltYXJ5KTtcclxuJHdoaXRlLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiRibGFjay1jb2xvcjogdmFyKC0tYmxhY2spO1xyXG5cclxuOnJvb3R7XHJcbiAgICAtLXByaW1hcnk6ICMwMGIzYWM7XHJcbiAgICAtLXdoaXRlOiAjZmZmO1xyXG4gICAgLS1ibGFjazogIzAwMDtcclxufSJdfQ== */"] });


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
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 7822);











function LoginComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email field is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Enter a valid Email address!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password field is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password field should contain atleast 8 letters");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_i_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 22);
} }
const _c0 = function (a0) { return { "not-allowed": a0 }; };
const _c1 = function (a0) { return { "spiner": a0 }; };
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
        if (this.api.getLocalStorage('currentUserSession') && this.api.getLocalStorage('currentUserSession').loggedIn == 1) {
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
            next: (res) => {
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
            error: (error) => {
                this.isLoader = false;
                this.toaster.error(error.error.message);
            }
        });
    }
    ngOnDestroy() {
        this.alive = false;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 35, vars: 15, consts: [[1, "vh-100"], [1, "container", "py-5", "h-100"], [1, "row", "d-flex", "justify-content-center", "align-items-center", "h-100"], [1, "col", "col-xl-10"], [1, "card", "box", 2, "border-radius", "1rem"], [1, "row"], [1, "col-md-6", "col-lg-5", "logo-container", 2, "display", "flex", "align-items", "center", "justify-content", "center", "padding", "50px"], ["src", "assets/img/logo.svg", "alt", "logo", "width", "200", 1, "img-fluid", "logo-img"], [1, "col-md-6", "col-lg-7", "d-flex", "align-items-center"], [1, "card-body", "p-4", "p-lg-5", "text-black"], [3, "formGroup", "ngSubmit"], [1, "fw-bold", "mb-3", "pb-3", "text-secondary", 2, "letter-spacing", "1px", "font-size", "24px", "white-space", "nowrap"], [1, "form-outline", "mb-4"], ["appearance", "outline", 1, "w-100"], ["matSuffix", "", 1, "text-muted"], ["matInput", "", "formControlName", "email", "type", "email"], [4, "ngIf"], ["matInput", "", "formControlName", "password", 3, "type"], ["matSuffix", "", 1, "text-muted", "cursor-pointer", 3, "click"], [1, "pt-1", "mb-4", 2, "display", "inline", 3, "ngClass"], ["mat-raised-button", "", "mat-button", "", "color", "primary", "type", "submit", 1, "w-100", "btn-info", 2, "font-size", "16px", 3, "ngClass", "disabled"], ["class", "fas fa-circle-notch fa-spin ", 4, "ngIf"], [1, "fas", "fa-circle-notch", "fa-spin"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8)(9, "div", 9)(10, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_10_listener() { return ctx.onLogin(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_mat_icon_click_27_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, LoginComponent_mat_error_29_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, LoginComponent_mat_error_30_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 19)(32, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, LoginComponent_i_34_Template, 1, 0, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()();
    } if (rf & 2) {
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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon], styles: ["section[_ngcontent-%COMP%] {\n  background: #fff;\n}\n\n  .mat-checkbox-ripple .mat-ripple-element, .mat-checkbox-checked.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n  background-color: gray !important;\n}\n\n.box[_ngcontent-%COMP%] {\n  border: solid 1px rgb(180, 180, 180);\n  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;\n  border-radius: 5px;\n  box-sizing: absolute;\n  padding: 20px 30px;\n}\n\nmat-label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n}\n\n@media (max-width: 768px) {\n  .logo-img[_ngcontent-%COMP%] {\n    width: 70%;\n    height: 70%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .logo-container[_ngcontent-%COMP%] {\n    padding: 30px !important;\n  }\n  .container[_ngcontent-%COMP%] {\n    padding: 1rem !important;\n  }\n  h5[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n  a[_ngcontent-%COMP%] {\n    font-size: 17px !important;\n  }\n  button[_ngcontent-%COMP%] {\n    font-size: 14px !important;\n  }\n  section[_ngcontent-%COMP%] {\n    background: #fff;\n  }\n}\n\n@media (max-width: 576px) {\n  .logo-img[_ngcontent-%COMP%] {\n    width: 80%;\n    height: 80%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxTYWklMjBLaXJhblxcRG9jdW1lbnRzXFxhZG1pbi1oaXNlbnNlXFxoaXNlbnNlLWFkbWluXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTs7RUFFSSxpQ0FBQTtBQ0NKOztBREVBO0VBQ0ksb0NBQUE7RUFDQSwyRkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEWUE7RUFDSTtJQUVJLFVBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7RUNWTjtFRGNFO0lBQ0ksd0JBQUE7RUNaTjtFRGVFO0lBQ0ksd0JBQUE7RUNiTjtFRGdCRTtJQUNJLDBCQUFBO0VDZE47RURpQkU7SUFDSSwwQkFBQTtFQ2ZOO0VEa0JFO0lBQ0ksMEJBQUE7RUNoQk47RURtQkU7SUFDSSxnQkFBQTtFQ2pCTjtBQUNGOztBRHNCQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtFQ3BCTjtBQUNGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1jaGVja2JveC1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCxcclxuLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJveCB7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCByZ2IoMTgwLCAxODAsIDE4MCk7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDE0LCAzMCwgMzcsIDAuMTIpIDBweCAycHggNHB4IDBweCwgcmdiYSgxNCwgMzAsIDM3LCAwLjMyKSAwcHggMnB4IDE2cHggMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNpemluZzogYWJzb2x1dGU7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbn1cclxuXHJcbm1hdC1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4vLyA6Om5nLWRlZXAgYnV0dG9uLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5e1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjNhYyAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyA6Om5nLWRlZXAgYnV0dG9uLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5Lm1hdC1idXR0b24tZGlzYWJsZWQsXHJcbi8vIDo6bmctZGVlcCBidXR0b24ubWF0LXJhaXNlZC1idXR0b24ubWF0LWJ1dHRvbi1kaXNhYmxlZC5tYXQtYnV0dG9uLWRpc2FibGVkXHJcbi8vIHtcclxuLy8gICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC43KTtcclxuLy8gfVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NzY4cHgpIHtcclxuICAgIC5sb2dvLWltZyB7XHJcblxyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA3MCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAubG9nby1jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaDUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIGEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2VjdGlvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo1NzZweCkge1xyXG4gICAgLmxvZ28taW1nIHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIGhlaWdodDogODAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICB9XHJcbn0iLCJzZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQsXG4ubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3gge1xuICBib3JkZXI6IHNvbGlkIDFweCByZ2IoMTgwLCAxODAsIDE4MCk7XG4gIGJveC1zaGFkb3c6IHJnYmEoMTQsIDMwLCAzNywgMC4xMikgMHB4IDJweCA0cHggMHB4LCByZ2JhKDE0LCAzMCwgMzcsIDAuMzIpIDBweCAycHggMTZweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNpemluZzogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbn1cblxubWF0LWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmxvZ28taW1nIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogNzAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAubG9nby1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDMwcHggIWltcG9ydGFudDtcbiAgfVxuICAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgaDUge1xuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICB9XG4gIGEge1xuICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICB9XG4gIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgc2VjdGlvbiB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5sb2dvLWltZyB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn0iXX0= */"] });


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
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ 5892);











function MyProfileComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Current password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MyProfileComponent_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " New password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MyProfileComponent_mat_error_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " New password should be minimun of 8 characters! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MyProfileComponent_mat_error_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Confirm passwords should match with password field! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MyProfileComponent_i_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 26);
} }
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
            confirm_new_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(8)]],
        }, {
            validators: this.password.bind(this)
        });
        // this.uuid = this.api.getLocalStorage('activeCompanyUser').uuid;
    }
    ngOnInit() {
    }
    password(formGroup) {
        const password = formGroup.get('new_password')?.value;
        const confirmPassword = formGroup.get('confirm_new_password')?.value;
        return password === confirmPassword ? null : { passwordNotMatch: true };
    }
    changePassword() {
        this.isLoading = true;
        this.api.changePassword(this.uuid, this.form.value).subscribe({
            next: (res) => {
                if (res.status == 'ok') {
                    this.toaster.success(res.message);
                    this.isLoading = false;
                    this.form.reset();
                }
            },
            error: (error) => {
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
MyProfileComponent.ɵfac = function MyProfileComponent_Factory(t) { return new (t || MyProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location)); };
MyProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MyProfileComponent, selectors: [["app-my-profile"]], decls: 49, vars: 13, consts: [[1, "userProfile"], [1, "card"], [1, "card-header", "position-relative", "card-box-shadow", "bt-4"], [1, "card-title", "m-0", "font-weight-bold"], [1, "card-body"], [1, "row"], [1, "col-sm-12", "mt-4"], ["animationDuration", "0ms"], ["label", "Change Password"], [1, "changePassword"], [1, "col-md-12"], [3, "formGroup"], [1, "col-12", "col-md-4", "form-group"], ["appearance", "outline", 1, ""], ["matInput", "", "formControlName", "current_password", 3, "type"], ["matSuffix", "", 1, "text-muted", "cursor-pointer", 3, "click"], [4, "ngIf"], ["matInput", "", "formControlName", "new_password", 3, "type"], ["matInput", "", "formControlName", "confirm_new_password", 3, "type"], ["class", "text-danger", 4, "ngIf"], [1, "col-md-12", "mt-4", "border-top", "pt-2", "button-container"], [1, "forgot-link", 2, "color", "black", "cursor", "pointer", 3, "click"], [1, "fas", "fa-arrow-left"], ["mat-raised-button", "", 1, "btn", "btn-info", 3, "disabled", "click"], ["class", "fas fa-circle-notch fa-spin text-white ml-1", 4, "ngIf"], [1, "text-danger"], [1, "fas", "fa-circle-notch", "fa-spin", "text-white", "ml-1"]], template: function MyProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "User Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "mat-tab-group", 7)(9, "mat-tab", 8)(10, "section", 9)(11, "div", 5)(12, "div", 10)(13, "form", 11)(14, "div", 5)(15, "div", 12)(16, "mat-form-field", 13)(17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Current Password *");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyProfileComponent_Template_mat_icon_click_20_listener() { return ctx.currentPassword = !ctx.currentPassword; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, MyProfileComponent_mat_error_22_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 12)(24, "mat-form-field", 13)(25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "New Password *");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyProfileComponent_Template_mat_icon_click_28_listener() { return ctx.hide = !ctx.hide; });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyProfileComponent_Template_mat_icon_click_37_listener() { return ctx.confirmPasswordHide = !ctx.confirmPasswordHide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, MyProfileComponent_mat_error_39_Template, 2, 0, "mat-error", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 20)(41, "div")(42, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyProfileComponent_Template_a_click_42_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " Go back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div")(46, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyProfileComponent_Template_button_click_46_listener() { return ctx.changePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " Change Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, MyProfileComponent_i_48_Template, 1, 0, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()()()()()();
    } if (rf & 2) {
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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTab], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


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
        this.router.events.subscribe((event) => {
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
        }
        else {
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
        }
        else {
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
        }
        else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);
            if (html.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            }
            else if (html.classList.contains('off-canvas-sidebar')) {
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
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 10, vars: 0, consts: [[1, "nav-wrapper"], [1, "navbar", "navbar-expand-lg", "bg-white", "d-md-none", "navbar-absolute", "bg-primary", "fixed-top"], [1, "container-fluid"], [1, "navbar-toggle", "py-2"], ["mat-raised-button", "", "type", "button", 1, "navbar-toggler", 3, "click"], [1, "sr-only"], [1, "navbar-toggler-icon", "icon-bar"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "nav", 1)(2, "div", 2)(3, "div", 3)(4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_4_listener() { return ctx.sidebarToggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Toggle navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6)(8, "span", 6)(9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } }, dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton], styles: [".nav-wrapper[_ngcontent-%COMP%]   nav.navbar[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #eee;\n  box-shadow: 0 -1px 0 #aaa inset;\n}\n.nav-wrapper[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcU2FpJTIwS2lyYW5cXERvY3VtZW50c1xcYWRtaW4taGlzZW5zZVxcaGlzZW5zZS1hZG1pblxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsNkJBQUE7RUFDQSwrQkFBQTtBQ0FKO0FER0U7RUFDRSxZQUFBO0FDREoiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi13cmFwcGVyIHtcclxuICBuYXYubmF2YmFyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgYm94LXNoYWRvdzogMCAtMXB4IDAgI2FhYSBpbnNldDtcclxuICB9XHJcblxyXG4gIC5uYXZiYXItYnJhbmQge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gIH1cclxufVxyXG4iLCIubmF2LXdyYXBwZXIgbmF2Lm5hdmJhciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICBib3gtc2hhZG93OiAwIC0xcHggMCAjYWFhIGluc2V0O1xufVxuLm5hdi13cmFwcGVyIC5uYXZiYXItYnJhbmQge1xuICB3aWR0aDogMTAwcHg7XG59Il19 */"] });


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
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);


















const _c0 = ["inputMMultipleFiles"];
const _c1 = ["input"];
function ProductGroupComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Product Group Code is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProductGroupComponent_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Product Name is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProductGroupComponent_mat_option_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", product_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", product_r11.name, " ");
} }
function ProductGroupComponent_mat_error_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Product Group Type is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProductGroupComponent_mat_option_39_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const category_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", category_r12.parent_category.name, ")");
} }
function ProductGroupComponent_mat_option_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProductGroupComponent_mat_option_39_ng_container_2_Template, 2, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", category_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", category_r12.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", category_r12.parent_category.name);
} }
function ProductGroupComponent_mat_error_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Category is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProductGroupComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29)(1, "mat-checkbox", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Enable/Disable the product variant");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function ProductGroupComponent_mat_tab_42_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Product ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProductGroupComponent_mat_tab_42_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r24.name, " ");
} }
function ProductGroupComponent_mat_tab_42_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Open on Website ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProductGroupComponent_mat_tab_42_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 42)(1, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r18.environment.websiteUrl + element_r25.relative_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r18.environment.websiteUrl, "", element_r25.relative_url, "");
} }
function ProductGroupComponent_mat_tab_42_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c2 = function (a1) { return ["/update/product-varients", a1]; };
function ProductGroupComponent_mat_tab_42_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c2, element_r27.product_id));
} }
function ProductGroupComponent_mat_tab_42_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 45);
} }
function ProductGroupComponent_mat_tab_42_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 46);
} }
function ProductGroupComponent_mat_tab_42_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No Records Found!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProductGroupComponent_mat_tab_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-tab", 9)(1, "div", 31)(2, "table", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](3, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ProductGroupComponent_mat_tab_42_th_4_Template, 2, 0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ProductGroupComponent_mat_tab_42_td_5_Template, 2, 1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](6, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ProductGroupComponent_mat_tab_42_th_7_Template, 2, 0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ProductGroupComponent_mat_tab_42_td_8_Template, 3, 3, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](9, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ProductGroupComponent_mat_tab_42_th_10_Template, 2, 0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ProductGroupComponent_mat_tab_42_td_11_Template, 2, 3, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ProductGroupComponent_mat_tab_42_tr_12_Template, 1, 0, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ProductGroupComponent_mat_tab_42_tr_13_Template, 1, 0, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ProductGroupComponent_mat_tab_42_div_14_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx_r8.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx_r8.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx_r8.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r8.dataSource == null ? null : ctx_r8.dataSource.data == null ? null : ctx_r8.dataSource.data.length));
} }
function ProductGroupComponent_mat_tab_43_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProductGroupComponent_mat_tab_43_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", element_r40.full_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ProductGroupComponent_mat_tab_43_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProductGroupComponent_mat_tab_43_td_14_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 42)(1, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductGroupComponent_mat_tab_43_td_14_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r45); const element_r42 = restoredCtx.$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r44.removeFile(element_r42)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matTooltip", "Delete File");
} }
function ProductGroupComponent_mat_tab_43_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 45);
} }
function ProductGroupComponent_mat_tab_43_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 46);
} }
function ProductGroupComponent_mat_tab_43_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No Records Found!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProductGroupComponent_mat_tab_43_img_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 64);
} if (rf & 2) {
    const img_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", img_r47, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ProductGroupComponent_mat_tab_43_i_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 65);
} }
const _c3 = function (a0) { return { "spiner": a0 }; };
function ProductGroupComponent_mat_tab_43_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-tab", 9)(1, "div", 48)(2, "mat-tab-group", 49)(3, "mat-tab", 9)(4, "div", 48)(5, "h4", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Current Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 31)(8, "table", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](9, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ProductGroupComponent_mat_tab_43_th_10_Template, 2, 0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ProductGroupComponent_mat_tab_43_td_11_Template, 2, 1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](12, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ProductGroupComponent_mat_tab_43_th_13_Template, 2, 0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ProductGroupComponent_mat_tab_43_td_14_Template, 3, 1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ProductGroupComponent_mat_tab_43_tr_15_Template, 1, 0, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ProductGroupComponent_mat_tab_43_tr_16_Template, 1, 0, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ProductGroupComponent_mat_tab_43_div_17_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 52)(19, "h4", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Upload More Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, ProductGroupComponent_mat_tab_43_img_22_Template, 1, 1, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductGroupComponent_mat_tab_43_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r48.browseMultipleFileButtonClicked()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Browse Multiple Files ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "input", 56, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ProductGroupComponent_mat_tab_43_Template_input_change_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r49); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r50.onFileChange($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 58)(28, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductGroupComponent_mat_tab_43_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r49); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r51.uploadMultipleImages()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, ProductGroupComponent_mat_tab_43_i_30_Template, 1, 0, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selectedIndex", ctx_r9.imagesTabSelectedIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "Description Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx_r9.productImagesDataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx_r9.productImagesDisplayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx_r9.productImagesDisplayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r9.productImagesDataSource == null ? null : ctx_r9.productImagesDataSource.data == null ? null : ctx_r9.productImagesDataSource.data.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r9.myFilesImages);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c3, ctx_r9.isLoader));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.isLoader);
} }
function ProductGroupComponent_button_49_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function ProductGroupComponent_button_49_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function ProductGroupComponent_button_49_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 65);
} }
const _c4 = function (a0) { return { "mr-2": a0 }; };
function ProductGroupComponent_button_49_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductGroupComponent_button_49_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r55.saveProductDetailsForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProductGroupComponent_button_49_ng_container_2_Template, 2, 0, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProductGroupComponent_button_49_ng_container_3_Template, 2, 0, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ProductGroupComponent_button_49_i_4_Template, 1, 0, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c4, ctx_r10.isLoading));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.componentType == "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.componentType == "update");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.isLoading);
} }
class ProductGroupComponent {
    constructor(location, api, fb, toaster, activatedroute, router) {
        this.location = location;
        this.api = api;
        this.fb = fb;
        this.toaster = toaster;
        this.activatedroute = activatedroute;
        this.router = router;
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
        this.products = [];
        // purchaseLinksMetaData: any = [];
        this.componentType = 'create';
        this.selectedIndex = 0;
        this.purchaseLinks = {};
        this.displayedColumns = ['Product', 'Open on Website', 'Actions']; //'Purchase Link'
        this.productImagesDisplayedColumns = ['Image', 'Actions'];
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
    get formControl() {
        return this.productVarientForm.controls;
    }
    ngOnInit() {
        this.activatedroute.data.subscribe((data) => {
            console.log(data);
            this.componentType = data.type;
            this.getMetaData(data);
        });
    }
    getMetaData(data) {
        this.api.getProductGroupCreationMetaData().subscribe({
            next: (res) => {
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
            next: (res) => {
                console.log(res);
                this.products = res?.data?.products;
                // this.purchaseLinksMetaData = this.metaData?.product_variant_purchase_link_vendors;
                // this.purchaseLinksMetaData.forEach((obj: any) => {
                //   this.purchaseLinks[obj.code] = res.data.product_variant_purchase_links.find((o: any) => o.vendor == obj.code)?.purchase_link;
                // })
                this.productVarientForm.patchValue({
                    code: res?.data?.code,
                    name: res?.data?.name,
                    product_type_id: res?.data?.product_type_id,
                    category_id: res?.data?.category_products[0].id,
                    is_enabled: res?.data?.is_enabled,
                });
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource(res.data.product_variants);
                // res.data.thumb_image.type = 'Large Size'
                // res.data.thumb_image_medium.type = 'Medium Size'
                this.imagesDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource([
                    res.data?.thumb_image,
                    res.data?.thumb_image_medium,
                ]);
                this.productImagesDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource(res.data.description_images);
            },
            error: (err) => {
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
            this.api.createProductGroup({ ...this.productVarientForm.value, ...category_products }).subscribe({
                next: (res) => {
                    this.isLoading = false;
                    console.log(res);
                    this.toaster.success(res.message);
                    this.router.navigate(['/update/product-group', res.data.id]);
                },
                error: (err) => {
                    this.isLoading = false;
                    console.log(err);
                    this.toaster.error(err.error.message);
                }
            });
        }
        else {
            console.log(this.selectedIndex);
            if (this.selectedIndex == 0) {
                this.productVarientForm.markAllAsTouched();
                this.productVarientFormSubmitted = true;
                if (!this.productVarientForm.valid) {
                    return;
                }
                this.isLoading = true;
                this.productVarientForm.value.is_enabled = this.productVarientForm.value.is_enabled ? 1 : 0;
                this.api.updateProductGroupInfo(this.activatedroute.snapshot.params['id'], this.productVarientForm.value).subscribe({
                    next: (res) => {
                        this.isLoading = false;
                        console.log(res);
                        this.toaster.success(res.message);
                    },
                    error: (err) => {
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
        }
        else {
            mediaType = 'thumb_image_medium';
        }
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (_event) => {
            this.imagesDataSource.data[i].full_url = reader.result;
        };
        this.imagesDataSource.data[i].media_type = mediaType;
        this.imagesDataSource.data[i].file = event.target.files[0];
    }
    uploadImages() {
        this.imagesCatalogMedia = [...this.imagesDataSource.data];
        // console.log(this.imagesCatalogMedia);
        // const catalog = [];
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
            next: (res) => {
                console.log(res);
                this.toaster.success(res.message);
            },
            error: (err) => {
                console.log(err);
                this.toaster.error(err.error.message);
            }
        });
    }
    removeFile(ele) {
        console.log(ele);
        this.api.deleteFiles(ele.id).subscribe({
            next: (res) => {
                console.log(res);
                this.loadProductInfo();
                this.toaster.success(res.message);
            },
            error: err => {
                console.log(err);
                this.toaster.error(err.error.message);
            }
        });
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
            reader.onload = (_event) => {
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
            next: (res) => {
                console.log(res);
                this.toaster.success(res.message);
                this.loadProductInfo();
            },
            error: (err) => {
                console.log(err);
                this.toaster.error(err.error.message);
            }
        });
    }
    goBack() {
        this.location.back();
    }
}
ProductGroupComponent.ɵfac = function ProductGroupComponent_Factory(t) { return new (t || ProductGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
ProductGroupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProductGroupComponent, selectors: [["app-product-group"]], viewQuery: function ProductGroupComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.inputMultipleFiles = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.inputForFile = _t);
    } }, decls: 50, vars: 13, consts: [[1, "pb-1"], [1, "card"], [1, "card-header", "card-box-shadow", "bt-4"], [1, "card-title", "m-0", "font-weight-bold"], [1, "card-body"], [1, "row"], [1, "col-sm-12", "mt-3"], ["animationDuration", "0ms", 3, "selectedIndex", "selectedTabChange"], ["ctdTabset", ""], [3, "label"], [1, "row", "p-3"], [1, "col-md-12"], [3, "formGroup"], [1, "col-12", "col-sm-6", "col-md-6", "col-lg-3", "form-group"], ["appearance", "outline"], [1, "mat-label-field-padding"], ["matInput", "", "formControlName", "code", "type", "text"], [4, "ngIf"], ["matInput", "", "formControlName", "name", "type", "text"], ["formControlName", "product_type_id"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "category_id"], ["class", "col-12 form-group", 4, "ngIf"], [3, "label", 4, "ngIf"], [1, "col-md-12", "mt-4", "border-top", "p-2", "button-container", "d-flex", "justify-content-between", "align-items-center"], [1, "forgot-link", 2, "color", "black", "cursor", "pointer", 3, "click"], [1, "fas", "fa-arrow-left"], ["mat-raised-button", "", "type", "submit", "class", "btn btn-info", "style", "display: flex; gap: 12px;", 3, "click", 4, "ngIf"], [3, "value"], [1, "col-12", "form-group"], ["formControlName", "is_enabled", 1, "d-block", "example-margin"], [1, "w-100", "table-responsive"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "Product"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Open on Website"], ["matColumnDef", "Actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "text-center my-3", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", ""], ["target", "_blank", 3, "href"], [1, "fas", "fa-2x", "fa-pen-square", "pointer", 2, "font-size", "1.6em", "color", "#5196f0", 3, "routerLink"], ["mat-header-row", ""], ["mat-row", ""], [1, "text-center", "my-3"], [1, "m-3"], ["animationDuration", "0ms", 3, "selectedIndex"], [2, "font-weight", "bold"], ["matColumnDef", "Image"], [1, "m-3", 2, "margin-top", "80px !important"], [1, "d-flex", "my-3", 2, "gap", "1rem"], ["width", "100", "height", "100", 3, "src", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "btn", "btn-info", 2, "font-size", "12px", 3, "click"], ["multiple", "", "type", "file", "hidden", "", 3, "change"], ["inputMMultipleFiles", ""], [1, "pt-1", "m-3"], ["mat-raised-button", "", "mat-button", "", "color", "primary", "type", "submit", 1, "btn-info", 2, "font-size", "16px", 3, "ngClass", "click"], ["class", "fas fa-circle-notch fa-spin ", 4, "ngIf"], ["width", "100", "height", "100", 1, "my-2", 3, "src"], ["matTooltipClass", "custom-tooltip", 1, "pointer", 3, "matTooltip", "click"], [1, "fas", "fa-2x", "fa-trash-alt", 2, "font-size", "1.6em", "color", "#c41414"], ["width", "100", "height", "100", 3, "src"], [1, "fas", "fa-circle-notch", "fa-spin"], ["mat-raised-button", "", "type", "submit", 1, "btn", "btn-info", 2, "display", "flex", "gap", "12px", 3, "click"], [3, "ngClass"], ["class", "fas fa-circle-notch fa-spin", 4, "ngIf"]], template: function ProductGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Product Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "mat-tab-group", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectedTabChange", function ProductGroupComponent_Template_mat_tab_group_selectedTabChange_8_listener($event) { return ctx.changeTab($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-tab", 9)(11, "div", 10)(12, "div", 11)(13, "form", 12)(14, "div", 5)(15, "div", 13)(16, "mat-form-field", 14)(17, "mat-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Product Group Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ProductGroupComponent_mat_error_20_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 13)(22, "mat-form-field", 14)(23, "mat-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, ProductGroupComponent_mat_error_26_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 13)(28, "mat-form-field", 14)(29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Product Group Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, ProductGroupComponent_mat_option_32_Template, 2, 2, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, ProductGroupComponent_mat_error_33_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 13)(35, "mat-form-field", 14)(36, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "mat-select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, ProductGroupComponent_mat_option_39_Template, 3, 3, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, ProductGroupComponent_mat_error_40_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, ProductGroupComponent_div_41_Template, 3, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, ProductGroupComponent_mat_tab_42_Template, 15, 5, "mat-tab", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, ProductGroupComponent_mat_tab_43_Template, 31, 12, "mat-tab", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 24)(45, "div")(46, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductGroupComponent_Template_a_click_46_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, " Go back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, ProductGroupComponent_button_49_Template, 5, 6, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedIndex == 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckbox, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__.MatTab, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltip], styles: ["input[type=file][_ngcontent-%COMP%] {\n  opacity: 0;\n  z-index: -1;\n  position: absolute;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtZ3JvdXAuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFNhaSUyMEtpcmFuXFxEb2N1bWVudHNcXGFkbWluLWhpc2Vuc2VcXGhpc2Vuc2UtYWRtaW5cXHNyY1xcYXBwXFxjb21wb25lbnRzXFxwcm9kdWN0LWdyb3VwXFxwcm9kdWN0LWdyb3VwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtBQ0VKIiwiZmlsZSI6InByb2R1Y3QtZ3JvdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxudGFibGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSIsImlucHV0W3R5cGU9ZmlsZV0ge1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAtMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });


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
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);










function ProductGroupsListComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductGroupsListComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r10.name, " ");
} }
function ProductGroupsListComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductGroupsListComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r11.code, " ");
} }
function ProductGroupsListComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Product Group Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductGroupsListComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r12.product_type.name, " ");
} }
function ProductGroupsListComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/update/product-group", a1]; };
function ProductGroupsListComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 20)(1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, element_r13.id));
} }
function ProductGroupsListComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 23);
} }
function ProductGroupsListComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 24);
} }
const _c1 = function () { return [5, 10, 20]; };
class ProductGroupsListComponent {
    constructor(api, toaster, location, router) {
        this.api = api;
        this.toaster = toaster;
        this.location = location;
        this.router = router;
        this.displayedColumns = ['name', 'code', 'Product Group Type', 'Actions'];
        this.isLoading = true;
        this.pageSize = 10;
    }
    ngAfterViewInit() {
        // this.dataSource.paginator = this.paginator;
    }
    ngOnInit() {
        this.getProductVarientList();
    }
    getProductVarientList(params = { page: 1, per_page: 10 }) {
        this.api.getProductGroupList(params).subscribe({
            next: (res) => {
                console.log(res);
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource(res.data.data);
                setTimeout(() => {
                    this.paginator.pageIndex = params.page - 1;
                    this.paginator.length = res.data.total;
                });
                this.dataSource.paginator = this.paginator;
                this.isLoading = false;
            },
            error: (err) => {
                this.isLoading = false;
                console.log(err);
                this.toaster.error(err.error.message);
            }
        });
    }
    pageChanged(event) {
        console.log(event);
        this.getProductVarientList({ page: event.pageIndex + 1, per_page: event.pageSize });
    }
    goBack() {
        this.location.back();
    }
}
ProductGroupsListComponent.ɵfac = function ProductGroupsListComponent_Factory(t) { return new (t || ProductGroupsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
ProductGroupsListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductGroupsListComponent, selectors: [["app-product-groups-list"]], viewQuery: function ProductGroupsListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 28, vars: 6, consts: [[1, "pb-1"], [1, "card"], [1, "card-header", "card-box-shadow", "bt-4"], [1, "card-title", "m-0", "font-weight-bold"], [1, "card-body"], [1, "w-100", "table-responsive"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "code"], ["matColumnDef", "Product Group Type"], ["matColumnDef", "Actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions", "pageSize", "page"], [1, "col-md-12", "border-top", "p-2", "button-container", "d-flex", "justify-content-between", "align-items-center"], [1, "forgot-link", 2, "color", "black", "cursor", "pointer", 3, "click"], [1, "fas", "fa-arrow-left"], ["mat-header-cell", ""], ["mat-cell", ""], ["matTooltip", "Edit Account", "matTooltipClass", "custom-tooltip", 3, "routerLink"], [1, "fas", "fa-2x", "text-dark", "fa-pen-square"], ["mat-header-row", ""], ["mat-row", ""]], template: function ProductGroupsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Product Group List");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ProductGroupsListComponent_th_9_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ProductGroupsListComponent_td_10_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](11, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ProductGroupsListComponent_th_12_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ProductGroupsListComponent_td_13_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](14, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ProductGroupsListComponent_th_15_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ProductGroupsListComponent_td_16_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](17, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ProductGroupsListComponent_th_18_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ProductGroupsListComponent_td_19_Template, 3, 3, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ProductGroupsListComponent_tr_20_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ProductGroupsListComponent_tr_21_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-paginator", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("page", function ProductGroupsListComponent_Template_mat_paginator_page_22_listener($event) { return ctx.pageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 16)(24, "div")(25, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductGroupsListComponent_Template_a_click_25_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Go back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c1))("pageSize", ctx.pageSize);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRow, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatTooltip], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtZ3JvdXBzLWxpc3QuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFNhaSUyMEtpcmFuXFxEb2N1bWVudHNcXGFkbWluLWhpc2Vuc2VcXGhpc2Vuc2UtYWRtaW5cXHNyY1xcYXBwXFxjb21wb25lbnRzXFxwcm9kdWN0LWdyb3Vwcy1saXN0XFxwcm9kdWN0LWdyb3Vwcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKIiwiZmlsZSI6InByb2R1Y3QtZ3JvdXBzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"] });


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
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);










function ProductVarientsListComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductVarientsListComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r12.name, " ");
} }
function ProductVarientsListComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductVarientsListComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r13.code, " ");
} }
function ProductVarientsListComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Product Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductVarientsListComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r14.product.code, " ");
} }
function ProductVarientsListComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Variant Size ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductVarientsListComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r15.variant_size, " ");
} }
function ProductVarientsListComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/update/product-varients", a1]; };
function ProductVarientsListComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 21)(1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, element_r16.id));
} }
function ProductVarientsListComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 24);
} }
function ProductVarientsListComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 25);
} }
const _c1 = function () { return [5, 10, 20]; };
class ProductVarientsListComponent {
    constructor(api, toaster, location, router) {
        this.api = api;
        this.toaster = toaster;
        this.location = location;
        this.router = router;
        this.displayedColumns = ['name', 'code', 'Product Code', 'size', 'Actions'];
        this.isLoading = true;
        this.pageSize = 10;
    }
    ngAfterViewInit() {
        // this.dataSource.paginator = this.paginator;
    }
    ngOnInit() {
        this.getProductVarientList();
    }
    getProductVarientList(params = { page: 1, per_page: 10 }) {
        this.api.getProductVarientList(params).subscribe({
            next: (res) => {
                console.log(res);
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource(res.data.data);
                setTimeout(() => {
                    this.paginator.pageIndex = params.page - 1;
                    this.paginator.length = res.data.total;
                });
                this.dataSource.paginator = this.paginator;
                this.isLoading = false;
            },
            error: (err) => {
                this.isLoading = false;
                console.log(err);
                this.toaster.error(err.error.message);
            }
        });
    }
    pageChanged(event) {
        console.log(event);
        this.pageSize = event.pageSize;
        this.getProductVarientList({ page: event.pageIndex + 1, per_page: this.pageSize });
    }
    goBack() {
        this.location.back();
    }
}
ProductVarientsListComponent.ɵfac = function ProductVarientsListComponent_Factory(t) { return new (t || ProductVarientsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
ProductVarientsListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductVarientsListComponent, selectors: [["app-product-varients-list"]], viewQuery: function ProductVarientsListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 31, vars: 6, consts: [[1, "pb-1"], [1, "card"], [1, "card-header", "card-box-shadow", "bt-4"], [1, "card-title", "m-0", "font-weight-bold"], [1, "card-body"], [1, "w-100", "table-responsive"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "code"], ["matColumnDef", "Product Code"], ["matColumnDef", "size"], ["matColumnDef", "Actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions", "pageSize", "page"], [1, "col-md-12", "border-top", "p-2", "button-container", "d-flex", "justify-content-between", "align-items-center"], [1, "forgot-link", 2, "color", "black", "cursor", "pointer", 3, "click"], [1, "fas", "fa-arrow-left"], ["mat-header-cell", ""], ["mat-cell", ""], ["matTooltip", "Edit Account", "matTooltipClass", "custom-tooltip", 3, "routerLink"], [1, "fas", "fa-2x", "text-dark", "fa-pen-square"], ["mat-header-row", ""], ["mat-row", ""]], template: function ProductVarientsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Product Variants List");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ProductVarientsListComponent_th_9_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ProductVarientsListComponent_td_10_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](11, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ProductVarientsListComponent_th_12_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ProductVarientsListComponent_td_13_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](14, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ProductVarientsListComponent_th_15_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ProductVarientsListComponent_td_16_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](17, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ProductVarientsListComponent_th_18_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ProductVarientsListComponent_td_19_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](20, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ProductVarientsListComponent_th_21_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ProductVarientsListComponent_td_22_Template, 3, 3, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ProductVarientsListComponent_tr_23_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ProductVarientsListComponent_tr_24_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-paginator", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("page", function ProductVarientsListComponent_Template_mat_paginator_page_25_listener($event) { return ctx.pageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 17)(27, "div")(28, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductVarientsListComponent_Template_a_click_28_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Go back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c1))("pageSize", ctx.pageSize);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRow, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatTooltip], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtdmFyaWVudHMtbGlzdC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcU2FpJTIwS2lyYW5cXERvY3VtZW50c1xcYWRtaW4taGlzZW5zZVxcaGlzZW5zZS1hZG1pblxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXHByb2R1Y3QtdmFyaWVudHMtbGlzdFxccHJvZHVjdC12YXJpZW50cy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKIiwiZmlsZSI6InByb2R1Y3QtdmFyaWVudHMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59IiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"] });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);

















const _c0 = ["inputMMultipleFiles"];
const _c1 = ["input"];
function ProductsComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Product Code is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductsComponent_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Product Name is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductsComponent_mat_error_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Product Size is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductsComponent_mat_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", product_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", product_r11.name, " ");
} }
function ProductsComponent_mat_error_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Product Group is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductsComponent_mat_error_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Product Group is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductsComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22)(1, "mat-checkbox", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Enable/Disable the product variant");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function ProductsComponent_mat_tab_47_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Vendor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductsComponent_mat_tab_47_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r21.name, " ");
} }
function ProductsComponent_mat_tab_47_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Purchase Link ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductsComponent_mat_tab_47_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44)(1, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r15.purchaseLinks[element_r22.code], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r15.purchaseLinks[element_r22.code]);
} }
function ProductsComponent_mat_tab_47_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Update Link ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductsComponent_mat_tab_47_td_11_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44)(1, "mat-form-field", 46)(2, "mat-label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProductsComponent_mat_tab_47_td_11_Template_input_ngModelChange_4_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const element_r24 = restoredCtx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]((ctx_r26.purchaseLinks[element_r24.code] = $event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Update ", element_r24.name, " Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r17.purchaseLinks[element_r24.code]);
} }
function ProductsComponent_mat_tab_47_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 48);
} }
function ProductsComponent_mat_tab_47_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 49);
} }
function ProductsComponent_mat_tab_47_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No Records Found!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductsComponent_mat_tab_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-tab", 9)(1, "div", 33)(2, "table", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](3, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProductsComponent_mat_tab_47_th_4_Template, 2, 0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProductsComponent_mat_tab_47_td_5_Template, 2, 1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](6, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProductsComponent_mat_tab_47_th_7_Template, 2, 0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProductsComponent_mat_tab_47_td_8_Template, 3, 2, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](9, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ProductsComponent_mat_tab_47_th_10_Template, 2, 0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ProductsComponent_mat_tab_47_td_11_Template, 5, 2, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ProductsComponent_mat_tab_47_tr_12_Template, 1, 0, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ProductsComponent_mat_tab_47_tr_13_Template, 1, 0, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ProductsComponent_mat_tab_47_div_14_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", "Purchase Links");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r8.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r8.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r8.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r8.dataSource == null ? null : ctx_r8.dataSource.data == null ? null : ctx_r8.dataSource.data.length));
} }
function ProductsComponent_mat_tab_48_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Image Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductsComponent_mat_tab_48_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r49.type, " ");
} }
function ProductsComponent_mat_tab_48_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Current Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductsComponent_mat_tab_48_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", element_r50.full_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ProductsComponent_mat_tab_48_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Upload New Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductsComponent_mat_tab_48_td_14_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44)(1, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_mat_tab_48_td_14_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r56); const i_r53 = restoredCtx.index; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r55.browseFileButtonClicked(i_r53)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Browse Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 71, 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ProductsComponent_mat_tab_48_td_14_Template_input_change_3_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r56); const element_r52 = restoredCtx.$implicit; const i_r53 = restoredCtx.index; const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r57.inputChangeEventListener($event, element_r52.type, i_r53)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function ProductsComponent_mat_tab_48_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 48);
} }
function ProductsComponent_mat_tab_48_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 49);
} }
function ProductsComponent_mat_tab_48_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No Records Found!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductsComponent_mat_tab_48_i_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 73);
} }
function ProductsComponent_mat_tab_48_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductsComponent_mat_tab_48_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", element_r59.full_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ProductsComponent_mat_tab_48_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductsComponent_mat_tab_48_td_33_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44)(1, "a", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_mat_tab_48_td_33_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const element_r61 = restoredCtx.$implicit; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r63.removeFile(element_r61)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", "Delete File");
} }
function ProductsComponent_mat_tab_48_tr_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 48);
} }
function ProductsComponent_mat_tab_48_tr_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 49);
} }
function ProductsComponent_mat_tab_48_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No Records Found!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductsComponent_mat_tab_48_img_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 76);
} if (rf & 2) {
    const img_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r66, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ProductsComponent_mat_tab_48_i_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 73);
} }
const _c2 = function (a0) { return { "spiner": a0 }; };
function ProductsComponent_mat_tab_48_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-tab", 9)(1, "div", 51)(2, "mat-tab-group", 52)(3, "mat-tab", 9)(4, "div", 53)(5, "table", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](6, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProductsComponent_mat_tab_48_th_7_Template, 2, 0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProductsComponent_mat_tab_48_td_8_Template, 2, 1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](9, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ProductsComponent_mat_tab_48_th_10_Template, 2, 0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ProductsComponent_mat_tab_48_td_11_Template, 2, 1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](12, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ProductsComponent_mat_tab_48_th_13_Template, 2, 0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ProductsComponent_mat_tab_48_td_14_Template, 5, 0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ProductsComponent_mat_tab_48_tr_15_Template, 1, 0, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ProductsComponent_mat_tab_48_tr_16_Template, 1, 0, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ProductsComponent_mat_tab_48_div_17_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 57)(19, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_mat_tab_48_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r68); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r67.uploadImages()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ProductsComponent_mat_tab_48_i_21_Template, 1, 0, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-tab", 9)(23, "div", 51)(24, "h4", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Current Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 33)(27, "table", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](28, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ProductsComponent_mat_tab_48_th_29_Template, 2, 0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ProductsComponent_mat_tab_48_td_30_Template, 2, 1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](31, 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ProductsComponent_mat_tab_48_th_32_Template, 2, 0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, ProductsComponent_mat_tab_48_td_33_Template, 3, 1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, ProductsComponent_mat_tab_48_tr_34_Template, 1, 0, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, ProductsComponent_mat_tab_48_tr_35_Template, 1, 0, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, ProductsComponent_mat_tab_48_div_36_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 63)(38, "h4", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Upload More Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, ProductsComponent_mat_tab_48_img_41_Template, 1, 1, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_mat_tab_48_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r68); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r69.browseMultipleFileButtonClicked()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Browse Multiple Files ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "input", 67, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ProductsComponent_mat_tab_48_Template_input_change_44_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r68); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r70.onFileChange($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 57)(47, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_mat_tab_48_Template_button_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r68); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r71.uploadMultipleImages()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, ProductsComponent_mat_tab_48_i_49_Template, 1, 0, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", "Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedIndex", ctx_r9.imagesTabSelectedIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", "Thumb Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r9.imagesDataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r9.imagesDisplayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r9.imagesDisplayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r9.imagesDataSource == null ? null : ctx_r9.imagesDataSource.data == null ? null : ctx_r9.imagesDataSource.data.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c2, ctx_r9.isLoader));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.isLoader);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", "Product Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r9.productImagesDataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r9.productImagesDisplayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r9.productImagesDisplayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r9.productImagesDataSource == null ? null : ctx_r9.productImagesDataSource.data == null ? null : ctx_r9.productImagesDataSource.data.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r9.myFilesImages);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](19, _c2, ctx_r9.isLoader));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.isLoader);
} }
function ProductsComponent_button_54_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function ProductsComponent_button_54_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function ProductsComponent_button_54_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 73);
} }
const _c3 = function (a0) { return { "mr-2": a0 }; };
function ProductsComponent_button_54_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_button_54_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r76); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r75.saveProductDetailsForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProductsComponent_button_54_ng_container_2_Template, 2, 0, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProductsComponent_button_54_ng_container_3_Template, 2, 0, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProductsComponent_button_54_i_4_Template, 1, 0, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c3, ctx_r10.isLoading));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.componentType == "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.componentType == "update");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.isLoading);
} }
class ProductsComponent {
    constructor(location, api, fb, toaster, activatedroute, router) {
        this.location = location;
        this.api = api;
        this.fb = fb;
        this.toaster = toaster;
        this.activatedroute = activatedroute;
        this.router = router;
        this.products = [];
        this.purchaseLinksMetaData = [];
        this.componentType = 'create';
        this.selectedIndex = 0;
        this.purchaseLinks = {};
        this.displayedColumns = ['Vendor', 'Update Link']; //'Purchase Link'
        this.imagesDisplayedColumns = ['Image Type', 'Current Image', 'Upload New Image'];
        this.productImagesDisplayedColumns = ['Image', 'Actions'];
        this.isLoader = false;
        this.isLoading = false;
        this.productVarientFormSubmitted = false;
        this.productVarientForm = this.fb.group({
            code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            variant_size: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            product_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            short_description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            is_enabled: [0]
        });
        this.imagesCatalogMedia = [];
        this.myFiles = [];
        this.myFilesImages = [];
    }
    get formControl() {
        return this.productVarientForm.controls;
    }
    ngOnInit() {
        this.activatedroute.data.subscribe((data) => {
            console.log(data);
            this.componentType = data.type;
            this.getMetaData(data);
        });
    }
    getMetaData(data) {
        this.api.getProductVarientCreationMetaData().subscribe({
            next: (res) => {
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
            next: (res) => {
                console.log(res);
                this.products = res?.data?.products;
                this.purchaseLinksMetaData = this.metaData?.product_variant_purchase_link_vendors;
                this.purchaseLinksMetaData.forEach((obj) => {
                    this.purchaseLinks[obj.code] = res.data.product_variant_purchase_links.find((o) => o.vendor == obj.code)?.purchase_link;
                });
                this.productVarientForm.patchValue({
                    code: res?.data?.code,
                    name: res?.data?.name,
                    variant_size: res?.data?.variant_size,
                    product_id: res?.data?.product_id,
                    short_description: res?.data?.short_description,
                    is_enabled: res?.data?.is_enabled,
                });
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource(this.metaData?.product_variant_purchase_link_vendors);
                res.data.thumb_image.type = 'Large Size';
                res.data.thumb_image_medium.type = 'Medium Size';
                this.imagesDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource([
                    res.data?.thumb_image,
                    res.data?.thumb_image_medium,
                ]);
                this.productImagesDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource(res.data.slider_images);
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
                next: (res) => {
                    this.isLoading = false;
                    console.log(res);
                    this.toaster.success(res.message);
                    this.router.navigate(['/update/product-varients', res.data.id]);
                },
                error: (err) => {
                    this.isLoading = false;
                    console.log(err);
                    this.toaster.error(err.error.message);
                }
            });
        }
        else {
            console.log(this.selectedIndex);
            if (this.selectedIndex == 0) {
                this.productVarientForm.markAllAsTouched();
                this.productVarientFormSubmitted = true;
                if (!this.productVarientForm.valid) {
                    return;
                }
                this.isLoading = true;
                this.productVarientForm.value.is_enabled = this.productVarientForm.value.is_enabled ? 1 : 0;
                this.api.updateProductVarientInfo(this.activatedroute.snapshot.params['id'], this.productVarientForm.value).subscribe({
                    next: (res) => {
                        this.isLoading = false;
                        console.log(res);
                        this.toaster.success(res.message);
                    },
                    error: (err) => {
                        this.isLoading = false;
                        console.log(err);
                        this.toaster.error(err.error.message);
                    }
                });
            }
            else if (this.selectedIndex == 1) {
                this.isLoading = true;
                console.log(this.purchaseLinks);
                this.api.updateProductVarientInfo(this.activatedroute.snapshot.params['id'], this.purchaseLinks).subscribe({
                    next: (res) => {
                        this.isLoading = false;
                        console.log(res);
                        this.toaster.success(res.message);
                    },
                    error: (err) => {
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
        }
        else {
            mediaType = 'thumb_image_medium';
        }
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (_event) => {
            this.imagesDataSource.data[i].full_url = reader.result;
        };
        this.imagesDataSource.data[i].media_type = mediaType;
        this.imagesDataSource.data[i].file = event.target.files[0];
    }
    uploadImages() {
        this.imagesCatalogMedia = [...this.imagesDataSource.data];
        // console.log(this.imagesCatalogMedia);
        // const catalog = [];
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
            next: (res) => {
                console.log(res);
                this.toaster.success(res.message);
            },
            error: (err) => {
                console.log(err);
                this.toaster.error(err.error.message);
            }
        });
    }
    removeFile(ele) {
        console.log(ele);
        this.api.deleteFiles(ele.id).subscribe({
            next: (res) => {
                console.log(res);
                this.loadProductInfo();
                this.toaster.success(res.message);
            },
            error: err => {
                console.log(err);
                this.toaster.error(err.error.message);
            }
        });
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
            reader.onload = (_event) => {
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
            next: (res) => {
                console.log(res);
                this.toaster.success(res.message);
                this.loadProductInfo();
            },
            error: (err) => {
                console.log(err);
                this.toaster.error(err.error.message);
            }
        });
    }
    goBack() {
        this.location.back();
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
ProductsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], viewQuery: function ProductsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.inputMultipleFiles = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.inputForFile = _t);
    } }, decls: 55, vars: 13, consts: [[1, "pb-1"], [1, "card"], [1, "card-header", "card-box-shadow", "bt-4"], [1, "card-title", "m-0", "font-weight-bold"], [1, "card-body"], [1, "row"], [1, "col-sm-12", "mt-3"], ["animationDuration", "0ms", 3, "selectedIndex", "selectedTabChange"], ["ctdTabset", ""], [3, "label"], [1, "row", "p-3"], [1, "col-md-12"], [3, "formGroup"], [1, "col-12", "col-sm-6", "col-md-6", "col-lg-3", "form-group"], ["appearance", "outline"], [1, "mat-label-field-padding"], ["matInput", "", "formControlName", "code", "type", "text"], [4, "ngIf"], ["matInput", "", "formControlName", "name", "type", "text"], ["matInput", "", "formControlName", "variant_size", "type", "text"], ["formControlName", "product_id"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-12", "form-group"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "trim", "blur", "rows", "5", "formControlName", "short_description", 2, "resize", "none", "overflow-y", "auto", "padding", "8px"], ["class", "col-12 form-group", 4, "ngIf"], [3, "label", 4, "ngIf"], [1, "col-md-12", "mt-4", "border-top", "p-2", "button-container", "d-flex", "justify-content-between", "align-items-center"], [1, "forgot-link", 2, "color", "black", "cursor", "pointer", 3, "click"], [1, "fas", "fa-arrow-left"], ["mat-raised-button", "", "type", "submit", "class", "btn btn-info", "style", "display: flex; gap: 12px;", 3, "click", 4, "ngIf"], [3, "value"], ["formControlName", "is_enabled", 1, "d-block", "example-margin"], [1, "w-100", "table-responsive"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "Vendor"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Purchase Link"], ["matColumnDef", "Update Link"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "text-center my-3", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", ""], ["target", "_blank", 3, "href"], ["appearance", "outline", 1, "my-2"], ["matInput", "", "type", "text", 3, "ngModel", "ngModelChange"], ["mat-header-row", ""], ["mat-row", ""], [1, "text-center", "my-3"], [1, "m-3"], ["animationDuration", "0ms", 3, "selectedIndex"], [1, "w-100", "m-3", "table-responsive"], ["matColumnDef", "Image Type"], ["matColumnDef", "Current Image"], ["matColumnDef", "Upload New Image"], [1, "pt-1", "m-3"], ["mat-raised-button", "", "mat-button", "", "color", "primary", "type", "submit", 1, "btn-info", 2, "font-size", "16px", 3, "ngClass", "click"], ["class", "fas fa-circle-notch fa-spin ", 4, "ngIf"], [2, "font-weight", "bold"], ["matColumnDef", "Image"], ["matColumnDef", "Actions"], [1, "m-3", 2, "margin-top", "80px !important"], [1, "d-flex", "my-3", 2, "gap", "1rem"], ["width", "100", "height", "100", 3, "src", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "btn", "btn-info", 2, "font-size", "12px", 3, "click"], ["multiple", "", "type", "file", "hidden", "", 3, "change"], ["inputMMultipleFiles", ""], ["width", "100", "height", "100", 1, "my-2", 3, "src"], ["href", "javascript:void(0);", 3, "click"], ["type", "file", "hidden", "", 3, "change"], ["input", ""], [1, "fas", "fa-circle-notch", "fa-spin"], ["matTooltipClass", "custom-tooltip", 1, "pointer", 3, "matTooltip", "click"], [1, "fas", "fa-2x", "fa-trash-alt", 2, "font-size", "1.6em", "color", "#c41414"], ["width", "100", "height", "100", 3, "src"], ["mat-raised-button", "", "type", "submit", 1, "btn", "btn-info", 2, "display", "flex", "gap", "12px", 3, "click"], [3, "ngClass"], ["class", "fas fa-circle-notch fa-spin", 4, "ngIf"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "mat-tab-group", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedTabChange", function ProductsComponent_Template_mat_tab_group_selectedTabChange_8_listener($event) { return ctx.changeTab($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-tab", 9)(11, "div", 10)(12, "div", 11)(13, "form", 12)(14, "div", 5)(15, "div", 13)(16, "mat-form-field", 14)(17, "mat-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Product Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ProductsComponent_mat_error_20_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13)(22, "mat-form-field", 14)(23, "mat-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ProductsComponent_mat_error_26_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 13)(28, "mat-form-field", 14)(29, "mat-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Product Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ProductsComponent_mat_error_32_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 13)(34, "mat-form-field", 14)(35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Product Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, ProductsComponent_mat_option_38_Template, 2, 2, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, ProductsComponent_mat_error_39_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 22)(41, "mat-form-field", 23)(42, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Short Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, ProductsComponent_mat_error_45_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, ProductsComponent_div_46_Template, 3, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, ProductsComponent_mat_tab_47_Template, 15, 5, "mat-tab", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, ProductsComponent_mat_tab_48_Template, 50, 21, "mat-tab", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 27)(50, "div")(51, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_Template_a_click_51_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " Go back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, ProductsComponent_button_54_Template, 5, 6, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedIndex", ctx.selectedIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.productVarientForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.productVarientFormSubmitted || ctx.formControl["code"].errors && ctx.formControl["code"].errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.productVarientFormSubmitted || ctx.formControl["name"].errors && ctx.formControl["name"].errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.productVarientFormSubmitted || ctx.formControl["variant_size"].errors && ctx.formControl["variant_size"].errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.productVarientFormSubmitted || ctx.formControl["product_id"].errors && ctx.formControl["product_id"].errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.productVarientFormSubmitted || ctx.formControl["short_description"].errors && ctx.formControl["short_description"].errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.componentType == "update");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.componentType == "update");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.componentType == "update");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedIndex != 2);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckbox, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRow, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__.MatTab, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltip], styles: ["input[type=file][_ngcontent-%COMP%] {\n  opacity: 0;\n  z-index: -1;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxTYWklMjBLaXJhblxcRG9jdW1lbnRzXFxhZG1pbi1oaXNlbnNlXFxoaXNlbnNlLWFkbWluXFxzcmNcXGFwcFxcY29tcG9uZW50c1xccHJvZHVjdHNcXHByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59IiwiaW5wdXRbdHlwZT1maWxlXSB7XG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IC0xO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59Il19 */"] });


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






function SidebarComponent_ng_container_13_ng_container_1_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 18)(1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_ng_container_13_ng_container_1_li_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.routeRedirection(item_r1 == null ? null : item_r1.path)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.title);
} }
function SidebarComponent_ng_container_13_ng_container_1_li_2_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 25)(2, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_ng_container_13_ng_container_1_li_2_ng_container_8_ng_container_1_Template_a_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const dropdownItem_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); ctx_r13.routeRedirection(dropdownItem_r11 == null ? null : dropdownItem_r11.path); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event.stopPropagation()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const dropdownItem_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dropdownItem_r11 == null ? null : dropdownItem_r11.title);
} }
function SidebarComponent_ng_container_13_ng_container_1_li_2_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SidebarComponent_ng_container_13_ng_container_1_li_2_ng_container_8_ng_container_1_Template, 5, 1, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const dropdownItem_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", dropdownItem_r11.visible);
} }
function SidebarComponent_ng_container_13_ng_container_1_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_ng_container_13_ng_container_1_li_2_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](item_r1.isCollapsed = !item_r1.isCollapsed); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a")(2, "button", 21)(3, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 24)(7, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SidebarComponent_ng_container_13_ng_container_1_li_2_ng_container_8_Template, 2, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
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
} }
function SidebarComponent_ng_container_13_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SidebarComponent_ng_container_13_ng_container_1_li_1_Template, 4, 1, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SidebarComponent_ng_container_13_ng_container_1_li_2_Template, 9, 6, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(item_r1 == null ? null : item_r1.dropdown));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1 == null ? null : item_r1.dropdown);
} }
function SidebarComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SidebarComponent_ng_container_13_ng_container_1_Template, 3, 2, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1.visible);
} }
const _c0 = function (a0) { return { "mb-0": a0 }; };
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
        user: 'admin', dropdown: true, userName: false, className: true, title: 'Product', icon: 'product-icon', visible: true, isCollapsed: true, dropDownMenu: [
            { user: 'admin', dropdown: false, path: '/create/product-varients', icon: 'fa fa-plus', title: 'Create a new product', visible: true },
            // { user: 'admin', dropdown: false, path: '/view/product-varients', icon: 'fa fa-eye', title: 'View Product product Varient Details', visible: true }
            { user: 'admin', dropdown: false, path: '/list/product-varients', icon: 'fa fa-list', title: 'View Products', visible: true }
        ]
    },
    {
        user: 'admin', dropdown: true, userName: false, className: true, title: 'Product Group', icon: 'product-icon', visible: true, isCollapsed: true, dropDownMenu: [
            { user: 'admin', dropdown: false, path: '/create/product-group', icon: 'fa fa-plus', title: 'Create a new product group', visible: true },
            // { user: 'admin', dropdown: false, path: '/view/product-varients', icon: 'fa fa-eye', title: 'View Product product Varient Details', visible: true }
            { user: 'admin', dropdown: false, path: '/list/product-group', icon: 'fa fa-list', title: 'View product groups', visible: true }
        ]
    },
    {
        user: 'admin', dropdown: true, userName: false, className: true, title: 'Category', icon: 'product-icon', visible: true, isCollapsed: true, dropDownMenu: [
            { user: 'admin', dropdown: false, path: 'create/category', icon: 'fa fa-plus', title: 'Create a new Category', visible: true },
            // { user: 'admin', dropdown: false, path: '/view/product-varients', icon: 'fa fa-eye', title: 'View Product product Varient Details', visible: true }
            { user: 'admin', dropdown: false, path: 'list/category', icon: 'fa fa-list', title: 'View Categories', visible: true }
        ]
    },
    // {
    //   user: 'admin', dropdown: false, userName: false, className: true, title: 'Products', icon: 'product-icon', visible: true, path: '/product-varients'
    // },
    {
        user: 'admin', dropdown: false, userName: false, className: true, title: 'My Profile', icon: 'fas fa-id-card', visible: true, path: '/user-profile'
    }
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
        this.router.navigate([path], { relativeTo: this.activeRoute });
    }
    logout() {
        swal({
            text: 'Are you sure want to logout?',
            type: 'warning',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        })
            .then((willDelete) => {
            this.api.logout();
            // this.utility.removeLocalStorage('authToken');
            // this.utility.removeLocalStorage('currentUserSession');
            // this.utility.removeLocalStorage('companyUsers');
            // this.utility.removeLocalStorage('companies');
            // this.utility.readLocalStorage('activeCompanyUser');
            // this.router.navigate(['/login']);
        }, (error) => {
        });
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
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute)); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 17, vars: 4, consts: [[1, "side-wrapper"], [1, "logo"], [1, "logo-icon-container"], ["routerLink", "/dashboard", 1, "simple-text"], [1, "logo-img", "position-static"], ["src", "assets/img/logo.svg", 1, "position-static"], [1, "nav"], [1, "nav-item"], ["routerLink", "/dashboard", 1, "nav-link", "cursor-pointer"], [1, "fas", "fa-home"], [1, "sidebar-wrapper", 3, "ngClass"], [1, "nav", 2, "margin", "0px"], [4, "ngFor", "ngForOf"], [1, "nav-item", "logout"], [1, "nav-link", "cursor-pointer", 3, "click"], [4, "ngIf"], ["class", "nav-item", "routerLinkActive", "active", 4, "ngIf"], ["routerLinkActive", "active", "class", "nav-item", 3, "active", "click", 4, "ngIf"], ["routerLinkActive", "active", 1, "nav-item"], [1, "nav-link", "d-flex", "align-items-center", "position-relative", 3, "click"], ["routerLinkActive", "active", 1, "nav-item", 3, "click"], ["data-toggle", "collapse", "aria-expanded", "false", 1, "nav-link", "w-100", "p-0", "d-flex", "justify-content-center", "align-items-center", "collapsed", 2, "gap", "12px", "color", "#000"], [1, "mb-0", "d-flex", "justify-content-between", "align-items-center", "w-100"], [1, "fas", "fa-caret-down"], [1, "collapse", "navbar-collapse", 3, "ngbCollapse"], ["routerLinkActive", "active", 1, "nav-item", 2, "margin-left", "18px"], [1, "mr-3"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_15_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, !(ctx.platformInfo.companySubscriptionPlan == null ? null : ctx.platformInfo.companySubscriptionPlan.code)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbCollapse], styles: ["[_ngcontent-%COMP%]:root {\n  --primary: #00b3ac;\n  --white: #fff;\n  --black: #000;\n}\n\n.side-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n}\n\n.side-wrapper[_ngcontent-%COMP%]   .logo-icon-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  align-items: center;\n  justify-content: flex-start;\n  margin-bottom: 2rem;\n}\n\n.side-wrapper[_ngcontent-%COMP%]   .logo-icon-container[_ngcontent-%COMP%]   .links-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.side-wrapper[_ngcontent-%COMP%]   .logo-icon-container[_ngcontent-%COMP%]   .links-wrapper[_ngcontent-%COMP%]   .links-wrapper-link[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 13px;\n  font-weight: 400;\n}\n\n.side-wrapper[_ngcontent-%COMP%]   .logo-icon-container[_ngcontent-%COMP%]   .company-logo-name[_ngcontent-%COMP%] {\n  max-height: 100px;\n  height: 80px;\n  display: flex;\n  align-items: center;\n}\n\n.side-wrapper[_ngcontent-%COMP%]   .logo-icon-container[_ngcontent-%COMP%]   .switch-company-btn-container[_ngcontent-%COMP%] {\n  max-height: 100px;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.side-wrapper[_ngcontent-%COMP%]   .logo-icon-container[_ngcontent-%COMP%]   .switch-company-btn-container[_ngcontent-%COMP%]   .company-name-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n\n.side-wrapper[_ngcontent-%COMP%]   .logo-icon-container[_ngcontent-%COMP%]   .switch-company-btn-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  position: absolute;\n  right: 10px;\n  top: 0;\n  bottom: 0;\n}\n\n.side-wrapper[_ngcontent-%COMP%]   .logo-icon-container[_ngcontent-%COMP%]   .switch-company-btn-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: 18px;\n}\n\n.side-wrapper[_ngcontent-%COMP%]   .logo-icon-container[_ngcontent-%COMP%]   .switch-company-btn-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .switch-company-btn[_ngcontent-%COMP%] {\n  background-color: #17a1bf;\n  border-radius: 3px;\n  padding: 5px;\n  font-size: 14px;\n  color: #3C4858;\n  font-weight: 400;\n  margin-left: 0;\n  height: 30px;\n}\n\n.side-wrapper[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .side-wrapper[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .side-wrapper[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-weight: 400;\n  margin-right: 0;\n}\n\n.side-wrapper[_ngcontent-%COMP%]   li.switch-view.activeChild.nav-item[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  bottom: 70px;\n  padding-bottom: 20px;\n  background: white;\n  z-index: 1;\n}\n\n.side-wrapper[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 16px;\n  font-weight: 500;\n  color: #666666;\n  max-width: 134px;\n}\n\n.side-wrapper[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.jump-to-btn[_ngcontent-%COMP%] {\n  color: white !important;\n  background: var(--primary) !important;\n}\n\n.jump-to-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\n.jump-to-btn[_ngcontent-%COMP%]:hover {\n  background: var(--primary) !important;\n}\n\n.sidebar-wrapper[_ngcontent-%COMP%] {\n  flex: 1 1 0;\n  flex-direction: column;\n  padding-bottom: 0;\n  margin-bottom: 35px;\n  max-height: calc(100% - 134px);\n  overflow-y: auto;\n}\n\n.thaut-logo[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  width: 100%;\n  justify-content: center;\n  background: white;\n  z-index: 1;\n  bottom: 0px;\n  padding: 15px;\n  gap: 10px;\n  align-items: center;\n  border-bottom: 5px solid var(--primary);\n}\n\n.thaut-logo[_ngcontent-%COMP%]   .powered[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-bottom: 8px;\n}\n\n.thaut-logo[_ngcontent-%COMP%]   .plan-type[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  right: 15px;\n  background: var(--primary);\n  color: white;\n  padding: 8px;\n  padding-top: 3px;\n  border-top-left-radius: 6px;\n  padding-bottom: 0;\n  border-top-right-radius: 6px;\n  font-size: 12px;\n  cursor: pointer;\n}\n\n.thaut-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: auto;\n  max-height: 35px !important;\n  filter: contrast(0);\n}\n\n.thaut-logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.nav[_ngcontent-%COMP%] {\n  flex: 1 1 0;\n  overflow-y: auto;\n}\n\n.nav[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 15px !important;\n}\n\n.logo[_ngcontent-%COMP%] {\n  padding: 0px 0px 10px !important;\n}\n\n@media (max-width: 768px) {\n  .thaut-logo[_ngcontent-%COMP%] {\n    position: fixed;\n  }\n}\n\n.sidebar-premium-service-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: block;\n  top: 0;\n  left: 0;\n  position: absolute;\n}\n\n.premium-star-icon-child[_ngcontent-%COMP%] {\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  position: relative;\n  cursor: pointer;\n}\n\n.premium-lock-wrapper[_ngcontent-%COMP%] {\n  right: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.premium-lock-wrapper[_ngcontent-%COMP%]   .premium-lock-icon[_ngcontent-%COMP%] {\n  left: 50% !important;\n  transform: translate(-50%, -50%) !important;\n}\n\n.renew-subscription[_ngcontent-%COMP%] {\n  background: url(\"/assets/svgs/renew-subscription.svg\") no-repeat;\n  height: 20px !important;\n  width: 20px !important;\n}\n\n.view-accounts[_ngcontent-%COMP%], .view-users[_ngcontent-%COMP%] {\n  background: url(\"/assets/svgs/view-accounts.svg\") no-repeat;\n  height: 20px !important;\n  width: 20px !important;\n}\n\n.sentiment-analysis[_ngcontent-%COMP%] {\n  background: url(\"/assets/svgs/sentiment-analysis.svg\") no-repeat;\n  height: 20px !important;\n  width: 20px !important;\n}\n\n.qr-generator-icon[_ngcontent-%COMP%] {\n  background: url(\"/assets/svgs/qr.svg\") no-repeat;\n  height: 20px !important;\n  width: 20px !important;\n}\n\n.product-icon[_ngcontent-%COMP%] {\n  background: url(\"/assets/img/product.svg\") no-repeat;\n  height: 20px !important;\n  width: 25px !important;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  height: 100vh;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 2;\n  width: 260px;\n  background: var(--white);\n}\n\n.sidebar[_ngcontent-%COMP%]   .caret[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-top: 4px solid\\9 ;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n}\n\n.sidebar[data-background-color=black][_ngcontent-%COMP%] {\n  background-color: #191919;\n}\n\n.sidebar[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%] {\n  width: 35px;\n  display: block;\n  max-height: 30px;\n  margin-left: 13px;\n  margin-right: 15px;\n}\n\n.sidebar[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 35px;\n  top: 16px;\n  position: absolute;\n}\n\n.sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%] {\n  width: 260px;\n  z-index: 4;\n  padding-bottom: 30px;\n}\n\n.sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-backdrop[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .navbar-form[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: none;\n}\n\n.sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .navbar-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  font-size: 1.7em;\n  height: 36px;\n  width: 78%;\n  padding-left: 17px;\n}\n\n.sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]    > .nav[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]    > .nav[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .sidebar-normal[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .sidebar-normal[_ngcontent-%COMP%] {\n  margin: 0;\n  position: relative;\n  transform: translateX(0px);\n  opacity: 1;\n  white-space: nowrap;\n  display: block;\n}\n\n.sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]    > .nav[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .sidebar-mini[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .sidebar-mini[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  width: 30px;\n  margin-right: 15px;\n  text-align: center;\n  letter-spacing: 1px;\n  position: relative;\n  float: left;\n  display: inherit;\n}\n\n.sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]    > .nav[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 17px;\n  line-height: 20px;\n  width: 26px;\n}\n\n.sidebar[_ngcontent-%COMP%]   .logo-tim[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  border: 1px solid #333;\n  display: block;\n  height: 61px;\n  width: 61px;\n  float: left;\n  overflow: hidden;\n}\n\n.sidebar[_ngcontent-%COMP%]   .logo-tim[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: block;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .caret[_ngcontent-%COMP%] {\n  margin-top: 13px;\n  position: absolute;\n  right: 20px;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\n  background-color: transparent;\n  outline: none;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child    > a[_ngcontent-%COMP%] {\n  margin: 0 15px;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    > [data-toggle=collapse][_ngcontent-%COMP%] {\n  background-color: rgba(200, 200, 200, 0.2);\n  color: var(--black);\n  box-shadow: none;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]    > [data-toggle=collapse][_ngcontent-%COMP%] {\n  background-color: rgba(200, 200, 200, 0.2);\n  color: white;\n  box-shadow: none;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]    > [data-toggle=collapse][_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #a9afbb;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--white);\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i.active[_ngcontent-%COMP%] {\n  color: var(--white);\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li.separator[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li.separator[_ngcontent-%COMP%]:after {\n  width: calc(100% - 30px);\n  content: \"\";\n  position: absolute;\n  height: 1px;\n  left: 15px;\n  background-color: rgba(180, 180, 180, 0.3);\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li.separator[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  margin-top: 31px;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 30px;\n  font-size: 14px;\n  display: block;\n  height: auto;\n  white-space: nowrap;\n  text-align: start;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  float: left;\n  margin-right: 15px;\n  width: 30px;\n  text-align: center;\n  color: #a9afbb;\n}\n\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 10px 15px 0;\n  border-radius: 3px;\n  color: var(--black);\n  padding-left: 10px;\n  padding-right: 10px;\n  text-transform: capitalize;\n  font-size: 13px;\n  padding: 10px 15px;\n}\n\n.sidebar[_ngcontent-%COMP%]   .sidebar-background[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  height: 100%;\n  width: 100%;\n  display: block;\n  top: 0;\n  left: 0;\n  background-size: cover;\n  background-position: center center;\n}\n\n.sidebar[_ngcontent-%COMP%]   .sidebar-background[_ngcontent-%COMP%]:after {\n  position: absolute;\n  z-index: 3;\n  width: 100%;\n  height: 100%;\n  content: \"\";\n  display: block;\n  background: #FFFFFF;\n  opacity: 0.93;\n}\n\n.sidebar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  padding: 15px 0px;\n  margin: 0;\n  display: block;\n  position: relative;\n  z-index: 4;\n}\n\n.sidebar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  right: 15px;\n  height: 1px;\n  width: calc(100% - 30px);\n  background-color: rgba(180, 180, 180, 0.3);\n}\n\n.sidebar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 20px;\n  margin: 10px 10px;\n  color: var(--white);\n  line-height: 20px;\n}\n\n.sidebar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .simple-text[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  padding: 10px 0;\n  display: inline-block;\n  font-size: 18px;\n  color: var(--black);\n  white-space: nowrap;\n  font-weight: normal;\n  line-height: 30px;\n  overflow: hidden;\n  text-align: center;\n  display: block;\n}\n\n.sidebar[_ngcontent-%COMP%]   .logo-tim[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  border: 1px solid #333;\n  display: block;\n  height: 61px;\n  width: 61px;\n  float: left;\n  overflow: hidden;\n}\n\n.sidebar[_ngcontent-%COMP%]   .logo-tim[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n}\n\n.off-canvas-sidebar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .off-canvas-sidebar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: var(--white);\n  margin: 0 15px;\n}\n\n.off-canvas-sidebar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus, .off-canvas-sidebar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  background: rgba(200, 200, 200, 0.2);\n}\n\n.main-panel[_ngcontent-%COMP%] {\n  position: relative;\n  float: right;\n  width: calc(100% - 260px);\n}\n\n.main-panel[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  margin-top: 70px;\n  padding: 0px 15px;\n  min-height: calc(100vh - 123px);\n}\n\n.main-panel[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #e7e7e7;\n}\n\n.main-panel[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.main-panel[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.main-panel[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.perfect-scrollbar-on[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%], .perfect-scrollbar-on[_ngcontent-%COMP%]   .main-panel[_ngcontent-%COMP%] {\n  height: 100%;\n  max-height: 100%;\n}\n\n.sidebar[_ngcontent-%COMP%], .main-panel[_ngcontent-%COMP%], .sidebar-wrapper[_ngcontent-%COMP%] {\n  transition-property: top, bottom, width;\n  transition-duration: 0.2s, 0.2s, 0.35s;\n  transition-timing-function: linear, linear, ease;\n  -webkit-overflow-scrolling: touch;\n}\n\n.visible-on-sidebar-regular[_ngcontent-%COMP%] {\n  display: inline-block !important;\n}\n\n.visible-on-sidebar-mini[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n@media (min-width: 991px) {\n  .sidebar-mini[_ngcontent-%COMP%]   .visible-on-sidebar-regular[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .sidebar-mini[_ngcontent-%COMP%]   .visible-on-sidebar-mini[_ngcontent-%COMP%] {\n    display: inline-block !important;\n  }\n  .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%], .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%] {\n    width: 80px;\n  }\n  .sidebar-mini[_ngcontent-%COMP%]   .main-panel[_ngcontent-%COMP%] {\n    width: calc(100% - 80px);\n  }\n  .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n    display: block;\n    font-weight: 200;\n    z-index: 9999;\n  }\n  .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   a.logo-normal[_ngcontent-%COMP%] {\n    opacity: 0;\n  }\n  .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]    > .nav[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .sidebar-normal[_ngcontent-%COMP%], .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .sidebar-normal[_ngcontent-%COMP%], .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]    > .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    opacity: 0;\n  }\n  .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]:hover {\n    width: 260px;\n  }\n  .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]:hover   .logo[_ngcontent-%COMP%]   a.logo-normal[_ngcontent-%COMP%] {\n    opacity: 1;\n  }\n  .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]:hover   .sidebar-wrapper[_ngcontent-%COMP%] {\n    width: 260px;\n  }\n  .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]:hover   .sidebar-wrapper[_ngcontent-%COMP%]    > .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]:hover   .sidebar-wrapper[_ngcontent-%COMP%]    > .nav[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .sidebar-normal[_ngcontent-%COMP%], .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]:hover   .sidebar-wrapper[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   [data-toggle=collapse][_ngcontent-%COMP%]    ~ div[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .sidebar-normal[_ngcontent-%COMP%], .sidebar-mini[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]:hover   .sidebar-wrapper[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    opacity: 1;\n  }\n}\n\n.nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #3c4858 !important;\n}\n\n.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000 !important;\n  border-radius: 3px;\n  text-transform: capitalize;\n  font-size: 14px;\n  padding: 10px 15px;\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  justify-content: flex-start;\n}\n\n.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcY29yZVxcdGhlbWVzXFxwcmltYXJ5LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFNhaSUyMEtpcmFuXFxEb2N1bWVudHNcXGFkbWluLWhpc2Vuc2VcXGhpc2Vuc2UtYWRtaW5cXHNyY1xcYXBwXFxjb21wb25lbnRzXFxzaWRlYmFyXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUNISjs7QUNGQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FES0Y7O0FDSEU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBREtKOztBQ0ZJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QURJTjs7QUNGTTtFQUNFLHFCRnZCUTtFRXdCUixlQUFBO0VBQ0EsZ0JBQUE7QURJUjs7QUNBSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBREVOOztBQ0NJO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QURDTjs7QUNDTTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0FEQ1I7O0FDRU07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0FEQVI7O0FDRVE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBREFWOztBQ0dRO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUREVjs7QUNpQkU7OztFQUdFLGdCQUFBO0VBQ0EsZUFBQTtBRGZKOztBQ2tCRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBRGhCSjs7QUNtQkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FEakJKOztBQ21CSTtFQUNFLGtCQUFBO0FEakJOOztBQ3VCQTtFQUNFLHVCQUFBO0VBQ0EscUNBQUE7QURwQkY7O0FDdUJFO0VBQ0UsdUJBQUE7QURyQko7O0FDd0JFO0VBQ0UscUNBQUE7QUR0Qko7O0FDK0JBO0VBQ0UsV0FBQTtFQUVBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUQ3QkY7O0FDbUNBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFFQSx1Q0FBQTtBRGpDRjs7QUNtQ0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QURqQ0o7O0FDb0NFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUVBLDBCRmpMWTtFRWtMWixZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QURuQ0o7O0FDc0NFO0VBQ0UsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QURwQ0o7O0FDdUNFO0VBQ0UsZ0JBQUE7QURyQ0o7O0FDeUNBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FEdENGOztBQ3dDRTtFQUNFLHNCQUFBO0FEdENKOztBQzBDQTtFQUNFLGdDQUFBO0FEdkNGOztBQzBDQTtFQUtFO0lBQ0UsZUFBQTtFRDNDRjtBQUNGOztBQzhDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7QUQ1Q0Y7O0FDK0NBO0VBQ0UsUUFBQTtFQUNBLDJCQUFBO0FENUNGOztBQytDQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUVBLGtCQUFBO0VBQ0EsZUFBQTtBRDdDRjs7QUNnREE7RUFDRSxVQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FEN0NGOztBQytDRTtFQUNFLG9CQUFBO0VBQ0EsMkNBQUE7QUQ3Q0o7O0FDaURBO0VBQ0UsZ0VBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FEOUNGOztBQ2lEQTs7RUFFRSwyREFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUQ5Q0Y7O0FDaURBO0VBQ0UsZ0VBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FEOUNGOztBQ2lEQTtFQUNFLGdEQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBRDlDRjs7QUNpREE7RUFDRSxvREFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUQ5Q0Y7O0FDa0RBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtBRC9DRjs7QUNrREE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx3QkYzU1k7QUM0UGQ7O0FDa0RFO0VBQ0UscUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBRGhESjs7QUNtREU7RUFDRSx5QkFBQTtBRGpESjs7QUNvREU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRGxESjs7QUNvREk7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FEbEROOztBQ3NERTtFQUlFLFlBQUE7RUFDQSxVQUFBO0VBRUEsb0JBQUE7QUR4REo7O0FDMERJO0VBQ0Usd0JBQUE7QUR4RE47O0FDMkRJO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FEekROOztBQzJETTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBRHpEUjs7QUNnRVE7O0VBQ0UscUJBQUE7QUQ3RFY7O0FDaUVROztFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBRDlEVjs7QUNrRVE7O0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUQvRFY7O0FDa0VROztFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUQvRFY7O0FDcUVFO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBRG5FSjs7QUNxRUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBRG5FTjs7QUN1RUU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QURyRUo7O0FDdUVJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QURyRU47O0FDMkVRO0VBRUUsNkJBQUE7RUFDQSxhQUFBO0FEMUVWOztBQzhFTTtFQUNFLGNBQUE7QUQ1RVI7O0FDK0VNO0VBR0UsMENBQUE7RUFDQSxtQkZyYk07RUVzYk4sZ0JBQUE7QUQvRVI7O0FDa0ZNO0VBQ0UsMENBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QURoRlI7O0FDb0ZRO0VBQ0UsY0FBQTtBRGxGVjs7QUNzRk07RUFFRSxtQkZ4Y007QUNtWGQ7O0FDd0ZNO0VBQ0UsbUJGNWNNO0FDc1hkOztBQzZGTTtFQUNFLGNBQUE7QUQzRlI7O0FDNkZRO0VBQ0Usd0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLDBDQUFBO0FEM0ZWOztBQzhGUTtFQUNFLGdCQUFBO0FENUZWOztBQ2lHSTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFFQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QURoR047O0FDbUdJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QURqR047O0FDcUdFOztFQUVFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkY3ZlU7RUU4ZlYsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FEbkdKOztBQ3VHRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtBRHJHSjs7QUN1R0k7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FEckdOOztBQ3lHRTtFQUNFLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUR2R0o7O0FDeUdJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQ0FBQTtBRHZHTjs7QUMyR0k7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJGcGpCUTtFRXFqQlIsaUJBQUE7QUR6R047O0FDNEdJO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJGNWpCUTtFRTZqQlIsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUQxR047O0FDOEdFO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBRDVHSjs7QUM4R0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBRDVHTjs7QUM2S0k7O0VBRUUsbUJGcnBCUTtFRXNwQlIsY0FBQTtBRDFLTjs7QUM2S0k7O0VBRUUsb0NBQUE7QUQzS047O0FDaUxBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUQ5S0Y7O0FDaUxFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FEL0tKOztBQ2tMRTtFQUNFLDZCQUFBO0FEaExKOztBQ21MRTtFQUNFLGdCQUFBO0FEakxKOztBQ29MRTtFQUNFLG1CQUFBO0FEbExKOztBQ29MSTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QURsTE47O0FDeUxFOztFQUVFLFlBQUE7RUFDQSxnQkFBQTtBRHRMSjs7QUMyTEE7OztFQUlFLHVDQUFBO0VBRUEsc0NBQUE7RUFFQSxnREFBQTtFQUNBLGlDQUFBO0FEeExGOztBQzJMQTtFQUNFLGdDQUFBO0FEeExGOztBQzJMQTtFQUNFLHdCQUFBO0FEeExGOztBQzJMQTtFQUVJO0lBQ0Usd0JBQUE7RUR6TEo7RUM0TEU7SUFDRSxnQ0FBQTtFRDFMSjtFQzZMRTs7SUFFRSxXQUFBO0VEM0xKO0VDOExFO0lBQ0Usd0JBQUE7RUQ1TEo7RUMrTEU7SUFDRSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxhQUFBO0VEN0xKO0VDZ01NO0lBQ0UsVUFBQTtFRDlMUjtFQ3FNTTs7OztJQUtFLFVBQUE7RURwTVI7RUN5TUU7SUFDRSxZQUFBO0VEdk1KO0VDME1NO0lBQ0UsVUFBQTtFRHhNUjtFQzZNSTtJQUNFLFlBQUE7RUQzTU47RUM2TU07Ozs7SUFLRSxVQUFBO0VENU1SO0FBQ0Y7O0FDa05BO0VBQ0Usc0JBQUE7QURoTkY7O0FDbU5BO0VBQ0UseUJBQUE7QURoTkY7O0FDbU5BO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FEaE5GOztBQ2tORTtFQUNFLG9DQUFBO0FEaE5KIiwiZmlsZSI6InNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3ItcHJpbWFyeTogdmFyKC0tcHJpbWFyeSk7XHJcbiR3aGl0ZS1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4kYmxhY2stY29sb3I6IHZhcigtLWJsYWNrKTtcclxuXHJcbjpyb290e1xyXG4gICAgLS1wcmltYXJ5OiAjMDBiM2FjO1xyXG4gICAgLS13aGl0ZTogI2ZmZjtcclxuICAgIC0tYmxhY2s6ICMwMDA7XHJcbn0iLCI6cm9vdCB7XG4gIC0tcHJpbWFyeTogIzAwYjNhYztcbiAgLS13aGl0ZTogI2ZmZjtcbiAgLS1ibGFjazogIzAwMDtcbn1cblxuLnNpZGUtd3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMXJlbTtcbn1cbi5zaWRlLXdyYXBwZXIgLmxvZ28taWNvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi5zaWRlLXdyYXBwZXIgLmxvZ28taWNvbi1jb250YWluZXIgLmxpbmtzLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zaWRlLXdyYXBwZXIgLmxvZ28taWNvbi1jb250YWluZXIgLmxpbmtzLXdyYXBwZXIgLmxpbmtzLXdyYXBwZXItbGluayB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLnNpZGUtd3JhcHBlciAubG9nby1pY29uLWNvbnRhaW5lciAuY29tcGFueS1sb2dvLW5hbWUge1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNpZGUtd3JhcHBlciAubG9nby1pY29uLWNvbnRhaW5lciAuc3dpdGNoLWNvbXBhbnktYnRuLWNvbnRhaW5lciB7XG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnNpZGUtd3JhcHBlciAubG9nby1pY29uLWNvbnRhaW5lciAuc3dpdGNoLWNvbXBhbnktYnRuLWNvbnRhaW5lciAuY29tcGFueS1uYW1lLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLnNpZGUtd3JhcHBlciAubG9nby1pY29uLWNvbnRhaW5lciAuc3dpdGNoLWNvbXBhbnktYnRuLWNvbnRhaW5lciAuaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xufVxuLnNpZGUtd3JhcHBlciAubG9nby1pY29uLWNvbnRhaW5lciAuc3dpdGNoLWNvbXBhbnktYnRuLWNvbnRhaW5lciAuaWNvbiAuZWRpdC1pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDE4cHg7XG59XG4uc2lkZS13cmFwcGVyIC5sb2dvLWljb24tY29udGFpbmVyIC5zd2l0Y2gtY29tcGFueS1idG4tY29udGFpbmVyIC5pY29uIC5zd2l0Y2gtY29tcGFueS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMWJmO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzNDNDg1ODtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIGhlaWdodDogMzBweDtcbn1cbi5zaWRlLXdyYXBwZXIgLm5hdiBsaSBhLFxuLnNpZGUtd3JhcHBlciAubmF2IGxpIGJ1dHRvbiAubmF2IGxpIC5kcm9wZG93bi1tZW51IGEsXG4uc2lkZS13cmFwcGVyIC5uYXYgbGkgLmRyb3Bkb3duLW1lbnUgYnV0dG9uIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLnNpZGUtd3JhcHBlciBsaS5zd2l0Y2gtdmlldy5hY3RpdmVDaGlsZC5uYXYtaXRlbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogNzBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB6LWluZGV4OiAxO1xufVxuLnNpZGUtd3JhcHBlciAuY29tcGFueS1uYW1lIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzY2NjY2NjtcbiAgbWF4LXdpZHRoOiAxMzRweDtcbn1cbi5zaWRlLXdyYXBwZXIgLmNvbXBhbnktbmFtZSBpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uanVtcC10by1idG4ge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSkgIWltcG9ydGFudDtcbn1cbi5qdW1wLXRvLWJ0biBpIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4uanVtcC10by1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KSAhaW1wb3J0YW50O1xufVxuXG4uc2lkZWJhci13cmFwcGVyIHtcbiAgZmxleDogMSAxIDA7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMzRweCk7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi50aGF1dC1sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB6LWluZGV4OiAxO1xuICBib3R0b206IDBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgZ2FwOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdmFyKC0tcHJpbWFyeSk7XG59XG4udGhhdXQtbG9nbyAucG93ZXJlZCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLnRoYXV0LWxvZ28gLnBsYW4tdHlwZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0cHg7XG4gIHJpZ2h0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA4cHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRoYXV0LWxvZ28gaW1nIHtcbiAgd2lkdGg6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcbiAgZmlsdGVyOiBjb250cmFzdCgwKTtcbn1cbi50aGF1dC1sb2dvIHNwYW4ge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubmF2IHtcbiAgZmxleDogMSAxIDA7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4ubmF2Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dvIHtcbiAgcGFkZGluZzogMHB4IDBweCAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAudGhhdXQtbG9nbyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICB9XG59XG4uc2lkZWJhci1wcmVtaXVtLXNlcnZpY2UtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucHJlbWl1bS1zdGFyLWljb24tY2hpbGQge1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4ubmF2LWxpbmsge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByZW1pdW0tbG9jay13cmFwcGVyIHtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbi5wcmVtaXVtLWxvY2std3JhcHBlciAucHJlbWl1bS1sb2NrLWljb24ge1xuICBsZWZ0OiA1MCUgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgIWltcG9ydGFudDtcbn1cblxuLnJlbmV3LXN1YnNjcmlwdGlvbiB7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvc3Zncy9yZW5ldy1zdWJzY3JpcHRpb24uc3ZnXCIpIG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi52aWV3LWFjY291bnRzLFxuLnZpZXctdXNlcnMge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL3N2Z3Mvdmlldy1hY2NvdW50cy5zdmdcIikgbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLnNlbnRpbWVudC1hbmFseXNpcyB7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvc3Zncy9zZW50aW1lbnQtYW5hbHlzaXMuc3ZnXCIpIG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5xci1nZW5lcmF0b3ItaWNvbiB7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvc3Zncy9xci5zdmdcIikgbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLnByb2R1Y3QtaWNvbiB7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1nL3Byb2R1Y3Quc3ZnXCIpIG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi53cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5zaWRlYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMjtcbiAgd2lkdGg6IDI2MHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG59XG4uc2lkZWJhciAuY2FyZXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlci10b3A6IDRweCBkYXNoZWQ7XG4gIGJvcmRlci10b3A6IDRweCBzb2xpZFxcOSA7XG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLnNpZGViYXJbZGF0YS1iYWNrZ3JvdW5kLWNvbG9yPWJsYWNrXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XG59XG4uc2lkZWJhciAubG9nby1pbWcge1xuICB3aWR0aDogMzVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC1oZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4uc2lkZWJhciAubG9nby1pbWcgaW1nIHtcbiAgd2lkdGg6IDM1cHg7XG4gIHRvcDogMTZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLnNpZGViYXIgLnNpZGViYXItd3JhcHBlciB7XG4gIHdpZHRoOiAyNjBweDtcbiAgei1pbmRleDogNDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG4uc2lkZWJhciAuc2lkZWJhci13cmFwcGVyIC5kcm9wZG93biAuZHJvcGRvd24tYmFja2Ryb3Age1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG4uc2lkZWJhciAuc2lkZWJhci13cmFwcGVyIC5uYXZiYXItZm9ybSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLXdyYXBwZXIgLm5hdmJhci1mb3JtIC5pbnB1dC1ncm91cCB7XG4gIGZvbnQtc2l6ZTogMS43ZW07XG4gIGhlaWdodDogMzZweDtcbiAgd2lkdGg6IDc4JTtcbiAgcGFkZGluZy1sZWZ0OiAxN3B4O1xufVxuLnNpZGViYXIgLnNpZGViYXItd3JhcHBlciA+IC5uYXYgW2RhdGEtdG9nZ2xlPWNvbGxhcHNlXSB+IGRpdiA+IHVsID4gbGkgPiBhIHNwYW4sXG4uc2lkZWJhciAuc2lkZWJhci13cmFwcGVyIC51c2VyIC51c2VyLWluZm8gW2RhdGEtdG9nZ2xlPWNvbGxhcHNlXSB+IGRpdiA+IHVsID4gbGkgPiBhIHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uc2lkZWJhciAuc2lkZWJhci13cmFwcGVyID4gLm5hdiBbZGF0YS10b2dnbGU9Y29sbGFwc2VdIH4gZGl2ID4gdWwgPiBsaSA+IGEgLnNpZGViYXItbm9ybWFsLFxuLnNpZGViYXIgLnNpZGViYXItd3JhcHBlciAudXNlciAudXNlci1pbmZvIFtkYXRhLXRvZ2dsZT1jb2xsYXBzZV0gfiBkaXYgPiB1bCA+IGxpID4gYSAuc2lkZWJhci1ub3JtYWwge1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gIG9wYWNpdHk6IDE7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnNpZGViYXIgLnNpZGViYXItd3JhcHBlciA+IC5uYXYgW2RhdGEtdG9nZ2xlPWNvbGxhcHNlXSB+IGRpdiA+IHVsID4gbGkgPiBhIC5zaWRlYmFyLW1pbmksXG4uc2lkZWJhciAuc2lkZWJhci13cmFwcGVyIC51c2VyIC51c2VyLWluZm8gW2RhdGEtdG9nZ2xlPWNvbGxhcHNlXSB+IGRpdiA+IHVsID4gbGkgPiBhIC5zaWRlYmFyLW1pbmkge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB3aWR0aDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGluaGVyaXQ7XG59XG4uc2lkZWJhciAuc2lkZWJhci13cmFwcGVyID4gLm5hdiBbZGF0YS10b2dnbGU9Y29sbGFwc2VdIH4gZGl2ID4gdWwgPiBsaSA+IGEgaSxcbi5zaWRlYmFyIC5zaWRlYmFyLXdyYXBwZXIgLnVzZXIgLnVzZXItaW5mbyBbZGF0YS10b2dnbGU9Y29sbGFwc2VdIH4gZGl2ID4gdWwgPiBsaSA+IGEgaSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyNnB4O1xufVxuLnNpZGViYXIgLmxvZ28tdGltIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA2MXB4O1xuICB3aWR0aDogNjFweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uc2lkZWJhciAubG9nby10aW0gaW1nIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbn1cbi5zaWRlYmFyIC5uYXYge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5zaWRlYmFyIC5uYXYgLmNhcmV0IHtcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbn1cbi5zaWRlYmFyIC5uYXYgbGkgPiBhOmhvdmVyLCAuc2lkZWJhciAubmF2IGxpID4gYTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBvdXRsaW5lOiBub25lO1xufVxuLnNpZGViYXIgLm5hdiBsaTpmaXJzdC1jaGlsZCA+IGEge1xuICBtYXJnaW46IDAgMTVweDtcbn1cbi5zaWRlYmFyIC5uYXYgbGk6aG92ZXIgPiBhLCAuc2lkZWJhciAubmF2IGxpIC5kcm9wZG93bi1tZW51IGE6aG92ZXIsIC5zaWRlYmFyIC5uYXYgbGkgLmRyb3Bkb3duLW1lbnUgYTpmb2N1cyA+IFtkYXRhLXRvZ2dsZT1jb2xsYXBzZV0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMik7XG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uc2lkZWJhciAubmF2IGxpIC5hY3RpdmUgPiBbZGF0YS10b2dnbGU9Y29sbGFwc2VdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjIpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uc2lkZWJhciAubmF2IGxpLmFjdGl2ZSA+IFtkYXRhLXRvZ2dsZT1jb2xsYXBzZV0gaSB7XG4gIGNvbG9yOiAjYTlhZmJiO1xufVxuLnNpZGViYXIgLm5hdiBsaS5hY3RpdmUgPiBhLCAuc2lkZWJhciAubmF2IGxpLmFjdGl2ZSA+IGEgaSB7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG4uc2lkZWJhciAubmF2IGxpLmFjdGl2ZSA+IGEgaS5hY3RpdmUge1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuLnNpZGViYXIgLm5hdiBsaS5zZXBhcmF0b3Ige1xuICBtYXJnaW46IDE1cHggMDtcbn1cbi5zaWRlYmFyIC5uYXYgbGkuc2VwYXJhdG9yOmFmdGVyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMXB4O1xuICBsZWZ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4MCwgMTgwLCAxODAsIDAuMyk7XG59XG4uc2lkZWJhciAubmF2IGxpLnNlcGFyYXRvciArIGxpIHtcbiAgbWFyZ2luLXRvcDogMzFweDtcbn1cbi5zaWRlYmFyIC5uYXYgcCB7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG4uc2lkZWJhciAubmF2IGkge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjYTlhZmJiO1xufVxuLnNpZGViYXIgLm5hdiBsaSBhLFxuLnNpZGViYXIgLm5hdiBsaSAuZHJvcGRvd24tbWVudSBhIHtcbiAgbWFyZ2luOiAxMHB4IDE1cHggMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLWJhY2tncm91bmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG4uc2lkZWJhciAuc2lkZWJhci1iYWNrZ3JvdW5kOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAzO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgb3BhY2l0eTogMC45Mztcbn1cbi5zaWRlYmFyIC5sb2dvIHtcbiAgcGFkZGluZzogMTVweCAwcHg7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogNDtcbn1cbi5zaWRlYmFyIC5sb2dvOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAxNXB4O1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4MCwgMTgwLCAxODAsIDAuMyk7XG59XG4uc2lkZWJhciAubG9nbyBwIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiAxMHB4IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLnNpZGViYXIgLmxvZ28gLnNpbXBsZS10ZXh0IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogMTBweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uc2lkZWJhciAubG9nby10aW0ge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDYxcHg7XG4gIHdpZHRoOiA2MXB4O1xuICBmbG9hdDogbGVmdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zaWRlYmFyIC5sb2dvLXRpbSBpbWcge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4ub2ZmLWNhbnZhcy1zaWRlYmFyIC5uYXZiYXItY29sbGFwc2UgLm5hdiA+IGxpID4gYSxcbi5vZmYtY2FudmFzLXNpZGViYXIgLm5hdmJhci1jb2xsYXBzZSAubmF2ID4gbGkgPiBhOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgbWFyZ2luOiAwIDE1cHg7XG59XG4ub2ZmLWNhbnZhcy1zaWRlYmFyIC5uYXZiYXItY29sbGFwc2UgLm5hdiA+IGxpID4gYTpmb2N1cyxcbi5vZmYtY2FudmFzLXNpZGViYXIgLm5hdmJhci1jb2xsYXBzZSAubmF2ID4gbGkgPiBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjIpO1xufVxuXG4ubWFpbi1wYW5lbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjYwcHgpO1xufVxuLm1haW4tcGFuZWwgLm1haW4tY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTIzcHgpO1xufVxuLm1haW4tcGFuZWwgLmZvb3RlciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTdlN2U3O1xufVxuLm1haW4tcGFuZWwgLm5hdmJhciB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ubWFpbi1wYW5lbCAuaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5tYWluLXBhbmVsIC5oZWFkZXIgLnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnBlcmZlY3Qtc2Nyb2xsYmFyLW9uIC5zaWRlYmFyLFxuLnBlcmZlY3Qtc2Nyb2xsYmFyLW9uIC5tYWluLXBhbmVsIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZWJhcixcbi5tYWluLXBhbmVsLFxuLnNpZGViYXItd3JhcHBlciB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogdG9wLCBib3R0b20sIHdpZHRoO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0b3AsIGJvdHRvbSwgd2lkdGg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycywgMC4ycywgMC4zNXM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnMsIDAuMnMsIDAuMzVzO1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXIsIGxpbmVhciwgZWFzZTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhciwgbGluZWFyLCBlYXNlO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG59XG5cbi52aXNpYmxlLW9uLXNpZGViYXItcmVndWxhciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG4udmlzaWJsZS1vbi1zaWRlYmFyLW1pbmkge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTFweCkge1xuICAuc2lkZWJhci1taW5pIC52aXNpYmxlLW9uLXNpZGViYXItcmVndWxhciB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIC5zaWRlYmFyLW1pbmkgLnZpc2libGUtb24tc2lkZWJhci1taW5pIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuICAuc2lkZWJhci1taW5pIC5zaWRlYmFyLFxuLnNpZGViYXItbWluaSAuc2lkZWJhciAuc2lkZWJhci13cmFwcGVyIHtcbiAgICB3aWR0aDogODBweDtcbiAgfVxuICAuc2lkZWJhci1taW5pIC5tYWluLXBhbmVsIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XG4gIH1cbiAgLnNpZGViYXItbWluaSAuc2lkZWJhciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICB6LWluZGV4OiA5OTk5O1xuICB9XG4gIC5zaWRlYmFyLW1pbmkgLnNpZGViYXIgLmxvZ28gYS5sb2dvLW5vcm1hbCB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAuc2lkZWJhci1taW5pIC5zaWRlYmFyIC5zaWRlYmFyLXdyYXBwZXIgPiAubmF2IFtkYXRhLXRvZ2dsZT1jb2xsYXBzZV0gfiBkaXYgPiB1bCA+IGxpID4gYSAuc2lkZWJhci1ub3JtYWwsXG4uc2lkZWJhci1taW5pIC5zaWRlYmFyIC5zaWRlYmFyLXdyYXBwZXIgLnVzZXIgLnVzZXItaW5mbyBbZGF0YS10b2dnbGU9Y29sbGFwc2VdIH4gZGl2ID4gdWwgPiBsaSA+IGEgLnNpZGViYXItbm9ybWFsLFxuLnNpZGViYXItbWluaSAuc2lkZWJhciAuc2lkZWJhci13cmFwcGVyIC51c2VyIC51c2VyLWluZm8gPiBhID4gc3Bhbixcbi5zaWRlYmFyLW1pbmkgLnNpZGViYXIgLnNpZGViYXItd3JhcHBlciA+IC5uYXYgbGkgPiBhIHAge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgLnNpZGViYXItbWluaSAuc2lkZWJhcjpob3ZlciB7XG4gICAgd2lkdGg6IDI2MHB4O1xuICB9XG4gIC5zaWRlYmFyLW1pbmkgLnNpZGViYXI6aG92ZXIgLmxvZ28gYS5sb2dvLW5vcm1hbCB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAuc2lkZWJhci1taW5pIC5zaWRlYmFyOmhvdmVyIC5zaWRlYmFyLXdyYXBwZXIge1xuICAgIHdpZHRoOiAyNjBweDtcbiAgfVxuICAuc2lkZWJhci1taW5pIC5zaWRlYmFyOmhvdmVyIC5zaWRlYmFyLXdyYXBwZXIgPiAubmF2IGxpID4gYSBwLFxuLnNpZGViYXItbWluaSAuc2lkZWJhcjpob3ZlciAuc2lkZWJhci13cmFwcGVyID4gLm5hdiBbZGF0YS10b2dnbGU9Y29sbGFwc2VdIH4gZGl2ID4gdWwgPiBsaSA+IGEgLnNpZGViYXItbm9ybWFsLFxuLnNpZGViYXItbWluaSAuc2lkZWJhcjpob3ZlciAuc2lkZWJhci13cmFwcGVyIC51c2VyIC51c2VyLWluZm8gW2RhdGEtdG9nZ2xlPWNvbGxhcHNlXSB+IGRpdiA+IHVsID4gbGkgPiBhIC5zaWRlYmFyLW5vcm1hbCxcbi5zaWRlYmFyLW1pbmkgLnNpZGViYXI6aG92ZXIgLnNpZGViYXItd3JhcHBlciAudXNlciAudXNlci1pbmZvID4gYSA+IHNwYW4ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5uYXYgLm5hdi1pdGVtIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLm5hdiBsaSB7XG4gIGNvbG9yOiAjM2M0ODU4ICFpbXBvcnRhbnQ7XG59XG5cbi5uYXYgbGkgYSB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEycHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5uYXYgbGkgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29yZS90aGVtZXMvcHJpbWFyeS5zY3NzXCI7XHJcblxyXG4uc2lkZS13cmFwcGVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcblxyXG4gIC5sb2dvLWljb24tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcblxyXG4gICAgLy8gYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAxLjk1cHggMS45NXB4IDIuNnB4O1xyXG4gICAgLmxpbmtzLXdyYXBwZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgIC5saW5rcy13cmFwcGVyLWxpbmsge1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb21wYW55LWxvZ28tbmFtZSB7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnN3aXRjaC1jb21wYW55LWJ0bi1jb250YWluZXIge1xyXG4gICAgICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgIC5jb21wYW55LW5hbWUtd3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pY29uIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuXHJcbiAgICAgICAgLmVkaXQtaWNvbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN3aXRjaC1jb21wYW55LWJ0biB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMWJmO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgY29sb3I6ICMzQzQ4NTg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAubG9nby1pbWcge1xyXG4gIC8vICAgd2lkdGg6IGF1dG87XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xyXG4gIC8vICAgaW1nIHtcclxuICAvLyAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgLy8gICAgICAgbWF4LWhlaWdodDogNzBweDtcclxuICAvLyAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAvLyAgIH1cclxuICAvLyB9XHJcblxyXG4gIC5uYXYgbGkgYSxcclxuICAubmF2IGxpIGJ1dHRvbiAubmF2IGxpIC5kcm9wZG93bi1tZW51IGEsXHJcbiAgLm5hdiBsaSAuZHJvcGRvd24tbWVudSBidXR0b24ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcblxyXG4gIGxpLnN3aXRjaC12aWV3LmFjdGl2ZUNoaWxkLm5hdi1pdGVtIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm90dG9tOiA3MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG5cclxuICAuY29tcGFueS1uYW1lIHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICBtYXgtd2lkdGg6IDEzNHB4O1xyXG5cclxuICAgIGkge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLmp1bXAtdG8tYnRuIHtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3ItcHJpbWFyeSAgIWltcG9ydGFudDtcclxuICA7XHJcblxyXG4gIGkge1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1wcmltYXJ5ICAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG4vLyAubG9nb3V0IHtcclxuLy8gICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuLy8gfVxyXG4uc2lkZWJhci13cmFwcGVyIHtcclxuICBmbGV4OiAxIDEgMDtcclxuICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcclxuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMzRweCk7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICAvLyAmOjotd2Via2l0LXNjcm9sbGJhcntcclxuICAvLyAgIHdpZHRoOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgLy8gfVxyXG59XHJcblxyXG4udGhhdXQtbG9nbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgei1pbmRleDogMTtcclxuICBib3R0b206IDBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGdhcDogMTBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC8vIGJveC1zaGFkb3c6IHJnYmEoMCwwLDAsMC4yNSkgMXB4IDAgM3B4IDAsIHJnYmEoMCwwLDAsMC4yNSkgMCAwIDIuNnB4IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICRjb2xvci1wcmltYXJ5O1xyXG5cclxuICAucG93ZXJlZCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG5cclxuICAucGxhbi10eXBlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNHB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjOTk2ZjA1O1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLXByaW1hcnk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogMzVweCAhaW1wb3J0YW50O1xyXG4gICAgZmlsdGVyOiBjb250cmFzdCgwKTtcclxuICB9XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbn1cclxuXHJcbi5uYXYge1xyXG4gIGZsZXg6IDEgMSAwO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcblxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgcGFkZGluZzogMHB4IDBweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjc2OHB4KSB7XHJcbiAgLy8gLmxvZ291dHtcclxuICAvLyAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gIC8vIH1cclxuXHJcbiAgLnRoYXV0LWxvZ28ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gIH1cclxufVxyXG5cclxuLnNpZGViYXItcHJlbWl1bS1zZXJ2aWNlLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLnByZW1pdW0tc3Rhci1pY29uLWNoaWxkIHtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbi5uYXYtbGluayB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIC8vIHdpZHRoOiBjYWxjKDEwMCUgLSAxNXB4KTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucHJlbWl1bS1sb2NrLXdyYXBwZXIge1xyXG4gIHJpZ2h0OiA1cHg7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5cclxuICAucHJlbWl1bS1sb2NrLWljb24ge1xyXG4gICAgbGVmdDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLnJlbmV3LXN1YnNjcmlwdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9zdmdzL3JlbmV3LXN1YnNjcmlwdGlvbi5zdmdcIikgbm8tcmVwZWF0O1xyXG4gIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi52aWV3LWFjY291bnRzLFxyXG4udmlldy11c2VycyB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9zdmdzL3ZpZXctYWNjb3VudHMuc3ZnXCIpIG5vLXJlcGVhdDtcclxuICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcclxuICB3aWR0aDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VudGltZW50LWFuYWx5c2lzIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL3N2Z3Mvc2VudGltZW50LWFuYWx5c2lzLnN2Z1wiKSBuby1yZXBlYXQ7XHJcbiAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnFyLWdlbmVyYXRvci1pY29uIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL3N2Z3MvcXIuc3ZnXCIpIG5vLXJlcGVhdDtcclxuICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcclxuICB3aWR0aDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHJvZHVjdC1pY29uIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltZy9wcm9kdWN0LnN2Z1wiKSBuby1yZXBlYXQ7XHJcbiAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDI1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi53cmFwcGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5zaWRlYmFyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgd2lkdGg6IDI2MHB4O1xyXG4gIGJhY2tncm91bmQ6ICR3aGl0ZS1jb2xvcjtcclxuICAvLyBAaW5jbHVkZSBzaGFkb3ctYmlnKCk7XHJcblxyXG4gIC5jYXJldCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYm9yZGVyLXRvcDogNHB4IGRhc2hlZDtcclxuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZFxcOTtcclxuICAgIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4gICZbZGF0YS1iYWNrZ3JvdW5kLWNvbG9yPVwiYmxhY2tcIl0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcclxuICB9XHJcblxyXG4gIC5sb2dvLWltZyB7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWF4LWhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICB0b3A6IDE2cHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLy8gaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTU2cHgpO1xyXG4gICAgLy8gb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgei1pbmRleDogNDtcclxuXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuXHJcbiAgICAuZHJvcGRvd24gLmRyb3Bkb3duLWJhY2tkcm9wIHtcclxuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXZiYXItZm9ybSB7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbiAgICAgIC5pbnB1dC1ncm91cCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjdlbTtcclxuICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgd2lkdGg6IDc4JTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE3cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICA+Lm5hdixcclxuICAgIC51c2VyIC51c2VyLWluZm8ge1xyXG4gICAgICBbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXX5kaXY+dWw+bGk+YSB7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAvLyBAZXh0ZW5kIC5hbmltYXRpb24tdHJhbnNpdGlvbi1nZW5lcmFsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNpZGViYXItbm9ybWFsIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2lkZWJhci1taW5pIHtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubG9nby10aW0ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiA2MXB4O1xyXG4gICAgd2lkdGg6IDYxcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgIGhlaWdodDogNjBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5uYXYge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgIC5jYXJldCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEzcHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgbGkge1xyXG4gICAgICA+YSB7XHJcblxyXG4gICAgICAgICY6aG92ZXIsXHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmZpcnN0LWNoaWxkPmEge1xyXG4gICAgICAgIG1hcmdpbjogMCAxNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyPmEsXHJcbiAgICAgICYgLmRyb3Bkb3duLW1lbnUgYTpob3ZlcixcclxuICAgICAgJiAuZHJvcGRvd24tbWVudSBhOmZvY3VzPltkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMik7XHJcbiAgICAgICAgY29sb3I6ICRibGFjay1jb2xvcjtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWN0aXZlPltkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMik7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYWN0aXZlPltkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdIHtcclxuICAgICAgICBpIHtcclxuICAgICAgICAgIGNvbG9yOiAjYTlhZmJiO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi5hY3RpdmU+YSxcclxuICAgICAgJi5hY3RpdmU+YSBpIHtcclxuICAgICAgICBjb2xvcjogJHdoaXRlLWNvbG9yIDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5hY3RpdmU+YSBpLmFjdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6ICR3aGl0ZS1jb2xvciA7XHJcbiAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAmLnNlcGFyYXRvciB7XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4IDA7XHJcblxyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgICAgbGVmdDogMTVweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgwLCAxODAsIDE4MCwgLjMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJitsaSB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICNhOWFmYmI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubmF2IGxpIGEsXHJcbiAgLm5hdiBsaSAuZHJvcGRvd24tbWVudSBhIHtcclxuICAgIG1hcmdpbjogMTBweCAxNXB4IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBjb2xvcjogJGJsYWNrLWNvbG9yO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIH1cclxuXHJcblxyXG4gIC5zaWRlYmFyLWJhY2tncm91bmQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgei1pbmRleDogMztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgIG9wYWNpdHk6IC45MztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5sb2dvIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiA0O1xyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4MCwgMTgwLCAxODAsIC4zKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIG1hcmdpbjogMTBweCAxMHB4O1xyXG4gICAgICBjb2xvcjogJHdoaXRlLWNvbG9yO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2ltcGxlLXRleHQge1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBjb2xvcjogJGJsYWNrLWNvbG9yO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5sb2dvLXRpbSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDYxcHg7XHJcbiAgICB3aWR0aDogNjFweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogNjBweDtcclxuICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC8vICZbZGF0YS1iYWNrZ3JvdW5kLWNvbG9yPVwiYmxhY2tcIl17XHJcbiAgLy8gICAgIEBpbmNsdWRlIHNpZGViYXItYmFja2dyb3VuZC1jb2xvcigkZ3JheS1iYXNlLCAkd2hpdGUtY29sb3IpO1xyXG5cclxuICAvLyAgICAgLm5hdiBsaSAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbXtcclxuICAvLyAgICAgICBjb2xvcjogJHdoaXRlLWNvbG9yO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gfVxyXG5cclxuICAvLyAmW2RhdGEtY29sb3I9XCJwdXJwbGVcIl17XHJcbiAgLy8gICAgIEBpbmNsdWRlIHNldC1iYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbigkYnJhbmQtcHJpbWFyeSk7XHJcbiAgLy8gfVxyXG4gIC8vICZbZGF0YS1jb2xvcj1cImF6dXJlXCJde1xyXG4gIC8vICAgICBAaW5jbHVkZSBzZXQtYmFja2dyb3VuZC1jb2xvci1idXR0b24oJGJyYW5kLWluZm8pO1xyXG4gIC8vIH1cclxuICAvLyAmW2RhdGEtY29sb3I9XCJncmVlblwiXXtcclxuICAvLyAgICAgQGluY2x1ZGUgc2V0LWJhY2tncm91bmQtY29sb3ItYnV0dG9uKCRicmFuZC1zdWNjZXNzKTtcclxuICAvLyB9XHJcbiAgLy8gJltkYXRhLWNvbG9yPVwib3JhbmdlXCJde1xyXG4gIC8vICAgICBAaW5jbHVkZSBzZXQtYmFja2dyb3VuZC1jb2xvci1idXR0b24oJGJyYW5kLXdhcm5pbmcpO1xyXG4gIC8vIH1cclxuICAvLyAmW2RhdGEtY29sb3I9XCJkYW5nZXJcIl17XHJcbiAgLy8gICAgIEBpbmNsdWRlIHNldC1iYWNrZ3JvdW5kLWNvbG9yLWJ1dHRvbigkYnJhbmQtZGFuZ2VyKTtcclxuICAvLyB9XHJcbiAgLy8gJltkYXRhLWNvbG9yPVwicm9zZVwiXXtcclxuICAvLyAgICAgQGluY2x1ZGUgc2V0LWJhY2tncm91bmQtY29sb3ItYnV0dG9uKCRicmFuZC1yb3NlKTtcclxuICAvLyB9XHJcblxyXG4gIC8vICZbZGF0YS1jb2xvcj1cIndoaXRlXCJde1xyXG4gIC8vICAgICBAaW5jbHVkZSBzZXQtYmFja2dyb3VuZC1jb2xvci1idXR0b24oJHdoaXRlLWNvbG9yKTtcclxuICAvLyAgICAgQGluY2x1ZGUgc2lkZWJhci1hY3RpdmUtY29sb3IoJGJsYWNrLWNvbG9yKTtcclxuICAvLyB9XHJcblxyXG4gIC8vICZbZGF0YS1iYWNrZ3JvdW5kLWNvbG9yPVwicmVkXCJde1xyXG4gIC8vICAgICBAaW5jbHVkZSBzaWRlYmFyLWJhY2tncm91bmQtY29sb3IoJGJyYW5kLWRhbmdlciwgJHdoaXRlLWNvbG9yKTtcclxuXHJcbiAgLy8gICAgIC51c2VyLFxyXG4gIC8vICAgICAubG9nbyxcclxuICAvLyAgICAgLm5hdiBsaS5zZXBhcmF0b3J7XHJcbiAgLy8gICAgICAgICAmOmFmdGVye1xyXG4gIC8vICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsIC4zKTtcclxuICAvLyAgICAgICAgIH1cclxuICAvLyAgICAgfVxyXG5cclxuICAvLyAgICAgLm5hdntcclxuICAvLyAgICAgICAgIGxpOmhvdmVyOm5vdCguYWN0aXZlKSA+IGEsXHJcbiAgLy8gICAgICAgICBsaS5hY3RpdmUgPiBbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXXtcclxuICAvLyAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgLy8gICAgICAgICB9XHJcbiAgLy8gICAgIH1cclxuICAvLyB9XHJcblxyXG4gIC8vICZbZGF0YS1pbWFnZV06YWZ0ZXIsXHJcbiAgLy8gJi5oYXMtaW1hZ2U6YWZ0ZXJ7XHJcbiAgLy8gICAgIG9wYWNpdHk6IC43NztcclxuICAvLyB9XHJcbn1cclxuXHJcbi5vZmYtY2FudmFzLXNpZGViYXIgLm5hdmJhci1jb2xsYXBzZSB7XHJcbiAgLm5hdiB7XHJcblxyXG4gICAgPmxpPmEsXHJcbiAgICA+bGk+YTpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAkd2hpdGUtY29sb3I7XHJcbiAgICAgIG1hcmdpbjogMCAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgID5saT5hOmZvY3VzLFxyXG4gICAgPmxpPmE6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLm1haW4tcGFuZWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI2MHB4KTtcclxuICAvLyBAaW5jbHVkZSB0cmFuc2l0aW9uICgwLjMzcywgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKSk7XHJcblxyXG4gIC5tYWluLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogNzBweDtcclxuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDEyM3B4KTtcclxuICB9XHJcblxyXG4gIC5mb290ZXIge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlN2U3ZTc7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wZXJmZWN0LXNjcm9sbGJhci1vbiB7XHJcblxyXG4gIC5zaWRlYmFyLFxyXG4gIC5tYWluLXBhbmVsIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnNpZGViYXIsXHJcbi5tYWluLXBhbmVsLFxyXG4uc2lkZWJhci13cmFwcGVyIHtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IHRvcCwgYm90dG9tLCB3aWR0aDtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0b3AsIGJvdHRvbSwgd2lkdGg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnMsIC4ycywgLjM1cztcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnMsIC4ycywgLjM1cztcclxuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXIsIGxpbmVhciwgZWFzZTtcclxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyLCBsaW5lYXIsIGVhc2U7XHJcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG59XHJcblxyXG4udmlzaWJsZS1vbi1zaWRlYmFyLXJlZ3VsYXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udmlzaWJsZS1vbi1zaWRlYmFyLW1pbmkge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MXB4KSB7XHJcbiAgLnNpZGViYXItbWluaSB7XHJcbiAgICAudmlzaWJsZS1vbi1zaWRlYmFyLXJlZ3VsYXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnZpc2libGUtb24tc2lkZWJhci1taW5pIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpZGViYXIsXHJcbiAgICAuc2lkZWJhciAuc2lkZWJhci13cmFwcGVyIHtcclxuICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1haW4tcGFuZWwge1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpZGViYXIge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgICAgei1pbmRleDogOTk5OTtcclxuXHJcbiAgICAgIC5sb2dvIHtcclxuICAgICAgICBhLmxvZ28tbm9ybWFsIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAvLyBAaW5jbHVkZSB0cmFuc2Zvcm0tdHJhbnNsYXRlLXgoLTI1cHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnNpZGViYXItd3JhcHBlciB7XHJcblxyXG4gICAgICAgID4ubmF2IFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdfmRpdj51bD5saT5hIC5zaWRlYmFyLW5vcm1hbCxcclxuICAgICAgICAudXNlciAudXNlci1pbmZvIFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdfmRpdj51bD5saT5hIC5zaWRlYmFyLW5vcm1hbCxcclxuICAgICAgICAudXNlciAudXNlci1pbmZvPmE+c3BhbixcclxuICAgICAgICA+Lm5hdiBsaT5hIHAge1xyXG4gICAgICAgICAgLy8gQGluY2x1ZGUgdHJhbnNmb3JtLXRyYW5zbGF0ZS14KC0yNXB4KTtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNpZGViYXI6aG92ZXIge1xyXG4gICAgICB3aWR0aDogMjYwcHg7XHJcblxyXG4gICAgICAubG9nbyB7XHJcbiAgICAgICAgYS5sb2dvLW5vcm1hbCB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgLy8gQGluY2x1ZGUgdHJhbnNmb3JtLXRyYW5zbGF0ZS14KDBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2lkZWJhci13cmFwcGVyIHtcclxuICAgICAgICB3aWR0aDogMjYwcHg7XHJcblxyXG4gICAgICAgID4ubmF2IGxpPmEgcCxcclxuICAgICAgICA+Lm5hdiBbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXX5kaXY+dWw+bGk+YSAuc2lkZWJhci1ub3JtYWwsXHJcbiAgICAgICAgLnVzZXIgLnVzZXItaW5mbyBbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXX5kaXY+dWw+bGk+YSAuc2lkZWJhci1ub3JtYWwsXHJcbiAgICAgICAgLnVzZXIgLnVzZXItaW5mbz5hPnNwYW4ge1xyXG4gICAgICAgICAgLy8gQGluY2x1ZGUgdHJhbnNmb3JtLXRyYW5zbGF0ZS14KDBweCk7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuLm5hdiAubmF2LWl0ZW0ge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXYgbGkge1xyXG4gIGNvbG9yOiAjM2M0ODU4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXYgbGkgYSB7XHJcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTJweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgfVxyXG59Il19 */"] });


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
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/cdk/portal */ 7520);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/cdk/scrolling */ 6328);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/stepper */ 1861);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ 9673);
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/tree */ 5183);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ 3335);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 4865);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ 9837);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ 4193);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ 3453);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/cdk/overlay */ 5895);
/* harmony import */ var _angular_cdk_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/menu */ 5397);
/* harmony import */ var _angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/cdk/dialog */ 2529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);















































class MaterialExampleModule {
}
MaterialExampleModule.ɵfac = function MaterialExampleModule_Factory(t) { return new (t || MaterialExampleModule)(); };
MaterialExampleModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialExampleModule });
MaterialExampleModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__.A11yModule,
        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordionModule,
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__.ClipboardModule,
        _angular_cdk_menu__WEBPACK_IMPORTED_MODULE_4__.CdkMenuModule,
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__.CdkStepperModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__.CdkTableModule,
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__.CdkTreeModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__.DragDropModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__.MatAutocompleteModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__.MatBadgeModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__.MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipsModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__.MatStepperModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__.MatNativeDateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__.MatTooltipModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__.MatTreeModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__.OverlayModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_44__.PortalModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__.ScrollingModule,
        _angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_46__.DialogModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialExampleModule, { exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__.A11yModule,
        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordionModule,
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__.ClipboardModule,
        _angular_cdk_menu__WEBPACK_IMPORTED_MODULE_4__.CdkMenuModule,
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__.CdkStepperModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__.CdkTableModule,
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__.CdkTreeModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__.DragDropModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__.MatAutocompleteModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__.MatBadgeModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__.MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipsModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__.MatStepperModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__.MatNativeDateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__.MatTooltipModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__.MatTreeModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__.OverlayModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_44__.PortalModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__.ScrollingModule,
        _angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_46__.DialogModule] }); })();


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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'admin-user-uuid': uuid })
        });
    }
    getProductGroupCreationMetaData() {
        const uuid = this.getLocalStorage('currentUserSession').uuid;
        return this.http.get(this.baseUrl + '/v1/admin/products/creation-metadata', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'admin-user-uuid': uuid })
        });
    }
    getCategoryCreationMetaData() {
        const uuid = this.getLocalStorage('currentUserSession').uuid;
        return this.http.get(this.baseUrl + '/v1/admin/categories/creation-metadata', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'admin-user-uuid': uuid })
        });
    }
    getProductVarientList(params) {
        const uuid = this.getLocalStorage('currentUserSession').uuid;
        return this.http.get(this.baseUrl + '/v1/admin/product-variants', {
            params,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'admin-user-uuid': uuid })
        });
    }
    getProductGroupList(params) {
        const uuid = this.getLocalStorage('currentUserSession').uuid;
        return this.http.get(this.baseUrl + '/v1/admin/products', {
            params,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'admin-user-uuid': uuid })
        });
    }
    getProductCategoryList(params) {
        const uuid = this.getLocalStorage('currentUserSession').uuid;
        return this.http.get(this.baseUrl + '/v1/admin/categories', {
            params,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'admin-user-uuid': uuid })
        });
    }
    getProductVarientInfo(productId) {
        const uuid = this.getLocalStorage('currentUserSession').uuid;
        return this.http.get(this.baseUrl + `/v1/admin/product-variants/${productId}`, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'admin-user-uuid': uuid })
        });
    }
    getProductGroupInfo(productId) {
        const uuid = this.getLocalStorage('currentUserSession').uuid;
        return this.http.get(this.baseUrl + `/v1/admin/products/${productId}`, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'admin-user-uuid': uuid })
        });
    }
    getCategoryInfo(productId) {
        const uuid = this.getLocalStorage('currentUserSession').uuid;
        return this.http.get(this.baseUrl + `/v1/admin/categories/${productId}`, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'admin-user-uuid': uuid })
        });
    }
    updateProductVarientInfo(productId, body) {
        const uuid = this.getLocalStorage('currentUserSession').uuid;
        return this.http.post(this.baseUrl + `/v1/admin/product-variants/${productId}`, body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'admin-user-uuid': uuid })
        });
    }
    updateProductGroupInfo(productId, body) {
        const uuid = this.getLocalStorage('currentUserSession').uuid;
        return this.http.post(this.baseUrl + `/v1/admin/products/${productId}`, body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'admin-user-uuid': uuid })
        });
    }
    createProductVarient(body) {
        const uuid = this.getLocalStorage('currentUserSession').uuid;
        return this.http.post(this.baseUrl + '/v1/admin/product-variants', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'admin-user-uuid': uuid })
        });
    }
    createProductGroup(body) {
        const uuid = this.getLocalStorage('currentUserSession').uuid;
        return this.http.post(this.baseUrl + '/v1/admin/products', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'admin-user-uuid': uuid })
        });
    }
    createCategory(body) {
        const uuid = this.getLocalStorage('currentUserSession').uuid;
        return this.http.post(this.baseUrl + '/v1/admin/categories', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'admin-user-uuid': uuid })
        });
    }
    uploadFiles(fd) {
        const uuid = this.getLocalStorage('currentUserSession').uuid;
        return this.http.post(this.baseUrl + '/v1/admin/catalog-media', fd, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'admin-user-uuid': uuid })
        });
    }
    deleteFiles(id) {
        const uuid = this.getLocalStorage('currentUserSession').uuid;
        return this.http.delete(this.baseUrl + `/v1/admin/catalog-media/${id}`, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'admin-user-uuid': uuid })
        });
    }
    changePassword(a, b) {
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
ApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });


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
    baseUrl: 'https://hisense-apis.bloginguru.com',
    websiteUrl: 'https://hisense-demo.bloginguru.com'
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
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map