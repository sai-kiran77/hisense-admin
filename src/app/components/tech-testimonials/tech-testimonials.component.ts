import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { TechTestimonialsModalComponent } from '../tech-testimonials-modal/tech-testimonials-modal.component';
declare var swal: any;

@Component({
  selector: 'app-tech-testimonials',
  templateUrl: './tech-testimonials.component.html',
  styleUrls: ['./tech-testimonials.component.scss']
})
export class TechTestimonialsComponent implements OnInit {

  displayedColumns: string[] = ['description', 'youtube_url', 'Category', 'Product', 'Product Variant', 'Actions']; //'priority'
  dataSource: any;
  pageSize = 50;
  isLoading = false;
  metaData: any;


  // @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  constructor(private api: ApiService,
    private toaster: ToastrService,
    private location: Location,
    private modal: MatDialog,) { }

  ngOnInit(): void {
    this.geMetaData();
    this.getTechTestimonials();
  }

  geMetaData() {
    this.api.getTechTestimonialsMetaData().subscribe({
      next: (res: any) => {
        console.log(res);
        this.metaData = res.data;
      },
      error: (err: any) => {
        console.log(err);
        this.toaster.error(err.error.message);
      }
    })
  }

  getTechTestimonials(params = { page: 1, per_page: 20 }) {
    this.api.getTechTestimonials(params).subscribe({
      next: (res: any) => {
        console.log(res);
        this.dataSource = new MatTableDataSource<any>(res.data);
        // setTimeout(() => {
        //   this.paginator.pageIndex = params.page - 1;
        //   this.paginator.length = res.data.total;
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
        this.api.deleteTechTestimonial(el.id).subscribe({
          next: (res: any) => {
            console.log(res);
            this.isLoading = false;
            this.toaster.success(res.message)
            this.getTechTestimonials();
          },
          error: (err: any) => {
            this.isLoading = false;
            console.log(err);
            this.toaster.error(err.error.message);
          }
        })
      }, (error: any) => { });

  }

  openSubscriptionModal(dataToEdit?: any, isEdit = false) {
    const dailogRef = this.modal.open(TechTestimonialsModalComponent, {
      width: "80vw",
      panelClass: "switcher-panel",
      data: { isEdit, dataToEdit, metaData: this.metaData },
    });

    dailogRef.afterClosed().subscribe(
      (result) => {
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
