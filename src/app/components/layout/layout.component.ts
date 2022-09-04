import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  isSidebarVisible = true;
  sidebarStatus = 'translateX(0)';
  innerWidth = window.innerWidth;
  
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
      this.innerWidth = event.target.innerWidth;
  }
  
  ngOnInit() { }

  toggleSidebar(){
      if(this.isSidebarVisible){
          this.sidebarStatus = 'translateX(-235px)'
      }else{
          this.sidebarStatus = 'translateX(0)';
      }
      this.isSidebarVisible = !this.isSidebarVisible;
  }

}
