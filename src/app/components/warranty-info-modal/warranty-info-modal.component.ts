import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-warranty-info-modal',
  templateUrl: './warranty-info-modal.component.html',
  styleUrls: ['./warranty-info-modal.component.scss']
})
export class WarrantyInfoModalComponent {
  formSubmitted = false;
  isLoading = false;
  productsIdNameMap: any = {};


  form: FormGroup = this.fb.group({
    purchase_mode: ['', [Validators.required]],
    warranty_description_text: ['', [Validators.required]],
    product_varients: ['', Validators.required],
    warranty_duration_start_date: ['', [Validators.required]],
    warranty_duration_end_date: ['', [Validators.required]],
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<any>,
    private api: ApiService,
    private toaster: ToastrService,
    private fb: FormBuilder) {
    console.log(this.data);
    data.metaData?.products.forEach((obj: any) => { this.productsIdNameMap[obj.id] = obj.name })
    if (this.data.isEdit) {
      this.form.patchValue({
        purchase_mode: this.data.dataToEdit.purchase_mode,
        warranty_description_text: this.data.dataToEdit.warranty_description_text,
        product_varients: this.data.dataToEdit.warranty_information_product_variants.map((obj: any) => obj.product_variant.id),
        warranty_duration_start_date: new Date(this.data.dataToEdit.warranty_duration_start_date),
        warranty_duration_end_date: new Date(this.data.dataToEdit.warranty_duration_end_date),
      })
    }
  }

  createWarranty() {
    this.formSubmitted = true;
    console.log(this.form);
    if (!this.form.valid) {
      return;
    }

    this.isLoading = true;

    const startDateSplit: any = this.form.value.warranty_duration_start_date?.toString().split(' ');
    const endDateSplit: any = this.form.value.warranty_duration_end_date?.toString().split(' ');
    const formattedStartDate = `${startDateSplit[3]}-${(new Date(this.form.value.warranty_duration_start_date as string).getMonth() + 1).toString().padStart(2, '0')}-${startDateSplit[2]}`;
    const formattedEndDate = `${endDateSplit[3]}-${(new Date(this.form.value.warranty_duration_end_date as string).getMonth() + 1).toString().padStart(2, '0')}-${endDateSplit[2]}`;

    const formData = new FormData();
    formData.append('purchase_mode', this.form.value.purchase_mode + '');
    formData.append('warranty_description_text', this.form.value.warranty_description_text + '');
    formData.append('warranty_duration_start_date', formattedStartDate + '');
    formData.append('warranty_duration_end_date', formattedEndDate + '');

    let index = 0;
    for (let varient of this.form.value.product_varients) {
      formData.append(`warranty_information_product_variants[${index}][product_variant_id]`, varient.toString());
      index++;
    }

    this.api.createWarranty(formData).subscribe({
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

  updateWarranty() {
    this.formSubmitted = true;
    if (!this.form.valid) {
      return;
    }
    this.isLoading = true;

    const startDateSplit: any = this.form.value.warranty_duration_start_date?.toString().split(' ');
    const endDateSplit: any = this.form.value.warranty_duration_end_date?.toString().split(' ');
    const formattedStartDate = `${startDateSplit[3]}-${(new Date(this.form.value.warranty_duration_start_date as string).getMonth() + 1).toString().padStart(2, '0')}-${startDateSplit[2]}`;
    const formattedEndDate = `${endDateSplit[3]}-${(new Date(this.form.value.warranty_duration_end_date as string).getMonth() + 1).toString().padStart(2, '0')}-${endDateSplit[2]}`;

    const formData = new FormData();
    formData.append('purchase_mode', this.form.value.purchase_mode + '');
    formData.append('warranty_description_text', this.form.value.warranty_description_text + '');
    formData.append('warranty_duration_start_date', formattedStartDate + '');
    formData.append('warranty_duration_end_date', formattedEndDate + '');
    formData.append('_method', 'PATCH');

    let index = 0;
    for (let varient of this.form.value.product_varients) {
      formData.append(`warranty_information_product_variants[${index}][product_variant_id]`, varient.toString());
      index++;
    }

    this.api.updateWarranty(formData, this.data.dataToEdit.id).subscribe({
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
