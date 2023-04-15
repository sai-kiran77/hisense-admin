import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-terms-and-conditions-modal',
  templateUrl: './terms-and-conditions-modal.component.html',
  styleUrls: ['./terms-and-conditions-modal.component.scss']
})
export class TermsAndConditionsModalComponent implements OnInit {

  formSubmitted = false;
  isLoading = false;


  form: FormGroup = this.fb.group({
    group_name: ['', [Validators.required]],
    tab_name: ['', [Validators.required]],
    heading: ['', [Validators.required]],
    sub_heading: ['', [Validators.required]],
    date_range: ['', [Validators.required]],
    content_type: ['', [Validators.required]],
    content_text: [''],
    content_image: [''],
    is_enabled: ['', [Validators.required]],
    priority: ['999999', [Validators.required]],
  })

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<any>,
    private api: ApiService,
    private toaster: ToastrService,
    private fb: FormBuilder) {
      console.log(this.data);
      // if (this.data.isEdit) {
      //   this.form.get('desktop_image')?.setValidators([]);
      //   this.form.get('mobile_image')?.setValidators([]);
      //   this.form.patchValue({
      //     description: this.data.dataToEdit.description,
      //     title: this.data.dataToEdit.title,
      //     vendor: this.data.dataToEdit.vendor,
      //     external_url: this.data.dataToEdit.external_url,
      //     is_enabled: this.data.dataToEdit.is_enabled ? true : false,
      //     priority: this.data.dataToEdit.priority,
      //     country: this.data.dataToEdit.country,
      //     published_at: this.data.dataToEdit.published_at,
      //     is_featured: this.data.dataToEdit.is_featured,
      //   })
      //   // this.desktopUpdatedThumbImg = this.data.dataToEdit.desktop_image_full_url;
      //   // this.mobileUpdatedThumbImg = this.data.dataToEdit.mobile_image_full_url;
      // }
    }

  ngOnInit(): void {
  }
  
  createTermsAndCondition() {
    this.formSubmitted = true;
    if (!this.form.valid) {
      return;
    }
    this.isLoading = true;
    const formData = new FormData();
    formData.append('title', this.form.value.title + '');
    formData.append('description', this.form.value.description + '');
    formData.append('vendor', this.form.value.vendor + '');
    formData.append('country', this.form.value.country + '');
    formData.append('external_url', this.form.value.external_url + '');
    formData.append('is_enabled', this.form.value.is_enabled ? '1' : '0');
    // formData.append('desktop_image', this.desktopImgFile);
    // formData.append('mobile_image', this.mobileImgFile);

    if(this.form.value.published_at){
      const dateObject = new Date(this.form.value.published_at);
      formData.append('published_at', `${dateObject.getFullYear()}-${String(dateObject.getMonth() + 1).padStart(2,'0')}-${String(dateObject.getDate()).padStart(2,'0')}`);
    }

    formData.append('is_featured', this.form.value.is_featured);
    formData.append('priority', this.form.value.priority);
    this.api.createPressCoverage(formData).subscribe({
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

  updateTermsAndCondition() {
    this.formSubmitted = true;
    if (!this.form.valid) {
      return;
    }
    this.isLoading = true;
    const formData = new FormData();
    formData.append('title', this.form.value.title + '');
    formData.append('description', this.form.value.description + '');
    formData.append('vendor', this.form.value.vendor + '');
    formData.append('country', this.form.value.country + '');
    formData.append('external_url', this.form.value.external_url + '');
    formData.append('is_enabled', this.form.value.is_enabled ? '1' : '0');
    formData.append('_method', 'PATCH');

    if(this.form.value.published_at){
      const dateObject = new Date(this.form.value.published_at);
      formData.append('published_at', `${dateObject.getFullYear()}-${String(dateObject.getMonth() + 1).padStart(2,'0')}-${String(dateObject.getDate()).padStart(2,'0')}`);
    }

    formData.append('is_featured', this.form.value.is_featured);
    formData.append('priority', this.form.value.priority);

    // if(this.form.value.desktop_image){
    //   formData.append('desktop_image', this.desktopImgFile);
    // }
    // if(this.form.value.mobile_image){
    //   formData.append('mobile_image', this.mobileImgFile);
    // }
    this.form.value._method = 'PATCH';
    this.api.updatePressCoverage(formData, this.data.dataToEdit.id).subscribe({
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

  get formControl() {
    return this.form.controls;
  }

}
