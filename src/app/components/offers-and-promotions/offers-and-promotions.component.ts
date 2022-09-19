import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { OffersAndPromotionsModalComponent } from '../offers-and-promotions-modal/offers-and-promotions-modal.component';

declare var swal: any;

@Component({
  selector: 'app-offers-and-promotions',
  templateUrl: './offers-and-promotions.component.html',
  styleUrls: ['./offers-and-promotions.component.scss']
})
export class OffersAndPromotionsComponent implements OnInit {

  displayedColumns: string[] = ['start date', 'file name', 'image', 'is_enabled', 'Actions'];
  dataSource: any;
  pageSize = 50;
  isLoading = false;


  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  constructor(private api: ApiService,
    private toaster: ToastrService,
    private location: Location,
    private modal: MatDialog,) { }

  ngOnInit(): void {
    this.getOffersPromotions();
  }

  getOffersPromotions(params = { page: 1, per_page: 50 }) {
    this.api.getOffersAndPromotions(params).subscribe({
      next: (res: any) => {
        console.log(res);
        this.dataSource = new MatTableDataSource<any>(res.data);
        setTimeout(() => {
          this.paginator.pageIndex = params.page - 1;
          this.paginator.length = res.data.length;
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
        this.api.deleteOffersAndPromotions(el.id).subscribe({
          next: (res: any) => {
            console.log(res);
            this.isLoading = false;
            this.toaster.success(res.message)
            this.getOffersPromotions();
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
    const dailogRef = this.modal.open(OffersAndPromotionsModalComponent, {
      width: "60vw",
      panelClass: "switcher-panel",
      data: {},
    });

    dailogRef.afterClosed().subscribe(
      (result) => {
        if (result) {
          this.getOffersPromotions();
        }
      });
  }

  pageChanged(event: any) {
    this.getOffersPromotions({ page: event.pageIndex + 1, per_page: event.pageSize })
  }

  updateOffersPromotions() {
    this.isLoading = true;
    const body = this.dataSource.data.map((obj: any) => {
      console.log(typeof obj.start_date);
      const split: any = obj.start_date?.toString().split(' ');
      if(typeof obj.start_date != 'string'){
        obj.start_date = `${split[3]}-${(new Date(obj.start_date as string).getMonth() + 1).toString().padStart(2,'0')}-${split[2]}`
      }
      return {
        id: obj.id,
        is_enabled: obj.is_enabled ? 1 : 0,
        start_date: obj.start_date
      }
    })
    console.log(body);
    this.api.updateOffersPromotions({ offer_promotions: body }).subscribe({
      next: (res: any) => {
        console.log(res);
        this.getOffersPromotions();
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
