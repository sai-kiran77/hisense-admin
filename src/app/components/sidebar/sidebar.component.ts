import { AfterContentChecked, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

declare var swal: any;


export const ROUTES: any[] = [
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
    user: 'admin', dropdown: true, userName: false, className: true, title: 'Product', icon: 'product-icon', visible: true,isCollapsed: true, dropDownMenu: [
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
  {
    user: 'admin', dropdown: false, userName: false, className: true, title: 'Contact requests', icon: 'product-icon', visible: true, path: '/contact-requests'
  },
  {
    user: 'admin', dropdown: false, userName: false, className: true, title: 'Press coverages', icon: 'product-icon', visible: true, path: '/press-coverages'
  },
  // {
  //   user: 'admin', dropdown: false, userName: false, className: true, title: 'My Profile', icon: 'fas fa-id-card', visible: true, path: '/user-profile'
  // }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterContentChecked, OnDestroy {
  menuItems: any = ROUTES;
  public isCollapsed: boolean[] = [];
  currentUser: any;
  companyLogo: any;
  companyName: any;
  platformInfo: any = {};
  userPrivileges: any;
  accountPrivileges: any;
  campaignPrivileges: any;
  reportsPrivileges: any;
  fileDrivePrivileges: any;
  companyCustomersPrivileges: any;
  billingPrivileges: any;
  canSwitchCompany = false;
  // isProfileNavigation = false;
  alive = true;
  // @ViewChild('jumpTo', { static: true }) jumpToBtn: any;
  constructor(
    // private utility: UtitlityService,
    private cdr: ChangeDetectorRef,
    private api: ApiService,
    private router: Router,
    // private dialog: MatDialog,
    private activeRoute: ActivatedRoute,
    // private PrivilegesService: PrivilegesService,
    // private toaster: ToastrService,
    // private startupService: CommonStartupService
  ) {
    console.log(this.menuItems)
  }


  isJumpToModalOpen = false;
  jumpTodialogRef: any;

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
    this.currentUser = JSON.parse(this.api.readLocalStorage('currentUserSession'))
    this.cdr.detectChanges();
  }

  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }

  routeRedirection(path: string) {
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
      .then((willDelete: any) => {
        this.api.logout();
        // this.utility.removeLocalStorage('authToken');
        // this.utility.removeLocalStorage('currentUserSession');
        // this.utility.removeLocalStorage('companyUsers');
        // this.utility.removeLocalStorage('companies');
        // this.utility.readLocalStorage('activeCompanyUser');
        // this.router.navigate(['/login']);
      }, (error: any) => {
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
