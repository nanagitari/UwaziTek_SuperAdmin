import { Component } from '@angular/core';
import { LucideAngularModule,HomeIcon,SettingsIcon,UsersIcon,UserCheckIcon,
  LogOutIcon,FilesIcon,UserPlusIcon,EyeIcon } from 'lucide-angular';
import { Router } from '@angular/router';
import { AddUserPageComponent } from '../../add-users/add-user-page.component';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from '../../home/home-layout/home-layout.component';
import { LogoutDialogComponent } from '../../logout-dialog/logout-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivityComponent } from "../../activity/activity.component";
import { SettingsComponent } from "../../settings/settings.component";
import { UserVerificationComponent } from '../../user-verification/user-verification.component';
import { ViewUsersComponent } from '../../add-users/view-users/view-users.component';


@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [LucideAngularModule, AddUserPageComponent, HomeLayoutComponent,
    CommonModule, LogoutDialogComponent,
     ActivityComponent, SettingsComponent, UserVerificationComponent, ViewUsersComponent,],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  isDropdownclicked= false;
  usertype: string='home';
  HomeIcon=HomeIcon;
  SettingsIcon=SettingsIcon;
  UsersIcon= UsersIcon;
  UserCheckIcon=UserCheckIcon;
  LogOutIcon= LogOutIcon;
  FilesIcon= FilesIcon;
  UserPlusIcon= UserPlusIcon;
  EyeIcon= EyeIcon;
  activeTab: string='';

  

  constructor (private router:Router,public dialog: MatDialog){}

  handleIconClick(){
    console.log('icon clicked');
  }
  toggleDropdown() {
    this.isDropdownclicked = !this.isDropdownclicked;
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
