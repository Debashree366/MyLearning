import { Component, Input } from '@angular/core';
import { UserDataService } from '../app/shared/user-data.service';



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



  data: Object | undefined;
  
  dataSource: any;
  dashboardData: any;
  userData: any;
  userName: any;

   constructor(
    public api: UserDataService,
  ) {
    
   }
  users : any;

  onToggleSideNav(data: SideNavToggle) : void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed

  }

  
  ngOnInit() {
    this.api.getAllUsers().subscribe(response => {
      this.api.userData.next(response);
    this.users = response;
    this.api.dataService = response;
    console.log(response, "FROM APP COMPONENT");
   // this.api.userData.next(response);
    //this.userName = this.users.dashboardData.userData[0].fullName
       //  console.log(this.userName, 'test');
   })

}
}
