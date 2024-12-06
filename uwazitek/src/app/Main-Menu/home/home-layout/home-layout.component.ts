import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Router } from '@angular/router';
import { LucideAngularModule, BellIcon, MailIcon, CalendarClockIcon } from 'lucide-angular';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ReportService } from '../../../service/report.service';


@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule, 
    MatCardModule, MatIconModule,],
  templateUrl:'./home-layout.component.html',
  styleUrls: ['./home-layout.component.css'],
})
export class HomeLayoutComponent implements OnInit {
  public userName: string = ''; 
  public showContactInfo: boolean = false; 
  currentTime: string = '';
  contactinfo = [
    { email: 'uwazitek@gmail.com' },
    { phone: '+254712345678 / +2547895635' },
  ];

  BellIcon = BellIcon; 
  MailIcon = MailIcon;
  CalendarClockIcon = CalendarClockIcon;

  
  showNotifications: boolean = false;
  notifications = [
    { message: 'New user registered' },
    { message: 'System maintenance scheduled' },
    { message: 'Password updated successfully' },
  ];

  statistics = [
    { title: 'Total Hospitals', count: 13, icon: 'local_hospital', color: 'primary', route: '/view-users' },
    { title: 'Total Insurances', count: 10, icon: 'security', color: 'accent', route: '/view-users' },
    {title: 'Total ClaimReports', count: 3, icon: 'report', color:'primary', route:'./activity'},
  ];
notificationCount: any;
  constructor (private router: Router,private reportService: ReportService){}

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName') || 'SuperAdmin' ;
    this.updateTime();
    setInterval(() =>this.updateTime(),1000);
  }
 
  toggleNotifications(): void {
    this.showNotifications = !this.showNotifications; 
  }
  
  updateTime():void{
    const now= new Date();
    this.currentTime= now.toLocaleTimeString('en-GB',{hour12:false});
  }
  toggleContactUs(): void {
    this.showContactInfo = !this.showContactInfo; 
  }

  onCardClick(route: string): void {
    this.router.navigate([route]);
  }
  getstatistics(){
    
  }
  
}
