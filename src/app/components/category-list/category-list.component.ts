import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  environment = environment

  displayedColumns: string[] = ['name', 'code', 'View on website', 'Actions']; //'Product Code', 'size'
  dataSource: any;
  isLoading = true;
  pageSize = 50

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

  getProductVarientList(params = { page: 1, per_page: 50 }) {
    this.api.getProductCategoryList(params).subscribe({
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
