import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

declare var swal: any;
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = environment.baseUrl;
  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  show() {
    this.isLoading.next(true);
  }

  hide() {
    this.isLoading.next(false);
  }

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

  updateCategoryInfo(productId: any, body: any) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.post(this.baseUrl + `/v1/admin/categories/${productId}`, body, {
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

  createHomePageSlide(fd: any) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.post(this.baseUrl + '/v1/admin/home-page-slides', fd, {
      headers: new HttpHeaders({ 'admin-user-uuid': uuid })
    })
  }

  uploadFiles(fd: any) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.post(this.baseUrl + '/v1/admin/catalog-media', fd, {
      headers: new HttpHeaders({ 'admin-user-uuid': uuid })
    })
  }

  deleteFiles(id: any) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.delete(this.baseUrl + `/v1/admin/catalog-media/${id}`, {
      headers: new HttpHeaders({ 'admin-user-uuid': uuid })
    })
  }

  getContactRequests(params: any) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.get(this.baseUrl + `/v1/admin/contact-requests`, {
      params,
      headers: new HttpHeaders({ 'admin-user-uuid': uuid })
    });
  }

  getPressCoverages(params: any) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.get(this.baseUrl + `/v1/admin/press-coverages`, {
      params,
      headers: new HttpHeaders({ 'admin-user-uuid': uuid })
    });
  }

  getOffersAndPromotions(params: any) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.get(this.baseUrl + `/v1/admin/offer-promotions`, {
      params,
      headers: new HttpHeaders({ 'admin-user-uuid': uuid })
    });
  }

  getTechTestimonials(params: any) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.get(this.baseUrl + `/v1/admin/tech-testimonials`, {
      headers: new HttpHeaders({ 'admin-user-uuid': uuid }),
      params
    });
  }

  getHomePageSlides() {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.get(this.baseUrl + `/v1/admin/home-page-slides`, {
      headers: new HttpHeaders({ 'admin-user-uuid': uuid })
    });
  }

  createPressCoverage(body: any) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.post(this.baseUrl + '/v1/admin/press-coverages', body, {
      headers: new HttpHeaders({ 'admin-user-uuid': uuid })
    })
  }

  createOfferPromotion(body: any) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.post(this.baseUrl + '/v1/admin/offer-promotions', body, {
      headers: new HttpHeaders({ 'admin-user-uuid': uuid })
    })
  }

  createTechTestimonial(body: any) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.post(this.baseUrl + '/v1/admin/tech-testimonials', body, {
      headers: new HttpHeaders({ 'admin-user-uuid': uuid })
    })
  }

  deletePressCoverage(id: any) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.delete(this.baseUrl + `/v1/admin/press-coverages/${id}`, {
      headers: new HttpHeaders({ 'admin-user-uuid': uuid })
    })
  }

  deleteOffersAndPromotions(id: any) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.delete(this.baseUrl + `/v1/admin/offer-promotions/${id}`, {
      headers: new HttpHeaders({ 'admin-user-uuid': uuid })
    })
  }

  deleteHomePageSlide(id: any) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.delete(this.baseUrl + `/v1/admin/home-page-slides/${id}`, {
      headers: new HttpHeaders({ 'admin-user-uuid': uuid })
    })
  }

  deleteTechTestimonial(id: any) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.delete(this.baseUrl + `/v1/admin/tech-testimonials/${id}`, {
      headers: new HttpHeaders({ 'admin-user-uuid': uuid })
    })
  }

  updateHomeSlider(body: any) {
    body._method = 'PATCH';
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.patch(this.baseUrl + `/v1/admin/home-page-slides`, body, {
      headers: new HttpHeaders({ 'admin-user-uuid': uuid })
    })
  }

  updateOffersPromotions(body: any) {
    body._method = 'PATCH';
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.patch(this.baseUrl + `/v1/admin/offer-promotions`, body, {
      headers: new HttpHeaders({ 'admin-user-uuid': uuid })
    })
  }

  updateTechTestimonials(body: any, id: any) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.patch(this.baseUrl + `/v1/admin/tech-testimonials/${id}`, body, {
      headers: new HttpHeaders({ 'admin-user-uuid': uuid })
    })
  }

  updatePressCoverage(body: any, id: any) {
    const uuid = this.getLocalStorage('currentUserSession').uuid;
    return this.http.patch(this.baseUrl + `/v1/admin/press-coverages/${id}`, body, {
      headers: new HttpHeaders({ 'admin-user-uuid': uuid })
    })
  }

  changePassword(a: any, b: any): any {

  }
}
