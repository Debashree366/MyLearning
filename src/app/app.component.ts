import { Component, Input } from '@angular/core';



interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
} 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learning-app';

  isSideNavCollapsed = false;
  screenWidth = 0;
  // @Input() sideNavStatus: boolean = false;
  onToggleSideNav(data: SideNavToggle) : void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed

  }
}
