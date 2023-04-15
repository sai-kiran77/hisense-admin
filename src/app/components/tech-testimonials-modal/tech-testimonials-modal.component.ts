import { Component, Inject, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tech-testimonials-modal',
  templateUrl: './tech-testimonials-modal.component.html',
  styleUrls: ['./tech-testimonials-modal.component.scss']
})
export class TechTestimonialsModalComponent implements OnInit {


  isLoading = false;
  formSubmitted = false;
  thumbImage: any;
  UpdatedThumbImg: any;
  UpdatedThumbImgFile: any;
  metaData: any;

  form: FormGroup = this.fb.group({
    description: ['', [Validators.required]],
    youtube_url: ['', [Validators.required, Validators.pattern(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/)]],
    is_enabled: [''],
    country: ['', [Validators.required]],
    category_id: ['', [Validators.required]],
    product_id: ['', [Validators.required]],
    product_variant_id: ['', ],
    published_at: ['', [Validators.required]]
  })

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<any>,
    private api: ApiService,
    private toaster: ToastrService,
    private fb: FormBuilder) {
      console.log(data);
      this.metaData = data.metaData;
    if (this.data.isEdit) {
      this.form.addControl('priority', this.fb.control(''));
      this.form.patchValue({
        description: this.data.dataToEdit.description,
        youtube_url: this.data.dataToEdit.youtube_url,
        is_enabled: this.data.dataToEdit.is_enabled ? true : false,
        priority: this.data.dataToEdit.priority,
        country: this.data.dataToEdit.country,
        category_id: this.data.dataToEdit.category_id,
        product_id: this.data.dataToEdit.product_id,
        product_variant_id: this.data.dataToEdit.product_variant_id,
        published_at: this.data.dataToEdit.published_at,
      })

      if(this.form.value.product_id){
        this.selectedProduct = this.metaData.products.find((product: any)=> product.id == this.form.value.product_id)
        // if(this.selectedProduct){
        //   // this.selectedProduct.
        //   this.form.controls['product_variant_id'].setValue(this.selectedProduct.id);
        // }
      }
    }
  }

  ngOnInit(): void {
  }

  createTechTestimonial() {
    this.formSubmitted = true;
    if (!this.form.valid) {
      return;
    }
    this.isLoading = true;
    // const formData = new FormData();
    // formData.append('title',this.form.value.title + '');
    // formData.append('description',this.form.value.description + '');
    // formData.append('vendor',this.form.value.vendor + '');
    // formData.append('external_url',this.form.value.external_url + '');
    // formData.append('image',this.UpdatedThumbImgFile);

    if(this.form.value.published_at){
      const dateObject = new Date(this.form.value.published_at);
      this.form.value.published_at = `${dateObject.getFullYear()}-${String(dateObject.getMonth() + 1).padStart(2,'0')}-${String(dateObject.getDate()).padStart(2,'0')}`;
    }

    const is_enabled = this.form.value.is_enabled ? 1 : 0;
    this.api.createTechTestimonial({ ...this.form.value, is_enabled }).subscribe({
      next: (res: any) => {
        console.log(res);
        this.dialogRef.close(true);
        this.isLoading = false;
      },
      error: (err: any) => {
        this.isLoading = false;
        console.log(err);
        this.toaster.error(err.error.message);
      }
    })
  }

  updateTechTestimonials() {
    this.formSubmitted = true;
    if (!this.form.valid) {
      return;
    }
    this.isLoading = true;

    if(this.form.value.published_at){
      const dateObject = new Date(this.form.value.published_at);
      this.form.value.published_at = `${dateObject.getFullYear()}-${String(dateObject.getMonth() + 1).padStart(2,'0')}-${String(dateObject.getDate()).padStart(2,'0')}`;
    }

    this.form.value.is_enabled = this.form.value.is_enabled ? 1 : 0;
    this.api.updateTechTestimonials(this.form.value, this.data.dataToEdit.id).subscribe({
      next: (res: any) => {
        this.dialogRef.close(true);
        this.isLoading = false;
        this.toaster.success(res.message);
      },
      error: (err: any) => {
        this.isLoading = false;
        console.log(err);
        this.toaster.error(err.error.message);
      }
    })
  }

  // preview(event: any) {
  //   let files = event.target?.files
  //   if (files.length === 0)
  //     return;

  //   var mimeType = files[0].type;
  //   if (mimeType.match(/image\/*/) == null) {
  //     return;
  //   }

  //   var reader = new FileReader();
  //   reader.readAsDataURL(files[0]);
  //   reader.onload = (_event) => {
  //     this.UpdatedThumbImg = reader.result;
  //     this.UpdatedThumbImgFile = files[0];
  //     this.form.controls.image.setValue(files[0]);
  //   }
  // }

  get formControl() {
    return this.form.controls;
  }

  selectedProduct: any;

  onProductSelected(value: any){
    this.form.controls['product_variant_id'].setValue('');
    this.selectedProduct = this.metaData.products.find((product: any)=> product.id == value)
  }

}
