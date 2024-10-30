import { Component } from '@angular/core';
import { LucideAngularModule,HomeIcon,SettingsIcon,PlusSquareIcon,UserCheckIcon,LogOutIcon,ActivityIcon } from 'lucide-angular';
import { Router } from '@angular/router';
import { AddUserPageComponent } from '../../add-users/add-user-page.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [ LucideAngularModule,
    AddUserPageComponent,
    CommonModule,
  RouterOutlet],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  usertype: string='';
  HomeIcon=HomeIcon;
  SettingsIcon=SettingsIcon;
  PlusSquareIcon=PlusSquareIcon;
  UserCheckIcon=UserCheckIcon;
  LogOutIcon= LogOutIcon;
  ActivityIcon= ActivityIcon;

  home:boolean=true;

  constructor (private router:Router){}

 onclick(usertype: string){
  this.usertype=usertype;
 
  
 }

}
