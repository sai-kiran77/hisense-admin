import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { WarrantyInfoModalComponent } from '../warranty-info-modal/warranty-info-modal.component';

declare var swal: any;

@Component({
  selector: 'app-warranty-info',
  templateUrl: './warranty-info.component.html',
  styleUrls: ['./warranty-info.component.scss']
})
export class WarrantyInfoComponent {

  displayedColumns: string[] = ['start_date', 'end_date', 'purchase_mode', 'warranty_description_text', 'product_varients', 'Actions']; //'priority',
  dataSource: any;
  pageSize = 50;
  isLoading = false;
  metaData: any;
  totalPages = 0;

  constructor(private api: ApiService,
    private toaster: ToastrService,
    private modal: MatDialog,) { }

  ngOnInit(): void {
    this.getList();
    this.getMetaData();
  }

  allWarrantyData = [];

  getList(params = { page: 1, per_page: 50 }) {
    this.api.getWarrantyInfo(params).subscribe({
      next: (res: any) => {
        console.log(res);
        // this.dataSource = new MatTableDataSource<any>(res.data.data);
        // setTimeout(() => {
        //   this.paginator.pageIndex = params.page - 1;
        //   this.paginator.length = res.data.total;
        // })
        // this.dataSource.paginator = this.paginator;
        this.allWarrantyData = res.data.map((obj: any) => {
          const product_varients: any = [];
          obj.warranty_information_product_variants.forEach((element: any) => {
            if (element?.product_variant?.code) {
              product_varients.push(element.product_variant.code)
            }
          });
          obj.product_varients = product_varients.join(', ');
          return obj;
        });
        this.dataSource = this.allWarrantyData.slice((params.page - 1) * params.per_page, (params.page * params.per_page) - 1);
        this.totalPages = res.data.length;
        this.isLoading = false;
      },
      error: (err: any) => {
        this.isLoading = false;
        console.log(err);
        this.toaster.error(err.error.message);
      }
    })
  }

  pageChanged(event: any) {
    // this.getList({ page: event.pageIndex + 1, per_page: event.pageSize })
    const params = { page: event.pageIndex + 1, per_page: event.pageSize };
    this.dataSource = this.allWarrantyData.slice((params.page - 1) * params.per_page, (params.page * params.per_page) - 1);
  }

  getMetaData() {
    this.api.getWarrantyMetaData().subscribe({
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
        this.api.deleteWarranty(el.id).subscribe({
          next: (res: any) => {
            console.log(res);
            this.isLoading = false;
            this.toaster.success(res.message)
            this.getList();
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
    const dailogRef = this.modal.open(WarrantyInfoModalComponent, {
      width: "80vw",
      panelClass: "switcher-panel",
      data: { isEdit, dataToEdit, metaData: this.metaData },
    });

    dailogRef.afterClosed().subscribe(
      (result) => {
        if (result) {
          this.getList();
        }
      });
  }

}
