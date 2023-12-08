import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ClassesComponent } from './classes/classes.component';
import { ResourcesComponent } from './resources/resources.component';
import { LearningPlanComponent } from './learning-plan/learning-plan.component';
import { SettingsComponent } from './settings/settings.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDataService } from './shared/user-data.service';
import { BodyComponent } from './body/body.component';
import { ChatComponent } from './chat/chat.component';
import { ChartsModule } from 'ng2-charts';
import * as chart from 'chart.js';


const appRoutes:Routes=[
    
  ];
  
  


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    LogoutComponent,
    SidebarComponent,
    ClassesComponent,
    ResourcesComponent,
    LearningPlanComponent,
    SettingsComponent,
    BodyComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
  ],
  providers: [UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
