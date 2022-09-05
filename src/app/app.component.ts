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

  isLoading = this.api.isLoading;

  constructor(private api: ApiService){
  }
}
