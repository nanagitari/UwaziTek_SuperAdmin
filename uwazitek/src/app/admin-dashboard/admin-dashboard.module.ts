import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
//import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule
  ,AdminDashboardComponent,
  //MatIconModule 
  ],
  declarations: [],
  exports: [],
})
export class AdminDashboardModule { }
