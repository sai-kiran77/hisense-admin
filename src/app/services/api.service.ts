import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = environment.baseUrl;
  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient,
    private router: Router) { }

  setLocalStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  readLocalStorage(key: string): any {
    return localStorage.getItem(key);
  }

  getLocalStorage(key: string) {
    const data = localStorage.getItem(key)
    if (data) {
      let item = JSON.parse(data);
      return item;
    }
  }

  removeLocalStorage(key: string) {
    localStorage.removeItem(key);
  }

  login(formData: any) {
    return this.http.post(this.baseUrl + '/v1/admin/login', formData);
  }

  logout() {
    this.removeLocalStorage('currentUserSession');
    this.router.navigate(['/login']);
  }

  getProductVarientCreationMetaData() {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    // const headers = new HttpHeaders();
    // headers.set('admin-user-uuid', uuid)
    return this.http.get(this.baseUrl + '/v1/admin/product-variants/creation-metadata', {
      headers: new HttpHeaders({ 'admin-user-uuid': uuid })
    });
  }

  getProductGroupCreationMetaData() {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.get(this.baseUrl + '/v1/admin/products/creation-metadata', {
      headers: new HttpHeaders({ 'admin-user-uuid': uuid })
    });
  }

  getCategoryCreationMetaData() {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.get(this.baseUrl + '/v1/admin/categories/creation-metadata', {
      headers: new HttpHeaders({ 'admin-user-uuid': uuid })
    });
  }

  getProductVarientList(params: any) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.get(this.baseUrl + '/v1/admin/product-variants', {
      params,
      headers: new HttpHeaders({ 'admin-user-uuid': uuid })
    });
  }

  getProductGroupList(params: any) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.get(this.baseUrl + '/v1/admin/products', {
      params,
      headers: new HttpHeaders({ 'admin-user-uuid': uuid })
    });
  }

  getProductCategoryList(params: any) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.get(this.baseUrl + '/v1/admin/categories', {
      params,
      headers: new HttpHeaders({ 'admin-user-uuid': uuid })
    });
  }

  getProductVarientInfo(productId: any) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.get(this.baseUrl + `/v1/admin/product-variants/${productId}`, {
      headers: new HttpHeaders({ 'admin-user-uuid': uuid })
    });
  }

  getProductGroupInfo(productId: any) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.get(this.baseUrl + `/v1/admin/products/${productId}`, {
      headers: new HttpHeaders({ 'admin-user-uuid': uuid })
    });
  }

  getCategoryInfo(productId: any) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.get(this.baseUrl + `/v1/admin/categories/${productId}`, {
      headers: new HttpHeaders({ 'admin-user-uuid': uuid })
    });
  }

  updateProductVarientInfo(productId: any, body: any) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.post(this.baseUrl + `/v1/admin/product-variants/${productId}`, body, {
      headers: new HttpHeaders({ 'admin-user-uuid': uuid })
    });
  }

  updateProductGroupInfo(productId: any, body: any) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.post(this.baseUrl + `/v1/admin/products/${productId}`, body, {
      headers: new HttpHeaders({ 'admin-user-uuid': uuid })
    });
  }

  createProductVarient(body: any) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.post(this.baseUrl + '/v1/admin/product-variants', body, {
      headers: new HttpHeaders({ 'admin-user-uuid': uuid })
    })
  }

  createProductGroup(body: any) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.post(this.baseUrl + '/v1/admin/products', body, {
      headers: new HttpHeaders({ 'admin-user-uuid': uuid })
    })
  }

  createCategory(body: any) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.post(this.baseUrl + '/v1/admin/categories', body, {
      headers: new HttpHeaders({ 'admin-user-uuid': uuid })
    })
  }
  
  uploadFiles(fd: any){
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.post(this.baseUrl + '/v1/admin/catalog-media', fd, {
      headers: new HttpHeaders({ 'admin-user-uuid': uuid })
    })
  }

  deleteFiles(id: any){
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.delete(this.baseUrl + `/v1/admin/catalog-media/${id}`, {
      headers: new HttpHeaders({ 'admin-user-uuid': uuid })
    })
  }

  changePassword(a: any, b: any): any {

  }
}
