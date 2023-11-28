import { Component, Input } from '@angular/core';
import { UserDataService } from '../shared/user-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @Input() sideNavStatus: boolean = false;

  users:any;

  data: Object | undefined;
  
  dataSource: any;
  dashboardData: any;
  

  constructor(
    public api: UserDataService,
  ) {
    
   }

  ngOnInit() {
      // this.api.getAllUsers().subscribe(response => {
      // this.users = response;
      // console.log(response);
      // this.dataSource = this.dashboardData.userData[0];
      // console.log(this.dataSource, 'test');
    // })

  }
}

