import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { HomeSliderModalComponent } from '../home-slider-modal/home-slider-modal.component';

declare var swal: any;

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss']
})
export class HomeSliderComponent implements OnInit {

  displayedColumns: string[] = ['Link', 'desktop image', 'mobile image', 'priority', 'Actions'];
  dataSource: any;
  // pageSize = 50;
  isLoading = false;


  // @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  constructor(private api: ApiService,
    private toaster: ToastrService,
    private location: Location,
    private modal: MatDialog,) { }

  ngOnInit(): void {
    this.getPressCoverages();
  }

  getPressCoverages() {
    this.api.getHomePageSlides().subscribe({
      next: (res: any) => {
        console.log(res);
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
            this.getPressCoverages();
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
      width: "60vw",
      panelClass: "switcher-panel",
      data: {},
    });

    dailogRef.afterClosed().subscribe(
      (result) => {
        if (result) {
          this.getPressCoverages();
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
