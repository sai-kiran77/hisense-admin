import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  form: FormGroup;
  isLoading: boolean = false;
  uuid: any;
  hide = true;
  currentPassword = true;
  confirmPasswordHide = true;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private toaster: ToastrService,
    public location: Location) {
    this.form = this.fb.group({
      current_password: ['', [Validators.required]],
      new_password: ['', [Validators.required, Validators.minLength(8)]],
      confirm_new_password: ['', [Validators.required, Validators.minLength(8)]],
    },
      {
        validators: this.password.bind(this)
      })

    // this.uuid = this.api.getLocalStorage('activeCompanyUser').uuid;
  }
  ngOnInit(): void {
  }


  password(formGroup: FormGroup) {
    const password = formGroup.get('new_password')?.value;
    const confirmPassword = formGroup.get('confirm_new_password')?.value;
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  changePassword() {
    this.isLoading = true;
    this.api.changePassword(this.uuid, this.form.value).subscribe({
      next: (res: any) => {
        if (res.status == 'ok') {
          this.toaster.success(res.message);
          this.isLoading = false;
          this.form.reset();
        }
      },
      error: (error: any) => {
        // this.checkError(error.error);
        this.isLoading = false;
        this.toaster.error(error.error.message)
        this.form.reset();
      }
    })
  }

  // checkError(data) {
  //   const isArray = data.errors instanceof Array;
  //   if (isArray) {
  //     this.toaster.error(data.message);
  //   } else {
  //     const errorArr = [].concat(...Object.values(data.errors));
  //     errorArr.forEach(err => {
  //       this.toaster.error(err);
  //     });
  //   }
  // }

  goBack() {
    this.location.back();
  }

}
