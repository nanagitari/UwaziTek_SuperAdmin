import { Component } from '@angular/core';
import { LucideAngularModule,HomeIcon,SettingsIcon,PlusSquareIcon,UserCheckIcon,LogOutIcon,ActivityIcon } from 'lucide-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    LucideAngularModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  HomeIcon=HomeIcon;
  SettingsIcon=SettingsIcon;
  PlusSquareIcon=PlusSquareIcon;
  UserCheckIcon=UserCheckIcon;
  LogOutIcon= LogOutIcon;
  ActivityIcon= ActivityIcon;

  constructor (private router:Router){}

  navigateToAddUser(){
    this.router.navigate(['add-users'])
  }


}
