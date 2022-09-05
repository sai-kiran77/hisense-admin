import { Component, Inject, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-offers-and-promotions-modal',
  templateUrl: './offers-and-promotions-modal.component.html',
  styleUrls: ['./offers-and-promotions-modal.component.scss']
})
export class OffersAndPromotionsModalComponent implements OnInit {

  isLoading = false;
  formSubmitted = false;
  thumbImage: any;
  UpdatedThumbImg: any;
  UpdatedThumbImgFile: any;

  form = this.fb.group({
    start_date: ['',[Validators.required]],
    image: ['',[Validators.required]],
  })

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<any>,
    private api: ApiService,
    private toaster: ToastrService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  createPressCoverage(){
    this.formSubmitted = true;
    console.log(this.form.value)

    if(!this.form.valid){
      return;
    }
    this.isLoading = true;
    let startDate = this.form.value.start_date;
    console.log(typeof startDate);
    const split: any =  startDate?.toString().split(' ');
    this.form.value.start_date = `${split[3]}-${new Date(this.form.value.start_date as string).getMonth() + 1}-${split[2]}`
    const formData = new FormData();
    formData.append('start_date',this.form.value.start_date + '');
    formData.append('image',this.UpdatedThumbImgFile);
    this.api.createOfferPromotion(formData).subscribe({
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

  preview(event: any) {
    let files = event.target?.files
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.UpdatedThumbImg = reader.result;
      this.UpdatedThumbImgFile = files[0];
      this.form.controls.image.setValue(files[0]);
    }
  }

  get formControl() {
    return this.form.controls;
  }


}
