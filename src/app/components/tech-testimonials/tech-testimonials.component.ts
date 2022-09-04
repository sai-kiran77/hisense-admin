import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { TechTestimonialsModalComponent } from '../tech-testimonials-modal/tech-testimonials-modal.component';

@Component({
  selector: 'app-tech-testimonials',
  templateUrl: './tech-testimonials.component.html',
  styleUrls: ['./tech-testimonials.component.scss']
})
export class TechTestimonialsComponent implements OnInit {

  displayedColumns: string[] = ['description', 'youtube_url', 'priority', 'Actions'];
  dataSource: any;
  pageSize = 50;
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
    this.getTechTestimonials();
  }

  getTechTestimonials(params = { page: 1, per_page: 50 }) {
    this.api.getTechTestimonials().subscribe({
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
    console.log(el);
    this.api.deletePressCoverage(el.id).subscribe({
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
  }

  openSubscriptionModal() {
    const dailogRef = this.modal.open(TechTestimonialsModalComponent, {
      width: "60vw",
      panelClass: "switcher-panel",
      data: {},
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
