import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hisense-admin';
  isMenuCollapsed = true;
  apiService: any;

  constructor(private api: ApiService){
    this.apiService = this.api;
  }
}
