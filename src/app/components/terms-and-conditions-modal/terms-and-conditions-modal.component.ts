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
    date_range: this.fb.group({
      start_date: ['', [Validators.required]],
      end_date: ['', [Validators.required]],
    }),
    content_type: ['', [Validators.required]],
    content_text: [''],
    content_image: [''],
    is_enabled: [''],
    priority: ['999999', [Validators.required]],
  })

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<any>,
    private api: ApiService,
    private toaster: ToastrService,
    private fb: FormBuilder) {
    this.form.controls['content_type'].valueChanges.subscribe((value) => {
      if (value == 1) {
        this.form.controls['content_text'].setValidators([Validators.required]);
        this.form.controls['content_image'].removeValidators([Validators.required]);
      } else {
        this.form.controls['content_image'].setValidators([Validators.required]);
        this.form.controls['content_text'].removeValidators([Validators.required]);
      }
      this.form.controls['content_text'].updateValueAndValidity();
      this.form.controls['content_image'].updateValueAndValidity();
    })
    console.log(this.data);
    if (this.data.isEdit) {
      // this.form.get('desktop_image')?.setValidators([]);
      // this.form.get('mobile_image')?.setValidators([]);
      this.form.patchValue({
        group_name: this.data.dataToEdit.group_name,
        tab_name: this.data.dataToEdit.tab_name,
        heading: this.data.dataToEdit.heading,
        sub_heading: this.data.dataToEdit.sub_heading,
        is_enabled: this.data.dataToEdit.is_enabled ? true : false,
        priority: this.data.dataToEdit.priority,
        date_range: {
          start_date: new Date(this.data.dataToEdit.date_range.split(' - ')[0]),
          end_date: new Date(this.data.dataToEdit.date_range.split(' - ')[1]),
        }
      })

      if (this.data.dataToEdit.content_text) {
        this.form.patchValue({
          content_type: '1',
          content_text: this.data.dataToEdit.content_text
        })
      } else if (this.data.dataToEdit.content_image && this.data.dataToEdit.content_image_full_url) {
        this.form.patchValue({
          content_type: '2',
          // content_text: this.data.dataToEdit.content_text
        })
        this.contentImage = this.data.dataToEdit.content_image_full_url;
      }
    }
  }

  ngOnInit(): void {
  }

  createTermsAndCondition() {
    this.formSubmitted = true;
    console.log(this.form);
    if (!this.form.valid) {
      return;
    }

    this.isLoading = true;

    const startDateSplit: any = this.form.value.date_range.start_date?.toString().split(' ');
    const endDateSplit: any = this.form.value.date_range.end_date?.toString().split(' ');
    const formattedStartDate = `${startDateSplit[3]}-${(new Date(this.form.value.date_range.start_date as string).getMonth() + 1).toString().padStart(2, '0')}-${startDateSplit[2]}`;
    const formattedEndDate = `${endDateSplit[3]}-${(new Date(this.form.value.date_range.end_date as string).getMonth() + 1).toString().padStart(2, '0')}-${endDateSplit[2]}`;
    console.log(`${formattedStartDate} - ${formattedEndDate}`)

    const formData = new FormData();
    formData.append('group_name', this.form.value.group_name + '');
    formData.append('tab_name', this.form.value.tab_name + '');
    formData.append('heading', this.form.value.heading + '');
    formData.append('sub_heading', this.form.value.sub_heading + '');
    formData.append('date_range', `${formattedStartDate} - ${formattedEndDate}`);
    formData.append('is_enabled', this.form.value.is_enabled ? '1' : '0');
    formData.append('priority', this.form.value.priority + '');

    if (this.form.value['content_type'] == 1) {
      formData.append('content_text', this.form.value.content_text + '');
      formData.delete('content_image');
    } else {
      formData.delete('content_text');
      formData.append('content_image', this.contentImageFile);
    }

    this.api.createtermsAndConditions(formData).subscribe({
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

    const startDateSplit: any = this.form.value.date_range.start_date?.toString().split(' ');
    const endDateSplit: any = this.form.value.date_range.end_date?.toString().split(' ');
    const formattedStartDate = `${startDateSplit[3]}-${(new Date(this.form.value.date_range.start_date as string).getMonth() + 1).toString().padStart(2, '0')}-${startDateSplit[2]}`;
    const formattedEndDate = `${endDateSplit[3]}-${(new Date(this.form.value.date_range.end_date as string).getMonth() + 1).toString().padStart(2, '0')}-${endDateSplit[2]}`;

    const formData = new FormData();
    formData.append('group_name', this.form.value.group_name + '');
    formData.append('tab_name', this.form.value.tab_name + '');
    formData.append('heading', this.form.value.heading + '');
    formData.append('sub_heading', this.form.value.sub_heading + '');
    formData.append('date_range', `${formattedStartDate} - ${formattedEndDate}`);
    formData.append('is_enabled', this.form.value.is_enabled ? '1' : '0');
    formData.append('priority', this.form.value.priority + '');
    formData.append('_method', 'PATCH');

    if (this.form.value['content_type'] == 1) {
      formData.append('content_text', this.form.value.content_text + '');
      formData.delete('content_image');
    } else {
      formData.delete('content_text');
      formData.append('content_image', this.contentImageFile);
    }

    this.api.updateTermsAndConditions(formData, this.data.dataToEdit.id).subscribe({
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

  contentImage: any;
  contentImageFile: any;

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
      this.contentImage = reader.result;
      this.contentImageFile = files[0];
      this.form.patchValue({
        content_image: files[0]
      });
    }
  }

  clearContentImage() {
    this.contentImage = null;
    this.contentImageFile = null;
    this.form.patchValue({
      content_image: null
    });
  }

  get formControl() {
    return this.form.controls;
  }

}
