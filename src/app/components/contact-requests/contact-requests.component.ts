import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contact-requests',
  templateUrl: './contact-requests.component.html',
  styleUrls: ['./contact-requests.component.scss']
})
export class ContactRequestsComponent implements OnInit {
  displayedColumns: string[] = ['Customer Info', 'Subject', 'Body', 'Created Time'];
  dataSource: any;
  isLoading = true;
  pageSize = 50;

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
    this.contactRequestList();
  }

  contactRequestList(params = { page: 1, per_page: 50 }) {
    this.api.getContactRequests(params).subscribe({
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

  pageChanged(event: any) {
    this.contactRequestList({ page: event.pageIndex + 1, per_page: event.pageSize })
  }

  goBack() {
    this.location.back();
  }
}
