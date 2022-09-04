import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
    public register = false;
    focusTouched1: boolean = false;
    focusTouched: boolean = false;
    isLoader: boolean = false;
    hide = true;
    alive = true;
    platformInfo: any = {};

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private api: ApiService,
        // private authService: AuthService,
        // private utility: UtitlityService,
        private toaster: ToastrService,
        // private userService: UserServices,
        // private privilegeService: PrivilegesService,
        // private startupService: CommonStartupService,
    ) {
        // this.getAccessToken();
        this.form = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]]
        });
        // this.getPlatformInfo();
    }
    ngOnInit() {
        if (this.api.getLocalStorage('currentUserSession') && this.api.getLocalStorage('currentUserSession').loggedIn == 1) {
            this.router.navigate(['/dashboard']);
        }
    }

    // getPlatformInfo() {
    //     this.startupService.platformInfo$.pipe(takeWhile(_ => this.alive)).subscribe((data) => {
    //         if (data) {
    //             this.platformInfo.name = data.company.name;
    //             this.platformInfo.imgURL = data.platform.logo;
    //         }
    //     });
    // }

    onLogin() {
        this.isLoader = true;
        this.register = true;
        if (this.form.invalid) { return; }
        this.api.login(this.form.value).subscribe({
            next: (res: any) => {
                if (res.status === 'ok') {
                    this.isLoader = false;
                    const currentUser = {
                        "id": res.data.id,
                        "uuid": res.data.uuid,
                        "name": res.data.name
                      }
                    this.api.setLocalStorage('currentUserSession', currentUser);
                    this.router.navigate(['/dashboard']);
                }
            },
            error: (error: any) => {
                this.isLoader = false;
                this.toaster.error(error.error.message)
            }
        });
    }

    ngOnDestroy() {
        this.alive = false;
    }

}
