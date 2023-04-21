import { Component, Inject, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home-slider-modal',
  templateUrl: './home-slider-modal.component.html',
  styleUrls: ['./home-slider-modal.component.scss']
})
export class HomeSliderModalComponent implements OnInit {


  isLoading = false;
  formSubmitted = false;
  thumbImage: any;
  // mobile
  mobileThumbImage: any;
  UpdatedMobileThumbImgFile: any;
  //desktop
  desktopthumbImage: any;
  UpdatedDesktopThumbImgFile: any;
  // Validators.pattern(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/)
  form = this.fb.group({
    click_link: ['', [Validators.required]],
    desktop_image: ['', [Validators.required]],
    mobile_image: ['', [Validators.required]],
    is_enabled: ['']
  })

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<any>,
    private api: ApiService,
    private toaster: ToastrService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  createPressCoverage() {
    this.formSubmitted = true;
    console.log(this.form.value)

    if (!this.form.valid) {
      return;
    }
    this.isLoading = true;
    const formData = new FormData();
    formData.append('click_link', this.form.value.click_link + '');
    formData.append('desktop_image', this.UpdatedDesktopThumbImgFile);
    formData.append('mobile_image', this.UpdatedMobileThumbImgFile);
    formData.append('is_enabled', this.form.value.is_enabled ? '1' : '0');
    this.api.createHomePageSlide(formData).subscribe({
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

  preview(event: any, device = 'mobile') {
    let files = event.target?.files
    if (files.length === 0)
      return;

    let mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      console.log(device);
      if (device == 'desktop') {
        this.desktopthumbImage = reader.result;
        this.UpdatedDesktopThumbImgFile = files[0];
        this.form.controls.desktop_image.setValue(files[0]);
      } else {
        this.mobileThumbImage = reader.result;
        this.UpdatedMobileThumbImgFile = files[0];
        this.form.controls.mobile_image.setValue(files[0]);
      }

    }
  }

  get formControl() {
    return this.form.controls;
  }
}
