import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-varients-list',
  templateUrl: './product-varients-list.component.html',
  styleUrls: ['./product-varients-list.component.scss']
})
export class ProductVarientsListComponent implements OnInit {

  environment = environment;

  displayedColumns: string[] = ['name', 'code', 'Product Link', 'size', 'Actions'];
  dataSource: any;

  isLoading = true;
  pageSize = 10

  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  constructor(private api: ApiService,
    private toaster: ToastrService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProductVarientList();
  }

  getProductVarientList(params = { page: 1, per_page: 10 }) {
    this.api.getProductVarientList(params).subscribe({
      next: (res: any) => {
        console.log(res);
        this.dataSource = new MatTableDataSource<any>(res.data.data);
        setTimeout(()=>{
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

  pageChanged(event: any) {
    console.log(event);
    this.pageSize = event.pageSize;
    this.getProductVarientList({ page: event.pageIndex + 1, per_page: this.pageSize })
  }

  goBack() {
    this.location.back();
  }


}
