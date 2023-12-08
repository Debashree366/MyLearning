import { Component, Input, OnInit } from '@angular/core';
import { UserDataService } from '../shared/user-data.service';
//import { Chart, ChartOptions  } from 'chart.js';
// import { Chart, ChartOptions } from 'chart.js';
import { ChartOptions, ChartType, ChartDataSets, Chart} from 'chart.js';
import { Label } from 'ng2-charts';
//import * as chart from 'chart.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() sideNavStatus: boolean = false;

  users:any;

  data: Object | undefined;

  dataSource: any;
  dashboardData: any;
  userData: any;
  userName: any;
  latestResults: any;
  courses: any;
  timeSpentData:any;
  barChart: any;
  canvas: any;
   

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{ stacked: true }], yAxes: [{ stacked: true }] },
    maintainAspectRatio: false,
  };

  public barChartLabels: Label[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];



  public barChartData: ChartDataSets[] = [];

  constructor(
    public api: UserDataService,
  ) {
    
   }

  ngOnInit() {

    this.api.userData.subscribe(data => {
      console.log(data, "DATAAAAAAAA")
      this.timeSpentData = data.dashboardData.timeSpentData;
      const seriesLabels = Object.keys(this.timeSpentData.days['monday']);
      this.barChartLabels = Object.keys(this.timeSpentData.days);
      this.barChartData = seriesLabels.map(label => {
        return {
          data: Object.keys(this.timeSpentData.days).map(day => this.timeSpentData.days[day][label]),
          label: label,
          stack: 'a'
        };
      });
    });


    // this.createBarChart();
   this.api.userData.subscribe(res=>{
  //   console.log(res.dashboardData.timeSpentData, "RESTIMES")
    // this.timeSpentData = res.dashboardData.timeSpentData;
    
  //   console.log(this.timeSpentData, "TSP")
  
    res.dashboardData.userData.map((item: any)=>{
      this.courses=item.reminders;
      console.log(this.courses, "Courses")
      this.timeSpentData = item.timeSpentData;
      // console.log(item, "ITEM")
      // console.log(this.timeSpentData, "TIMESSD")
    })
   
   })
  //  this.createBarChart();

  }
 

  
}

