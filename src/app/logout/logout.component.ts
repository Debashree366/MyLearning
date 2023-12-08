import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { UserDataService } from '../shared/user-data.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})

export class LogoutComponent implements OnInit {
  courses: any;
  subject: any;


  constructor(
    public api: UserDataService,

  ) {
    this.api.userData.subscribe(res => {
      console.log(res.dashboardData.timeSpentData, "TMS from logout");
      

      res.dashboardData.userData.map((item: any) => {
        if (typeof res === 'object' && res !== null && 'userData' in res) {
        console.log(res.userData);
      }
        console.log(item, "ITEM!@#");

        this.courses = item.reminders;
        this.subject =item.courses;
        console.log(this.courses, "COURSES...");
      })
    })
  }
  ngOnInit() {
    
    this.api.userData.subscribe(res => {
      console.log(res.dashboardData.timeSpentData, "TMS from logout");
      

      res.dashboardData.userData.map((item: any) => {
        if (typeof res === 'object' && res !== null && 'userData' in res) {
        console.log(res.userData);
      }
        console.log(item, "ITEM!@#");

        this.courses = item.reminders;
        console.log(this.courses, "COURSES...");
      })
    })

  }


}
