import { Component } from '@angular/core';
import { LucideAngularModule,HomeIcon,SettingsIcon,PlusSquareIcon,UserCheckIcon,LogOutIcon,ActivityIcon } from 'lucide-angular';
import { Router } from '@angular/router';
import { AddUserPageComponent } from '../../add-users/add-user-page.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeLayoutComponent } from '../../home/home-layout/home-layout.component';
import { LogoutDialogComponent } from '../../logout-dialog/logout-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [ LucideAngularModule,
    AddUserPageComponent, HomeLayoutComponent,
    CommonModule, LogoutDialogComponent,
  RouterOutlet],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  usertype: string='home';
  HomeIcon=HomeIcon;
  SettingsIcon=SettingsIcon;
  PlusSquareIcon=PlusSquareIcon;
  UserCheckIcon=UserCheckIcon;
  LogOutIcon= LogOutIcon;
  ActivityIcon= ActivityIcon;

  

  constructor (private router:Router,public dialog: MatDialog){}

 onclick(usertype: string){
  this.usertype=usertype;
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
