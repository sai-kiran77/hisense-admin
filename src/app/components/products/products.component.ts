import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

declare var swal: any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  environment = environment

  relativeUrl = '';
  products: any = [];
  purchaseLinksMetaData: any = [];
  componentType = 'create';
  selectedIndex = 0;
  purchaseLinks: any = {};
  metaData: any;

  displayedColumns: string[] = ['Vendor', 'Update Link']; //'Purchase Link'
  imagesDisplayedColumns: string[] = ['Image Type', 'Current Image', 'Upload New Image'];
  productImagesDisplayedColumns: any = ['Image', 'Actions'];
  dataSource: any;
  imagesDataSource: any;
  productImagesDataSource: any;

  isLoader = false;
  isLoading = false;
  productVarientFormSubmitted = false;

  productVarientForm = this.fb.group({
    code: ['', [Validators.required]],
    name: ['', [Validators.required]],
    variant_size: ['', [Validators.required]],
    product_id: ['', [Validators.required]],
    short_description: ['', [Validators.required]],
    is_enabled: [0]
  })

  get formControl() {
    return this.productVarientForm.controls;
  }

  constructor(private location: Location,
    private api: ApiService,
    private fb: FormBuilder,
    private toaster: ToastrService,
    private activatedroute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedroute.data.subscribe((data: any) => {
      console.log(data);
      this.componentType = data.type;
      this.getMetaData(data);
    })
  }

  getMetaData(data: any) {
    this.api.getProductVarientCreationMetaData().subscribe({
      next: (res: any) => {
        console.log(res);
        this.metaData = res?.data;
        this.products = res?.data?.products;
        if (data.type == 'update') {
          this.loadProductInfo();
        }
        // this.purchaseLinksMetaData = res?.data?.product_variant_purchase_link_vendors;
      },
      error: err => {
        console.log(err);
        this.toaster.error(err.error.message);
      }
    })
  }

  loadProductInfo() {
    this.api.getProductVarientInfo(this.activatedroute.snapshot.params['id']).subscribe({
      next: (res: any) => {
        console.log(res);
        this.relativeUrl = res.data.relative_url;
        this.purchaseLinksMetaData = this.metaData?.product_variant_purchase_link_vendors;
        this.purchaseLinksMetaData.forEach((obj: any) => {
          this.purchaseLinks[obj.code] = res.data.product_variant_purchase_links.find((o: any) => o.vendor == obj.code)?.purchase_link;
        })
        this.productVarientForm.patchValue({
          code: res?.data?.code,
          name: res?.data?.name,
          variant_size: res?.data?.variant_size,
          product_id: res?.data?.product_id,
          short_description: res?.data?.short_description,
          is_enabled: res?.data?.is_enabled,
        })

        this.dataSource = new MatTableDataSource<any>(this.metaData?.product_variant_purchase_link_vendors);
        const array = [];
        if (res.data.thumb_image) {
          res.data.thumb_image.type = 'Large Size'
          array.push(res.data?.thumb_image);
        }
        if (res.data.thumb_image_medium) {
          res.data.thumb_image_medium.type = 'Medium Size'
          array.push(res.data?.thumb_image_medium);
        }

        this.imagesDataSource = new MatTableDataSource<any>(array)
        console.log(this.imagesDataSource.data);

        this.productImagesDataSource = new MatTableDataSource<any>(res.data.slider_images);
      },
      error: err => {
        console.log(err);
        this.toaster.error(err.error.message);
      }
    })
  }


  saveProductDetailsForm() {
    if (this.componentType === 'create') {
      this.productVarientForm.markAllAsTouched();
      this.productVarientFormSubmitted = true;
      if (!this.productVarientForm.valid) {
        return;
      }
      this.isLoading = true;
      this.api.createProductVarient(this.productVarientForm.value).subscribe({
        next: (res: any) => {
          this.isLoading = false;
          console.log(res);
          this.toaster.success(res.message);
          this.router.navigate(['/update/product-varients', res.data.id])
        },
        error: (err) => {
          this.isLoading = false;
          console.log(err);
          this.toaster.error(err.error.message);
        }
      })
    } else {
      console.log(this.selectedIndex);
      if (this.selectedIndex == 0) {
        this.productVarientForm.markAllAsTouched();
        this.productVarientFormSubmitted = true;
        if (!this.productVarientForm.valid) {
          return;
        }
        this.isLoading = true;
        this.productVarientForm.value.is_enabled = this.productVarientForm.value.is_enabled ? 1 : 0;
        this.api.updateProductVarientInfo(this.activatedroute.snapshot.params['id'], this.productVarientForm.value).subscribe({
          next: (res: any) => {
            this.isLoading = false;
            console.log(res);
            this.toaster.success(res.message);
          },
          error: (err) => {
            this.isLoading = false;
            console.log(err);
            this.toaster.error(err.error.message);
          }
        })
      } else if (this.selectedIndex == 1) {
        const object: any = { product_variant_purchase_links: [] }

        for (let key in this.purchaseLinks) {
          if (this.purchaseLinks[key] && this.isLinkValid(this.purchaseLinks[key])) {
            return;
          } else if (this.purchaseLinks[key]) {
            object.product_variant_purchase_links.push({
              vendor: key,
              purchase_link: this.purchaseLinks[key]
            })
          }
        }
        this.isLoading = true;
        this.api.updateProductVarientInfo(this.activatedroute.snapshot.params['id'], object).subscribe({
          next: (res: any) => {
            this.isLoading = false;
            console.log(res);
            this.toaster.success(res.message);
          },
          error: (err) => {
            this.isLoading = false;
            console.log(err);
            this.toaster.error(err.error.message);
          }
        })
      }
    }
  }

  imagesTabSelectedIndex: any;

  changeTab(event: any) {
    console.log(event);
    console.log(event.index);
    this.selectedIndex = event.index;
    this.isLoading = false;
    this.productVarientFormSubmitted = false;
    // this.productVarientForm.reset();
    if (this.selectedIndex == 2) {
      this.imagesTabSelectedIndex = 1;
      setTimeout(() => {
        this.imagesTabSelectedIndex = 0;
      }, 0)
    }
  }

  @ViewChildren("input") inputForFile: any;

  browseFileButtonClicked(i: number) {
    // console.log(this.inputForFile[0]);
    // console.log(this.inputForFile[1]);
    this.inputForFile.forEach((a: any, index: number) => {
      console.log(a);
      if (i === index) {
        a.nativeElement.click();
      }
    })
  }

  imagesCatalogMedia: any = [];

  inputChangeEventListener(event: any, type: any, i: number) {
    console.log(i);
    console.log(this.imagesDataSource);
    let mediaType = '';
    if (type == 'Large Size') {
      mediaType = 'thumb_image'
    } else {
      mediaType = 'thumb_image_medium'
    }

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.imagesDataSource.data[i].full_url = reader.result;
    }
    this.imagesDataSource.data[i].media_type = mediaType;
    this.imagesDataSource.data[i].file = event.target.files[0];
  }

  uploadImages() {
    this.imagesCatalogMedia = [...this.imagesDataSource.data];
    // console.log(this.imagesCatalogMedia);

    // const catalog = [];

    this.imagesCatalogMedia = this.imagesCatalogMedia.filter((obj: any) => obj.file && obj.media_type);
    console.log(this.imagesCatalogMedia);

    if (this.imagesCatalogMedia == 0) {
      this.toaster.error('Please modify files before uploading!');
      return;
    }

    let formData: any = new FormData();
    let index = 0;
    for (let obj of this.imagesCatalogMedia) {
      for (var key in obj) {
        console.log(key);
        formData.append(`catalog_media[${index}][${key}]`, obj[key]);
      }
      index++;
    }

    for (var key1 of formData.entries()) {
      console.log(key1[0] + ', ' + key1[1]);
    }


    console.log(formData);
    this.api.uploadFiles(formData).subscribe({
      next: (res: any) => {
        console.log(res);
        this.toaster.success(res.message);
      },
      error: (err) => {
        console.log(err);
        this.toaster.error(err.error.message);
      }
    })
  }

  removeFile(ele: any) {
    swal({
      text: 'Are you sure you want to delete?',
      type: 'warning',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    })
      .then((willDelete: any) => {
        console.log(ele)
        this.api.deleteFiles(ele.id).subscribe({
          next: (res: any) => {
            console.log(res);
            this.loadProductInfo();
            this.toaster.success(res.message);
          },
          error: err => {
            console.log(err);
            this.toaster.error(err.error.message);
          }
        })
      }, (error: any) => {
      });
  }

  @ViewChild('inputMMultipleFiles') inputMultipleFiles: any;
  myFiles: any = [];
  myFilesImages: any = [];

  browseMultipleFileButtonClicked() {
    console.log('came here');
    this.inputMultipleFiles.nativeElement.click();
  }

  onFileChange(event: any) {
    console.log(event);
    for (let i = 0; i < event.target.files.length; i++) {

      this.myFiles.push({
        file: event.target.files[i],
        media_resource_type: 'product_variant',
        media_resource_id: this.activatedroute.snapshot.params['id'],
        media_type: 'slider_image'
      });

      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[i]);
      reader.onload = (_event) => {
        this.myFilesImages.push(reader.result);
      }
    }
    console.log(this.myFiles);
  }

  uploadMultipleImages() {
    const formData = new FormData();

    for (var i = 0; i < this.myFiles.length; i++) {
      for (var key in this.myFiles[i]) {
        formData.append(`catalog_media[${i}][${key}]`, this.myFiles[i][key]);
      }
    }

    this.api.uploadFiles(formData).subscribe({
      next: (res: any) => {
        console.log(res);
        this.toaster.success(res.message);
        this.loadProductInfo();
      },
      error: (err) => {
        console.log(err);
        this.toaster.error(err.error.message);
      }
    })
  }

  isLinkValid(link: string) {
    return link && !/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/.test(link);
  }

  goBack() {
    this.location.back();
  }

}
