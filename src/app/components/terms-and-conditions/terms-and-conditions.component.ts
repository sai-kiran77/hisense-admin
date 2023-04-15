import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';
import { TermsAndConditionsModalComponent } from '../terms-and-conditions-modal/terms-and-conditions-modal.component';

declare var swal: any;

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss']
})
export class TermsAndConditionsComponent implements OnInit {

  // date_range
  displayedColumns: string[] = ['group_name', 'tab_name', 'heading', 'sub_heading', 'Actions']; //'priority',
  dataSource: any;
  pageSize = 50;
  isLoading = false;
  metaData: any;


  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  constructor(private api: ApiService,
    private toaster: ToastrService,
    private location: Location,
    private modal: MatDialog,) { }

  ngOnInit(): void {
    this.getTermsAndConditions();
    this.getTermsAndConditionsMetaData();
  }

  getTermsAndConditions(params = { page: 1, per_page: 50 }) {
    this.api.getTermsAndConditions(params).subscribe({
      next: (res: any) => {
        console.log(res);
        this.dataSource = new MatTableDataSource<any>(res.data.data);
        setTimeout(() => {
          this.paginator.pageIndex = params.page - 1;
          this.paginator.length = res.data.total;
        })
        this.dataSource.paginator = this.paginator;
        this.isLoading = false;
      },
      error: (err: any) => {
        this.isLoading = false;
        console.log(err);
        this.toaster.error(err.error.message);
      }
    })
  }

  getTermsAndConditionsMetaData() {
    this.api.getTermsAndConditionsMetaData().subscribe({
      next: (res: any) => {
        console.log(res);
        this.metaData = res.data;
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
            this.getTermsAndConditions();
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
    const dailogRef = this.modal.open(TermsAndConditionsModalComponent, {
      width: "80vw",
      panelClass: "switcher-panel",
      data: { isEdit, dataToEdit, metaData: this.metaData },
    });

    dailogRef.afterClosed().subscribe(
      (result) => {
        if (result) {
          this.getTermsAndConditions();
        }
      });
  }

  pageChanged(event: any) {
    this.getTermsAndConditions({ page: event.pageIndex + 1, per_page: event.pageSize })
  }

  goBack() {
    this.location.back();
  }

}
