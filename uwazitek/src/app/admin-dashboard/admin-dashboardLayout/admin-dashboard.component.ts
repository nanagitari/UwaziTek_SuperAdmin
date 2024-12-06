import { Component } from '@angular/core';
import { LucideAngularModule,LayoutDashboardIcon,SettingsIcon,HospitalIcon,UserCheckIcon,
  LogOutIcon,FilesIcon,UserPlusIcon,EyeIcon,ShieldCheckIcon,CircleUserRoundIcon,InfoIcon } from 'lucide-angular';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from '../../Main-Menu/home/home-layout/home-layout.component';
import { LogoutDialogComponent } from '../../dialog box/logout-dialog/logout-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivityComponent } from "../../Main-Menu/reports/activity/activity.component";
import { SettingsComponent } from "../../Preference/settings/settings.component";
import { AddInsuranceorganizationDetailsComponent } from "../../Main-Menu/insurance-organization/add-insuranceorganization/add-insuranceorganization-details.component";
import { OverviewHospitalComponent } from "../../Main-Menu/hospital-organization/overview-hospital/overview-hospital.component";
import { AddOrganizationDetailsComponent } from "../../Main-Menu/hospital-organization/add-hospitalorganization/add-organization-details.component";
import { OverviewInsuranceComponent } from "../../Main-Menu/insurance-organization/overview-insurance/overview-insurance.component";
import { ProfileComponent } from '../../Preference/profile/profile.component';
import { HelpcenterComponent } from '../../Preference/helpcenter/helpcenter.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [LucideAngularModule, HomeLayoutComponent,
    CommonModule,LogoutDialogComponent,
    ActivityComponent, SettingsComponent,
     AddInsuranceorganizationDetailsComponent, 
     OverviewHospitalComponent, AddOrganizationDetailsComponent,
      OverviewInsuranceComponent, ProfileComponent, HelpcenterComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  isDropdownclicked= false;
  usertype: string='home';
  LayoutDashboardIcon=LayoutDashboardIcon;
  SettingsIcon=SettingsIcon;
  HospitalIcon=HospitalIcon;
  UserCheckIcon=UserCheckIcon;
  LogOutIcon= LogOutIcon;
  FilesIcon= FilesIcon;
  UserPlusIcon= UserPlusIcon;
  EyeIcon= EyeIcon;
  ShieldCheckIcon= ShieldCheckIcon;
  CircleUserRoundIcon= CircleUserRoundIcon;
  InfoIcon= InfoIcon;
  activeTab: string= '';
activeDropdown: string | null = null;


  

  constructor (private router:Router,public dialog: MatDialog){}
  

  handleIconClick(){
    console.log('icon clicked');
  }
  toggleDropdown(dropdown: string): void {
    this.activeDropdown= this.activeDropdown === dropdown? null: dropdown;
    }

 onclick(usertype: string){
  this.usertype=usertype;
 }

 addActive(tab: string){
  this.activeTab = tab;
 }


 openLogoutDialog(): void {
  const dialogRef = this.dialog.open(LogoutDialogComponent);

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      
      console.log('User confirmed logout');
    } else {
      console.log('User cancelled logout');
    }
  });

}}
