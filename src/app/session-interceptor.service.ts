import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { finalize, tap } from 'rxjs/operators';
import { ApiService } from './services/api.service';

@Injectable({
    providedIn: 'root'
})

export class SessionIntercepterService implements HttpInterceptor {
    httpRequestcount = 0;
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.api.isLoading.next(true);
        this.httpRequestcount++;

        return next.handle(request).pipe(finalize(() => {
            this.httpRequestcount--;
            if (!this.httpRequestcount) this.api.isLoading.next(false);
        }
        ));
    }

    constructor(private router: Router,
        private toaster: ToastrService,
        public api: ApiService
    ) { }
}