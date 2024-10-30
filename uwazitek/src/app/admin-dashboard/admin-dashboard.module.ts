import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboardLayout/admin-dashboard.component';
import { AddUserPageComponent } from '../add-users/add-user-page.component';


@NgModule({
  imports: [
    CommonModule
  ,AdminDashboardComponent,
  //MatIconModule 
   AddUserPageComponent],
  declarations: [],
  exports: [],
})
export class AdminDashboardModule { }
