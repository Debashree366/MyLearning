import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClassesComponent } from './classes/classes.component';
import { ResourcesComponent } from './resources/resources.component';
import { LearningPlanComponent } from './learning-plan/learning-plan.component';
import { ChatComponent } from './chat/chat.component';
import { SettingsComponent } from './settings/settings.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path:'', redirectTo: 'dashboard', pathMatch: 'full'},
  {path:'dashboard', component: DashboardComponent},
  {path:'classes', component: ClassesComponent},
  {path:'resources', component: ResourcesComponent},
  {path:'learning-plan', component: LearningPlanComponent},
  {path:'chat', component: ChatComponent},
  {path:'settings', component: SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
