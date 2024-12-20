import { Component } from '@angular/core';
//import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from '../../admin-dashboard/home/home-layout/home-layout.component';
import { LogoutDialogComponent } from '../../dialog box/logout-dialog/logout-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivityComponent } from "../../admin-dashboard/activity/activity.component";
import { SettingsComponent } from "../../Preference/settings/settings.component";
import { AddhospitalorganizationComponent } from '../../admin-dashboard/hospital-organization/addhospitalorganization/addhospitalorganization.component';
import { AddInsuranceorganizationDetailsComponent } from "../../admin-dashboard/insurance-organization/add-insuranceorganization/add-insuranceorganization-details.component";
import { OverviewHospitalComponent } from "../../admin-dashboard/hospital-organization/overview-hospital/overview-hospital.component";
import { OverviewInsuranceComponent } from "../../admin-dashboard/insurance-organization/overview-insurance/overview-insurance.component";
import { ProfileComponent } from '../../Preference/profile/profile.component';
import { HelpcenterComponent } from '../../Preference/helpcenter/helpcenter.component';


@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [HomeLayoutComponent,
    CommonModule,LogoutDialogComponent,
    ActivityComponent, SettingsComponent,
     AddInsuranceorganizationDetailsComponent, 
     OverviewHospitalComponent,OverviewInsuranceComponent,
      ProfileComponent, HelpcenterComponent,AddhospitalorganizationComponent,
      //RouterModule,
      ],

  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  isDropdownclicked= false;
  usertype: string='home-layout';
  
  activeTab: string= '';
activeDropdown: string | null = null;


  constructor (private router: Router,public dialog: MatDialog){}
  

  handleIconClick(){
    console.log('icon clicked');
  }
  toggleDropdown(dropdown: string): void {
    if (this.activeDropdown === dropdown) {
    
      this.activeDropdown = '';
    } else {
      
      this.activeDropdown = dropdown;
  
      if (dropdown === 'hospital-organization') {
        this.usertype = 'overview-hospital'; 
      } else if (dropdown === 'insurance-organization') {
        this.usertype = 'overview-insurance'; 
      }
    }
  }

 onclick(usertype: string){
  this.usertype=usertype;
 }

 addActive(tab: string){
  this.activeTab = tab;
 }

 openLogoutDialog(): void {
  const dialogRef = this.dialog.open(LogoutDialogComponent);

  dialogRef.afterClosed().subscribe((result: any) => {
    if (result) {
      
      console.log('User confirmed logout');
    } else {
      console.log('User cancelled logout');
    }
  });
 }
}
