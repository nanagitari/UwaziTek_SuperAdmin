import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { RouterModule } from '@angular/router';
import { LogoutDialogComponent } from '../dialog box/logout-dialog/logout-dialog.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    AdmindashboardComponent,
    // HomeLayoutComponent,
    LogoutDialogComponent
  ]
})
export class SuperAdminDashboardModule { }
