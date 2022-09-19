import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';
import { HomeSliderModalComponent } from '../home-slider-modal/home-slider-modal.component';

declare var swal: any;

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss']
})
export class HomeSliderComponent implements OnInit {

  environment = environment;

  displayedColumns: string[] = ['Link', 'desktop image', 'mobile image', 'priority', 'is_enabled', 'Actions'];
  dataSource: any;
  // pageSize = 50;
  isLoading = false;
  priorities: any = [];


  // @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  constructor(private api: ApiService,
    private toaster: ToastrService,
    private location: Location,
    private modal: MatDialog,) { }

  ngOnInit(): void {
    this.getHomePageSlides();
  }

  getHomePageSlides() {
    this.api.getHomePageSlides().subscribe({
      next: (res: any) => {
        console.log(res);
        res.data = res.data.map((obj: any,i: number)=>{
          obj.click_link = environment.websiteUrl + obj.click_link;
          this.priorities.push(i+1)
          return{
            ...obj,
          }
        })
        this.dataSource = new MatTableDataSource<any>(res.data);
        // setTimeout(() => {
        //   this.paginator.pageIndex = params.page - 1;
        //   this.paginator.length = res.data.length;
        // })
        // this.dataSource.paginator = this.paginator;
        this.isLoading = false;
      },
      error: (err: any) => {
        this.isLoading = false;
        console.log(err);
        this.toaster.error(err.error.message);
      }
    })
  }

  deleteItem(el: any) {
    swal({
      text: 'Are you sure you want to delete?',
      type: 'warning',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    })
      .then((willDelete: any) => {
        console.log(el);
        this.api.deleteHomePageSlide(el.id).subscribe({
          next: (res: any) => {
            console.log(res);
            this.isLoading = false;
            this.toaster.success(res.message)
            this.getHomePageSlides();
          },
          error: (err: any) => {
            this.isLoading = false;
            console.log(err);
            this.toaster.error(err.error.message);
          }
        })
      }, (error: any) => { });

  }

  openSubscriptionModal() {
    const dailogRef = this.modal.open(HomeSliderModalComponent, {
      width: "500px",
      panelClass: "switcher-panel",
      data: {},
    });

    dailogRef.afterClosed().subscribe(
      (result) => {
        if (result) {
          this.getHomePageSlides();
        }
      });
  }

  // pageChanged(event: any) {
  //   this.getPressCoverages({ page: event.pageIndex + 1, per_page: event.pageSize })
  // }

  updateHomeSlider(){
    this.isLoading = true;
    console.log(this.dataSource.data);
    const body = this.dataSource.data.map((obj: any) => {
      return {
        id: obj.id,
        click_link: obj.click_link,
        is_enabled: obj.is_enabled ? 1 : 0,
        priority: obj.priority
      }
    })
    console.log(body);
    this.api.updateHomeSlider({home_page_slides: body }).subscribe({
      next: (res: any) => {
        console.log(res);
        this.getHomePageSlides();
        this.toaster.success(res.message);
        this.isLoading = false;
      },
      error: (err: any) => {
        this.isLoading = false;
        console.log(err);
        this.toaster.error(err.error.message);
      }
    })
  }

  goBack() {
    this.location.back();
  }
}
