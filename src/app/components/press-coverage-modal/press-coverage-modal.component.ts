import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-press-coverage-modal',
  templateUrl: './press-coverage-modal.component.html',
  styleUrls: ['./press-coverage-modal.component.scss']
})
export class PressCoverageModalComponent implements OnInit {

  isLoading = false;
  formSubmitted = false;
  thumbImage: any;
  UpdatedThumbImg: any;
  UpdatedThumbImgFile: any;

  form = this.fb.group({
    title: ['',[Validators.required]],
    description: ['',[Validators.required]],
    image: ['',[Validators.required]],
    vendor: [''],
    is_enabled: [''],
    external_url: ['',[Validators.required,Validators.pattern(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/)]],
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
    if(!this.form.valid){
      return;
    }
    this.isLoading = true;
    const formData = new FormData();
    formData.append('title',this.form.value.title + '');
    formData.append('description',this.form.value.description + '');
    formData.append('vendor',this.form.value.vendor + '');
    formData.append('external_url',this.form.value.external_url + '');
    formData.append('is_enabled',this.form.value.is_enabled ? '1' : '0');
    formData.append('image',this.UpdatedThumbImgFile);
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
