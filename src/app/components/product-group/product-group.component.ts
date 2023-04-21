import { Location } from '@angular/common';
import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

declare var swal: any;

@Component({
  selector: 'app-product-group',
  templateUrl: './product-group.component.html',
  styleUrls: ['./product-group.component.scss']
})
export class ProductGroupComponent implements OnInit {

  environment = environment

  relativeUrl = '';

  products: any = [];
  // purchaseLinksMetaData: any = [];
  componentType = 'create';
  selectedIndex = 0;
  purchaseLinks: any = {};
  metaData: any;

  displayedColumns: string[] = ['Product', 'Open on Website', 'priority', 'Actions']; //'Purchase Link'
  productImagesDisplayedColumns: any = ['Image', 'priority', 'is_enable', 'Actions'];
  dataSource: any;
  imagesDataSource: any;
  productImagesDataSource: any;
  priorities: any = [];
  descriptionImagespriorities: any = [];

  isLoader = false;
  isLoading = false;
  productVarientFormSubmitted = false;

  productVarientForm = this.fb.group({
    code: ['', [Validators.required]],
    name: ['', [Validators.required]],
    product_type_id: ['', [Validators.required]],
    category_id: ['', [Validators.required]],
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
    this.api.getProductGroupCreationMetaData().subscribe({
      next: (res: any) => {
        console.log(res);
        this.metaData = res?.data;
        this.products = res?.data?.product_types;
        if (data.type == 'update') {
          this.loadProductInfo();
        }
      },
      error: err => {
        console.log(err);
        this.toaster.error(err.error.message);
      }
    })
  }

  loadProductInfo() {
    this.api.getProductGroupInfo(this.activatedroute.snapshot.params['id']).subscribe({
      next: (res: any) => {
        console.log(res);
        // this.products = res?.data?.products;
        // this.purchaseLinksMetaData = this.metaData?.product_variant_purchase_link_vendors;
        // this.purchaseLinksMetaData.forEach((obj: any) => {
        //   this.purchaseLinks[obj.code] = res.data.product_variant_purchase_links.find((o: any) => o.vendor == obj.code)?.purchase_link;
        // })
        this.relativeUrl = res.data.relative_url;
        this.productVarientForm.patchValue({
          code: res?.data?.code,
          name: res?.data?.name,
          product_type_id: res?.data?.product_type_id,
          category_id: res?.data?.category_products[0].category_id,
          is_enabled: res?.data?.is_enabled,
        })

        res.data.product_variants = res.data?.product_variants.map((obj: any, i: number) => {
          this.priorities.push(i + 1);
          return {
            ...obj,
            priority: i + 1,
          }
        })

        // this.dataSource = new MatTableDataSource<any>(res.data.product_variants);
        this.dataSource = res.data.product_variants;
        // res.data.thumb_image.type = 'Large Size'
        // res.data.thumb_image_medium.type = 'Medium Size'

        // this.imagesDataSource = new MatTableDataSource<any>([
        //   res.data?.thumb_image,
        //   res.data?.thumb_image_medium,
        // ])
        this.imagesDataSource = [
          res.data?.thumb_image,
          res.data?.thumb_image_medium,
        ];

        res.data.description_images_admin = res.data?.description_images_admin.map((obj: any, i: number) => {
          this.descriptionImagespriorities.push(i + 1);
          return {
            ...obj,
            priority: i + 1,
          }
        })

        // this.productImagesDataSource = new MatTableDataSource<any>(res.data.description_images_admin);
        this.productImagesDataSource = res.data.description_images_admin;
      },
      error: (err: any) => {
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
      const category_products = {
        category_products: [{
          category_id: this.productVarientForm.value.category_id
        }]
      }
      delete this.productVarientForm.value.category_id;
      delete this.productVarientForm.value.is_enabled;
      this.api.createProductGroup({ ...this.productVarientForm.value, ...category_products }).subscribe({
        next: (res: any) => {
          this.isLoading = false;
          console.log(res);
          this.toaster.success(res.message);
          this.router.navigate(['/update/product-group', res.data.id])
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
        const category_products = {
          category_products: [{
            category_id: this.productVarientForm.value.category_id
          }]
        }
        this.productVarientForm.value.is_enabled = this.productVarientForm.value.is_enabled ? 1 : 0;
        this.api.updateProductGroupInfo(this.activatedroute.snapshot.params['id'], { ...this.productVarientForm.value, ...category_products }).subscribe({
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
        this.isLoading = true;
        this.api.updateProductGroupInfo(this.activatedroute.snapshot.params['id'], { product_variants: this.dataSource?.data }).subscribe({
          next: (res: any) => {
            this.isLoading = false;
            this.toaster.success(res.message);
          },
          error: (err) => {
            this.isLoading = false;
            console.log(err);
            this.toaster.error(err.error.message);
          }
        })
      } else {
        this.isLoading = true;
        const data = this.productImagesDataSource?.data.map((obj: any) => {
          return {
            id: obj.id,
            priority: obj.priority,
            is_enabled: obj.is_enabled ? 1 : 0
          }
        })
        this.api.bulkUpdateFiles({ catalog_media: data }).subscribe({
          next: (res: any) => {
            this.isLoading = false;
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
      }, 100)
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
        media_resource_type: 'product',
        media_resource_id: this.activatedroute.snapshot.params['id'],
        media_type: 'description_image'
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
      error: (err: any) => {
        console.log(err);
        this.toaster.error(err.error.message);
      }
    })
  }

  goBack() {
    this.location.back();
  }

}
