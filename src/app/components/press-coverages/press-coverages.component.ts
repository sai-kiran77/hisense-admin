import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { PressCoverageModalComponent } from '../press-coverage-modal/press-coverage-modal.component';
import { MatDialog } from '@angular/material/dialog';
declare var swal: any;

@Component({
  selector: 'app-press-coverages',
  templateUrl: './press-coverages.component.html',
  styleUrls: ['./press-coverages.component.scss']
})
export class PressCoveragesComponent implements OnInit {

  displayedColumns: string[] = ['title', 'description', 'desktop_image', 'mobile_image', 'vendor', 'external_url', 'Actions']; //'priority',
  dataSource: any;
  pageSize = 50;
  isLoading = false;
  totalPages = 0;


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

  getPressCoverages(params = { page: 1, per_page: 50 }) {
    this.api.getPressCoverages(params).subscribe({
      next: (res: any) => {
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
        this.api.deletePressCoverage(el.id).subscribe({
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

  openSubscriptionModal(dataToEdit?: any, isEdit = false) {
    const dailogRef = this.modal.open(PressCoverageModalComponent, {
      width: "80vw",
      panelClass: "switcher-panel",
      data: { isEdit, dataToEdit },
    });

    dailogRef.afterClosed().subscribe(
      (result) => {
        if (result) {
          this.getPressCoverages();
        }
      });
  }

  pageChanged(event: any) {
    this.getPressCoverages({ page: event.pageIndex + 1, per_page: event.pageSize })
  }

  goBack() {
    this.location.back();
  }

}
